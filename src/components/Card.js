import React from "react";
import star from "../images/star.png";

export const Card = ({ picture, small }) => {
  return (
    <div className="flex justify-center xl:mt-20 xl:mb-44">
      <div
        className={`relative flex flex-col border-2 bg-white px-5 md:px-24 rounded-xl border-opink border-dotted items-center  md:w-[550px] ${
          small ? "space-y-4" : "space-y-6"
        }`}
      >
        <div
          className={`absolute  ${
            small ? "w-[100px] -top-[50px]" : "-top-[70px] w-[140px]"
          }`}
        >
          <img src={picture} />
        </div>
        <div
          className={`flex flex-col items-center  ${
            small ? "space-y-2 pt-10" : "space-y-3 pt-14"
          }`}
        >
          <p className={`text-opink ${small ? "text-lg" : "text-2xl"}`}>
            Cristopher Dan
          </p>
          <div className="flex space-x-1">
            <img className={`${small ? "h-4" : "h-6"}`} src={star} />
            <img className={`${small ? "h-4" : "h-6"}`} src={star} />
            <img className={`${small ? "h-4" : "h-6"}`} src={star} />
            <img className={`${small ? "h-4" : "h-6"}`} src={star} />
            <img className={`${small ? "h-4" : "h-6"}`} src={star} />
          </div>
        </div>
        <div>
          <p
            className={`text-center mb-6 leading-6 ${
              small ? "text-xs " : "text-sm"
            }`}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>
    </div>
  );
};
