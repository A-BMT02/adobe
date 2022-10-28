import React, { useEffect, useRef, useState } from "react";
import girl from "../images/girl.png";
import play from "../images/play.png";
import back from "../images/back.png";
import backsvg from "../images/back.svg";
import arrow from "../images/arrow.png";

export const Carousel = () => {
  const ref = useRef(null);
  const [target, setTarget] = useState(0);

  const next = () => {
    if (target == 1) {
      setTarget(0);
    } else {
      setTarget(1);
      console.log("a");
    }
    return;
  };

  const previous = () => {
    if (target == 0) {
      setTarget(1);
    } else {
      setTarget(0);
    }
    return;
  };

  useEffect(() => {
    const percent = 50 * target;
    ref.current.style.transform = `translateX(-${percent}%)`;
  }, [target]);

  return (
    <div className="relative text-white w-full overflow-hidden ">
      <div className="px-2 md:px-10 z-10 absolute top-1/2 -translate-x-2/4 -translate-y-2/4 left-1/2 w-full flex justify-between">
        <div
          onClick={(e) => previous()}
          className="cursor-pointer rounded-full bg-white w-[30px] h-[30px] md:w-[48px] md:h-[48px] flex items-center justify-center hover:bg-transparent hover:border hover:border-white"
        >
          <img className="w-2 md:w-none" src={arrow} />
        </div>
        <div
          onClick={(e) => next()}
          className="cursor-pointer rotate-180 rounded-full bg-white  w-[30px] h-[30px] md:w-[48px] md:h-[48px] flex items-center justify-center hover:bg-transparent hover:border hover:border-white"
        >
          <img className="w-2 md:w-none" src={arrow} />
        </div>
      </div>
      <div className="absolute z-40 space-y-2 top-10  right-16 md:right-40  flex flex-col items-center">
        <p className="text-xs">01</p>
        <div className="relative ">
          <div className="w-0.5 h-64 bg-white opacity-30"></div>
          <div
            className={
              target === 0
                ? "block absolute top-0 w-0.5 h-32 bg-white"
                : "hidden"
            }
          ></div>
          <div
            className={
              target === 1 ? "absolute bottom-0 w-0.5 h-32 bg-white" : "hidden"
            }
          ></div>
        </div>
        <p className="text-xs">02</p>
      </div>
      <div
        ref={ref}
        className="flex transition-all duration-1000 z-50"
        style={{ width: `${200}%` }}
      >
        <div className="absolute top-0 left-0 w-full h-full overlay"></div>
        {/* first */}
        <div className="w-full">
          <div className="h-[450px] max-h-[450px] w-full  ">
            <img
              className=" object-cover object-top h-[450px] max-h-[450px] w-full"
              src={girl}
            />
          </div>

          <div className="absolute flex top-48 md:top-36 left-10 md:left-28  justify-between w-full px-5">
            <div className="flex space-x-10 items-center">
              <div className="flex flex-col space-y-4  ">
                <p className="text-3xl md:text-5xl lucida font-medium">60%</p>
                <p className="text-2xl md:text-4xl max-w-[200px] font-bold md:leading-[50px]">
                  Sale of the summer collection
                </p>
                <div className="flex space-x-2 md:space-x-6 items-center">
                  <button className="text-sm md:text-md bg-opink p-1 md:p-2 px-2 md:px-4 md:px-6 border rounded-lg cursor-pointer hover:bg-transparent hover:border hover:border-opink">
                    Shop Now
                  </button>
                  <div className="flex space-x-2 items-center cursor-pointer hover:border hover:rounded-lg hover:px-2">
                    <img className="w-[40px] md:w-none" src={play} />
                    <p className="text-sm md:text:md">Play video</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* second */}
        <div className="relative w-full">
          <div className="absolute top-0 left-0 w-full h-full overlay"></div>

          <div className="h-[450px] max-h-[450px] w-full ">
            <img
              className=" object-cover object-top h-[450px] max-h-[450px] w-full "
              src={girl}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
