import React from "react";
import truck from "../images/truck.png";
import gift from "../images/gift.png";
import medal from "../images/medal.png";
import family from "../images/family.png";
import giftCard from "../images/giftCard.png";

export const Benefits = () => {
  return (
    <div className="flex flex-col space-y-6 items-center mt-4 xl:mt-10">
      <div className="flex flex-col space-y-1 justify-center md:justify-start text-center">
        <p className="text-xl md:text-2xl font-bold ">
          Many benefits are waiting for you
        </p>
        <div className="bg-opink w-[80px] h-[8px] rounded-xl "></div>
      </div>
      <div className="w-full flex justify-center  bg-bgray">
        <div className="flex flex-col lg:w-none lg:max-w-none space-y-12 lg:space-y-0 lg:flex-row justify-center lg:space-x-6  px-5 md:px-10 py-10">
          <div className="flex space-x-10 lg:space-x-6 items-center">
            <img
              className=" w-[20%] max-w-[85px] lg:max-w-none lg:w-none"
              src={truck}
            />
            <div className="flex flex-col space-y-2">
              <p className="font-bold sm:text-xl lg:text-base">Free Shipping</p>
              <p className="sm:text-lg lg:text-base">
                When purchasing with $5000 or more
              </p>
            </div>
          </div>

          <div className="flex space-x-10 lg:space-x-6 items-center">
            <img
              className="w-[20%] max-w-[85px] lg:max-w-none lg:w-none"
              src={gift}
            />
            <div className="flex flex-col space-y-2">
              <p className="font-bold sm:text-xl lg:text-base">
                Send your gift
              </p>
              <p className="sm:text-lg lg:text-base">
                The best gift you can give to your loved one
              </p>
            </div>
          </div>

          <div className="flex space-x-10 lg:space-x-6 items-center">
            <img
              className="w-[20%] max-w-[85px] lg:max-w-none lg:w-none"
              src={medal}
            />
            <div className="flex flex-col space-y-2">
              <p className="font-bold sm:text-xl lg:text-base">Your Points</p>
              <p className="sm:text-lg lg:text-base">
                Earn points and shop for free
              </p>
            </div>
          </div>

          <div className="flex space-x-10 lg:space-x-6 items-center">
            <img
              className="w-[20%] max-w-[85px] lg:max-w-none lg:w-none"
              src={family}
            />
            <div className="flex flex-col space-y-2">
              <p className="font-bold sm:text-xl lg:text-base">
                Kadnile family
              </p>
              <p className="sm:text-lg lg:text-base">
                Exclusive benefits when you join
              </p>
            </div>
          </div>

          <div className="flex space-x-10 lg:space-x-6 items-center">
            <img
              className="w-[20%] max-w-[85px] lg:max-w-none lg:w-none"
              src={giftCard}
            />
            <div className="flex flex-col space-y-2">
              <p className="font-bold sm:text-xl lg:text-base">Gift Cards</p>
              <p className="sm:text-lg lg:text-base">
                When purchasing with $5000 or more
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
