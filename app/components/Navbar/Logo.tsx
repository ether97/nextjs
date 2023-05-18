"use client";
import React from "react";

import Image from "next/image";

const Logo = () => {
  return (
    <Image
      className="hidden md:block cursor-pointer"
      height="100"
      width="100"
      alt="Logo"
      src="/next.svg"
    />
  );
};

export default Logo;
