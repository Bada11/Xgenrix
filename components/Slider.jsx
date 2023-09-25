import React from "react";

const Slider = ({ min, max, value, handleChange }) => {
  return (
    <div className="mt-10">
      <input
        type="range"
        className="h-[10px]"
        min={min}
        max={max}
        value={value}
        onChange={handleChange}
      />
    </div>
  );
};

export default Slider;
