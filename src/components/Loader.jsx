import React from "react";
import "../assets/styles/components/Loader.scss";

const Loader = () => {
  return (
    <>
      <div className="loader">
        <div className="lds-grid">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>      
    </>
  );
};

export default Loader;
