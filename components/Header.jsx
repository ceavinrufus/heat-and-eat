import React from "react";

function Header({ leftIcon, rightIcon, title }) {
  return (
    <div className="flex items-center justify-between text-xl p-3 mb-8">
      <div className="w-[20px]">{leftIcon && leftIcon}</div>
      <h1 className="text-black font-bold">{title}</h1>
      <div className="w-[20px]">{rightIcon && rightIcon}</div>
    </div>
  );
}

export default Header;
