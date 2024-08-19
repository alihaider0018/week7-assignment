import React, { useState } from "react";

const Assignment2 = () => {
  const [bgcolor, setbgcolor] = useState("bg-white");

  const handlechange = (color) => {
    setbgcolor(color);
  };

  return (
    <div
      className={`h-screen w-screen flex items-end justify-center py-10 ${bgcolor}`}
    >
      <div className="flex items-center justify-evenly h-[130px] m-6 flex-wrap bg-slate-900 rounded-lg p-3 gap-x-4 lg:h-16">
        <button
          className="text-black bg-red-500 px-6 py-1 text-lg rounded-xl"
          onClick={() => handlechange("bg-red-500")}
        >
          Red
        </button>
        <button
          className="text-black bg-green-500 px-6 py-1 text-lg rounded-xl"
          onClick={() => handlechange("bg-green-500")}
        >
          Green
        </button>
        <button
          className="text-black bg-blue-500 px-6 py-1 text-lg rounded-xl"
          onClick={() => handlechange("bg-blue-500")}
        >
          Blue
        </button>
        <button
          className="text-black bg-yellow-500 px-6 py-1 text-lg rounded-xl"
          onClick={() => handlechange("bg-yellow-500")}
        >
          Yellow
        </button>
        <button
          className="text-black bg-purple-500 px-6 py-1 text-lg rounded-xl"
          onClick={() => handlechange("bg-purple-500")}
        >
          Purple
        </button>
        <button
          className="text-black bg-teal-500 px-6 py-1 text-lg rounded-xl"
          onClick={() => handlechange("bg-teal-500")}
        >
          Teal
        </button>
        <button
          className=" hidden lg:block text-black bg-slate-100 px-6 py-1 text-lg rounded-xl"
          onClick={() => handlechange("bg-white")}
        >
          Default
        </button>
      </div>
    </div>
  );
};

export default Assignment2;
