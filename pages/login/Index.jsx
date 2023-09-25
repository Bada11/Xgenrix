import React, { useEffect, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import axios from "axios";
import Link from "next/link";

const Index = () => {
  const { data: session } = useSession();
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [userpassword, setUserpassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {}, []);

  /*const signin = () => {
    signIn();
    router.push("/Home");
  };

  useEffect(() => {
    if (signin) {
      router.push("/Home");
    }
  }, []);*/

  const login = async () => {
    if (email && userpassword) {
      setIsLoading(true);
      try {
        await axios
          .post("/api/login", { email, userpassword })
          .then((result) => {
            console.log(result);
            if (result.data === "Success!") {
              router.push("/Home");
            } else if (result.data === "Something went wrong!") {
              console.log("Incorrect password!");
            } else {
              if (result.data === "User does not exist!") {
                console.log("User does not exist");
              }
            }
          });
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <div className="gradient-bg h-full min-h-[100vh] xl:px-20 text-white pt-2 w-full">
      <div className="xl:px-20 p-5 space-y-5">
        <div className="xl:p-20 p-10 bg-[#13131a] rounded-[20px] space-y-5">
          <h1 className="text-[25px]">Login</h1>
          <p className="text-[#5f5f5f]">Login your account with xgenrix</p>
          <div className="w-full pt-5 flex flex-col gap-2">
            <label className="pb-5">
              <h1 className="pb-1">Enter email</h1>
              <input
                className="w-full bg-[#1c1c24] p-2 rounded px-4 "
                placeholder="Enter email"
                type="email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
            <label className="pb-5">
              <h1 className="pb-1">Enter password</h1>
              <input
                className="w-full bg-[#1c1c24] p-2 rounded px-4"
                placeholder="Enter password"
                type="password"
                onChange={(e) => setUserpassword(e.target.value)}
              />
            </label>

            {!isLoading ? (
              <button
                className="button p-2 rounded hover:opacity-50 transition w-full mt-5"
                onClick={login}
              >
                Login
              </button>
            ) : (
              <button className="button p-2 rounded opacity-50 transition w-full mt-5">
                Logging in...
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

export default Index;
