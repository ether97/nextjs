"use client";
import React from "react";
import { BiSearch } from "react-icons/bi";

const Search = () => {
  return (
    <div className="py-2 rounded-full w-full md:w-auto transition shadow-sm hover:shadow-md cursor-pointer">
      <div className="flex flex-row justify-between items-center">
        <div className="text-sm font-semibold px-6">Anywhere</div>
        <div className="hidden sm:block text-center flex-1 text-sm font-semibold px-6 border-x-[1px]">
          Anytime
        </div>
        <div className="flex flex-row gap-3 pl-6 pr-2 items-center text-gray-600 text-sm">
          <div className="hidden sm:block">Add Guests</div>
          <div className="p-2 bg-rose-500 rounded-full text-white">
            <BiSearch size={18} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
