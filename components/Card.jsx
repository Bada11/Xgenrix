import React from "react";

const Card = ({ title, text }) => {
  return (
    <div className="xl:w-[300px] w-full  p-5  rounded xl:text text-center">
      <h1 className="logo pb-5 text-[22px]">{title}</h1>
      <h1 className="text-[#E1D9D1]">{text}</h1>
    </div>
  );
};

export default Card;
