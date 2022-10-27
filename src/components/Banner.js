import React from "react";
import banner from "../images/banner.jpg";

export const Banner = () => {
  return (
    <div className="mt-10 relative">
      <div className="w-full max-w-full">
        <img className="w-full max-w-full" src={banner} />
      </div>

      <div className="absolute top-0 bottom-0 m-auto flex w-full">
        <div className="flex flex-col lg:flex-row justify-around lg:justify-between items-center w-full">
          <div className="flex space-x-0 md:space-x-5 items-center ">
            <div className="hidden lg:block bg-dblue px-10 py-4 rounded-r-3xl">
              <p className="text-3xl text-white">-10%</p>
            </div>

            <p className="text-white text-center lg:text-left lg:mt-0 w-full max-w-[400px] lg:w-3/4 lg:max-w-[350px] text-sm md:text-2xl ">
              Subscribe to our newsletter and receive exclusive offers every
              week
            </p>
          </div>
          <div className="flex space-x-4 lg:space-x-10 mr-10">
            <div className="lg:w-[250px]">
              <input
                className="rounded-2xl px-2 md:px-6 py-1 md:py-3 w-full text-xs"
                placeholder="Enter your email"
              />
            </div>
            <div className="bg-dblue px-2 md:px-6 py-1 md:py-3  lg:w-[180px] rounded-2xl text-xs">
              <p className="text-xs">Get your discount</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
