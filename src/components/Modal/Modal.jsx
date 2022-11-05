import React from "react";
import "./Modal.css";

function Modal({ children, handleCloseModal }) {
  return (
    <div className="modal-div" onClick={handleCloseModal}>
      <div className="modal team-modal">
        <div className="modal-close" onClick={handleCloseModal}>
          ✖
        </div>
        {children}
      </div>
    </div>
  );
}

export default Modal;
