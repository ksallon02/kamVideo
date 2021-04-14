import React from "react";
import "dragscroll";
import "../../assets/styles/components/dashboard/Carousel.scss";

const Carousel = ({ children }) => {
  return (    
    <section className="carousel dragscroll">
      <div className="carousel__container">{children}</div>      
    </section>
  );
};

export default Carousel;
