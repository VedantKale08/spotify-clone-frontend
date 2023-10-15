import React from 'react'
import SongBox from './SongBox';

const SongLibrary = ({title}) => {
    const data = {
      image: "/images/liked.png",
      name: "Liked Songs",
      description:
        "Marathi Songs that ruled hearts in the world with their parents",
      href: "liked",
    };
  return (
    <div>
      <div className="flex justify-between items-end">
        <h1 className="text-white text-2xl font-semibold pt-4">{title}</h1>
        <p className='text-neutral-400 text-sm cursor-pointer hover:border-b-2 border-neutral-400'>Show All</p>
      </div>
      <div className="grid grid-flow-col overflow-x-scroll gap-3 mt-4 scrollbar-none">
        {[1, 2, 3, 4, 5, 6,7].map((item) => (
          <SongBox data={data} key={item} />
        ))}
      </div>
    </div>
  );
}

export default SongLibrary