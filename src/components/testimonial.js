import React from "react";
import testimonial from "../images/testimonial.png";

export const Testimonial = () => {
  return (
    <div className="flex flex-col space-y-6 items-center mt-10">
      <div className="flex flex-col space-y-1">
        <p className="text-2xl font-bold">Customers Reviews</p>
        <div className="bg-opink w-[50px] h-[8px] rounded-xl "></div>
      </div>
      <img src={testimonial} />
    </div>
  );
};
