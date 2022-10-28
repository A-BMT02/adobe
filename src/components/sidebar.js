import React, { useState } from "react";

export const Sidebar = () => {
  const [target, setTarget] = useState(0);
  const SIDEBAR_OPTIONS = ["Discounts", "Dresses", "Clothes", "Accessories", "Gifts", "Explore more"];
  return (
    <div className="hidden md:flex  justify-center space-x-12 bg-opink text-white pl-0 pr-0 p-4">
      {SIDEBAR_OPTIONS.map((label, index) => (
        <p
          onClick={() => setTarget(index)}
          className={
            target === index
              ? "cursor-pointer"
              : "text-ogray  cursor-pointer  border-b-2  border-transparent	 hover:border-white"
          }
        >
          {label}
        </p>
      ))}
    </div>
  )
};
