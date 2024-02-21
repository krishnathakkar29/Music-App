import React, { useContext, useEffect, useState } from "react";
import MusicContext from "../context/MusicContext";

function VolumeController({ isVolumeVisible }) {
  const [volume, setVolume] = useState(50);
  const { currentSong } = useContext(MusicContext);

  const handleVolumeChange = (e) => {
    if (currentSong) {
      const newVolume = parseFloat(e.target.value) / 100;
      currentSong.audio.volume = newVolume;
      setVolume(newVolume);
    }
  };

  useEffect(
    (e) => {
      if (currentSong) {
        setVolume(currentSong.audio.volume * 100);
      }
    },
    [currentSong, volume]
  );
  return (
    <div
      className={`w-[80px] absolute -rotate-90 bottom-20 -right-3 shadow-md px-2 rounded-lg bg-white ${
        isVolumeVisible ? " " : "hidden"
      }`}
    >
      <input
        type="range"
        min={0}
        max={100}
        step={0.1}
        value={volume}
        onChange={handleVolumeChange}
        className=" h-[5px] range text-green-400"
      />
    </div>
  );
}

export default VolumeController;
