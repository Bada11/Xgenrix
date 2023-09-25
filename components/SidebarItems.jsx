import React from "react";

const SidebarItems = ({ name, active, handleClick }) => {
  return (
    <div className="flex flex-col  p-2 space-y-2 text-left">
      <button
        className={`cursor-pointer border border-[#5f5f5f] p-2 rounded bg-purple-500${
          active ? "active" : ""
        }`}
        onClick={handleClick}
      >
        {name}
      </button>
    </div>
  );
};

export default SidebarItems;
