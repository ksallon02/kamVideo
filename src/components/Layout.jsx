import React from "react";
import Header from "./dashboard/Header";
import Footer from "./dashboard/Footer";

const Layout = ({ children }) => {
  return (
  <div className="layout">
    <Header />
    {children}
    <Footer />
  </div>
  );
};

export default Layout;
