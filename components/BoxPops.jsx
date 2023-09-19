import React from 'react'
import { twMerge } from 'tailwind-merge'
import Button from './Button'

export const BoxPops = ({classname, title, description, buttonText, onClick}) => {
  return (
    <div
      className={twMerge(
        classname,
        "bg-neutral-800 rounded-xl px-6 py-4 grid gap-3"
      )}
    >
      <p className="font-semibold">{title}</p>
      <p className="text-sm">{description}</p>
      <Button className="bg-white py-1 px-5 w-fit mt-3 hover:scale-105 hover:opacity-100">
        <span className="text-sm" onClick={onClick}>
          {buttonText}
        </span>
      </Button>
    </div>
  );
}
