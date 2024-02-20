import React, { useRef } from "react";
import {
  MdOutlineKeyboardArrowRight,
  MdOutlineKeyboardArrowLeft,
} from "react-icons/md";
import Album from "./Album";
function Slider({ data }) {
  const scrollRight = () => {
    scrollRef.current.scrollLeft += 800;
  };

  const scrollLeft = () => {
    scrollRef.current.scrollLeft -= 800;
  };
  const scrollRef = useRef(null);
  return (
    <div className="flex justify-center items-center gap-2">
      <MdOutlineKeyboardArrowLeft
        className="text-3xl text-gray-600 hover:scale-125 transition-all cursor-pointer duration-500 ease-in-out hidden md:block"
        onClick={scrollLeft}
      />
      <div
        className="grid grid-rows-2 grid-flow-col-dense overflow-x-scroll justify-center items-center w-full lg:w-[75vw] gap-4 px-5 scroll-hide"
        ref={scrollRef}
      >
        {data.map((data) => (
          <Album key={data.id} {...data} />
        ))}
      </div>
      <MdOutlineKeyboardArrowRight
        className="text-3xl text-gray-600 hover:scale-125 transition-all cursor-pointer duration-500 ease-in-out hidden md:block"
        onClick={scrollRight}
      />
    </div>
  );
}

export default Slider;
