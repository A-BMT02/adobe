import React, { useRef, useState } from "react";
import outwear from "../images/outwear.png";
import back from "../images/back.png";
import girl4 from "../images/girl4.png";
import girl5 from "../images/girl5.png";
import circle2 from "../images/circle2.png";

export const Category = () => {
  const [target, setTarget] = useState(0);
  const [target1, setTarget1] = useState(0);
  const ref = useRef(null);
  const ref2 = useRef(null);

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

  const next2 = () => {
    console.log("here");
    if (target1 == 1) {
      setTarget1(0);
    } else {
      setTarget1(1);
    }
    translate2(target1);
    return;
  };

  const previous2 = () => {
    if (target1 == 0) {
      setTarget(1);
    } else {
      setTarget1(0);
    }
    translate2(target1);
    return;
  };

  const translate = (num) => {
    const percent = 50 * num;
    ref.current.style.transform = `translateX(-${percent}%)`;
    return;
  };

  const translate2 = (num) => {
    const percent = 50 * num;
    ref2.current.style.transform = `translateX(-${percent}%)`;
    return;
  };

  return (
    <div className="flex flex-col space-y-6 mt-10 relative">
      <div className="absolute top-0 -left-36">
        <img src={circle2} />
      </div>
      <div className="flex flex-col space-y-6 items-center mt-10 w-full">
        <div className="flex flex-col space-y-1">
          <p className="text-2xl font-bold">Category</p>
          <div className="bg-opink w-[50px] h-[8px] rounded-xl "></div>
        </div>
        <div className="relative w-full ">
          <div className="h-[450px] max-h-[450px] flex justify-center">
            <img
              src={outwear}
              className="h-[450px] max-h-[450px] object-cover w-4/5 "
            />
          </div>
          <div className="absolute top-1/2 -translate-x-2/4 -translate-y-2/4 left-1/2 flex flex-col justify-center items-center space-y-6">
            <p className="text-white text-3xl font-bold">Outwear</p>
            <div className="flex space-x-6 items-center bg-opink px-3 py-2 pl-8 text-white rounded-3xl">
              <p className="text-">SEE MORE</p>
              <img className="rotate-180 w-10" src={back} />
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center space-x-10 items-center px-10">
        <div onClick={(e) => previous()}>
          <img src={back} />
        </div>
        <div className="w-full overflow-hidden">
          <div
            ref={ref}
            className="flex transition-all duration-1000"
            style={{ width: `${200}%` }}
          >
            {/* first */}
            <div className="flex justify-center space-x-10 items-center w-full">
              <div className="flex flex-col space-y-4 border border-opink p-4 rounded-lg">
                <div className="">
                  <img src={girl4} />
                </div>
                <div className="flex justify-between">
                  <div className="flex flex-col space-y-2">
                    <p className="text-tgray">Loose Knit 3/4 Sleeve</p>
                    <div className="flex space-x-2">
                      <p className="text-opink">$119.99</p>
                      <del className="text-tgray">$149.99</del>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col space-y-4 border border-opink p-4 rounded-lg">
                <div className="">
                  <img src={girl4} />
                </div>
                <div className="flex justify-between">
                  <div className="flex flex-col space-y-2">
                    <p className="text-tgray">Loose Knit 3/4 Sleeve</p>
                    <div className="flex space-x-2">
                      <p className="text-opink">$119.99</p>
                      <del className="text-tgray">$149.99</del>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col space-y-4 border border-opink p-4 rounded-lg">
                <div className="">
                  <img src={girl4} />
                </div>
                <div className="flex justify-between">
                  <div className="flex flex-col space-y-2">
                    <p className="text-tgray">Loose Knit 3/4 Sleeve</p>
                    <div className="flex space-x-2">
                      <p className="text-opink">$119.99</p>
                      <del className="text-tgray">$149.99</del>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col space-y-4 border border-opink p-4 rounded-lg">
                <div className="">
                  <img src={girl4} />
                </div>
                <div className="flex justify-between">
                  <div className="flex flex-col space-y-2">
                    <p className="text-tgray">Loose Knit 3/4 Sleeve</p>
                    <div className="flex space-x-2">
                      <p className="text-opink">$119.99</p>
                      <del className="text-tgray">$149.99</del>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col space-y-4 border border-opink p-4 rounded-lg">
                <div className="">
                  <img src={girl4} />
                </div>
                <div className="flex justify-between">
                  <div className="flex flex-col space-y-2">
                    <p className="text-tgray">Loose Knit 3/4 Sleeve</p>
                    <div className="flex space-x-2">
                      <p className="text-opink">$119.99</p>
                      <del className="text-tgray">$149.99</del>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* second */}
            <div className="flex justify-center space-x-10 items-center w-full">
              <div className="flex flex-col space-y-4 border border-opink p-4 rounded-lg">
                <div className="">
                  <img src={girl4} />
                </div>
                <div className="flex justify-between">
                  <div className="flex flex-col space-y-2">
                    <p className="text-tgray">Loose Knit 3/4 Sleeve</p>
                    <div className="flex space-x-2">
                      <p className="text-opink">$119.99</p>
                      <del className="text-tgray">$149.99</del>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col space-y-4 border border-opink p-4 rounded-lg">
                <div className="">
                  <img src={girl4} />
                </div>
                <div className="flex justify-between">
                  <div className="flex flex-col space-y-2">
                    <p className="text-tgray">Loose Knit 3/4 Sleeve</p>
                    <div className="flex space-x-2">
                      <p className="text-opink">$119.99</p>
                      <del className="text-tgray">$149.99</del>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col space-y-4 border border-opink p-4 rounded-lg">
                <div className="">
                  <img src={girl4} />
                </div>
                <div className="flex justify-between">
                  <div className="flex flex-col space-y-2">
                    <p className="text-tgray">Loose Knit 3/4 Sleeve</p>
                    <div className="flex space-x-2">
                      <p className="text-opink">$119.99</p>
                      <del className="text-tgray">$149.99</del>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col space-y-4 border border-opink p-4 rounded-lg">
                <div className="">
                  <img src={girl4} />
                </div>
                <div className="flex justify-between">
                  <div className="flex flex-col space-y-2">
                    <p className="text-tgray">Loose Knit 3/4 Sleeve</p>
                    <div className="flex space-x-2">
                      <p className="text-opink">$119.99</p>
                      <del className="text-tgray">$149.99</del>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col space-y-4 border border-opink p-4 rounded-lg">
                <div className="">
                  <img src={girl4} />
                </div>
                <div className="flex justify-between">
                  <div className="flex flex-col space-y-2">
                    <p className="text-tgray">Loose Knit 3/4 Sleeve</p>
                    <div className="flex space-x-2">
                      <p className="text-opink">$119.99</p>
                      <del className="text-tgray">$149.99</del>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div onClick={(e) => next()}>
          <img className="rotate-180" src={back} />
        </div>
      </div>

      <div className="flex flex-col space-y-10 bg-opink px-5  py-14 items-center">
        <p className="text-white text-3xl self-start ml-20">
          The world's finest models
        </p>

        <div className="flex justify-center space-x-10 items-center px-10 w-full">
          <div onClick={(e) => previous2()}>
            <img src={back} />
          </div>
          <div className="w-full overflow-hidden">
            <div
              ref={ref2}
              className="flex transition-all duration-1000"
              style={{ width: `${200}%` }}
            >
              {/* first */}
              <div className="flex justify-center space-x-10 items-center w-full">
                <div className="flex flex-col space-y-4 bg-white p-4 ">
                  <div className="border border-opink p-4 rounded-lg">
                    <img src={girl5} />
                  </div>
                  <div className="flex justify-between">
                    <div className="flex flex-col space-y-2">
                      <p className="text-tgray">Loose Knit 3/4 Sleeve</p>
                      <div className="flex space-x-2">
                        <p className="text-opink">$119.99</p>
                        <del className="text-tgray">$149.99</del>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col space-y-4 bg-white p-4 ">
                  <div className="border border-opink p-4 rounded-lg">
                    <img src={girl5} />
                  </div>
                  <div className="flex justify-between">
                    <div className="flex flex-col space-y-2">
                      <p className="text-tgray">Loose Knit 3/4 Sleeve</p>
                      <div className="flex space-x-2">
                        <p className="text-opink">$119.99</p>
                        <del className="text-tgray">$149.99</del>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col space-y-4 bg-white p-4 ">
                  <div className="border border-opink p-4 rounded-lg">
                    <img src={girl5} />
                  </div>
                  <div className="flex justify-between">
                    <div className="flex flex-col space-y-2">
                      <p className="text-tgray">Loose Knit 3/4 Sleeve</p>
                      <div className="flex space-x-2">
                        <p className="text-opink">$119.99</p>
                        <del className="text-tgray">$149.99</del>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col space-y-4 bg-white p-4 ">
                  <div className="border border-opink p-4 rounded-lg">
                    <img src={girl5} />
                  </div>
                  <div className="flex justify-between">
                    <div className="flex flex-col space-y-2">
                      <p className="text-tgray">Loose Knit 3/4 Sleeve</p>
                      <div className="flex space-x-2">
                        <p className="text-opink">$119.99</p>
                        <del className="text-tgray">$149.99</del>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col space-y-4 bg-white p-4 ">
                  <div className="border border-opink p-4 rounded-lg">
                    <img src={girl5} />
                  </div>
                  <div className="flex justify-between">
                    <div className="flex flex-col space-y-2">
                      <p className="text-tgray">Loose Knit 3/4 Sleeve</p>
                      <div className="flex space-x-2">
                        <p className="text-opink">$119.99</p>
                        <del className="text-tgray">$149.99</del>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* second */}
              <div className="flex justify-center space-x-10 items-center w-full">
                <div className="flex flex-col space-y-4 bg-white p-4 ">
                  <div className="border border-opink p-4 rounded-lg">
                    <img src={girl5} />
                  </div>
                  <div className="flex justify-between">
                    <div className="flex flex-col space-y-2">
                      <p className="text-tgray">Loose Knit 3/4 Sleeve</p>
                      <div className="flex space-x-2">
                        <p className="text-opink">$119.99</p>
                        <del className="text-tgray">$149.99</del>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col space-y-4 bg-white p-4 ">
                  <div className="border border-opink p-4 rounded-lg">
                    <img src={girl5} />
                  </div>
                  <div className="flex justify-between">
                    <div className="flex flex-col space-y-2">
                      <p className="text-tgray">Loose Knit 3/4 Sleeve</p>
                      <div className="flex space-x-2">
                        <p className="text-opink">$119.99</p>
                        <del className="text-tgray">$149.99</del>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col space-y-4 bg-white p-4 ">
                  <div className="border border-opink p-4 rounded-lg">
                    <img src={girl5} />
                  </div>
                  <div className="flex justify-between">
                    <div className="flex flex-col space-y-2">
                      <p className="text-tgray">Loose Knit 3/4 Sleeve</p>
                      <div className="flex space-x-2">
                        <p className="text-opink">$119.99</p>
                        <del className="text-tgray">$149.99</del>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col space-y-4 bg-white p-4 ">
                  <div className="border border-opink p-4 rounded-lg">
                    <img src={girl5} />
                  </div>
                  <div className="flex justify-between">
                    <div className="flex flex-col space-y-2">
                      <p className="text-tgray">Loose Knit 3/4 Sleeve</p>
                      <div className="flex space-x-2">
                        <p className="text-opink">$119.99</p>
                        <del className="text-tgray">$149.99</del>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col space-y-4 bg-white p-4 ">
                  <div className="border border-opink p-4 rounded-lg">
                    <img src={girl5} />
                  </div>
                  <div className="flex justify-between">
                    <div className="flex flex-col space-y-2">
                      <p className="text-tgray">Loose Knit 3/4 Sleeve</p>
                      <div className="flex space-x-2">
                        <p className="text-opink">$119.99</p>
                        <del className="text-tgray">$149.99</del>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* second */}
            </div>
          </div>

          <div onClick={(e) => next2()}>
            <img className="rotate-180" src={back} />
          </div>
        </div>
      </div>
    </div>
  );
};
