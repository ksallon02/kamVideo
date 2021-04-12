import React from "react";
import '../../assets/styles/components/dashboard/Search.scss'

const Search = ({setQuery, query}) => {
  return (
    <section className="main">
      <h2 className="main__title pepe">¿Qué quieres ver hoy?</h2>
      <input type="text" className="input" placeholder="Buscar..." onChange={e => setQuery(e.target.value)} value={query}/>
    </section>
  );
};

export default Search;
