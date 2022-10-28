import React, { useRef, useState, useEffect } from "react";
import outwear from "../images/outwear.png";
import back from "../images/back.png";
import girl4 from "../images/girl4.png";
import girl5 from "../images/girl5.png";
import circle2 from "../images/circle2.png";
import star from "../images/star.svg";

export const Category = () => {
  const [target, setTarget] = useState(0);
  const [target1, setTarget1] = useState(0);
  const [data, setData] = useState(["1", "2", "3", "4", "5"]);
  const ref = useRef(null);
  const ref2 = useRef(null);

  const next = () => {
    if (target == 4) {
      setTarget(0);
    } else {
      setTarget(target + 1);
    }
    return;
  };

  const previous = () => {
    if (target == 0) {
      setTarget(4);
    } else {
      setTarget(target - 1);
    }
    return;
  };

  useEffect(() => {
    const percent = 20 * target;
    ref.current.style.transform = `translateX(-${percent}%)`;
  }, [target]);

  const next2 = () => {
    if (target1 == 1) {
      setTarget1(0);
    } else {
      setTarget1(1);
    }
    return;
  };

  const previous2 = () => {
    if (target1 == 0) {
      setTarget1(1);
    } else {
      setTarget1(0);
    }
    return;
  };

  useEffect(() => {
    const percent = 50 * target1;
    ref2.current.style.transform = `translateX(-${percent}%)`;
  }, [target1]);

  return (
    <div className="flex flex-col space-y-6 mt-10 relative">
      <div className="absolute top-0 -left-36">
        <img
          className="w-200px max-w-[200px] md:w-none md:max-w-none"
          src={circle2}
        />
      </div>
      <div className="flex flex-col space-y-6 items-center mt-10 w-full">
        <div className="flex flex-col space-y-1">
          <p className="text-2xl font-bold">Category</p>
          <div className="bg-opink w-[70px] h-[8px] rounded-xl "></div>
        </div>
        <div className="relative w-full ">
          <div className="h-[200px] md:h-[300px] md:max-h-[300px] max-h-[200px] md:h-[350px] md:max-h-[350px] flex justify-center">
            <img
              src={outwear}
              className=" rounded-2xl h-[200px] md:h-[350px] md:max-h-[350px] max-h-[200px] md:h-[350px] md:max-h-[350px] object-cover w-4/5 "
            />
          </div>
          <div className="absolute top-1/2 -translate-x-2/4 -translate-y-2/4 left-1/2 flex flex-col justify-center items-center space-y-4 md:space-y-6">
            <p className="text-white text-xl md:text-2xl font-bold">Outwear</p>
            <div className="cursor-pointer flex space-x-4 md:space-x-6 items-center bg-opink px-2 md:px-3  md:py-2 pl-2 md:pl-8 text-white rounded-3xl">
              <p className="text-sm">SEE MORE</p>
              <img className="cursor-pointer rotate-180 w-10" src={back} />
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center space-x-4 items-center px-5 md:px-5">
        <div onClick={(e) => previous()}>
          <img className="cursor-pointer w-[25px] md:w-none" src={back} />
        </div>
        <div className="w-full overflow-hidden">
          <div
            ref={ref}
            className="flex transition-all duration-1000"
            style={{ width: `${500}%` }}
          >
            {/* first */}

            {data.map((item) => (
              <div className="flex justify-center space-x-4  items-center w-full">
                <div className="hidden md:flex flex-col space-y-4 border border-opink p-2 md:p-4 rounded-lg">
                  <div className="">
                    <img className="" src={girl4} />
                  </div>
                  <div className="flex justify-between items-center space-x-2">
                    <div className="flex flex-col space-y-2">
                      <p className="font-bold text-sm">Loose Knit 3/4 Sleeve</p>
                      <div className="flex space-x-2 items-center">
                        <p className="text-xl font-bold">$119.99</p>
                        <del className="text-tgray">$149.99</del>
                      </div>
                    </div>
                    <div className="flex space-x-2 text-white items-center px-2  md:px-4 py-1 bg-opink items-center rounded-lg justify-center">
                      <img className="w-4" src={star} />
                      <p>4.8</p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col space-y-4 border border-opink p-2 md:p-4 rounded-lg">
                  <div className="">
                    <img src={girl4} />
                  </div>
                  <div className="flex justify-between items-center space-x-2">
                    <div className="flex flex-col space-y-2">
                      <p className="font-bold text-sm">Loose Knit 3/4 Sleeve</p>
                      <div className="flex space-x-2 items-center">
                        <p className="text-xl font-bold">$119.99</p>
                        <del className="text-tgray">$149.99</del>
                      </div>
                    </div>
                    <div className="flex space-x-2 text-white items-center px-2  md:px-4 py-1 bg-opink items-center rounded-lg justify-center">
                      <img className="w-4" src={star} />
                      <p>4.8</p>
                    </div>
                  </div>
                </div>

                <div className="hidden lg:flex flex-col space-y-4 border border-opink p-4 rounded-lg">
                  <div className="">
                    <img src={girl4} />
                  </div>
                  <div className="flex justify-between items-center space-x-2">
                    <div className="flex flex-col space-y-2">
                      <p className="font-bold text-sm">Loose Knit 3/4 Sleeve</p>
                      <div className="flex space-x-2 items-center">
                        <p className="text-xl font-bold">$119.99</p>
                        <del className="text-tgray">$149.99</del>
                      </div>
                    </div>
                    <div className="flex space-x-2 text-white items-center px-2  md:px-4 py-1 bg-opink items-center rounded-lg justify-center">
                      <img className="w-4" src={star} />
                      <p>4.8</p>
                    </div>
                  </div>
                </div>

                <div className="hidden xl:flex flex-col space-y-4 border border-opink p-4 rounded-lg">
                  <div className="">
                    <img src={girl4} />
                  </div>
                  <div className="flex justify-between items-center space-x-2">
                    <div className="flex flex-col space-y-2">
                      <p className="font-bold text-sm">Loose Knit 3/4 Sleeve</p>
                      <div className="flex space-x-2 items-center">
                        <p className="text-xl font-bold">$119.99</p>
                        <del className="text-tgray">$149.99</del>
                      </div>
                    </div>
                    <div className="flex space-x-2 text-white items-center px-2  md:px-4 py-1 bg-opink items-center rounded-lg justify-center">
                      <img className="w-4" src={star} />
                      <p>4.8</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* second */}
          </div>
          <div className="flex justify-center items-center space-x-2 mt-6">
            <div
              onClick={(e) => setTarget(0)}
              className={
                target == 0
                  ? "h-2 w-10 bg-opink rounded-xl cursor-pointer"
                  : "h-2 w-2 bg-lpink rounded-xl cursor-pointer"
              }
            ></div>
            <div
              onClick={(e) => setTarget(1)}
              className={
                target == 1
                  ? "h-2 w-10 bg-opink rounded-xl cursor-pointer"
                  : "h-2 w-2 bg-lpink rounded-xl cursor-pointer"
              }
            ></div>{" "}
            <div
              onClick={(e) => setTarget(2)}
              className={
                target == 2
                  ? "h-2 w-10 bg-opink rounded-xl cursor-pointer"
                  : "h-2 w-2 bg-lpink rounded-xl cursor-pointer"
              }
            ></div>{" "}
            <div
              onClick={(e) => setTarget(3)}
              className={
                target == 3
                  ? "h-2 w-10 bg-opink rounded-xl cursor-pointer"
                  : "h-2 w-2 bg-lpink rounded-xl cursor-pointer"
              }
            ></div>{" "}
            <div
              onClick={(e) => setTarget(4)}
              className={
                target == 4
                  ? "h-2 w-10 bg-opink rounded-xl cursor-pointer"
                  : "h-2 w-2 bg-lpink rounded-xl cursor-pointer"
              }
            ></div>
          </div>
        </div>

        <div onClick={(e) => next()}>
          <img
            className="rotate-180 cursor-pointer w-[25px] md:w-none"
            src={back}
          />
        </div>
      </div>

      <div className="flex flex-col space-y-10 bg-opink px-5  py-14 items-center">
        <p className="text-white text-xl md:text-2xl  text-center md:self-start md:ml-20">
          The world's finest models
        </p>

        <div className="flex justify-center space-x-4 items-center  md:px-5 w-full">
          <div
            className="cursor-pointer hover:border hover:border-white rounded-full"
            onClick={(e) => previous2()}
          >
            <img src={back} />
          </div>
          <div className="w-full overflow-hidden">
            <div
              ref={ref2}
              className="flex transition-all duration-1000"
              style={{ width: `${200}%` }}
            >
              {/* first */}
              <div className="flex justify-center space-x-4 items-center w-full">
                <div className="flex flex-col space-y-4 bg-white p-4 ">
                  <div className="border border-opink p-4 rounded-lg">
                    <img src={girl5} />
                  </div>
                  <div className="flex justify-between items-center space-x-2">
                    <div className="flex flex-col space-y-2">
                      <p className="font-bold text-sm">Loose Knit 3/4 Sleeve</p>
                      <div className="flex space-x-2 items-center">
                        <p className="text-xl font-bold">$119.99</p>
                        <del className="text-tgray">$149.99</del>
                      </div>
                    </div>
                    <div className="flex space-x-2 text-white items-center px-2  md:px-4 py-1 bg-opink items-center rounded-lg justify-center">
                      <img className="w-4" src={star} />
                      <p>4.8</p>
                    </div>
                  </div>
                </div>

                <div className="hidden md:flex flex-col space-y-4 bg-white p-4 ">
                  <div className="border border-opink p-4 rounded-lg">
                    <img src={girl5} />
                  </div>
                  <div className="flex justify-between items-center space-x-2">
                    <div className="flex flex-col space-y-2">
                      <p className="font-bold text-sm">Loose Knit 3/4 Sleeve</p>
                      <div className="flex space-x-2 items-center">
                        <p className="text-xl font-bold">$119.99</p>
                        <del className="text-tgray">$149.99</del>
                      </div>
                    </div>
                    <div className="flex space-x-2 text-white items-center px-2  md:px-4 py-1 bg-opink items-center rounded-lg justify-center">
                      <img className="w-4" src={star} />
                      <p>4.8</p>
                    </div>
                  </div>
                </div>

                <div className="hidden 2xl:flex flex-col space-y-4 bg-white p-4 ">
                  <div className="border border-opink p-4 rounded-lg">
                    <img src={girl5} />
                  </div>
                  <div className="flex justify-between items-center space-x-2">
                    <div className="flex flex-col space-y-2">
                      <p className="font-bold text-sm">Loose Knit 3/4 Sleeve</p>
                      <div className="flex space-x-2 items-center">
                        <p className="text-xl font-bold">$119.99</p>
                        <del className="text-tgray">$149.99</del>
                      </div>
                    </div>
                    <div className="flex space-x-2 text-white items-center px-2  md:px-4 py-1 bg-opink items-center rounded-lg justify-center">
                      <img className="w-4" src={star} />
                      <p>4.8</p>
                    </div>
                  </div>
                </div>

                <div className="hidden lg:flex flex-col space-y-4 bg-white p-4 ">
                  <div className="border border-opink p-4 rounded-lg">
                    <img src={girl5} />
                  </div>
                  <div className="flex justify-between items-center space-x-2">
                    <div className="flex flex-col space-y-2">
                      <p className="font-bold text-sm">Loose Knit 3/4 Sleeve</p>
                      <div className="flex space-x-2 items-center">
                        <p className="text-xl font-bold">$119.99</p>
                        <del className="text-tgray">$149.99</del>
                      </div>
                    </div>
                    <div className="flex space-x-2 text-white items-center px-2  md:px-4 py-1 bg-opink items-center rounded-lg justify-center">
                      <img className="w-4" src={star} />
                      <p>4.8</p>
                    </div>
                  </div>
                </div>

                <div className="hidden xl:flex flex-col space-y-4 bg-white p-4 ">
                  <div className="border border-opink p-4 rounded-lg">
                    <img src={girl5} />
                  </div>
                  <div className="flex justify-between items-center space-x-2">
                    <div className="flex flex-col space-y-2">
                      <p className="font-bold text-sm">Loose Knit 3/4 Sleeve</p>
                      <div className="flex space-x-2 items-center">
                        <p className="text-xl font-bold">$119.99</p>
                        <del className="text-tgray">$149.99</del>
                      </div>
                    </div>
                    <div className="flex space-x-2 text-white items-center px-2  md:px-4 py-1 bg-opink items-center rounded-lg justify-center">
                      <img className="w-4" src={star} />
                      <p>4.8</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* second */}
              <div className="flex justify-center space-x-4 items-center w-full">
                <div className="flex flex-col space-y-4 bg-white p-4 ">
                  <div className="border border-opink p-4 rounded-lg">
                    <img src={girl5} />
                  </div>
                  <div className="flex justify-between items-center space-x-2">
                    <div className="flex flex-col space-y-2">
                      <p className="font-bold text-sm">Loose Knit 3/4 Sleeve</p>
                      <div className="flex space-x-2 items-center">
                        <p className="text-xl font-bold">$119.99</p>
                        <del className="text-tgray">$149.99</del>
                      </div>
                    </div>
                    <div className="flex space-x-2 text-white items-center px-2  md:px-4 py-1 bg-opink items-center rounded-lg justify-center">
                      <img className="w-4" src={star} />
                      <p>4.8</p>
                    </div>
                  </div>
                </div>

                <div className="hidden md:flex flex-col space-y-4 bg-white p-4 ">
                  <div className="border border-opink p-4 rounded-lg">
                    <img src={girl5} />
                  </div>
                  <div className="flex justify-between items-center space-x-2">
                    <div className="flex flex-col space-y-2">
                      <p className="font-bold text-sm">Loose Knit 3/4 Sleeve</p>
                      <div className="flex space-x-2 items-center">
                        <p className="text-xl font-bold">$119.99</p>
                        <del className="text-tgray">$149.99</del>
                      </div>
                    </div>
                    <div className="flex space-x-2 text-white items-center px-2  md:px-4 py-1 bg-opink items-center rounded-lg justify-center">
                      <img className="w-4" src={star} />
                      <p>4.8</p>
                    </div>
                  </div>
                </div>

                <div className="hidden 2xl:flex flex-col space-y-4 bg-white p-4 ">
                  <div className="border border-opink p-4 rounded-lg">
                    <img src={girl5} />
                  </div>
                  <div className="flex justify-between items-center space-x-2">
                    <div className="flex flex-col space-y-2">
                      <p className="font-bold text-sm">Loose Knit 3/4 Sleeve</p>
                      <div className="flex space-x-2 items-center">
                        <p className="text-xl font-bold">$119.99</p>
                        <del className="text-tgray">$149.99</del>
                      </div>
                    </div>
                    <div className="flex space-x-2 text-white items-center px-2  md:px-4 py-1 bg-opink items-center rounded-lg justify-center">
                      <img className="w-4" src={star} />
                      <p>4.8</p>
                    </div>
                  </div>
                </div>

                <div className="hidden lg:flex flex-col space-y-4 bg-white p-4 ">
                  <div className="border border-opink p-4 rounded-lg">
                    <img src={girl5} />
                  </div>
                  <div className="flex justify-between items-center space-x-2">
                    <div className="flex flex-col space-y-2">
                      <p className="font-bold text-sm">Loose Knit 3/4 Sleeve</p>
                      <div className="flex space-x-2 items-center">
                        <p className="text-xl font-bold">$119.99</p>
                        <del className="text-tgray">$149.99</del>
                      </div>
                    </div>
                    <div className="flex space-x-2 text-white items-center px-2  md:px-4 py-1 bg-opink items-center rounded-lg justify-center">
                      <img className="w-4" src={star} />
                      <p>4.8</p>
                    </div>
                  </div>
                </div>

                <div className="hidden xl:flex flex-col space-y-4 bg-white p-4 ">
                  <div className="border border-opink p-4 rounded-lg">
                    <img src={girl5} />
                  </div>
                  <div className="flex justify-between items-center space-x-2">
                    <div className="flex flex-col space-y-2">
                      <p className="font-bold text-sm">Loose Knit 3/4 Sleeve</p>
                      <div className="flex space-x-2 items-center">
                        <p className="text-xl font-bold">$119.99</p>
                        <del className="text-tgray">$149.99</del>
                      </div>
                    </div>
                    <div className="flex space-x-2 text-white items-center px-2  md:px-4 py-1 bg-opink items-center rounded-lg justify-center">
                      <img className="w-4" src={star} />
                      <p>4.8</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* second */}
            </div>
          </div>
          <div
            className="cursor-pointer rotate-180 hover:border hover:border-white rounded-full"
            onClick={(e) => next2()}
          >
            <img src={back} />
          </div>
        </div>
      </div>
    </div>
  );
};
