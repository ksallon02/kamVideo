import React from "react";
import Categories from "./Categories";
import Carousel from "./Carousel";
import CarouselItem from "./CarouselItem";

const MoviesSection = ({ data, myList}) => {
  return (
    <React.Fragment>
      {myList?.length > 0 && (
        <Categories title="Mi Lista">
          <Carousel>
            {myList?.map((item) => (<CarouselItem key={item.id} item={item} myList={true}/>))}
          </Carousel>
        </Categories>
      )}

      <Categories title="Tendencias">
        <Carousel>
          {data.trends?.map((item) => (<CarouselItem key={item.id} item={item} myList={myList?.map(data => data.id).includes(item.id)}/>))}
        </Carousel>
      </Categories>

      <Categories title="Originales">
        <Carousel>
          {data.originals?.map((item) => (<CarouselItem key={item.id} item={item} myList={myList?.map(data => data.id).includes(item.id)} />))}
        </Carousel>
      </Categories>
    </React.Fragment>
  );
};

export default MoviesSection;
