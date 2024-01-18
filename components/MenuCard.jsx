import React, { useState, useEffect, useRef } from "react";
import { CiStar } from "react-icons/ci";

function MenuCard({ width = "120px" }) {
  return (
    <div className={`container w-[${width}] rounded-lg bg-[#F3F2F0]`}>
      <div className="flex justify-center w-full bg-white">
        <img src="/salman.png" className="w-full" alt="" />
      </div>
      <div className="p-2">
        <h3 className="text-xs text-wrap font-bold">Salmon with Fried Rice</h3>
        <p className="text-[8px]">496 calories</p>
        <div className="flex items-center">
          <CiStar />
          <p className="text-[10px]">5.0</p>
        </div>
      </div>
    </div>
  );
}

export default MenuCard;
