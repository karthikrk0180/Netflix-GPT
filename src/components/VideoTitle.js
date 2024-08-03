import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[17%] px-20 absolute text-white bg-gradient-to-r from-black ">
      <h1 className=" font-bold text-5xl">{title}</h1>
      <p className="py-6 text-lg w-1/4">{overview}</p>
      <div>
        <button className="bg-white text-black font-bold p-4 px-10 text-xl rounded-lg hover:bg-opacity-80  ">
          {" "}
          ▶️Play
        </button>
        <button  className="bg-gray-500 text-black p-4 font-bold px-10 text-xl bg-opacity-70 rounded-lg  m-2 ">More Info</button>
      </div>
    </div>
  );
};

export default VideoTitle;
