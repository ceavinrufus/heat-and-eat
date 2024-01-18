import React from "react";
import { IoChevronBackOutline } from "react-icons/io5";

function Header({ leftIcon, rightIcon, title }) {
  return (
    <div className="flex items-center justify-between text-xl p-3 mb-8">
      <div className="w-[20px]">
        <IoChevronBackOutline className="text-[#991E23]" />
      </div>
      <h1 className="text-black font-bold">{title}</h1>
      <div className="w-[20px] text-[#991E23]">{rightIcon && rightIcon}</div>
    </div>
  );
}

export default Header;
