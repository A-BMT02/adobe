import React from "react";

export const Sidebar = () => {
  return (
    <div className="hidden md:flex justify-center space-x-12 bg-opink text-white pl-0 pr-0 p-4">
      <p>Discounts</p>
      <p className="text-ogray">Dresses</p>
      <p className="text-ogray">Clothes</p>
      <p className="text-ogray">Accessories</p>
      <p className="text-ogray">Gifts</p>
      <p className="text-ogray">Explore more</p>
    </div>
  );
};
