import React from "react";

const data = {
  name: "Ali Haider",
  palce: "New Delhi",
  followers: "90.1k",
  likes: "503k",
  photos: "1.4k",
};

const Assignment1 = () => {
  return (
    <div className="flex h-screen w-screen items-center justify-center bg-slate-800">
      <div className="flex flex-col h-96 w-80 bg-white shadow rounded-lg">
        <div className="bg-gradient-to-r from-teal-400 to-yellow-200 h-36 w-80 rounded-t-lg"></div>
        <div className="flex flex-col items-center justify-center mt-[-60px]">
          <img
            className="h-24 rounded-full mb-5 object-cover"
            src="profilepic.png"
          ></img>
          <h3 className="font-bold text-xl">{data.name}</h3>
          <h5>{data.palce}</h5>
        </div>
        <div className="flex justify-evenly items-center border-t mt-10 py-6">
          <div className="flex flex-col items-center">
            <h4 className="font-bold">{data.followers}</h4>
            <h6 className="text-gray-400 text-sm">Followers</h6>
          </div>
          <div className="flex flex-col items-center">
            <h4 className="font-bold">{data.likes}</h4>
            <h6 className="text-gray-400 text-sm">Likes</h6>
          </div>
          <div className="flex flex-col items-center">
            <h4 className="font-bold">{data.photos}</h4>
            <h6 className="text-gray-400 text-sm">Photos</h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Assignment1;
