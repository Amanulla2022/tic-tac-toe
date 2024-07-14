import React from "react";

const Square = ({ value, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="w-16 h-16 bg-white border border-gray-400 text-2xl font-bold flex items-center justify-center"
    >
      {value}
    </button>
  );
};

export default Square;
