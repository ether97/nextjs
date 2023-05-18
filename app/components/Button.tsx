"use client";
import React from "react";
import { IconType } from "react-icons";

interface ButtonProps {
  label: string;
  //   onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  //   icon?: IconType;
  disabled?: boolean;
  outline?: boolean;
  //   small?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  label,
  //   onClick,
  //   icon,
  disabled,
  outline,
  //   small,
}) => {
  return (
    <button
      className={`
    ${disabled ? "opacity-70" : ""}
    w-full
    ${disabled ? "cursor-not-allowed" : ""}
    ${outline ? "bg-white" : "bg-rose-500"}
    ${outline ? "border-black" : "border-rose-500"}
    ${outline ? "text-black" : "text-white"}
  `}
    >
      {label}
    </button>
  );
};

export default Button;
