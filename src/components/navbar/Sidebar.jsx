"use client";

import { useState } from "react";
import { FaArrowLeft, FaBell, FaUserFriends } from "react-icons/fa";
const Sidebar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div className="bg-white h-[calc(100vh_-_0px)] sticky top-0 w-64 p-4 shadow-md flex flex-col">
      {/* Back Button */}
      <button className=" flex items-center gap-2 text-lg font-semibold mb-4">
        <FaArrowLeft className="rounded-full border  w-6 h-6 p-1 hover:bg-gray-200 cursor-pointer" />{" "}
        Teach
      </button>

      {/* Navigation Links */}
      <ul className="mt-5 text-lg space-y-2 h-full flex flex-col">
        <li className="cursor-pointer hover:text-blue-500">Dashboard</li>

        {/* Dropdown Menu */}
        <li>
          <button
            className="w-full text-left flex justify-between items-center hover:text-blue-500"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            Manage Batch{" "}
            <span>
              {isDropdownOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m4.5 15.75 7.5-7.5 7.5 7.5"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m19.5 8.25-7.5 7.5-7.5-7.5"
                  />
                </svg>
              )}
            </span>
          </button>
          {isDropdownOpen && (
            <ul className="pl-3 mt-2 space-y-1">
              <li className="bg-blue-100 p-2 rounded cursor-pointer">
                All Batches
              </li>
              <li className="cursor-pointer hover:text-blue-500">Resources</li>
            </ul>
          )}
        </li>

        <li className="cursor-pointer hover:text-blue-500">My Earnings</li>
        <li className="cursor-pointer hover:text-blue-500">Timetable</li>
        <li className="cursor-pointer hover:text-blue-500">Analytics</li>
        <li className="mt-auto">
          <ul>
            <li className="cursor-pointer hover:text-blue-500">
              Manage Profile
            </li>
            <li className="cursor-pointer hover:text-blue-500">Settings</li>
          </ul>
        </li>
      </ul>
    </div>
  );
};
export default Sidebar;
