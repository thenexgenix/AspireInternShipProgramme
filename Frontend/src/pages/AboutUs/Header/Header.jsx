import React from "react";

const Header = () => {
  return (
    <div className="text-center p-16 text-white"
      style={{
        background:
          "linear-gradient(167.60deg, rgb(95, 29, 145) 42.547%, rgb(255, 180, 197) 135.799%)",
      }}
    >
      <h1 className="font-semibold text-3xl">About Us</h1>
      <p className="text-xl mt-3">
        Read more about us. Our mission, vision, success, and many <br /> other things
        you might love.
      </p>
    </div>
  );
};

export default Header;
