import React, { useState } from "react";
import Header from "./Header";
import Search from "./Search";
import Footer from "./Footer";
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
    <div className="dashboard">
      <Header />
      <Search query={query} setQuery={setQuery} />
      { loading ? <Loader /> : (query === "" ? <MoviesSection data={videos} /> : <FilterMovie data={videos} query={query} />) }
      <Footer />
    </div>
  );
};

export default Dashboard;
