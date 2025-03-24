import React from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import Root from "./../layout/Root";
import Home from "./../pages/Home/Home";
import Courses from "../pages/Program/Courses";
import AboutUs from "../pages/AboutUs/AboutUs";
import Story from "../pages/our-story/Story";
import Login from "../pages/Authencation/Login";
import Register from "../pages/Authencation/Register";
import Collaborators from "../pages/collab/Collaborators";
import Internships from "../pages/Program/Internships";
import Events from "../pages/Program/Events";
import Blogs from "../pages/blogs/Blogs";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Root />}>
          <Route index element={<Home />} />
          <Route path="about" element={<AboutUs />} />
          {/* our-programm  routes*/}
          <Route path="our-program">
            <Route path="internship" element={<Internships />} />
            <Route path="courses" element={<Courses />} />
            <Route path="events" element={<Events />} />
          </Route>
          {/* our-Collaborators  routes*/}
          <Route path="collaborators" element={<Collaborators />} />
          {/* blogs section routes */}
          <Route path="blog" element={<Blogs />} />
          {/* out stories  routes*/}
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
