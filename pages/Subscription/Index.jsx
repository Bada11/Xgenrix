import Sidebar from "@/components/Sidebar";
import React from "react";

const index = () => {
  return (
    <div className="bg-[#13131a] h-full xl:flex gap-5 text-white w-full">
      <Sidebar />

      <div className="sm:p-20 p-5 w-full ">
        <h1 className="text-[25px]">Subscription plans</h1>

        <div className="mt-10 grid grid-cols-1 xl:grid-cols-3 gap-5 sm:p-10">
          <div className="bg-[#1c1c24] h-auto rounded-[10px] text-center p-10">
            <h1 className="text-[30px]">Standard</h1>
            <h1 className="pb-10">$20/yr</h1>
            <hr className="" />
            <ul className="mt-5 text-[13px] 	list-style-type:disc text-left space-y-2">
              <li>One request at a time</li>
              <li>Up to two brands</li>
              <li>Average 2-3 request delivered</li>
            </ul>
            <button className="button p-2 rounded hover:opacity-50 transition w-full mt-5">
              Get started
            </button>
          </div>

          <div
            className="bg-[#1c1c24] h-auto rounded-[10px] text-center p-10 border-t border-t-[#00dbde] border-r border-r-[#fc00ff]
          border-l border-l-[#00dbde] border-b border-b-[#fc00ff]"
          >
            <h1 className="text-[30px]">Premium</h1>
            <h1 className="pb-10">$40/yr</h1>
            <hr className="" />
            <ul className="mt-5 text-[13px] 	list-style-type:disc text-left space-y-2">
              <li>One request at a time</li>
              <li>Up to ten brands</li>
              <li>Average 7-10 request delivered</li>
            </ul>
            <button className="button p-2 rounded hover:opacity-50 transition w-full mt-5">
              Get started
            </button>
          </div>
          <div className="bg-[#1c1c24] h-auto rounded-[10px] text-center p-10">
            <h1 className="text-[30px]">Enterprise</h1>
            <h1 className="pb-10">$30/yr</h1>
            <hr className="" />
            <ul className="mt-5 text-[13px] 	list-style-type:disc text-left space-y-2">
              <li>One request at a time</li>
              <li>Up to five brands</li>
              <li>Average 4-6 request delivered</li>
            </ul>
            <button className="button p-2 rounded hover:opacity-50 transition w-full mt-5">
              Get started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
