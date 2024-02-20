import React from "react";
import { Link } from "react-router-dom";
import { MdKeyboardArrowDown } from "react-icons/md";
function Navbar() {
  return (
    <>
      <nav className="flex justify-between items-center p-3 fixed z-[999] border-none lg:border  top-0 left-0 right-0 bg-[#f5f5f5ff] py-1">
        <div className="flex flex-col lg:flex-row justify-between items-center mx-auto lg:mx-0">
          <div className="flex justify-between items-center gap-2 mr-4">
            <img src="/savan-logo.png" alt="" width={55} />
            <Link className="font-extrabold text-2xl" to="/">
              JioSavan
            </Link>
          </div>
          <div className="flex items-center h-full font-semibold gap-5 text-gray-600">
            <li className="list-none lg:text-[1vw] text-[2.5vw]">Music</li>
            <li className="list-none lg:text-[1vw] text-[2.5vw]">Podcast</li>
            <li className="list-none lg:text-[1vw] text-[2.5vw]">Go Pro</li>
          </div>
        </div>

        <div className="hidden lg:block">
          <input
            type="text"
            name="search"
            id="search"
            className="py-2 rounded-full outline-none text-center text-black w-[40vw] border"
            placeholder="Search for Songs"
          />
        </div>

        <div className="hidden lg:flex justify-between items-center gap-4">
          <div className="flex justify-center gap-2">
            <div className="flex flex-col text-sm">
              <span className="text-[1vw] text-gray-600 font-semibold">
                Music Languages
              </span>
              <span className="text-[0.8vw] text-gray-500">Hindi</span>
            </div>
            <MdKeyboardArrowDown className="text-xl text-gray-500 mt-2" />
          </div>
          <div className="flex gap-5 font-semibold text-gray-600 text-[1vw]">
            <li className="list-none ">Login</li>
            <li className="list-none ">Signup</li>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
