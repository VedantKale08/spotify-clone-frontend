import React from "react";
import PopupContainer from "./PopupContainer";

const AddSongPopup = ({ setPopup }) => {
  return (
    <PopupContainer
      setPopup={setPopup}
      title="Add your song to Spotify"
      description="Upload an mp3 file"
      center={true}
    >
      AddSongPopup
    </PopupContainer>
  );
};

export default AddSongPopup;
