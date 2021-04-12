import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVideoSlash } from "@fortawesome/free-solid-svg-icons";
import "../../assets/styles/components/notFound/NotFound.scss";

const NotFound = () => {
  return (
    <div className="notFound-page">      
      <div className="notfound">
        <div className="notfound-404">    
          <FontAwesomeIcon icon={faVideoSlash} size="10x"/>
          <h1>404</h1>
          <h2>Page not found</h2>
        </div>
        <a href="/Dashboard">Homepage</a>
      </div>
    </div>
  );
};

export default NotFound;
