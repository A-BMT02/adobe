import React from "react";
import { Search } from "./Search";
import heart from "../images/heart.png";
import cart from "../images/cart.png";
import dropdown from "../images/dropdown.png";
import down from "../images/down.png";

export const IconRow = () => {
  return (
    <div className="flex justify-between pt-4 pb-4">
      <div></div>
      <Search />

      <div className="flex space-x-6 items-center pr-6 ">
        <img src={heart} />
        <img src={cart} />
        <div className="flex items-center space-x-1">
          <p className="text-tgray">EN</p>
          <img className="w-2 h-1" src={down} />
        </div>
        <div className="flex items-center space-x-1">
          <p className="text-tgray">UAE</p>
          <img src={down} />
        </div>
        <img src={dropdown} />
      </div>
    </div>
  );
};
