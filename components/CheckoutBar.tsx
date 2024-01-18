import React, { useState } from "react";

interface CheckoutBarProps {
  item_id: string;
  name: string;
  price: number;
  calorie: number;
}

function CheckoutBar({ item_id, name, price, calorie }: CheckoutBarProps) {
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

  const handleAddToCart = async () => {
    try {
      let response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/cart/`, {
        method: "GET",
        headers: JSON.parse(process.env.NEXT_PUBLIC_HEADER),
      });
      if (!response.ok) {
        console.error("Error fetching item:", response.status, response.statusText);
      }
      let data = (await response.json())["items_id"];
      for (let i = 0; i < value; i++) {
        data.push(item_id);
      }

      response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/cart/`, {
        method: "PATCH",
        headers: {...JSON.parse(process.env.NEXT_PUBLIC_HEADER), "Content-Type": "application/json"},
        body: JSON.stringify({
          items_id: data
        })
      });
      if (!response.ok) {
        console.error("Error fetching item:", response.status, response.statusText);
      }
      window.alert(`Berhasil menambahkan ${value} ${name} ke keranjang`)
    } catch (error) {
      console.error("Error fetching item or shop:", error);
    }
  }

  const buttonStyle = {
    padding: "0.5rem",
    fontSize: "1rem",
    cursor: "pointer",
    borderRadius: "4px",
    border: "1px solid #ccc",
    background: "#fff",
    outline: "none",
  };

  const isIncrementDisabled = value === 100;
  const isDecrementDisabled = value === 1;
  return (
    <div className="flex justify-around items-center bg-white h-[80px] px-4 gap-4">
      <div className="w-2/5">
        <div className="flex items-center">
          <button
            style={buttonStyle}
            onClick={handleDecrement}
            disabled={isDecrementDisabled}
          >
            -
          </button>
          <input className="w-full text-center" type="number" value={value} readOnly />
          <button
            style={buttonStyle}
            onClick={handleIncrement}
            disabled={isIncrementDisabled}
          >
            +
          </button>
        </div>
      </div>
      <button className="flex items-center justify-between w-3/5 bg-[#991E23] px-4 py-2 rounded-full text-white" onClick={handleAddToCart}>
        <div className="">
          <p className="text-xs">Add to cart</p>
          <p className="text-[8px]">{calorie && (value * calorie)} cal</p>
        </div>
        <p className="text-xs font-bold">{price && (value * price)}</p>
      </button>
    </div>
  );
}

export default CheckoutBar;
