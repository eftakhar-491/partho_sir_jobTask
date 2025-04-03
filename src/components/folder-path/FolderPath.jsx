import React from "react";
// Adjust the import path as necessary
import { FaArrowLeft } from "react-icons/fa";

const FolderPath = ({ folderPath, handelPathClick, handelBackClick }) => {
  return (
    <div className="flex  items-center gap-3 ">
      <button
        onClick={handelBackClick}
        className="rounded-full  border w-5 p-1 h-5 flex items-center gap-2 text-lg font-semibold"
      >
        <FaArrowLeft />
      </button>
      {folderPath?.map((folder, index) => (
        <div
          onClick={() => handelPathClick(folder, index)}
          key={index}
          className="cursor-pointer flex items-center "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m8.25 4.5 7.5 7.5-7.5 7.5"
            />
          </svg>
          {folder?.foldername}
        </div>
      ))}
    </div>
  );
};

export default FolderPath;
