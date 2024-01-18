import React, { useState } from "react";

function CheckoutBar() {
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
    <div className="flex justify-around items-center bg-white h-[80px] px-4 gap-4">
      <div className="w-2/5">
        <div className="flex items-center">
          <button
            style={{
              padding: "0.5rem",
              fontSize: "1rem",
              cursor: "pointer",
              borderRadius: "4px",
              border: "1px solid #ccc",
              background: "#fff",
              outline: "none",
            }}
            onClick={handleDecrement}
            disabled={isDecrementDisabled}
          >
            -
          </button>
          <input className="w-full text-center" type="number" value={value} />
          <button
            style={{
              padding: "0.5rem",
              fontSize: "1rem",
              cursor: "pointer",
              borderRadius: "4px",
              border: "1px solid #ccc",
              background: "#fff",
              outline: "none",
            }}
            onClick={handleIncrement}
            disabled={isIncrementDisabled}
          >
            +
          </button>
        </div>
      </div>
      <div className="flex items-center justify-between w-3/5 bg-[#991E23] px-4 py-2 rounded-full text-white">
        <div className="">
          <p className="text-xs">Add to cart</p>
          <p className="text-[8px]">300 kcal</p>
        </div>
        <p className="text-xs font-bold">Rp50.000</p>
      </div>
    </div>
  );
}

export default CheckoutBar;
