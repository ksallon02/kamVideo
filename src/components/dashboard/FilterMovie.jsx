import React from 'react';
import Categories from "./Categories";
import Carousel from "./Carousel";
import CarouselItem from "./CarouselItem";
import "../../assets/styles/components/dashboard/FilterMovie.scss";

const FilterMovie = ({data, query, setShowMovie}) => {
    const allMovies = data.trends.concat(data.mylist).concat(data.originals);
    const dataFilter = allMovies.filter(item => item.title.toLowerCase().includes(query.toLowerCase()));

    return (
        <React.Fragment>
            {dataFilter.length > 0 ? (
                <Categories title="Peliculas y Series">
                <Carousel>
                    {dataFilter?.map((item) => (<CarouselItem key={item.id} {...item} setShowMovie={setShowMovie} />))}
                </Carousel>
            </Categories>
            ) : <h1 className="title_notFound">No pudimos encontrar la pelicula que buscas :(</h1>}
        </React.Fragment>
    );
}

export default FilterMovie;