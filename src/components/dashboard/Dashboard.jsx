import React, { useState } from "react";
import Search from "./Search";
import Layout from "../Layout";
import {useGetAllMovies} from "../../hook/useDataAcces";
import MoviesSection from "./MoviesSection";
import FilterMovie from "./FilterMovie";
import Loader from "../Loader";
import "../../assets/styles/App.scss";

const Dashboard = () => {
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState("");
  const movies = useGetAllMovies(setLoading);

  return (
    <Layout>
      <div className="dashboard">
        <Search query={query} setQuery={setQuery} />
        { loading ? <Loader /> : (query === "" ? <MoviesSection data={movies} /> : <FilterMovie data={movies} query={query} />) }
      </div>
    </Layout>
  );
};

export default Dashboard;
