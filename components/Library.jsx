"use client";
import { TbPlaylist } from "react-icons/tb";
import { AiOutlinePlus } from "react-icons/ai";
import { useState } from "react";
import AddSongPopup from "./AddSongPopup";
import { BoxPops } from "./BoxPops";
import { userStore } from "@/stores/getUserDetails";
import LoginPopup from "./LoginPopup";

const Library = () => {
  const [popup,setPopup] = useState(false);
  const token = userStore(state => state.token)

  const onClick = () => {
    token ? setPopup(true) : setLoginPopup(true);
  };

  return (
    <div className="flex flex-col">
      <div className="flex items-center px-5 py-4">
        <div className="inline-flex flex-1 items-center gap-x-2">
          <TbPlaylist className="text-neutral-400" size={22} />
          <p className="text-neutral-400 font-medium text-md">Your Library</p>
        </div>
        <AiOutlinePlus
          onClick={onClick}
          size={20}
          className="text-neutral-400 cursor-pointer hover:text-white transition"
        />
      </div>
      {token && (
        <div className="flex flex-col gap-y-2 mt-4 px-3">List of Songs</div>
      )}
      {!token && (
        <div className="grid gap-5 mt-8">
          <div className="px-2">
            <BoxPops
              title="Create your first playlist"
              description="It's easy, we'll help you"
              buttonText="Create Playlist"
            />
          </div>
          <div className="px-2">
            <BoxPops
              title="Let's add a new song in spotify"
              description="It's easy, we'll help you"
              buttonText="Add a song"
            />
          </div>
        </div>
      )}
      {popup && <AddSongPopup setPopup={setPopup} />}
    </div>
  );
};

export default Library;
