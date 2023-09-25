import React, { useEffect, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import axios from "axios";

const index = () => {
  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {}, []);

  const signin = () => {
    signIn();
    router.push("/Home");
  };

  useEffect(() => {
    if (signin) {
      router.push("/Home");
    }
  });

  return (
    <div className="gradient-bg h-full min-h-[100vh] xl:px-20 text-white pt-2 w-full">
      <button
        className="flex gap-4 p-2 rounded hover:opacity-50 transition w-full mt-5"
        onClick={signin}
      >
        <FcGoogle className="text-[25px]" />
        Continue with Google
      </button>
    </div>
  );
};

export default index;
