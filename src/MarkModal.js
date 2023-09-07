import React from 'react';
import { useState, useEffect } from "react";
import Modal from '@mui/material/Modal';
import { useParams } from "react-router-dom";

const MarkModal = ({ mark, setMark }) => {
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);
  const { id } = useParams();
  const mark_id = id;

  const [subject, setSubject] = useState("");
  const [internal1, setinternal1] = useState("");
  const [internal2, setinternal2] = useState("");
  const [external, setexternal] = useState("");

  const reset = () => {
    setSubject("");
    setinternal1("");
    setinternal2("");
    setexternal("");
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const Mark = { subject, internal1, internal2, external, mark_id };
    const cache = JSON.parse(localStorage.getItem("total-marks"))
    
    if (cache != null) {
      localStorage.setItem("total-marks", JSON.stringify([...cache, Mark]));
    }
    localStorage.setItem("total-marks", JSON.stringify([...cache, Mark]));
    setMark([...mark, Mark])
    reset();
    handleClose()
  };

  return (
    <div>
      <button type="button" className='addmarks' onClick={handleOpen}>Add Marks</button>
      <Modal
        onClose={handleClose}
        open={open}
        className= ""
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
                  value={internal1}
                  onChange={(e) => setinternal1(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label>Second internal mark(25):</label>
                <input
                  type="number"
                  className="form-control"
                  value={internal2}
                  onChange={(e) => setinternal2(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label>External mark(50): </label>
                <input
                  type="number"
                  className="form-control"
                  value={external}
                  onChange={(e) => setexternal(e.target.value)}
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