import React from 'react';
import { useState } from "react";
import Modal from '@mui/material/Modal';
import { useParams } from "react-router-dom";

const MarkModal = () => {
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);
  const { id } = useParams();
  const mark_id = id;

  const [subject, setSubject] = useState("");
  const [int1, setint1] = useState("");
  const [int2, setint2] = useState("");
  const [ext, setext] = useState("");

  const style = {
    position: "absolute",
    top: "40%",
    left: "50%",
    height: 400,
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const Mark = { subject, int1, int2, ext, mark_id };

    fetch("https://my-json-server.typicode.com/roshna-roland/Task_8_Json/mark", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(Mark)
    })
      .then(() => {
        console.log("new marks added");
        console.log(Mark);
      })
      .then(() => {
        handleClose();
      });
  };

  return (
    <div>
      <button type="button" onClick={handleOpen}>Add Marks</button>
      <Modal
        onClose={handleClose}
        open={open}
        sx={style}
      >
        <div>
          <div className="modal-header">
            <h1 className="modal-title">Enter Marks</h1>
          </div>
          <div className="modal-body">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>SUBJECT:</label>
                <input
                  type="text"
                  className="form-control"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label>First internal mark(25): </label>
                <input
                  type="number"
                  className="form-control"
                  value={int1}
                  onChange={(e) => setint1(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label>Second internal mark(25):</label>
                <input
                  type="number"
                  className="form-control"
                  value={int2}
                  onChange={(e) => setint2(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label>External mark(50): </label>
                <input
                  type="number"
                  className="form-control"
                  value={ext}
                  onChange={(e) => setext(e.target.value)}
                  required
                />
              </div>
              <button>Submit</button>
            </form>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default MarkModal;