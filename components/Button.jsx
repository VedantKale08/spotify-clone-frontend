import React from "react";
import { twMerge } from "tailwind-merge";

const Button = ({
  className,
  children,
  disabled,
  type = "button",
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className={twMerge(
        `
        w-full rounded-full bg-green-500 border border-transparent px-3 py-3 disabled:cursor-not-allowed disabled:opacity-50 text-black font-bold hover:opacity-75 transition`,
        className
      )}
      disabled={disabled}
      type={type}
      //   ref={buttonRef}
    >
      {children}
    </button>
  );
};

export default Button;
