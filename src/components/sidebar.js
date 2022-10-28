import React, { useState } from "react";

export const Sidebar = () => {
  const [target, setTarget] = useState("0");
  return (
    <div className="hidden md:flex  justify-center space-x-12 bg-opink text-white pl-0 pr-0 p-4">
      <p
        onClick={(e) => setTarget("0")}
        className={
          target == "0"
            ? "cursor-pointer"
            : "text-ogray  cursor-pointer hover:border-b-2"
        }
      >
        Discounts
      </p>
      <p
        onClick={(e) => setTarget("1")}
        className={
          target == "1"
            ? "cursor-pointer"
            : "text-ogray  cursor-pointer hover:border-b-2"
        }
      >
        Dresses
      </p>
      <p
        onClick={(e) => setTarget("2")}
        className={
          target == "2"
            ? "cursor-pointer"
            : "text-ogray  cursor-pointer hover:border-b-2"
        }
      >
        Clothes
      </p>
      <p
        onClick={(e) => setTarget("3")}
        className={
          target == "3"
            ? "cursor-pointer"
            : "text-ogray  cursor-pointer hover:border-b-2"
        }
      >
        Accessories
      </p>
      <p
        onClick={(e) => setTarget("4")}
        className={
          target == "4"
            ? "cursor-pointer"
            : "text-ogray  cursor-pointer hover:border-b-2"
        }
      >
        Gifts
      </p>
      <p
        onClick={(e) => setTarget("5")}
        className={
          target == "5"
            ? "cursor-pointer"
            : "text-ogray  cursor-pointer hover:border-b-2"
        }
      >
        Explore more
      </p>
    </div>
  );
};
