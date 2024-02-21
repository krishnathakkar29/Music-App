import React, { useContext } from "react";
import MusicContext from "../context/MusicContext";

function SearchSongItem({
  name,
  id,
  duration,
  image,
  downloadUrl,
  primaryArtists,
}) {
  const { playMusic } = useContext(MusicContext);
  return (
    <div className="flex flex-col items-center justify-center gap-3 w-[160px] max-h-[220px] overflow-y-clip rounded-lg">
      <img
        src={image[2].link}
        alt=""
        className="rounded-lg"
        onClick={() =>
          playMusic(downloadUrl, name, duration, image, id, primaryArtists)
        }
      />
      <div className="w-full text-[13px] flex flex-col justify-center items-center gap-2">
        <span className="font-semibold overflow-x-clip">{name}</span>
      </div>
    </div>
  );
}

export default SearchSongItem;
