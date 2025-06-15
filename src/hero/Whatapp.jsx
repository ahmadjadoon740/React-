import React from "react";
import { TbMessageCircleFilled } from "react-icons/tb";
import Single from "./Single";
import { profileData } from "../profileData";

const Whatapp = () => {
  return (
    <div className="container mt-10 shadow-green-600 shadow-2xl w-[50%] mx-auto p-5">
      <div className="flex flex-row items-center bg-green-500 text-white w-full h-auto p-5 rounded-t-2xl space-x-4">
        <TbMessageCircleFilled className="text-white text-7xl" />
        <div className="flex flex-col">
          <h2 className="text-white text-2xl font-bold mt-2">
            Start a Conversation
          </h2>
          <p className="text-white/80">
            Hi ! Click one of our member below to chat on
            <span className="font-bold text-white">Whatsapp</span>
          </p>
        </div>
      </div>

      <div className="p-5">
        <h2 className="text-green-500 text-6xl  ">
          {profileData.length}NEW MESSAGE
        </h2>
      </div>

      {profileData.map((item) => (
        <Single {...item} />
      ))}
    </div>
  );
};

export default Whatapp;
