"use client";
import React, { useState } from "react";
import { FaPause, FaPlay } from "react-icons/fa";

const AudioPlayer = ({ src }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
    isPlaying ? setIsPlaying(false) : setIsPlaying(true);
  };

  return (
    <div className="flex items-center">
      <button
        className=" px-2 py-2 font-bold text-black dark:text-white "
        onClick={togglePlay}
        aria-label={isPlaying ? "Pause" : "Play"}
      >
        {isPlaying ? <FaPause /> : <FaPlay />}
      </button>
      <div className="ml-2 h-1.5 w-40 rounded-full bg-gray-200">
        <div
          className="h-1.5 rounded-full bg-blue-600"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
};

export default AudioPlayer;
