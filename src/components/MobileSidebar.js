import React from "react";

export const MobileSidebar = ({ showSidebar }) => {
  return (
    <div
      className={`text-xl text-white fixed w-full max-w-[400px] top-0 right-0 bg-opink z-50 h-full flex flex-col items-center py-20 space-y-10 ease-in-out duration-300 ${
        showSidebar ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <p>Discounts</p>
      <p>Dresses</p>
      <p>Clothes</p>
      <p>Gifts</p>
      <p>Accessories</p>
      <p>Explore more</p>
    </div>
  );
};
