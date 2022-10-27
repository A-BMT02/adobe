import React from "react";
import safePayment from "../images/safePayment.png";
import moneyBack from "../images/moneyBack.png";
import fastShipping from "../images/fastShipping.png";
import bestQuality from "../images/bestQuality.png";

export const Why = () => {
  return (
    <div className="flex flex-col space-y-6 items-center mt-4">
      <div className="flex flex-col space-y-1">
        <p className="text-2xl font-bold ">Why should you choose us?</p>
        <div className="bg-opink w-[70px] h-[8px] rounded-xl "></div>
      </div>
      <div className="flex flex-col lg:flex-row justify-center space-y-4 lg:space-y-0  space-x-0 lg:space-x-10 items-center md:px-20 p-5 sm:p-0">
        <div className="flex flex-col max-w-[700px] lg:max-w-none space-y-4 border-dashed border-opink items-center justify-center border px-5 xl:px-10 py-5 rounded-2xl">
          <img className="w-[130px]" src={safePayment} />
          <p className="font-bold text-xl lg:text-lg">Safe Payments</p>
          <p className="text-center text-lg md:text-md text-tgray">
            All payments are processed instantly changed a secure payment
            protocol through multiple system
          </p>
        </div>

        <div className="flex flex-col max-w-[700px] lg:max-w-none space-y-4 border-dashed border-opink items-center justify-center border px-10 py-5 rounded-2xl">
          <img className="w-[130px]" src={moneyBack} />
          <p className="font-bold text-xl lg:text-lg">Safe Payments</p>
          <p className="text-center text-lg text-tgray">
            If you recived a damaged item or it was out of specification, you
            can return it and get your purchasing money back
          </p>
        </div>

        <div className="flex flex-col max-w-[700px] lg:max-w-none space-y-4 border-dashed border-opink items-center justify-center border px-10 py-5 rounded-2xl">
          <img className="w-[130px]" src={fastShipping} />
          <p className="font-bold text-xl lg:text-lg">Safe Payments</p>
          <p className="text-center text-lg md:text-md text-tgray">
            We provide shipping ad dellivery service for our products to all
            countries around the world with period from 5 to 8 days
          </p>
        </div>

        <div className="flex flex-col max-w-[700px] lg:max-w-none space-y-4 border-dashed border-opink items-center justify-center border px-10 py-5 rounded-2xl">
          <img className="w-[130px]" src={bestQuality} />
          <p className="font-bold text-xl lg:text-lg">Safe Payments</p>
          <p className="text-center text-lg md:text-md text-tgray">
            Kadinle products are made to last, each of our products is made with
            the highest quality materials
          </p>
        </div>
      </div>
    </div>
  );
};
