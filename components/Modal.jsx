import React from "react";
import { AiOutlineClose } from "react-icons/ai";

const Modal = ({ body, handleClose }) => {
  return (
    <>
      <div className=" justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-neutral-800 bg-opacity-70 ">
        <div className=" relative w-full  lg:w-3/6 my-6 mx-auto lg:max-w-3xl h-full lg:h-auto ">
          <div className=" w-full lg:h-auto border-0 rounded-lg shadow-lg relative  flex flex-col h-full  bg-[#13131a] outline-none focus:outline-none">
            <div className="flex items-center justify-between p-5 rounded-t text-center">
              <button onClick={handleClose}>
                <AiOutlineClose size={20} color="white" />
              </button>
            </div>
            <div className="relative p-5 flex-auto">{body}</div>
            <div className="p-10"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
