import React from "react";

export default function TeachersProgressBar() {
  return (
    <div className="w-full mt-4 md:mt-0 px-4  md:mx-0">
      <div className="h-2 bg-gray-400 rounded-full">
        <div
          className="h-2 bg-black rounded-full"
          style={{ width: "40%" }}
        ></div>
      </div>
    </div>
  );
}
