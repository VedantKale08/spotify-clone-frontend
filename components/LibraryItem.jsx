import Image from 'next/image'
import React from 'react'

const LibraryItem = ({data}) => {
  return (
    <div className="flex gap-3 cursor-pointer hover:bg-neutral-800 transition duration-300 p-2 rounded-md">
      <div className="relative w-14 h-14">
        <Image
          src={data.image}
          alt="song"
          className="object-cover rounded-md"
          fill
        />
      </div>
      <div>
        <p className="truncate pt-1">{data.name}</p>
        <p className="truncate pt-1 text-sm text-neutral-400">Song &#x2022; {data.author}</p>
      </div>
    </div>
  );
}

export default LibraryItem