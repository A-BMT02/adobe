import React from "react";
import banner from "../images/banner.jpg";

export const Banner = () => {
  return (
    <div className="mt-10 relative">
      <div className="h-[150px] max-h-[150px] w-full max-w-full">
        <img
          className="h-[150px] max-h-[150px] w-full max-w-full"
          src={banner}
        />
      </div>

      <div className="absolute top-10 flex w-full">
        <div className="flex justify-between items-center w-full">
          <div className="flex space-x-5 items-center ">
            <div className="bg-dblue px-10 py-4 rounded-r-3xl">
              <p className="text-3xl text-white">-10%</p>
            </div>

            <p className="text-white max-w-[350px] text-2xl">
              Subscribe to our newsletter and receive exclusive offers every
              week
            </p>
          </div>
          <div className="flex space-x-10 mr-10">
            <div className="">
              <input
                className="rounded-2xl px-6 py-3 w-[250px] text-xs"
                placeholder="Enter your email"
              />
            </div>
            <div className="bg-dblue px-6 py-3 w-[180px] rounded-2xl text-xs">
              <p className="text-xs">Get your discount</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
