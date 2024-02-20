import React from "react";
import { Link } from "react-router-dom";
function Album({ name, id, artists, image }) {
  return (
    <>
      <Link
        to={`/albums/${id}`}
        className="flex flex-col items-center justify-center gap-3 w-[160px] max-h-[220px] overflow-y-clip rounded-lg"
      >
        <img src={image[2].link} alt="" className="rounded-lg" />
        <div className="text-[13px] flex flex-col items-center justify-center">
          <span className="text-gray-600 font-semibold overflow-x-clip">
            {name}
          </span>
          <p className="text-gray-500 font-thin">
            {artists.map((artist) => artist.name).join(",").length>24 ? artists.map((artist) => artist.name).join(",").slice(0,24) + "..." : artists.map((artist) => artist.name).join(",") }
          </p>
        </div>
      </Link>
    </>
  );
}

export default Album;
