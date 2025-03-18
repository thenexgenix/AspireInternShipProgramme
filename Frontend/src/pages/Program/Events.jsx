import React from "react";
import { useLocation } from "react-router";

const Events = () => {
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
        buy me a cofee events
      </section>
    </>
  );
};

export default Events;
