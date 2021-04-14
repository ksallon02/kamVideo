import React from "react";
import ReactDOM from 'react-dom';
import "../assets/styles/components/Modal.scss";

const Modal = ({ showMovie, setShowMovie }) => {
  
  const closeModal = (event) => {
    if (event.target.id === "modalPlaMovie") {
      setShowMovie(false);
      window.removeEventListener("click", closeModal);
    }
  }

  showMovie && window.addEventListener("click", closeModal);

  return (
    showMovie && ReactDOM.createPortal(
      <div className="modal-playMovie">
        <div id="modalPlaMovie" className="modal" style={{ display: "block" }}>
          <div className="modal-content">
            <div className="close-section"><span className="close" onClick={() => setShowMovie(false)}>&times;</span></div>            
            <div className="content-section">
                <div className="header-section"><span className="title">Disfruta la pelicula ;)</span></div>
                <div className="video-content">
                    <iframe
                        allow="fullscreen;"
                        title="Pelicula"
                        width="100%"
                        height="100%"
                        src={`${showMovie}?autoplay=1&mute=1`}>                            
                    </iframe>
                </div>
            </div>            
          </div>
        </div>
      </div>
    , document.getElementById('modal'))
  );
};

export default Modal;
