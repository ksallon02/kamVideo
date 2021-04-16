import React from "react";
import ReactDOM from "react-dom";
import "../assets/styles/components/Modal.scss";

const Modal = ({ children, show, setShow }) => {
  const closeModal = (event) => {
    if (event.target.id === "modalGeneral") {
      setShow(false);
      window.removeEventListener("click", closeModal);
    }
  };

  show && window.addEventListener("click", closeModal);

  return (
    show &&
    ReactDOM.createPortal(
      <div className="modal-general">
        <div id="modalGeneral" className="modal">
          <div className="modal-content">
            <div className="close-section">
              <span className="close" onClick={() => setShow(false)}>&times;</span>
            </div>
            <div className="content-section">{children}</div>
          </div>
        </div>
      </div>,
      document.getElementById("modal")
    )
  );
};

export default Modal;
