import React from "react";
import Categories from "./Categories";
import Carousel from "./Carousel";
import CarouselItem from "./CarouselItem";
import noDataIcon from "../../assets/image/No_data.svg";

const FilterMovie = ({ data, query, setShowMovie }) => {
  let _ = require("lodash");
  const allMovies = _.uniqBy(data.trends.concat(data.mylist).concat(data.originals), "id");
  const dataFilter = allMovies.filter((item) => item.title.toLowerCase().includes(query.toLowerCase()));

  return (
    <React.Fragment>
      {dataFilter.length > 0 ? (
        <Categories title="Peliculas y Series">
          <Carousel>
            {dataFilter?.map((item) => (
              <CarouselItem
                key={item.id}
                myList={data.mylist.includes(item)}
                {...item}
                setShowMovie={setShowMovie}
              />
            ))}
          </Carousel>
        </Categories>
      ) : (
        <>
          <h1 className="title_notFound">
            No pudimos encontrar la pelicula que buscas :(
          </h1>
          <center><img src={noDataIcon} alt="Icon" style={{width: "200px"}} /></center>
          <br/><br/><br/>
        </>
      )}
    </React.Fragment>
  );
};

export default FilterMovie;
