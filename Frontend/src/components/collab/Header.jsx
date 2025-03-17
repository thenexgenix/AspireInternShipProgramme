import React from "react";
import headerCollab from "../../Assets/images/collab-heading-bg.png";

const Header = () => {
  return (
    <section
      className="bg-cover bg-center text-center text-white py-20 px-4"
      style={{ backgroundImage: `url(${headerCollab})` }}
    >
      <h1 className="text-3xl md:text-4xl  font-bold mb-4">
        Our Valued Partners & Collaborators
      </h1>
      <h2 className="text-md md:text-xl  font-medium max-w-2xl mx-auto">
        Building a Future Together – Empowering Innovation Through Strategic
        Alliances.
      </h2>
    </section>
  );
};

export default Header;
