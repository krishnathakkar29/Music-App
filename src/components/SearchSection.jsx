import React, { useContext } from "react";
import MusicContext from "../context/MusicContext";
import SearchSongItem from "./SearchSongItem";

function SearchSection() {
  const { searchedSongs } = useContext(MusicContext);
  return (
    <div
      className={`fixed bottom-0 right-0 left-0 top-0 flex justify-center items-center flex-wrap gap-4 bg-white bg-opacity-50 backdrop-blur-lg ${
        searchedSongs.length === 0 ? "-translate-y-[1200px] opacity-0" : "translate-y-0 opacity-100"
      } transition-all duration-500 ease-in-out`}
    >
      {searchedSongs?.map((song) => (
        <SearchSongItem key={song.id} {...song} />
      ))}
    </div>
  );
}

export default SearchSection;
