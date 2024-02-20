import React, { useEffect, useMemo, useState } from "react";
import axios from "axios";
import Album from "./Album";
import Slider from "./Slider";
function MainSection() {
  const [albums, setAlbums] = useState([]);
  const [trending, setTrending] = useState([]);

  const getHomeData = async () => {
    const response = await axios.get(
      "https://saavn.dev/modules?language=hindi"
    );
    const { data } = await response.data;
    console.log(data);
    setAlbums(data.albums);
    setTrending(data.trending);
  };

  useEffect(() => {
    getHomeData();
  }, []);

  const trendingAlbums = useMemo(
    () => (Array.isArray(trending.albums) ? trending.albums : []),
    [trending.albums]
  );
  return (
    <section className="my-20">
      <h2 className="text-xl px-5 py-3 font-semibold text-gray-700 w-full lg:w-[78vw] mx-auto">
        Trending Now
      </h2>
      <Slider data={trendingAlbums} />
      <h2 className="text-xl px-5 py-3 font-semibold text-gray-700 w-full lg:w-[78vw] mx-auto">
        Top Albums
      </h2>
      <Slider data={albums} />
    </section>
  );
}

export default MainSection;
