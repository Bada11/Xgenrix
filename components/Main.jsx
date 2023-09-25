import React from "react";
import img from "@/public/leosplash-1.webp";
import Image from "next/image";
import Link from "next/link";

//text-[#E1D9D1]
const Main = () => {
  return (
    <div className="sm:p-10 xl:flex justify-between sm:mt-10 mt-[30%]">
      <div>
        <h1 className="sm:text-[60px] text-[55px] 0">
          Generate Random and amazing ai vectors{" "}
          <span className="logo">images</span> by just{" "}
          <span className="logo">prompts</span>.
        </h1>

        <p className="sm:w-[500px] w-full mt-5">
          Create production-quality visual assets for your projects with
          unprecedented quality, speed, and style-consistency.
        </p>

        <Link href="/SignIn">
          <button className="button p-2 rounded-full px-5 mt-5 hover:opacity-50 transition">
            Continue
          </button>
        </Link>
      </div>

      <Image src={img} width={500} height={500} className="" />
    </div>
  );
};

export default Main;
