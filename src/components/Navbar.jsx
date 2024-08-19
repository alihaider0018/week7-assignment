import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="fixed top-0 z-10">
      <div className="w-screen flex justify-end items-center px-3 py-2 bg-slate-50 shadow font-bold text-xl gap-6">
        <Link to={"/week7-assignment"}>
          <button className="bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-500 text-white rounded-md px-3 py-1 hover:cursor-pointer mr-9">
            Home
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
