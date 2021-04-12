import React from "react";
import "../../assets/styles/components/dashboard/Carousel.scss";

const Carousel = ({ children }) => {
  return (    
    <section className="carousel">
      <div className="carousel__container">{children}</div>      
    </section>
  );
};

export default Carousel;
