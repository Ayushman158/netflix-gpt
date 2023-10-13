import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[20%] px-24 absolute text-white bg-gradient-to-r from-black">
      <h1 className="font-bold text-6xl pb-6">{title}</h1>
      <p className="w-1/4 text-lg">{overview}</p>
      <div className="mt-4">
        <button className="bg-white text-l text-black p-4 px-12  rounded-lg hover:bg-opacity-80">
          ▶ Play
        </button>
        <button className="mx-2 bg-gray-700 text-xl text-white p-4 px-12 bg-opacity-70 hover:bg-opacity-50 rounded-lg">
          {" "}
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
  