import React from "react";

function VolumeController({ isVolumeVisible }) {
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
        value={0}
        className=" h-[5px] range text-green-400"
      />
    </div>
  );
}

export default VolumeController;
