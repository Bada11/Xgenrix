import React from "react";
import { AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  return (
    <div className="p-5 flex justify-between  z-10">
      <div>
        <h1>
          Xgenrix <span className="logo">ai.</span>
        </h1>
      </div>

      <div className="flex gap-4 xl:flex hidden">
        <ul className=" flex gap-4 mt-1">
          <li>Home</li>
          <li>Abouts</li>
          <li>faQs</li>
        </ul>
        <button className="button p-2 rounded-full px-5 hover:opacity-50 transition">Sign In</button>
      </div>

      <AiOutlineMenu className="sm:xl:hidden text-[23px]" />
    </div>
  );
};

export default Navbar;
