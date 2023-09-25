import React, { useEffect, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import axios from "axios";
import Link from "next/link";

const index = () => {
  const { data: session } = useSession();
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [userpassword, setUserpassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  /*const signin = () => {
    signIn();
    router.push("/Home");
  };

  useEffect(() => {
    if (signin) {
      router.push("/Home");
    }
  }, []);*/

  const register = async () => {
    setIsLoading(true);
    try {
      const response = await axios.post("/api/signin", {
        name,
        email,
        userpassword,
      });

      console.log(response.data);

      router.push("/login");
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (register) {
      router.push("/login");
    }
  });

  return (
    <div className="gradient-bg h-full xl:px-20 text-white pt-2 w-full min-h-[100vh] ">
      <div className="xl:px-20 p-5 space-y-5">
        <div className="xl:p-20 p-10 bg-[#13131a] rounded-[20px] space-y-5">
          <h1 className="text-[25px]">Sign In</h1>
          <p className="text-[#5f5f5f]">Create an account with xgenrix</p>
          <div className="w-full pt-5 flex flex-col gap-2">
            <label className="pb-5">
              <h1 className="pb-1">Enter name</h1>
              <input
                className="w-full bg-[#1c1c24] p-2 rounded px-4"
                placeholder="Enter name"
                onChange={(e) => setName(e.target.value)}
              />
            </label>
            <label className="pb-5">
              <h1 className="pb-1">Enter email</h1>
              <input
                className="w-full bg-[#1c1c24] p-2 rounded px-4 "
                placeholder="Enter email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
            <label className="pb-5">
              <h1 className="pb-1">Enter password</h1>
              <input
                className="w-full bg-[#1c1c24] p-2 rounded px-4"
                placeholder="Enter password"
                onChange={(e) => setUserpassword(e.target.value)}
              />
            </label>

            {isLoading ? (
              <button className="button p-2 rounded opacity-50 transition w-full mt-5">
                Signing in...
              </button>
            ) : (
              <button
                className="button p-2 rounded hover:opacity-50 transition w-full mt-5"
                onClick={register}
              >
                Sign In
              </button>
            )}

            <Link href="/google">
              <button
                className="flex gap-4 p-2 rounded hover:opacity-50 transition w-full mt-5"
                //onClick={signin}
              >
                <FcGoogle className="text-[25px]" />
                Continue with Google
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
