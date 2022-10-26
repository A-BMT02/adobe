import React from "react";
import dot from "../images/dot.png";
import delivery from "../images/delivery.png";
import payment from "../images/payment.png";
import sale from "../images/sale.png";

export const Navbar = () => {
  return (
    <div className="hidden lg:flex justify-around bg-black text-white pt-2 pb-2">
      <div className="flex items-center">
        <p>Download the app and get a 15% discount.</p>
      </div>

      <div className="flex space-x-3 items-center">
        <img src={dot} />
        <img src={sale} />

        <p>Quick sale</p>
      </div>

      <div className="flex space-x-3 items-center">
        <img src={dot} />
        <img src={delivery} />
        <p>Free Shipping</p>
      </div>

      <div className="flex space-x-3 items-center">
        <img src={dot} />
        <img src={payment} />
        <p>You can pay upon receipt</p>
      </div>
    </div>
  );
};
