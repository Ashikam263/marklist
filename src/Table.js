import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Title from "./Title";

const Table = () => {
  const [data, setData] = useState(null);
  const [name, setName] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    setName("");
    e.preventDefault();
    if (name === "") {
      setError("Please enter a name.");
      return;
    }
    // console.log(data)
    const body = [...data, {"name" : name, "id": data.length + 1}]
    setData(body);
    // localStorage.setItem("key", btoa(JSON.stringify(body)))
    localStorage.setItem("key", JSON.stringify(body))

    
  };

  const toAddTitle = () => {
    if (data !== null) {
      if (data.length === 0) {
        return true;
      } else {
        return false;
      }
    } else {
      return true;
    }
  };

  useEffect(() => {
    const temp = localStorage.getItem("key");
    if (temp != null) {
      setData(JSON.parse(temp));
      // setData(JSON.parse(atob(temp)));

    } else {
      fetch("https://my-json-server.typicode.com/Ashikam263/marklist/data")
      .then((res) => res.json())
      .then((data) => {
        // localStorage.setItem("key", btoa(JSON.stringify(data)))
        localStorage.setItem("key", JSON.stringify(data))

        setData(data);
      });
    }
  }, []);

  return (
    <div className="main">
      {toAddTitle() && <Title title="No Students Added" />}
      <form className="inputs">
        <input
          type="text"
          required
          placeholder="Enter Name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        {error && <p>{error}</p>}
        <button onClick={handleSubmit}>Add</button>
      </form>

      <div className="tableHandle">
        <table>
          {data && (
            <tbody>
              {data.map((data, key) => (
                <tr key={key}>
                  <td>{data.id}</td>
                  <td>{data.name}</td>
                  <td className="viewmarks"><Link to={`/Mark/${data.id}`}><button>View marks</button></Link></td>
                </tr>
              ))}
            </tbody>
          )}
        </table>
      </div>
    </div>
  );
};

export default Table;
