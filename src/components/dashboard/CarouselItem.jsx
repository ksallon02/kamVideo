import React, { useState } from "react";
import PropTypes from "prop-types";
import "../../assets/styles/components/dashboard/CarouselItem.scss";
import playIcon from "../../assets/image/play-icon.png";
import plusIcon from "../../assets/image/plus-icon.png";
import removeIcon from "../../assets/image/remove.png";
import Modal from "../Modal";
import ModalMovie from "./ModalMovie";

import {addMovieMyList, removeMovieMyList} from "../../dataAccess/Movies";


const CarouselItem = ({item, myList = false}) => {
  const {cover, title, year, contentRating, duration, source } = item;
  const [showModalAction, setShowModalAction] = useState(false);
  const [showMovie, setShowMovie] = useState(false);


  const actionMovie = () => {
    // setShowModalAction(myList ? 'Eliminado de mi lista' : 'Agregado a la lista');
    myList ? removeMovieMyList(item) : addMovieMyList(item);
  }

  return (
    <>
      <div className="carousel-item">
        <img className="carousel-item__img" src={cover} alt={title} />
        <div className="carousel-item__details">
          <div>
            <div className="tooltip" onClick={() => setShowMovie(source)}>
              {/* <span className="tooltiptext">Reproducir</span> */}
              <img className="carousel-item__details--img scale" src={ playIcon } alt="Play Icon" />&nbsp;
            </div>
            <div className="tooltip" onClick={actionMovie}>
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
      {/* Modal Agregar/Eliminar de mi lista */}
      <Modal show={showModalAction} setShow={setShowModalAction}><h1><center>{showModalAction}</center></h1></Modal>
      {/* Modal para mostrar la pelicula */}
      <Modal show={showMovie} setShow={setShowMovie} ><ModalMovie movie={showMovie}/></Modal>
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
