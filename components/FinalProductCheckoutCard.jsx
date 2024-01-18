import React from "react";
import Image from "next/image";
import { FaShop } from "react-icons/fa6";

function FinalProductCheckoutCard() {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-2">
        <FaShop />
        <p className="font-bold text-xs">Toko Suka Majumundur</p>
      </div>
      <div className="flex items-center w-full gap-2">
        <div className="relative">
          <Image
            style={{ objectFit: "contain" }}
            width={60}
            height={60}
            src="/salman.png"
            alt=""
            className=""
          />
        </div>
        <div className="">
          <p className="text-xs font-bold">Salmon With Fried Rice</p>
          <p className="text-[10px]">Notes: Pedes dikit</p>
          <p className="text-xs font-bold">x1</p>
        </div>
      </div>
      <p className="text-right text-xs font-bold">Rp50.000</p>
    </div>
  );
}

export default FinalProductCheckoutCard;
