import React from "react";
import { BiStar } from "react-icons/bi";

interface Item {
  id: string;
  image_id: string;
  name: string;
  description: string;
  price: number;
  calorie: number;
  shop_id: string;
  reviews_id: string[];
  rating: number;
}

interface MenuCardProps {
  size?: string;
  item: Item;
}

function MenuCard({ size = "small", item }: MenuCardProps) {
  return (
    <div
      className={`container ${
        size == "small" ? "w-[120px]" : "w-[148px]"
      } rounded-lg bg-[#F3F2F0]`}
    >
      <div className="flex justify-center w-full bg-white">
        <img src={item.image_id && process.env.NEXT_PUBLIC_BACKEND_URL + "/images/" + item?.image_id} className="w-full" alt="" />
      </div>
      <div className="p-2">
        <h3 className="text-xs text-wrap font-bold">{item?.name}</h3>
        <p className="text-[8px]">{item?.calorie} calories</p>
        <div className="flex items-center">
          <BiStar />
          <p className="text-[10px]">{item?.rating}</p>
        </div>
      </div>
    </div>
  );
}

export default MenuCard;
