import React from "react";

export default function Button({ children, className }) {
  return (
    <button
      type="button"
      className={`font-semibold text-base text-white bg-primary hover:bg-opacity-80 px-4 py-2 rounded-lg transition-all duration-75 ease-linear ${className}`}
    >
      {children}
    </button>
  );
}
