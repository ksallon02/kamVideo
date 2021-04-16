import React from "react";

const ModalMovie = ({movie}) => {
  return (
    <React.Fragment>
      <div className="header-section">
        <span className="title">Disfruta la pelicula ;)</span>
      </div>
      <div className="video-content">
        <iframe
          allow="fullscreen;"
          title="Pelicula"
          width="100%"
          height="100%"
          src={`${movie}?autoplay=1&mute=1`}
        ></iframe>
      </div>
    </React.Fragment>
  );
};

export default ModalMovie;
