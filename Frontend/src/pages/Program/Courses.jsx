import React from "react";
import { useLocation } from "react-router";

const Courses = () => {
  const location = useLocation();
  const path = location.pathname.split("/").filter(Boolean);
  return (
    <>
      <section className="bg-primary-color mt-24 py-8">
        {/* use daisy ui  for breadcrumbs */}
        <div className="breadcrumbs text-sm">
          <ul>
            {path?.map((e, i) => {
              return (
                <li className="cursor-pointer" key={i}>
                  {e}
                </li>
              );
            })}
          </ul>
        </div>
        <section className="bg-primary-color mt-24 py-16 text-center flex flex-col items-center justify-center h-[50vh]">
          {/* Coming Soon Message */}
          <div className="text-white p-6 rounded-lg shadow-lg max-w-md">
            <h1 className="text-3xl font-bold">Coming Soon 🚀</h1>
            <p className="mt-2 text-gray-300">
              We're working hard to bring something amazing for you. Stay tuned!
            </p>
          </div>
        </section>
      </section>
    </>
  );
};

export default Courses;
