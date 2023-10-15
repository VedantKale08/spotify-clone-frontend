import Image from 'next/image'
import React from 'react'
import { FaPlay } from 'react-icons/fa';

const SongBox = ({data}) => {
  return (
    <div className="flex flex-col  bg-neutral-600/10 hover:bg-neutral-400/20 p-4 w-[180px] rounded-md transition duration-500 group cursor-pointer pr-4">
      <div className="relative h-[120px] w-full">
        <Image
          src={data.image}
          alt="temp"
          fill
          className="object-cover rounded-md"
        ></Image>
        <div className="absolute text-black bg-green-500 p-4 rounded-full drop-shadow-md bottom-2 right-2 opacity-0 transition duration-500 group-hover:opacity-100 hover:scale-110">
          <FaPlay />
        </div>
      </div>
      <p className="truncate pt-3 pb-2 font-bold">{data?.name}</p>
      <p className="line-clamp-2 text-neutral-400 text-sm">
        {data.description}
      </p>
    </div>
  );
}

export default SongBox