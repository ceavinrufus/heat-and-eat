import React, { useState } from "react";
import Image from "next/image";

const buttonStyle = {
  padding: "0 0.5rem",
  cursor: "pointer",
  borderRadius: "4px",
  border: "1px solid #ccc",
  background: "#fff",
  outline: "none",
};

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

interface ProductCheckoutCardProps {
  item: Item;
  count: number;
}

function ProductCheckoutCard({item, count }: ProductCheckoutCardProps) {
  const [value, setValue] = useState(count);

  const handleIncrement = () => {
    const newValue = Math.min(value + 1, 100);
    setValue(newValue);
    setValue(newValue);
  };

  const handleDecrement = () => {
    const newValue = Math.max(value - 1, 1);
    setValue(newValue);
    setValue(newValue);
  };
  const isIncrementDisabled = value === 100;
  const isDecrementDisabled = value === 1;

  return (
    <div className="flex justify-between items-center w-full gap-2">
      <div className="relative w-1/4">
        <img
          src={item?.image_id && process.env.NEXT_PUBLIC_BACKEND_URL + "/images/" + item?.image_id}
          style={{ objectFit: "contain" }}
          width={60}
          height={60}
          alt=""
          className=""
        />
      </div>
      <div className="w-1/2">
        <p className="text-xs">{item?.name}</p>
        <p className="text-[8px]">Calorie: {item?.calorie} cal</p>
        <p className="text-xs font-bold">{item?.price}</p>
      </div>
      <div className="w-1/4">
        <div className="flex items-center">
          <button
            style={buttonStyle}
            onClick={handleDecrement}
            disabled={isDecrementDisabled}
          >
            -
          </button>
          <input className="w-full text-center" type="number" value={value} readOnly/>
          <button
            style={buttonStyle}
            onClick={handleIncrement}
            disabled={isIncrementDisabled}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCheckoutCard;
