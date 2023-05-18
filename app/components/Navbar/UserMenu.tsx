"use client";

import { useState } from "react";

import { AiOutlineUser, AiOutlineMenu } from "react-icons/ai";
import MenuItem from "./MenuItem";

const UserMenu = () => {
  const userItems = ["Login", "Register", "About", "Learn More"];
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen((value) => !value);
  };

  return (
    <div className="relative">
      <div className="flex flex-row gap-3 items-center">
        <div className="hidden md:block text-sm font-semibold px-4 py-3 rounded-full hover:bg-neutral-100 cursor-pointer transition">
          Airbnb
        </div>
        <div
          onClick={toggleOpen}
          className=" flex flex-row p-2 border-1px gap-3 items-center rounded-full border-neutral-200 transition hover:shadow-md cursor-pointer border-[1px]"
        >
          <AiOutlineMenu size={12} />
          <div className="hidden md:block">
            <AiOutlineUser size={18} />
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="rounded-xl absolute top-12 right-0 shadow-md w-full bg-white text-sm font-semibold overflow-hidden">
          <div className="flex flex-col cursor-pointer ">
            <>
              {userItems.map((item, index) => {
                if (index === userItems.length - 1) {
                  return <MenuItem onClick={() => {}} label={item} />;
                } else {
                  return <MenuItem onClick={() => {}} label={item} />;
                }
              })}
            </>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
