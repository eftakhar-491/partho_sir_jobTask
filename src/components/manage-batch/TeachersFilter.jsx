// import { ChevronDownIcon, UserGroupIcon } from "@heroicons/react/outline";
export default function TeachersFilter() {
  return (
    <>
      <section className="flex justify-between items-center ">
        <form action="">
          <select
            className="w-[150px] bg-white rounded-sm px-3 py-1 my-4 ml-4"
            name=""
            id=""
          >
            <option value="">sadf</option>
            <option value="">sadf</option>
            <option value="">sadf</option>
            <option value="">sadf</option>
          </select>
          <select
            className="w-[150px] bg-white rounded-sm px-3 py-1 ml-4 mt-4"
            name=""
            id=""
          >
            <option value="">sadf</option>
            <option value="">sadf</option>
            <option value="">sadf</option>
            <option value="">sadf</option>
          </select>
        </form>
        <div className="flex gap-2 justify-center items-center mr-4">
          <button className="bg-white px-4 rounded-sm py-1 h-fit">
            Take Class
          </button>
          <button className="flex items-center bg-white border border-gray-300 rounded-sm px-4 py-1 shadow-sm hover:bg-gray-100 transition">
            <div className="flex -space-x-2">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREHjj0QVmfJLo5BrdEKQZ5td36QsOqjgTQFg&s"
                alt="User 1"
                className="w-6 h-6 rounded-full border-2 border-white"
              />
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREHjj0QVmfJLo5BrdEKQZ5td36QsOqjgTQFg&s"
                alt="User 2"
                className="w-6 h-6 rounded-full border-2 border-white"
              />
            </div>
            <span className="ml-2 text-gray-800 font-medium">Add TA</span>
          </button>
        </div>
      </section>
    </>
  );
}
