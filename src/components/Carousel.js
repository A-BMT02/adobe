import React, { useRef, useState } from "react";
import girl from "../images/girl.png";
import play from "../images/play.png";
import dot from "../images/dot.png";
import back from "../images/back.png";

export const Carousel = () => {
  const ref = useRef(null);
  const [target, setTarget] = useState();

  const next = () => {
    console.log("here");

    if (target == 1) {
      setTarget(0);
    } else {
      setTarget(1);
    }
    translate(target);
    return;
  };

  const previous = () => {
    console.log("here p");

    if (target == 0) {
      setTarget(1);
    } else {
      setTarget(0);
    }
    translate(target);
    return;
  };

  const translate = (num) => {
    const percent = 50 * num;
    ref.current.style.transform = `translateX(-${percent}%)`;
    // ref.current.style.transform = `translateX(-100%)`;
    console.log(percent);

    return;
  };

  return (
    <div className="relative text-white w-full overflow-hidden">
      <div className="px-10 z-10 absolute top-1/2 -translate-x-2/4 -translate-y-2/4 left-1/2 w-full flex justify-between">
        <img onClick={(e) => previous()} src={back} />
        <img onClick={(e) => next()} className=" rotate-180" src={back} />
      </div>
      <div
        ref={ref}
        className="flex transition-all duration-1000"
        style={{ width: `${200}%` }}
      >
        {/* first */}
        <div className="w-full">
          <div className="h-[450px] max-h-[450px] w-full  ">
            <img
              className=" object-cover object-top h-[450px] max-h-[450px] w-full"
              src={girl}
            />
          </div>

          <div className="absolute flex top-36 left-28 justify-between w-full px-5">
            <div className="flex space-x-10 items-center">
              <div className="flex flex-col space-y-4 ">
                <p className="text-4xl md:text-5xl italic">60%</p>
                <p className="text-3xl md:text-4xl max-w-[200px] font-bold">
                  Sale of the summer collection
                </p>
                <div className="flex space-x-6 items-center">
                  <button className="bg-opink font-bold p-1 md:p-2 px-4 border rounded-lg">
                    Shop Now
                  </button>
                  <div className="flex space-x-2 items-center">
                    <img className="w-[40px] md:w-none" src={play} />
                    <p>Play video</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* second */}
        <div className="w-full">
          <div className="h-[450px] max-h-[450px] w-full ">
            <img
              className=" object-cover object-top h-[450px] max-h-[450px] w-full "
              src={girl}
            />
          </div>

          <div className="absolute flex top-36 left-28 justify-between w-full px-5">
            <div className="flex space-x-10 items-center">
              <div className="flex flex-col space-y-4 ">
                <p className="text-4xl md:text-5xl italic">60%</p>
                <p className="text-3xl md:text-4xl max-w-[200px] font-bold">
                  Sale of the summer collection
                </p>
                <div className="flex space-x-6 items-center">
                  <button className="bg-opink font-bold p-1 md:p-2 px-4 border rounded-lg">
                    Shop Now
                  </button>
                  <div className="flex space-x-2 items-center">
                    <img className="w-[40px] md:w-none" src={play} />
                    <p>Play video</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
