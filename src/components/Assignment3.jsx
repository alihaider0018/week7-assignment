import React from "react";
import { useState } from "react";

const arrwords = [
  "hardwork",
  "persistence",
  "patience",
  "consistenty",
  "to",
  "when",
  "from",
  "where",
  "how",
  "success",
  "dream",
  "ambition",
  "more",
  "thanks",
];

const Assignment3 = () => {
  const [length, setlength] = useState("");
  const [para, setpara] = useState("");

  function handlechange(e) {
    setlength(e.target.value);
  }

  function handleErase() {
    setpara("");
  }

  function handleclick() {
    setpara("");
    for (let i = 0; i < Number(length); i++) {
      setpara(
        (prevPara) =>
          prevPara + " " + arrwords[Math.floor(Math.random() * arrwords.length)]
      );
    }
    setlength("");
  }

  return (
    <div className="h-screen w-screen flex flex-col justify-start items-center mt-[20%] lg:mt-[10%]">
      <h1 className="font-extrabold text-3xl">Para Genearator</h1>
      <div className="flex flex-col sm:flex-row gap-4 mt-4">
        <input
          type="text"
          value={length}
          onChange={handlechange}
          placeholder="Enter Number of Words"
          className="bg-slate-100 p-2 w-[300px] md:w-[400px] lg:w-[700px] border"
        ></input>
        <div className="flex items-center justify-center gap-3">
          <button
            onClick={handleclick}
            className="bg-black text-white rounded-md text-md py-1 px-2 sm:text-xl sm:px-2 sm:py-2"
          >
            Generate
          </button>
          <button
            className="bg-red-500 text-white rounded-md text-md py-1 px-4 sm:text-xl sm:px-5 sm:py-2"
            onClick={handleErase}
          >
            Erase
          </button>
        </div>
      </div>
      <div>{para && <div className="p-10">{para}</div>}</div>
    </div>
  );
};

export default Assignment3;
