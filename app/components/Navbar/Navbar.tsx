"use client";
import React from "react";

import Container from "../Container";
import Logo from "./Logo";
import Search from "./Search";
import UserMenu from "./UserMenu";

const Navbar = () => {
  return (
    <div className="w-full fixed shadow-sm bg-white z-10">
      <div className="border-b-[1px] py-4">
        <Container>
          <div className="flex flex-row items-center justify-between md:gap-0 gap-3">
            <Logo />
            <Search />
            <UserMenu />
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Navbar;
