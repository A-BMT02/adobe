import React, { useEffect, useState } from "react";
import { Search } from "./Search";
import heart from "../images/heart.png";
import cart from "../images/cart.png";
import dropdown from "../images/dropdown.png";
import down from "../images/down.png";
import { MobileSidebar } from "./MobileSidebar";

export const IconRow = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <div className="flex justify-between pt-4 pb-4">
      <MobileSidebar showSidebar={showSidebar} />
      <div></div>
      <Search />

      <div className="flex space-x-6 items-center pr-6 ">
        <img className="hidden md:inline cursor-pointer" src={heart} />
        <img className="hidden md:inline cursor-pointer" src={cart} />
        <div className="flex items-center space-x-1 cursor-pointer">
          <p className=" ">EN</p>
          <img className="w-2 h-1" src={down} />
        </div>
        <div className="flex items-center space-x-1 cursor-pointer">
          <p className=" ">UAE</p>
          <img className="cursor-pointer" src={down} />
        </div>
        {!showSidebar ? (
          <img
            className="md:hidden z-50 cursor-pointer"
            onClick={(e) => setShowSidebar(true)}
            src={dropdown}
          />
        ) : (
          <p
            onClick={(e) => setShowSidebar(false)}
            className="text-4xl z-50 fixed top-5 right-5 text-white cursor-pointer"
          >
            X
          </p>
        )}
      </div>
    </div>
  );
};
