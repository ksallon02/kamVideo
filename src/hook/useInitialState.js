import { useState, useEffect } from "react";

const useInicialState = (API, setLoading) => {
  const [videos, setVideos] = useState({});  
  //Se ejecutara cuando React monte o actualice el componente.
  //Se ejecuta luego de hacer el primer render  
  useEffect(() => {
    setLoading(true);
    fetch(API)
      .then((response) => response.json())
      .then((data) => {
        // setTimeout(()=> {
        //   setVideos(data);
        //   setLoading(false);
        // }, 4000)
        setVideos(data);
        setLoading(false);
      });
      // eslint-disable-next-line
  }, []);
  return videos;
};

export default useInicialState;
