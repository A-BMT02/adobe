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
        <p className="text-2xl ">Many benefits are waiting for you</p>
        <div className="bg-opink w-[70px] h-[8px] rounded-xl "></div>
      </div>

      <div className="flex justify-center space-x-10 items-center px-10 bg-ogray px-10 py-10">
        <div className="flex space-x-6 items-center">
          <img src={truck} />
          <div className="flex flex-col space-y-2">
            <p className="font-bold">Free Shipping</p>
            <p>When purchasing with $5000 or more</p>
          </div>
        </div>

        <div className="flex space-x-6 items-center">
          <img src={gift} />
          <div className="flex flex-col space-y-2">
            <p className="font-bold">Free Shipping</p>
            <p>When purchasing with $5000 or more</p>
          </div>
        </div>

        <div className="flex space-x-6 items-center">
          <img src={medal} />
          <div className="flex flex-col space-y-2">
            <p className="font-bold">Free Shipping</p>
            <p>When purchasing with $5000 or more</p>
          </div>
        </div>

        <div className="flex space-x-6 items-center">
          <img src={family} />
          <div className="flex flex-col space-y-2">
            <p className="font-bold">Free Shipping</p>
            <p>When purchasing with $5000 or more</p>
          </div>
        </div>

        <div className="flex space-x-6 items-center">
          <img src={giftCard} />
          <div className="flex flex-col space-y-2">
            <p className="font-bold">Free Shipping</p>
            <p>When purchasing with $5000 or more</p>
          </div>
        </div>
      </div>
    </div>
  );
};
