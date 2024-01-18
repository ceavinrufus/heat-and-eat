import React from "react";

function Button({ variant = "primary", children, rightIcon }) {
  let className = "";
  if (variant == "primary") {
    className += "bg-[#991E23] text-white";
  } else {
    className += "bg-white text-[#991E23] border-[#991E23] border-2";
  }
  return (
    <button
      className={`${className} flex items-center justify-between rounded-xl py-2 px-4`}
    >
      {children}
      {rightIcon}
    </button>
  );
}

export default Button;
