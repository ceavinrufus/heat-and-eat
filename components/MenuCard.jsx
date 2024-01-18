import React, { useState, useEffect, useRef } from "react";
import { BiStar } from "react-icons/bi";

function MenuCard({ size = "small" }) {
  return (
    <div
      className={`container ${
        size == "small" ? "w-[120px]" : "w-[148px]"
      } rounded-lg bg-[#F3F2F0]`}
    >
      <div className="flex justify-center w-full bg-white">
        <img src="/salman.png" className="w-full" alt="" />
      </div>
      <div className="p-2">
        <h3 className="text-xs text-wrap font-bold">Salmon with Fried Rice</h3>
        <p className="text-[8px]">496 calories</p>
        <div className="flex items-center">
          <BiStar />
          <p className="text-[10px]">5.0</p>
        </div>
      </div>
    </div>
  );
}

export default MenuCard;
