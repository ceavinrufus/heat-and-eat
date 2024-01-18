import React from "react";
import { IoMdWallet } from "react-icons/io";
import { FaPlusCircle } from "react-icons/fa";
import { RiHandCoinFill } from "react-icons/ri";

function HeaPayPill() {
  return (
    <div className="rounded-3xl mx-4 shadow-lg flex justify-between items-center p-3 bg-white">
      <div className="flex items-center gap-2">
        <div className="rounded-full bg-[#EAEAEA] p-2">
          <IoMdWallet className="text-lg text-[#991E23]" />
        </div>
        <div className="">
          <p className="font-bold">Rp100.000</p>
          <p className="text-[8px]">100.000 points</p>
        </div>
      </div>
      <div className="flex gap-8 mr-4">
        <div className="flex flex-col items-center">
          <FaPlusCircle className="text-2xl text-[#991E23]" />
          <p className="text-xs">Top up</p>
        </div>
        <div className="flex flex-col items-center">
          <RiHandCoinFill className="text-2xl text-[#991E23]" />
          <p className="text-xs">Point</p>
        </div>
      </div>
    </div>
  );
}

export default HeaPayPill;
