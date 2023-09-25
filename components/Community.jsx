import Link from "next/link";
import React from "react";

const Community = () => {
  return (
    <div className="mt-20 button rounded-[20px] p-10">
      <h1 className="text-[25px]">
        Log into our app and be <br />
        part of a creative community!
      </h1>
      <Link href="/Signin">
        <button className="bg-purple-400 p-3 mt-5 rounded-[10px] px-5">
          Join Community
        </button>
      </Link>
    </div>
  );
};

export default Community;
