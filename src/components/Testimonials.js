import React from "react";
import { Card } from "./Card";
import testimonialPic0 from "../images/testimonialPic0.png";
import testimonialPic1 from "../images/testimonialPic1.png";
import testimonialPic2 from "../images/testimonialPic2.png";
import curve from "../images/curve.png";
import circle2 from "../images/circle2.png";

export const Testimonials = () => {
  return (
    <div className="relative w-full my-10 overflow-hidden">
      <div className="flex justify-center">
        <div className="flex flex-col space-y-1 mb-20 xl:mb-0">
          <p className="text-2xl font-bold">Customers Reviews</p>
          <div className="bg-opink w-[120px] h-[8px] rounded-xl "></div>
        </div>
      </div>

      <div className="hidden xl:block w-full">
        <img className="w-full" src={curve} />
      </div>

      <div className="hidden xl:block absolute -top-5 -right-36">
        <img className="w-[250px]" src={circle2} />
      </div>
      <div className="xl:absolute xl:top-32 flex flex-col xl:flex-row space-y-20 xl:space-y-0 w-full justify-center px-5 md:px-0">
        <div className=" xl:absolute top-28 left-8">
          <Card picture={testimonialPic2} small={true} />
        </div>

        <div className="z-50 left-1/2 ">
          <Card picture={testimonialPic0} small={false} />
        </div>

        <div className="z-20 xl:absolute top-28 right-8">
          <Card picture={testimonialPic1} small={true} />
        </div>
      </div>
    </div>
  );
};
