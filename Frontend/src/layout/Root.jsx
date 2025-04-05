import React from "react";
import { Outlet } from "react-router";
import Navbar from "./../components/Navbar/Navbar";
import Footer from "./../components/Footer/Footer";
import ScrollTop from "../utils/ScrollTop";
import SmoothScroll from "../utils/SmoothScroll";

const Root = () => {
  return (
    <main className="font-Poopins overflow-hidden">
      {/* <SmoothScroll> */}
        <ScrollTop />
        {/* navbar */}
        <Navbar />
        {/* outlet */}
        <Outlet />
        {/* Footer */}
        <Footer />
      {/* </SmoothScroll> */}
    </main>
  );
};

export default Root;
