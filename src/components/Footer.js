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
    <div className="flex flex-col items-center text-gray-500">
      <div className="mt-10 bg-ogray flex justify-around p-20 text-xs space-x-20">
        <div className="flex flex-col space-y-10 justify-center">
          <p>
            House My Brand designs clothing for the young, the old & everyone in
            between - but most importantly, for the fashionable
          </p>
          <div className="flex flex-col space-y-2">
            <p className="text-opink">Follow us on</p>
            <div className="flex space-x-4 items-center">
              <img src={facebook} />
              <img src={twitter} />
              <img src={tiktok} />
              <img src={instagram} />
              <img src={youtube} />
            </div>
          </div>
        </div>

        <div className="flex flex-col space-y-4">
          <p className="text-opink text-sm">Public policies</p>
          <div className="flex flex-col space-y-2">
            <p>About</p>
            <p>Privacy policy</p>
            <p>Exchange and Return Policy</p>
            <p>Shipping Policy</p>
            <p>Terms of use</p>
          </div>
        </div>

        <div className="flex flex-col space-y-4">
          <p className="text-opink text-sm">Customer Service Center</p>
          <div className="flex flex-col space-y-2">
            <p>How to buy</p>
            <p>Track your order</p>
            <p>retrieval mechanism</p>
            <p>Shipping information</p>
            <p>Size guide</p>
            <p>Common questions</p>
            <p>Contact Us</p>
          </div>
        </div>

        <div className="flex flex-col space-y-4">
          <p className="text-opink text-sm">Kadinle Family</p>
          <div className="flex flex-col space-y-2">
            <p>Join Us</p>
            <p>Be our agent</p>
            <p>Wholesale</p>
            <p>Authorized Distrubutors</p>
            <p>Our franchise</p>
          </div>
        </div>

        <div className="flex flex-col space-y-10 items-center justify-center">
          <img src={googlePlay} />
          <img src={appStore} />
        </div>
      </div>

      <div className="flex justify-center space-x-4 bg-black w-full p-2">
        <p className="text-gray-500 text-sm">
          <span className="text-opink">STORE</span> © 2022 - DESIGNED BY{" "}
          <span className="text-dblue">WHY NOT!</span> LL RIGHTS RESERVED.
        </p>
      </div>
    </div>
  );
};
