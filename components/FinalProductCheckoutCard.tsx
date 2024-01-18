import React from "react";
import Image from "next/image";
import { FaShop } from "react-icons/fa6";

interface Item {
  id: string;
  image_id: string;
  name: string;
  description: string;
  price: number;
  calorie: number;
  shop_id: string;
  shop_name: string;
  reviews_id: string[];
  rating: number;
}

interface FinalProductCheckoutCardProps {
  item: Item;
  count: number;
}

function FinalProductCheckoutCard({item, count }: FinalProductCheckoutCardProps) {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-2">
        <FaShop />
        <p className="font-bold text-xs">{item.shop_name}</p>
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
          <p className="text-xs font-bold">{item.name}</p>
          <p className="text-[10px]">Notes: Pedes dikit</p>
          <p className="text-xs font-bold">x{count}</p>
        </div>
      </div>
      <p className="text-right text-xs font-bold">{item?.price * count}</p>
    </div>
  );
}

export default FinalProductCheckoutCard;
