import React, { useState, useEffect, useRef } from "react";
import { CiStar } from "react-icons/ci";

function MenuCard() {
  return (
    <div className={`container w-[120px] rounded-lg shadow-2xl bg-[#F3F2F0]`}>
      <div className="flex justify-center bg-white">
        <img src="/salman.png" alt="" />
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
