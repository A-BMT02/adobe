import React from "react";
import truck from "../images/truck.png";
import gift from "../images/gift.png";
import medal from "../images/medal.png";
import family from "../images/family.png";
import giftCard from "../images/giftCard.png";

export const Benefits = () => {
  return (
    <div className="flex flex-col space-y-6 items-center mt-4">
      <div className="flex flex-col space-y-1">
        <p className="text-2xl font-bold ">Many benefits are waiting for you</p>
        <div className="bg-opink w-[70px] h-[8px] rounded-xl "></div>
      </div>

      <div className="flex flex-col w-full lg:w-none lg:max-w-none space-y-12 lg:space-y-0 lg:flex-row justify-center lg:space-x-10 items-center px-5 md:px-10 bg-bgray py-10">
        <div className="flex space-x-10 lg:space-x-6 items-center">
          <img className="sm:w-[100px] lg:w-none" src={truck} />
          <div className="flex flex-col space-y-2">
            <p className="font-bold sm:text-xl lg:text-base">Free Shipping</p>
            <p className="sm:text-lg lg:text-base">
              When purchasing with $5000 or more
            </p>
          </div>
        </div>

        <div className="flex space-x-10 lg:space-x-6 items-center">
          <img src={gift} />
          <div className="flex flex-col space-y-2">
            <p className="font-bold sm:text-xl lg:text-base">Free Shipping</p>
            <p className="sm:text-lg lg:text-base">
              When purchasing with $5000 or more
            </p>
          </div>
        </div>

        <div className="flex space-x-10 lg:space-x-6 items-center">
          <img src={medal} />
          <div className="flex flex-col space-y-2">
            <p className="font-bold sm:text-xl lg:text-base">Free Shipping</p>
            <p className="sm:text-lg lg:text-base">
              When purchasing with $5000 or more
            </p>
          </div>
        </div>

        <div className="flex space-x-10 lg:space-x-6 items-center">
          <img src={family} />
          <div className="flex flex-col space-y-2">
            <p className="font-bold sm:text-xl lg:text-base">Free Shipping</p>
            <p className="sm:text-lg lg:text-base">
              When purchasing with $5000 or more
            </p>
          </div>
        </div>

        <div className="flex space-x-10 lg:space-x-6 items-center">
          <img src={giftCard} />
          <div className="flex flex-col space-y-2">
            <p className="font-bold sm:text-xl lg:text-base">Free Shipping</p>
            <p className="sm:text-lg lg:text-base">
              When purchasing with $5000 or more
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
