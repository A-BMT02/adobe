import React from "react";

export const MobileSidebar = ({ showSidebar, setShowSidebar }) => {
  return (
    <div
      className={`text-xl text-white fixed w-full max-w-[400px] top-0 right-0 bg-opink z-50 h-full flex flex-col items-center py-20 space-y-10 ease-in-out duration-300 ${
        showSidebar ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <p
        onClick={(e) => setShowSidebar(false)}
        className="cursor-pointer hover:text-2xl"
      >
        Discounts
      </p>
      <p
        onClick={(e) => setShowSidebar(false)}
        className="cursor-pointer hover:text-2xl"
      >
        Dresses
      </p>
      <p
        onClick={(e) => setShowSidebar(false)}
        className="cursor-pointer hover:text-2xl"
      >
        Clothes
      </p>
      <p
        onClick={(e) => setShowSidebar(false)}
        className="cursor-pointer hover:text-2xl"
      >
        Gifts
      </p>
      <p
        onClick={(e) => setShowSidebar(false)}
        className="cursor-pointer hover:text-2xl"
      >
        Accessories
      </p>
      <p
        onClick={(e) => setShowSidebar(false)}
        className="cursor-pointer hover:text-2xl"
      >
        Explore more
      </p>
    </div>
  );
};
