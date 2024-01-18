import React from "react";
import { IoChevronBackOutline } from "react-icons/io5";

function Header({ backPath, rightIcon, rightIconPath, title }) {
  return (
    <div className="flex items-center justify-between text-xl p-3 mb-8">
      <a href={backPath}>
        <div className="w-[20px]">
          <IoChevronBackOutline className="text-[#991E23]" />
        </div>
      </a>
      <h1 className="text-black font-bold">{title}</h1>
        <a href={rightIconPath && rightIconPath}>
          <div className="w-[20px] text-[#991E23]">{rightIcon && rightIcon}</div>
        </a>
    </div>
  );
}

export default Header;
