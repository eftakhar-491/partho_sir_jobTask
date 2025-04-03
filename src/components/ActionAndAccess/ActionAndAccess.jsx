import React from "react";

export default function ActionAndAccess() {
  return (
    <>
      <div className="flex items-center">
        <button className="">
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
              d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
            />
          </svg>
        </button>
        <form action="">
          <select
            className="w-[100px] bg-gray-100 rounded-sm px-3 py-1/2 text-sm my-4 ml-4"
            name=""
            id=""
          >
            <option value="">sadf</option>
            <option value="">sadf</option>
            <option value="">sadf</option>
            <option value="">sadf</option>
          </select>
          <select
            className="w-[100px] bg-gray-100 rounded-sm px-3 py-1/2 text-sm ml-4 mt-4"
            name=""
            id=""
          >
            <option value="">sadf</option>
            <option value="">sadf</option>
            <option value="">sadf</option>
            <option value="">sadf</option>
          </select>
        </form>
      </div>
    </>
  );
}
