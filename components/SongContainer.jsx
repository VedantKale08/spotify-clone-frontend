import React from 'react'
import SongBox from './SongBox';
import SongLibrary from './SongLibrary';

const SongContainer = () => {
  return (
    <>
      <div>
        <SongLibrary title="Newest Songs"/>
        <SongLibrary title="Recently Played"/>
        <SongLibrary title="Popular releases"/>
        <SongLibrary title="Your Favorite Artist"/>
      </div>
      {/* <div className="">List Of Songs!</div> */}
    </>
  );
}

export default SongContainer