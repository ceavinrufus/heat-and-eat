import React, { useState } from "react";
import { FaHome } from "react-icons/fa";
import { ImSpoonKnife } from "react-icons/im";
import { FaShoppingCart } from "react-icons/fa";

function NavItem({ icon, text, linkTo, selected }) {
  return (
    <button
      className={`w-full h-full ${
        selected
          ? "bg-opacity-25 bg-gradient-to-b from-[#991E23]/25 to-white border-t-4 border-[#991E23]"
          : "bg-white"
      }`}
    >
      <a href={linkTo} className={`flex flex-col items-center `}>
        {icon}
        {text}
      </a>
    </button>
  );
}

function Navbar({ selected }) {
  return (
    <div className="flex justify-around items-center bg-white h-[80px]">
      <NavItem
        icon={<FaHome className="text-2xl" />}
        text={"Home"}
        linkTo={"/"}
        selected={selected == "Home"}
      />
      <NavItem
        icon={<ImSpoonKnife className="text-2xl" />}
        text="Menu"
        linkTo={"/menu"}
        selected={selected == "Menu"}
      />
      <NavItem
        icon={<FaShoppingCart className="text-2xl" />}
        text={"Cart"}
        linkTo={"/cart"}
        selected={selected == "Cart"}
      />
      <NavItem
        icon={<img src="/chefhat.png" className="w-[24px] aspect-square" />}
        text={"Recipe"}
        linkTo={"/"}
        selected={selected == "Recipe"}
      />
    </div>
  );
}

export default Navbar;
