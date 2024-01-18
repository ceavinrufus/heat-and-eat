import React from "react";
import { BiStar, BiSolidStar } from "react-icons/bi";

function ReviewCard() {
  return (
    <div>
      <h1 className="font-bold">Tabina</h1>
      <div className="flex text-[#991E23]">
        <BiSolidStar />
        <BiSolidStar />
        <BiSolidStar />
        <BiSolidStar />
        <BiStar />
      </div>
      <p>Mantap poll!!</p>
    </div>
  );
}

export default ReviewCard;
