import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
  const [search, setSearch] = useState("car");
  return (
    <>
      <Header setSearch={setSearch} search={search} />
      <Outlet context={{ search }} />
      <Footer />
    </>
  );
};

export default Layout;
