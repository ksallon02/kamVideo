import { useMemo, useState } from "react";

const useFilterMovie = (data, query) => {
  const [dataFilter, setDataFilter] = useState(data);
  //Guarda en memoria y renderisa solo cuando las variables que recibe cambian
  useMemo(() => {
    let _ = require("lodash");
    let allMovies = _.uniqBy(data.trends.concat(data.originals), "id");
    let result = allMovies.filter((item) => item.title.toLowerCase().includes(query.toLowerCase()));
    setDataFilter(result);
  }, [data, query]);
  return dataFilter;
};

export default useFilterMovie;
