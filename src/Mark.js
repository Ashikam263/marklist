import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import MarkModal from "./MarkModal";
import Title from "./Title";

const Mark = () => {
  const [mark, setMark] = useState(null);
  const { id } = useParams();
  var grandTotal = 0;
  var CGPA = 0;

  useEffect(() => {
    const temp = localStorage.getItem("total-marks");
    if (temp != null) {
      const new_mark = JSON.parse(temp).filter((m) => parseInt(m.mark_id) === parseInt(id));
      setMark(new_mark);
    } else {
      fetch("https://my-json-server.typicode.com/Ashikam263/marklist/mark")
      .then((res) => res.json())
      .then((mark) => {

        localStorage.setItem("total-marks", JSON.stringify(mark));
        const new_mark = mark.filter((m) => parseInt(m.mark_id) === parseInt(id));
        setMark(new_mark);
      });
    } 
  }, [id]);

  // useEffect(() => {
  //   const temp = localStorage.getItem("total-marks");
  //   if (temp != null) {
  //     const new_mark = JSON.parse(temp).filter((m) => parseInt(m.mark_id) === parseInt(id));
  //     setMark(new_mark);
  //   }
  // }, [id])

  const toAddTitle = () => {
    if (mark !== null) {
      if (mark.length === 0) {
        return true;
      } else {
        return false;
      }
    } else {
      return true;
    }
  };

  const toAddData = () => {
    if (mark !== null) {
      if (mark.length === 0) {
        return false;
      } else {
        return true;
      }
    } else {
      return false;
    }
  };

  const cgpa = () => {
    if (mark !== null) {
      mark.map((mark, key) => {
        // var Key =parseInt(mark.key);
        var First = mark.internal1;
        var Second = mark.internal2;
        var External = mark.external;
        var Total = (parseInt(mark.external) + parseInt(mark.internal1) + parseInt(mark.internal2)) / 100;
        grandTotal += Total;
        CGPA = grandTotal / (key + 1);
      });
      return (CGPA * 10).toFixed(2);
    }
  };

  return (
    <div className="main">
      {toAddTitle() && <Title title="No Marks Added" />}

      <form className="details">
        <MarkModal mark={mark} setMark={setMark} />
      </form>

      {toAddData() && <div className="tableHandle">
        <table className="markcells">
          <thead>
            <tr>
              <th>No:</th>
              <th>Subject</th>
              <th>Internal 1</th>
              <th>Internal 2</th>
              <th>External </th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {mark.map((mark, key) => (
              <tr key={key}>
                <td>{key + 1}</td>
                <td>{mark.subject}</td>
                <td>{parseInt(mark.internal1)}</td>
                <td>{parseInt(mark.internal2)}</td>
                <td>{parseInt(mark.external)}</td>
                <td>{parseInt(mark.external) + parseInt(mark.internal1) + parseInt(mark.internal2)}</td>
              </tr>
            ))}
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td>CGPA</td>
              <td>{cgpa(mark)}</td>
            </tr>
          </tbody>
        </table>
      </div>}
    </div>
  );
};

export default Mark;
