import React from "react";

export default function Title({ className, children }) {
  return (
    <h2 className={` font-nunito text-2xl font-bold text-black ${className}`}>
      {children}
    </h2>
  );
}
