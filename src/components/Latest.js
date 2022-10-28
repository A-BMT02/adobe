import React, { useRef, useState, useEffect } from "react";
import back from "../images/back.png";
import girl2 from "../images/girl2.png";
import girl3 from "../images/girl3.png";
import arrow from "../images/whiteArrow.png";

export const Latest = () => {
  const [target, setTarget] = useState(0);

  const ref = useRef(null);
  const next = () => {
    if (target == 1) {
      setTarget(0);
    } else {
      setTarget(1);
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
    <div className="flex flex-col space-y-6 items-center mt-10">
      <div className="flex flex-col space-y-1">
        <p className="text-2xl font-bold">Latest</p>
        <div className="bg-opink w-[50px] h-[8px] rounded-xl "></div>
      </div>

      <div className="w-full overflow-hidden">
        <div
          ref={ref}
          className="flex transition-all duration-1000"
          style={{ width: `${200}%` }}
        >
          {/* first */}
          <div className="w-full flex justify-between space-x-2 md:space-x-10 items-center px-2 md:px-10">
            <div
              onClick={(e) => previous()}
              className="cursor-pointer rounded-full bg-opink w-[30px] h-[30px] md:w-[48px] md:h-[48px] flex items-center justify-center hover:border hover:border-white"
            >
              <img className="w-2 md:w-none" src={arrow} />
            </div>
            <div className="relative w-4/5 max-w-4/5 md:w-[500px] md:max-w-[500px]">
              <div className=" ">
                <img className="" src={girl2} />
              </div>
              <div className="absolute flex flex-col space-y-4 md:space-y-10 top-1/2 -translate-x-2/4 -translate-y-2/4 left-28  ">
                <p className="text-white text-sm md:text-xl w-[150px] font-light md:leading-10">
                  For all your summer clothing needs
                </p>
                <div className="flex space-x-2 px-2 w-fit md:w-none justify-center md:justify-start md:space-x-6 items-center bg-opink  md:px-3  text-white rounded-3xl">
                  <p className="text-xs md:text-sm">SEE MORE</p>
                  <img
                    className="rotate-180 cursor-pointer w-[20px] md:w-[30px] md:w-none"
                    src={back}
                  />
                </div>
              </div>
            </div>

            <div className="hidden xl:block relative">
              <div className="w-[500px] max-w-[500px]">
                <img className="" src={girl3} />
              </div>
              <div className="absolute flex flex-col space-y-10 top-16 left-12">
                <p className="text-white text-xl w-[150px] text-black font-light md:leading-10">
                  For all your summer clothing needs
                </p>
                <div className="cursor-pointer flex space-x-6 items-center bg-opink px-3 py- text-white rounded-3xl">
                  <p className="text-sm">SEE MORE</p>
                  <img className="rotate-180 " src={back} />
                </div>
              </div>
            </div>

            <div
              onClick={(e) => next()}
              className=" cursor-pointer rotate-180 rounded-full bg-opink w-[30px] h-[30px] md:w-[48px] md:h-[48px] flex items-center justify-center hover:border hover:border-white"
            >
              <img className="w-2 md:w-none" src={arrow} />
            </div>
          </div>

          {/* second */}
          <div className="w-full flex justify-between space-x-4 md:space-x-10 items-center px-5 md:px-10">
            <div
              onClick={(e) => previous()}
              className="cursor-pointer rounded-full bg-opink w-[30px] h-[30px] md:w-[48px] md:h-[48px] flex items-center justify-center hover:border hover:border-white"
            >
              <img className="w-2 md:w-none" src={arrow} />
            </div>
            <div className="hidden xl:block relative">
              <div className="w-[500px] max-w-[500px]">
                <img className="" src={girl2} />
              </div>
              <div className="absolute flex flex-col space-y-10 top-16 left-12">
                <p className="text-white text-xl w-[150px] font-light md:leading-10">
                  For all your summer clothing needs
                </p>
                <div className="flex space-x-6 items-center bg-opink px-3 py- text-white rounded-3xl">
                  <p className="text-sm">SEE MORE</p>
                  <img className="rotate-180 cursor-pointer" src={back} />
                </div>
              </div>
            </div>

            <div className="relative w-4/5 max-w-4/5 md:w-[500px] md:max-w-[500px]">
              <div className=" ">
                <img className="" src={girl3} />
              </div>
              <div className="absolute flex flex-col space-y-4 md:space-y-10 top-1/2 -translate-x-2/4 -translate-y-2/4 left-28">
                <p className="text-white text-md md:text-xl w-[150px] font-light md:leading-10">
                  For all your summer clothing needs
                </p>
                <div className="flex space-x-2 justify-center md:justify-start md:space-x-6 items-center bg-opink px-3  text-white rounded-3xl">
                  <p className="text-xs md:text-sm">SEE MORE</p>
                  <img
                    className="rotate-180 cursor-pointer w-[30px] md:w-none"
                    src={back}
                  />
                </div>
              </div>
            </div>

            <div
              onClick={(e) => next()}
              className=" cursor-pointer rotate-180 rounded-full bg-opink w-[30px] h-[30px] md:w-[48px] md:h-[48px] flex items-center justify-center hover:border hover:border-white"
            >
              <img className="w-2 md:w-none" src={arrow} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
