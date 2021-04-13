import React, { useState } from "react";
import Header from "./Header";
import Search from "./Search";
import Footer from "./Footer";
import useInitialState from "../../hook/useInitialState";
import Apis from "../../Apis.json";
import MoviesSection from "./MoviesSection";
import FilterMovie from "./FilterMovie";
import Modal from "../Modal";
import Loader from "../Loader";

import "../../assets/styles/App.scss";

const Dashboard = () => {
  const [loading, setLoading] = useState(false);
  const videos = useInitialState(Apis.db, setLoading);
  const [query, setQuery] = useState("");
  const [showMovie, setShowMovie] = useState(false);

  return (
    <div className="dashboard">
      <Header />
      <Search query={query} setQuery={setQuery} />
      {loading ? <Loader />
        : query === "" ? <MoviesSection data={videos} setShowMovie={setShowMovie} />
          : <FilterMovie data={videos} query={query} setShowMovie={setShowMovie} />
      }
      <Footer />
      <Modal showMovie={showMovie} setShowMovie={setShowMovie} />
    </div>
  );
};

export default Dashboard;
