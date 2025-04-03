import React from "react";

import { BiSupport } from "react-icons/bi";
import { LuBellRing } from "react-icons/lu";
const TopNav = () => {
  return (
    <nav className="bg-white shadow-md p-4 flex items-center justify-between">
      {/* Left Side */}
      <div className="text-lg font-semibold">Teacher’s Center</div>

      {/* Right Side */}
      <div className="flex items-center gap-4">
        {/* Icons */}

        <BiSupport className="text-gray-600 text-xl cursor-pointer" />
        <LuBellRing className="text-gray-600 text-xl cursor-pointer" />

        {/* Divider */}
        <div className="hidden md:block border-l border-gray-300 h-6"></div>

        {/* Profile */}
        <div className="flex items-center gap-2">
          <img
            src="https://via.placeholder.com/40"
            alt="Profile"
            className="w-10 h-10 rounded-full border"
          />
          <div className="hidden md:block">
            <div className="font-semibold">Sir 1</div>
            <div className="text-sm text-gray-500">Chemistry | Level 3</div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default TopNav;
