import React from "react";
import search from "../images/search.png";
import camera from "../images/camera.png";

export const Search = () => {
  return (
    <div className="flex justify-between text-sm border bg-ogray p-2 pt-3 pb-3 rounded-xl w-[200px] md:w-[350px]">
      <div className="flex space-x-2 w-[80%] ">
        <img src={search} />
        <input
          placeholder="Search"
          className="w-full outline-0  bg-ogray montserrat"
        />
      </div>

      <div>
        <img src={camera} />
      </div>
    </div>
  );
};
