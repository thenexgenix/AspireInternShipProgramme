import React from "react";
import { useLocation } from "react-router";

const Events = () => {
  const location = useLocation();
  const path = location.pathname.split("/").filter(Boolean);

  return (
    <section className="bg-primary-color mt-24 py-16 text-center flex flex-col items-center justify-center ">
      {/* Breadcrumbs */}
      <div className="breadcrumbs text-sm mb-4">
        <ul className="flex gap-2">
          {path?.map((e, i) => (
            <li className="cursor-pointer text-gray-300" key={i}>
              {e}
            </li>
          ))}
        </ul>
      </div>

      {/* Coming Soon Message */}
      <div className=" text-white p-6 rounded-lg shadow-lg max-w-md h-[50vh]">
        <h1 className="text-3xl font-bold">Coming Soon 🚀</h1>
        <p className="mt-2 text-gray-300">We're working hard to bring something amazing for you. Stay tuned!</p>
      </div>
    </section>
  );
};

export default Events;
