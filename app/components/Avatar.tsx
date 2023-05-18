"use client";

import Image from "next/image";

interface AvatarProps {
  image: string;
}

const Avatar = () => {
  return (
    <Image
      className="rounded-full"
      height="30"
      width="30"
      alt="avatar"
      src="/images/"
    />
  );
};

export default Avatar;
