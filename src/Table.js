import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Title from "./Title";

const Table = () => {
  const [data, setData] = useState(null);
  const [name, setName] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name === "") {
      setError("Please enter a name.");
      return;
    }
    const data = { name };
    fetch("", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    })
      .then(() => {
        setError(null);
        setData(null);
      })
      .catch((error) => {
        setError(error.message);
      });
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

  return (
    <div className="main">
      {toAddTitle() && <Title title="No Students Added" />}
      <form className="inputs" onSubmit={handleSubmit}>
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
        <button>Add</button>
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
