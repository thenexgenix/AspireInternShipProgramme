import React from "react";

const Button = ({ children }) => {
  return (
    <div className="w-full mt-2 px-4 py-2 rounded-md bg-purple-800 text-white hover:bg-purple-700">
      {children}
    </div>
  );
};

export default Button;
