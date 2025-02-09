import React from "react";

const Button = ({ children, onClick, className = "" }) => {
  return (
    <button
      onClick={onClick}
      className={`px-6 py-3 bg-blue-600 hover:bg-blue-700 transition rounded-lg text-white text-lg font-medium flex items-center gap-2 ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
