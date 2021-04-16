import React from "react";
import Categories from "./Categories";
import Carousel from "./Carousel";
import CarouselItem from "./CarouselItem";
import noDataIcon from "../../assets/image/No_data.svg";
import useFilterMovie from "../../hook/useFilterMovie";

const FilterMovie = ({ data, query }) => {

  const dataFilter = useFilterMovie(data, query);
  
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
