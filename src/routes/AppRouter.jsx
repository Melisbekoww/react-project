import React from "react";
import { Route, Routes } from "react-router-dom";
import routes from "./routes";
import Layout from "../components/layout/Layout";
const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {routes.map((el) => (
          <Route path={el.path} element={el.element} />
        ))}
      </Route>
    </Routes>
  );
};

export default AppRouter;
