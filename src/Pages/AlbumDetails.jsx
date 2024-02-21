import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import MusicContext from "../context/MusicContext";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SongList from "../components/SongList";
import SearchSection from "../components/SearchSection";

function AlbumDetails() {
  const { setSongs } = useContext(MusicContext);
  const [albums, setAlbums] = useState([]);
  const [image, setImage] = useState([]);
  const { id } = useParams();
  const getImage = (image) => (image = image[2].link);
  const getAlbumDetails = async () => {
    const res = await axios.get(`https://saavn.dev/albums?id=${id}`);
    const { data } = await res.data;
    console.log(data);
    setAlbums(data);
    setSongs(data.songs);
    setImage(getImage(data.image));
  };

  useEffect(() => {
    getAlbumDetails();
  }, []);
  return (
    <>
      <Navbar />
      <SearchSection />
      <div className="flex flex-col lg:flex-row justify-center items-center gap-8 lg:gap-24 h-screen my-48 lg:my-0 mx-2 lg:mx-auto">
        <div>
          <img
            src={image}
            alt=""
            width={250}
            className="mx-auto mb-4 rounded-lg"
          />
          <div className="w-[250px] text-gray-700">
            <h2>{albums.name}</h2>
            <p>
              {albums.primaryArtists} . {albums.songCount}
            </p>
          </div>
        </div>

        <div>
          {albums.songs?.map((song) => (
            <SongList key={song.id} {...song} />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default AlbumDetails;
