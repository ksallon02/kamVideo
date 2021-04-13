import React from "react";
import PropTypes from "prop-types";
import "../../assets/styles/components/dashboard/CarouselItem.scss";
import playIcon from "../../assets/image/play-icon.png";
import plusIcon from "../../assets/image/plus-icon.png";
import removeIcon from "../../assets/image/remove.png";


const CarouselItem = ({cover, title, year, contentRating, duration, source, setShowMovie, myList = false}) => {

  return (
    <>
      <div className="carousel-item">
        <img className="carousel-item__img" src={cover} alt={title} />
        <div className="carousel-item__details">
          <div>
            <div className="tooltip" onClick={() => setShowMovie(source)}>
              {/* <span className="tooltiptext">Reproducir</span> */}
              <img className="carousel-item__details--img scale" src={playIcon} alt="Play Icon" />&nbsp;
            </div>
            <div className="tooltip" onClick={() => alert('Agregado a la lista')}>
              {/* <span className="tooltiptext">Agregar a Mi Lista</span> */}
              <img className="carousel-item__details--img scale" src={myList ? removeIcon : plusIcon} alt="Plus Icon" />
            </div>
          </div>
          <p className="carousel-item__details--title">{title}</p>
          <p className="carousel-item__details--subtitle">
            {`${year} ${contentRating} ${duration}`}
          </p>
        </div>
      </div>
    </>
  );
}

CarouselItem.propTypes = {
  cover: PropTypes.string,
  title: PropTypes.string,
  year: PropTypes.number,
  contentRating: PropTypes.string,
  duration: PropTypes.number
}

export default CarouselItem;
