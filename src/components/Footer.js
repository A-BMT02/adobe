import React from "react";
import facebook from "../images/facebook.png";
import twitter from "../images/twitter.png";
import tiktok from "../images/tiktok.png";
import instagram from "../images/instagram.png";
import youtube from "../images/youtube.png";
import googlePlay from "../images/googlePlay.png";
import appStore from "../images/appStore.png";

export const Footer = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="bg-fgray flex flex-col items-center lg:items-start w-full md:flex-row justify-around  md:p-5 lg:p-20 text-xs space-x-0 md:space-x-4 lg:space-x-20 space-y-6 md:space-y-0  ">
        <div className="hidden md:flex flex-col space-y-10 justify-center">
          <p className="text-[#808080]">
            House My Brand designs clothing for the young, the old & everyone in
            between - but most importantly, for the fashionable
          </p>
          <div className="flex flex-col space-y-2">
            <p className="text-opink">Follow us on</p>
            <div className="flex space-x-4 items-center">
              <img className="cursor-pointer" src={facebook} />
              <img className="cursor-pointer" src={twitter} />
              <img className="cursor-pointer" src={tiktok} />
              <img className="cursor-pointer" src={instagram} />
              <img className="cursor-pointer" src={youtube} />
            </div>
          </div>
        </div>

        <div className="flex flex-col space-y-4 w-[150px] md:w-none">
          <p className="text-opink text-sm">Public policies</p>
          <div className="flex flex-col space-y-2">
            <p className="cursor-pointer hover:text-opink hover:text-opink">
              About
            </p>
            <p className="cursor-pointer hover:text-opink">Privacy policy</p>
            <p className="cursor-pointer hover:text-opink">
              Exchange and Return Policy
            </p>
            <p className="cursor-pointer hover:text-opink">Shipping Policy</p>
            <p className="cursor-pointer hover:text-opink">Terms of use</p>
          </div>
        </div>

        <div className="flex flex-col space-y-4 w-[150px] md:w-none">
          <p className="text-opink text-sm">Customer Service Center</p>
          <div className="flex flex-col space-y-2">
            <p className="cursor-pointer hover:text-opink">How to buy</p>
            <p className="cursor-pointer hover:text-opink">Track your order</p>
            <p className="cursor-pointer hover:text-opink">
              Retrieval mechanism
            </p>
            <p className="cursor-pointer hover:text-opink">
              Shipping information
            </p>
            <p className="cursor-pointer hover:text-opink">Size guide</p>
            <p className="cursor-pointer hover:text-opink">Common questions</p>
            <p className="cursor-pointer hover:text-opink">Contact Us</p>
          </div>
        </div>

        <div className="flex flex-col space-y-4 w-[150px] md:w-none">
          <p className="text-opink text-sm">Kadinle Family</p>
          <div className="flex flex-col space-y-2">
            <p className="cursor-pointer hover:text-opink">Join Us</p>
            <p className="cursor-pointer hover:text-opink">Be our agent</p>
            <p className="cursor-pointer hover:text-opink">Wholesale</p>
            <p className="cursor-pointer hover:text-opink">
              Authorized Distrubutors
            </p>
            <p className="cursor-pointer hover:text-opink">Our franchise</p>
          </div>
        </div>

        <div className="flex flex-row md:flex-col space-y-0 space-x-3 md:space-x-0 md:space-y-10 items-center justify-center pb-6 md:p-0">
          <img
            className="w-[120px] md:w-none cursor-pointer"
            src={googlePlay}
          />
          <img
            className="w-[120px] md:w-none hover:text-opink cursor-pointer"
            src={appStore}
          />
        </div>
      </div>

      <div className="hidden md:flex justify-center space-x-4 bg-black w-full p-2">
        <p className="text-tgray text-xs md:text-sm">
          <span className="text-opink">STORE</span> ©{" "}
          <span className="text-white">2022</span> - DESIGNED BY{" "}
          <span className="text-dblue">WHY NOT!</span> LL RIGHTS RESERVED.
        </p>
      </div>
      <div className="block md:hidden flex flex-col items-center space-y-2 bg-black w-full p-2">
        <p className="text-tgray text-xs md:text-sm ">
          <span className="text-opink">STORE</span> ©{" "}
          <span className="text-white">2022</span>
        </p>
        <p className="text-tgray text-xs md:text-sm ">
          DESIGNED BY <span className="text-dblue">WHY NOT!</span> LL RIGHTS
          RESERVED.
        </p>
      </div>
    </div>
  );
};
