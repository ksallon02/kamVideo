import React from "react";
import Categories from "./Categories";
import Carousel from "./Carousel";
import CarouselItem from "./CarouselItem";

const MoviesSection = ({ data, setShowMovie }) => {
  return (
    <React.Fragment>
      {data.mylist?.length > 0 && (
        <Categories title="Mi Lista">
          <Carousel>
            {data.mylist?.map((item) => (<CarouselItem key={item.id} {...item} setShowMovie={setShowMovie} />))}
          </Carousel>
        </Categories>
      )}

      <Categories title="Tendencias">
        <Carousel>
          {data.trends?.map((item) => (<CarouselItem key={item.id} {...item} setShowMovie={setShowMovie} />))}
        </Carousel>
      </Categories>

      <Categories title="Originales">
        <Carousel>
          {data.originals?.map((item) => (<CarouselItem key={item.id} {...item} setShowMovie={setShowMovie} />))}
        </Carousel>
      </Categories>
    </React.Fragment>
  );
};

export default MoviesSection;
