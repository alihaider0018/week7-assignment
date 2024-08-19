import React, { useState } from "react";

const Assignment4 = () => {
  const [username, setusername] = useState("");
  const [user, setuser] = useState({});

  return (
    <div className="h-screen w-screen flex flex-col items-center justify-start pt-[25%] bg-slate-800 md:pt-[10%]">
      <div className="flex gap-3 pb-12">
        <input
          value={username}
          onChange={(e) => {
            setusername(e.target.value);
          }}
          placeholder="Enter Your Github Username..."
          className="bg-slate-100 p-3 rounded-lg w-[250px] shadow md:w-[500px]"
        />
        <button
          onClick={async () => {
            const response = await fetch(
              `https://api.github.com/users/${username}`
            );
            if (response.status !== 200) {
              alert("user dose not exists");
            }
            const res = await response.json();
            setuser(res);
          }}
          className="bg-blue-700 px-4 py-3 text-white rounded-lg font-bold"
        >
          Search
        </button>
      </div>
      <div className="flex items-center justify-center">
        <div className="flex flex-col h-96 w-80 bg-white shadow rounded-lg ">
          <div className="bg-gradient-to-r from-teal-400 to-yellow-200 h-36 w-80 rounded-t-lg"></div>
          <div className="flex flex-col items-center justify-center mt-[-60px]">
            <img
              className="h-24 rounded-full mb-5 object-cover text-sm"
              src={user.avatar_url}
            ></img>
            <h3 className="font-bold text-xl">{user.name}</h3>
            <h5>{user.location}</h5>
            <a
              className="text-blue-800 hover:text-blue-400"
              href={user.html_url}
              target="_blank"
            >
              {user.html_url}
            </a>
          </div>
          <div className="flex justify-evenly items-center border-t mt-10 py-6">
            <div className="flex flex-col items-center">
              <h4 className="font-bold">
                {" "}
                {Number(user.followers) >= 1000
                  ? (Number(user.followers) / 1000).toFixed(1) + "K"
                  : Number(user.followers)}
              </h4>
              <h6 className="text-gray-400 text-sm">Followers</h6>
            </div>
            <div className="flex flex-col items-center">
              <h4 className="font-bold">
                {" "}
                {Number(user.following) >= 1000
                  ? (Number(user.following) / 1000).toFixed(1) + "K"
                  : Number(user.following)}
              </h4>
              <h6 className="text-gray-400 text-sm">Following</h6>
            </div>
            <div className="flex flex-col items-center">
              <h4 className="font-bold">
                {" "}
                {Number(user.public_repos) >= 1000
                  ? (Number(user.public_repos) / 1000).toFixed(1) + "K"
                  : Number(user.public_repos)}
              </h4>
              <h6 className="text-gray-400 text-sm">Repositories</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Assignment4;
