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

function ProductCheckoutCard() {
  const [value, setValue] = useState(1);

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
        <Image
          style={{ objectFit: "contain" }}
          width={60}
          height={60}
          src="/salman.png"
          alt=""
          className=""
        />
      </div>
      <div className="w-1/2">
        <p className="text-xs">Salmon With Fried Rice</p>
        <p className="text-[8px]">Calorie: 300 kcal</p>
        <p className="text-xs font-bold">Rp50.000</p>
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
