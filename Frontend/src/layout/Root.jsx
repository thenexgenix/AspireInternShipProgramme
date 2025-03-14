import React from "react";
import { Outlet } from "react-router";
import Navbar from "./../components/Navbar/Navbar";
import Footer from "./../components/Footer/Footer";

const Root = () => {
  return (
    <main className="font-Poopins">
      {/* navbar */}
      <Navbar />
      {/* outlet */}
      <Outlet />
      {/* Footer */}
      <Footer />
    </main>
  );
};

export default Root;
