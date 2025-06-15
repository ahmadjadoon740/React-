
import React from "react";

const Single = ({ img, text, count, name }) => {
  return (
    <>
      <div
        className={`container flex justify-between items-center p-4 m-3 border-t-0 border-b-0 border-r-0 ${
          count > 3 ? "border-l-[3px] border-l-green-500" : "border-0"
        }`}
      >
        <div className="flex flex-row items-center space-x-4">
          <img
            className="w-[60px] h-[60px] rounded-full object-cover"
            src={img}
            alt="img"
          />
          <div className="flex flex-col">
            <h2
              className={`font-bold ${
                count < 3 ? "text-orange-500" : "text-green-500"
              }`}
            >
              {name}
            </h2>
            <p className="text-gray-500">{text}</p>
          </div>
        </div>
        <div
          className={`w-[30px] h-[30px] rounded-full ${
            count < 3 ? "bg-gray-500" : "bg-green-500"
          }`}
        ></div>
      </div>
    </>
  );
};

export default Single;
