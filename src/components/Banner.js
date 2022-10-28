import React from "react";
import banner from "../images/banner.jpg";

export const Banner = () => {
  return (
    <div className="mt-10 relative">
      <div className="w-full max-w-full h-[] ">
        <img className="w-full max-w-full" src={banner} />
      </div>

      <div className="absolute top-0 bottom-0 m-auto flex w-full">
        <div className="flex flex-col lg:flex-row justify-around lg:justify-between items-center w-full">
          <div className="flex space-x-0 md:space-x-5 items-center ">
            <div className="hidden lg:block bg-dblue px-10 py-4 rounded-r-3xl">
              <p className="text-4xl text-white font-bold">-10%</p>
            </div>

            <p className="text-white text-center lg:text-left lg:mt-0 w-full max-w-[400px] lg:w-3/4 lg:max-w-[350px] text-[10px] mt-2 md:mt-0 md:text-xl ">
              Subscribe to our newsletter and receive exclusive offers every
              week
            </p>
          </div>
          <div className="flex space-x-4 lg:space-x-10 mr-10 w-full md:w-none justify-between items-center  md:justify-center  ">
            <div className=" md:block -mt-3 md:mt-0 lg:w-[250px] ml-8 md:ml-0">
              <input
                className="rounded-2xl px-1 md:px-6  md:py-3 w-full text-[10px]"
                placeholder="Enter your email"
              />
            </div>
            <div className="hidden md:block bg-dblue px-2 md:px-6 py-1 md:py-3  lg:w-[180px] rounded-2xl text-xs ">
              <p className="text-[10px] md:text-xs font-bold">
                Get your discount
              </p>
            </div>
            <div className="block md:hidden bg-dblue px-2 md:px-6  md:py-3  lg:w-[180px] rounded-2xl text-xs -mt-3">
              <p className="text-[10px] md:text-xs font-bold">
                Get your Discount
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
