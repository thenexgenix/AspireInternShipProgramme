import React from "react";
// import { useLocation } from "react-router";

const Courses = () => {
  // const location = useLocation();
  // const path = location.pathname.split("/").filter(Boolean);

  return (
    <section className="min-h-screen ">
      {/* Main Content */}
      <div className="container mx-auto px-4 py-16 flex items-center justify-center min-h-[80vh]">
        <div className="card shadow-2xl w-full max-w-lg backdrop-blur-md ">
          <div className="card-body items-center text-center">
            {/* Title */}
            <h1 className="card-title text-4xl font-bold text-purple-800 mb-4">
              Coming Soon!
            </h1>

            {/* Description */}
            <p className="text-gray-700 mb-6 leading-relaxed">
              We're crafting something extraordinary for you. Get ready for an
              amazing learning experience!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Courses;
