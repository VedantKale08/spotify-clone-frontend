"use client"

import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import {FaPlay} from 'react-icons/fa'

const ListItem = ({
    image,name,href
}) => {
    const router = useRouter();
    const onClick = () => {
        //ADD AUTH
        router.push(href);
    }

  return (
    <button
      className="relative group flex items-center rounded-md overflow-hidden gap-x-4 bg-neutral-100/10 hover:bg-neutral-100/20 transition pr-4"
      onClick={onClick}
    >
      <div className="relative min-h-[64px] min-w-[64px]">
        <Image src={image} alt="" className="object-cover" fill></Image>
      </div>
      <p className="font-medium truncate py-5">{name}</p>
      <div className="absolute text-black transition opacity-0 rounded-full flex items-center justify-center bg-green-500 p-4 drop-shadow-md right-5 group-hover:opacity-100 hover:scale-110">
        <FaPlay />
      </div>
    </button>
  );
}

export default ListItem