import React from "react";

function Button({ children, rightIcon }) {
  return (
    <button className="bg-[#991E23] text-white flex items-center justify-between rounded-xl py-2 px-4">
      {children}
      {rightIcon}
    </button>
  );
}

export default Button;
