import React from 'react'
import LibraryItem from './LibraryItem';

const LibraryList = () => {
    const data = {
      image: "/images/liked.png",
      name: "Liked Songs",
      author:"Jivan Shinde",
      href: "liked",
    };
  return (
    <div>
      <div className="grid px-5 gap-1">
        {[1, 2, 3, 4, 5].map((i) => (
          <LibraryItem key={i} data={data}/>
        ))}
      </div>
    </div>
  );
}

export default LibraryList