import Card from "@/components/Card";
import ImageCard from "@/components/ImageCard";
import Modal from "@/components/Modal";
import Searchbar from "@/components/Searchbar";
import Sidebar from "@/components/Sidebar";
import Link from "next/link";
import React, { useState } from "react";
import img1 from "@/public/girl.webp";
import img2 from "@/public/warrior.webp";
import img3 from "@/public/dora.webp";
import img4 from "@/public/car.webp";
import img5 from "@/public/ai.webp";
import img6 from "@/public/spider-samurai.jpeg";
import img7 from "@/public/bike.webp";

const index = () => {
  const card = [
    {
      id: 1,
      image: img1,
      name: "Samuel Esan",
      prompt: "A beautiful girl",
    },
    {
      id: 2,
      image: img2,
      name: "Samuel Esan",
      prompt: "A beautiful girl",
    },
    {
      id: 3,
      image: img3,
      name: "Samuel Esan",
      prompt: "A beautiful girl",
    },
    {
      id: 4,
      image: img4,
      name: "Samuel Esan",
      prompt: "A beautiful girl",
    },
    {
      id: 5,
      image: img5,
      name: "Samuel Esan",
      prompt: "A beautiful girl",
    },
    {
      id: 6,
      image: img6,
      name: "Samuel Esan",
      prompt: "A beautiful girl",
    },
  ];

  return (
    <div className="flex bg-[#13131a] h-auto min-h-[100vh] w-full ">
      <Sidebar />
      <div className="w-full">
        <Searchbar />
        <div className="flex justify-between w-full px-5  text-white">
          <div className="flex gap-3  rounded sm:flex hidden">
            <div className="bg-[#1c1c24] w-[200px] py-2 px-4 rounded">
              Gallery
            </div>
            <div className="bg-[#1c1c24] w-[200px] py-2 px-4 rounded">
              3d render
            </div>
          </div>
          <div className="">
            <Link href="/Create-Image">
              <button className="button p-2 px-10 rounded text-white hover:opacity-50 transition float-right">
                Generate
              </button>
            </Link>
          </div>
        </div>

        <div className="text-white p-5">
          <h1 className="">
            Browse collections of vector ai generated images with xgenrix{" "}
            <span className="logo "> ai.</span>
          </h1>
          <div className="grid lg:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2 grid-cols-1 sm:gap-3 gap-5 mt-5 ">
            {card.map((list) => (
              <ImageCard key={list.id} {...list} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
