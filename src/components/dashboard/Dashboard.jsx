import React, { useState } from "react";
import Search from "./Search";
import Layout from "../Layout";
import useInitialState from "../../hook/useInitialState";
import Apis from "../../Apis.json";
import MoviesSection from "./MoviesSection";
import FilterMovie from "./FilterMovie";
import Loader from "../Loader";
import "../../assets/styles/App.scss";

const Dashboard = () => {
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState("");
  const videos = useInitialState(Apis.db, setLoading);  

  return (
    <Layout>
      <div className="dashboard">
        <Search query={query} setQuery={setQuery} />
        { loading ? <Loader /> : (query === "" ? <MoviesSection data={videos} /> : <FilterMovie data={videos} query={query} />) }
      </div>
    </Layout>
  );
};

export default Dashboard;
