import React from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import Root from "./../layout/Root";
import Home from "./../pages/Home/Home";
import Courses from "../pages/Program/Courses";
import AboutUs from "../pages/AboutUs/AboutUs";
import Story from "../pages/our-story/Story";
import Login from "../pages/Authencation/Login";
import Register from "../pages/Authencation/Register";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Root />}>
          <Route index element={<Home />} />
          <Route path="about" element={<AboutUs />} />
          {/* our-programm  routes*/}
          <Route path="our-program">
            <Route path="courses" element={<Courses />} />
          </Route>
          {/* out stories */}
          <Route path="stories" element={<Story />} />
          {/* Authencation */}
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Register />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
