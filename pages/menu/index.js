import Head from "next/head";
import { IoIosSearch } from "react-icons/io";
import MenuCard from "../../components/MenuCard";
import React from "react";
import Navbar from "../../components/Navbar";
import { GiSettingsKnobs } from "react-icons/gi";
import Link from "next/link";

export default function Menu() {
  return (
    <div className="">
      <Head>
        <title>Heat & Eat</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="">
        <div className="flex justify-center">
          <div className="w-[360px] bg-white min-h-screen relative">
            <div className=" flex items-center w-full justify-between text-xl p-3 mb-8 gap-2">
              <div className="flex items-center flex-grow rounded-full gap-2 bg-[#F3F2F0] text-base px-2 py-1 text-[#949494]">
                <IoIosSearch />
                <input
                  type="text"
                  placeholder="Search"
                  className="w-full bg-[#F3F2F0] focus:outline-0"
                />
              </div>
              <div className=" rounded-full  bg-white text-[#991E23]">
                <GiSettingsKnobs className="text-2xl" />
              </div>
            </div>
            <div className="mb-6 flex justify-center w-full">
              <div className="grid grid-cols-2 gap-3">
                <Link href={`/menu/salmon-with-fried-rice`}>
                  <MenuCard size="big" />
                </Link>
                <MenuCard size="big" />
                <MenuCard size="big" />
                <MenuCard size="big" />
                <MenuCard size="big" />
                <MenuCard size="big" />
                <MenuCard size="big" />
                <MenuCard size="big" />
              </div>
            </div>
            <div className="sticky bottom-0 w-full z-10">
              <Navbar selected={"Menu"} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}