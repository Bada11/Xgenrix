import About from "@/components/About";
import About2 from "@/components/About2";
import Community from "@/components/Community";
import Footer from "@/components/Footer";
import Main from "@/components/Main";
import Navbar from "@/components/Navbar";
import React from "react";

const index = () => {
  return (
    <div className="gradient-bg  text-white h-full">
      <div className="fixed w-full">
        <Navbar />
      </div>
      <div className="sm:p-20 p-5">
        <Main />
        <About />
        <About2 />
        <Community />
        <Footer />
      </div>
    </div>
  );
};

export default index;
