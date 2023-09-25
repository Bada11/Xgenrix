import React, { useState } from "react";
import img from "@/public/ai.webp";
import Image from "next/image";
import Modal from "./Modal";
import { useDispatch } from "react-redux";
import { add } from "@/Redux/Cartslice";
import { AiOutlineHeart } from "react-icons/ai";
import SidebarItems from "./SidebarItems";
import Slider from "./Slider";

const DEFAULT_OPTIONS = [
  {
    name: "Brightness",
    property: "brightness",
    value: 100,
    range: {
      min: 0,
      max: 200,
    },
    unit: "%",
  },
  {
    name: "Contrast",
    property: "contrast",
    value: 100,
    range: {
      min: 0,
      max: 200,
    },
    unit: "%",
  },
  {
    name: "Saturation",
    property: "saturate",
    value: 100,
    range: {
      min: 0,
      max: 200,
    },
    unit: "%",
  },
  {
    name: "Grayscale",
    property: "grayscale",
    value: 0,
    range: {
      min: 0,
      max: 100,
    },
    unit: "%",
  },
  {
    name: "Sepia",
    property: "sepia",
    value: 0,
    range: {
      min: 0,
      max: 100,
    },
    unit: "%",
  },
  {
    name: "Hue Rotate",
    property: "hue-rotate",
    value: 0,
    range: {
      min: 0,
      max: 360,
    },
    unit: "deg",
  },
  {
    name: "Blur",
    property: "blur",
    value: 0,
    range: {
      min: 0,
      max: 20,
    },
    unit: "px",
  },
];

const ImageCard = ({ image, name, prompt, id }) => {
  const [openModal, setOpenModal] = useState(false);
  const [selectedOptionIndex, setSelectedOptionIndex] = useState(0);
  const [options, setOptions] = useState(DEFAULT_OPTIONS);
  const selectedOption = options[selectedOptionIndex];
  const [stylesDetail, setStylesDetail] = useState();

  const dispatch = useDispatch();

  const handleAddCart = (id) => {
    dispatch(add(id));
  };

  const handleSliderChange = ({ target }) => {
    setOptions((prevOptions) => {
      return prevOptions.map((option, index) => {
        if (index !== selectedOptionIndex) return option;
        return { ...option, value: target.value };
      });
    });
  };

  const getImageStyle = () => {
    const filters = options.map((option) => {
      return `${option.property}(${option.value}${option.unit})`;
    });

    return { filter: filters.join(" ") };
  };

  console.log(getImageStyle());

  return (
    <div className="rounded-xl group relative shadow-card hover:shadow-cardhover card h-auto ">
      <Image
        className="w-full sm:h-[400px] h-auto object-cover rounded-xl fit "
        src={image}
        alt={prompt}
        onClick={() => setOpenModal(true)}
      />
      <div className="group-hover:flex flex-col max-h-[94.5%] hidden absolute bottom-0 left-0 right-0 bg-[#10131f] m-2 p-4 rounded-md">
        <p className="text-white text-sm overflow-y-auto prompt">{prompt}</p>

        <div className="mt-5 flex justify-between items-center gap-2">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-full object-cover bg-green-700 flex justify-center items-center text-white text-xs font-bold">
              {name[0]}
            </div>
            <p className="text-white text-sm">{name}</p>
          </div>
          <button
            type="button"
            onClick={() => {}}
            className="outline-none bg-transparent border-none"
          ></button>

          <AiOutlineHeart onClick={() => handleAddCart(id)} />
        </div>
      </div>
      {openModal && (
        <Modal
          body={
            <div>
              <h1 className="pb-1 flex gap-1">
                {name} - <span className="text-[#5f5f5f]"> {prompt}</span>
              </h1>

              <div className="sm:flex justify-between">
                <div style={getImageStyle()}>
                  <Image
                    className=" w-full h-[400px] object-cover rounded-xl fit"
                    src={image}
                    alt={prompt}
                    onClick={() => setOpenModal(true)}
                  />
                </div>

                <div className="sm:mt-0 mt-10">
                  {options.map((option, index) => (
                    <SidebarItems
                      key={index}
                      name={option.name}
                      active={index === selectedOptionIndex}
                      handleClick={() => setSelectedOptionIndex(index)}
                    />
                  ))}
                </div>

                <Slider
                  min={selectedOption.range.min}
                  max={selectedOption.range.max}
                  value={selectedOption.value}
                  handleChange={handleSliderChange}
                />

                {stylesDetail}
              </div>
            </div>
          }
          handleClose={() => setOpenModal(false)}
        />
      )}
    </div>
  );
};

export default ImageCard;
