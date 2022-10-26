import React, { useRef, useState } from "react";
import back from "../images/back.png";
import girl2 from "../images/girl2.png";
import girl3 from "../images/girl3.png";

export const Latest = () => {
  const [target, setTarget] = useState(0);

  const ref = useRef(null);
  const next = () => {
    if (target == 1) {
      setTarget(0);
    } else {
      setTarget(1);
    }
    translate(target);
    return;
  };

  const previous = () => {
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

    return;
  };
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
          <div className="w-full flex justify-between space-x-10 items-center px-10">
            <div className="cursor-pointer" onClick={(e) => previous()}>
              <img src={back} />
            </div>
            <div className="relative">
              <div className="w-[500px] max-w-[500px]">
                <img className="" src={girl2} />
              </div>
              <div className="absolute flex flex-col space-y-10 top-16 left-12">
                <p className="text-white text-xl w-[150px]">
                  For all your summer clothing needs
                </p>
                <div className="flex space-x-6 items-center bg-opink px-3 py- text-white rounded-3xl">
                  <p className="text-sm">SEE MORE</p>
                  <img className="rotate-180 cursor-pointer" src={back} />
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="w-[500px] max-w-[500px]">
                <img className="" src={girl3} />
              </div>
              <div className="absolute flex flex-col space-y-10 top-16 left-12">
                <p className="text-white text-xl w-[150px] text-black">
                  For all your summer clothing needs
                </p>
                <div className="cursor-pointer flex space-x-6 items-center bg-opink px-3 py- text-white rounded-3xl">
                  <p className="text-sm">SEE MORE</p>
                  <img className="rotate-180 " src={back} />
                </div>
              </div>
            </div>

            <div onClick={(e) => next()}>
              <img className="cursor-pointer rotate-180" src={back} />
            </div>
          </div>

          {/* second */}
          <div className="w-full flex justify-between space-x-10 items-center px-10">
            <div onClick={(e) => previous()}>
              <img className="cursor-pointer" src={back} />
            </div>
            <div className="relative">
              <div className="w-[500px] max-w-[500px]">
                <img className="" src={girl2} />
              </div>
              <div className="absolute flex flex-col space-y-10 top-16 left-12">
                <p className="text-white text-xl w-[150px]">
                  For all your summer clothing needs
                </p>
                <div className="flex space-x-6 items-center bg-opink px-3 py- text-white rounded-3xl">
                  <p className="text-sm">SEE MORE</p>
                  <img className="rotate-180 cursor-pointer" src={back} />
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="w-[500px] max-w-[500px]">
                <img className="" src={girl3} />
              </div>
              <div className="absolute flex flex-col space-y-10 top-16 left-12">
                <p className="text-white text-xl w-[150px] text-black">
                  For all your summer clothing needs
                </p>
                <div className="flex space-x-6 items-center bg-opink px-3 py- text-white rounded-3xl">
                  <p className="text-sm">SEE MORE</p>
                  <img className="rotate-180 cursor-pointer" src={back} />
                </div>
              </div>
            </div>

            <div onClick={(e) => next()}>
              <img className="rotate-180" src={back} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
