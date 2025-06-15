import React, { useState } from "react";

const Alto = () => {
  const [count, setcount] = useState(0);

  return (
    <>
      <div className="container shadow-2xl shadow-blue-800 mx-auto mt-20 flex flex-col items-center scale-110">
        <h2
          className={`text-[12rem] text-center font-bold ${
            count <= 0 ? "text-red-700" : "text-blue-700"
          }`}
        >
          {count}
        </h2>

        <div className="flex gap-5 mt-10 mb-10">
          <button
            onClick={() => setcount(count - 1)}
            disabled={count <= 0}
            className={`px-6 py-4 text-2xl font-bold rounded-2xl text-white hover:scale-105 ${
              count <= 0
                ? "bg-red-300 cursor-not-allowed"
                : "bg-red-500 active:bg-red-600 cursor-pointer"
            }`}
          >
            Reduce
          </button>

          <button
            onClick={() => setcount(0)}
            className="text-white bg-orange-400 text-2xl font-bold cursor-pointer px-6 py-4 active:bg-amber-600 hover:scale-105 rounded-2xl"
          >
            Reset
          </button>

          <button
            onClick={() => setcount(count + 1)}
            className="text-white bg-green-400 text-2xl font-bold cursor-pointer px-6 py-4 hover:scale-105 active:bg-green-600 rounded-2xl"
          >
            Add
          </button>
        </div>
      </div>
    </>
  );
};

export default Alto;
