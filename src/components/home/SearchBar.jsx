import React from "react";

const SearchBar = () => {
  return (
    <div className="flex gap-4 p-2 rounded-full shadow-md border justify-center items-center text-base">
      <input
        className="px-5 py-2   border-none"
        placeholder="Anywhere"
      />
      <button className="text-sm font-semibold text-black rounded-full border-none">
        Any weeks
      </button>
      <button className="text-sm font-semibold text-gray-600 rounded-full border-none">
        Add guests
      </button>
      <i
        className="fa fa-search cursor-pointer bg-red-500 text-white rounded-full p-2"
        aria-hidden="true"
      ></i>
    </div>
  );
};

export default SearchBar;
