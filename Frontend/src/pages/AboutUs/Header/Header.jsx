import React from "react";

const Header = () => {
  return (
    <div
      className="text-center p-8 sm:p-12 md:p-16 text-white"
      style={{
        background:
          "linear-gradient(167.60deg, rgb(95, 29, 145) 42.547%, rgb(255, 180, 197) 135.799%)",
      }}
    >
      <h1 className="font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
        About Us
      </h1>
      <p className="text-lg sm:text-xl md:text-2xl mt-3">
        Read more about us. Our mission, vision, success, and many <br />
        other things you might love.
      </p>
    </div>
  );
};

export default Header;
