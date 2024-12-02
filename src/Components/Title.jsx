import React from "react";

export default function Title({ className, children }) {
  return (
    <h2
      className={` font-nunito text-2xl md:text-3xl lg:text-4xl font-extrabold text-black ${className}`}
    >
      {children}
    </h2>
  );
}
