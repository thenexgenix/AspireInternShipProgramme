import React from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import Root from "./../layout/Root";
import Home from "./../pages/Home/Home";
import About from "../pages/About/About";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Root />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
