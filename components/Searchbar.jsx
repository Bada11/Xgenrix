import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { GoHome } from "react-icons/go";
import { RxDashboard } from "react-icons/rx";
import { AiOutlineHeart, AiOutlineSetting } from "react-icons/ai";
import { BiLogOut } from "react-icons/bi";
import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/router";
import { MdOutlinePayment } from "react-icons/md";
import { BsPerson } from "react-icons/bs";

const Searchbar = () => {
  const { data: session } = useSession();
  const [showSidebar, setShowSidebar] = useState(false);
  const router = useRouter();

  const signout = () => {
    signOut();
    router.push("/login");
  };

  return (
    <>
      <div className="p-5 flex gap-3">
        <input
          className="w-full bg-[#1c1c24] rounded p-1 px-2"
          placeholder="Search ai images..."
        />
        <div></div>
        {session ? (
          <Image
            src={session?.user?.image}
            width={35}
            height={35}
            className="rounded-full"
          />
        ) : (
          <BsPerson className="text-[30px] text-white" />
        )}

        {!showSidebar ? (
          <AiOutlineMenu
            className="text-[30px] text-white mt-1 xl:hidden"
            onClick={() => setShowSidebar(true)}
          />
        ) : (
          <AiOutlineClose
            className="text-[30px] text-white mt-1 xl:hidden"
            onClick={() => setShowSidebar(false)}
          />
        )}
      </div>

      {showSidebar && (
        <div className="shadow-card text-white xl:p-5 xl:pr-10 xl:border-r border-r-[#5f5f5f] w-[230px] cursor-pointer z-50 top-0 p-7 fixed bg-[#13131a] h-full xl:hidden">
          <h1 className="text-white  gap-1 xl:hidden">
            Xgenrix <span className="logo "> ai.</span>
          </h1>
          <ul className="mt-20 flex flex-col gap-7 xl:hidden">
            <Link href="/Home">
              <li className="flex gap-2 hover:logo">
                <GoHome className="text-[22px]" />
                Home
              </li>
            </Link>
            <li className="flex gap-2">
              <RxDashboard className="text-[22px]" />
              Dashboard
            </li>
            <li className="flex gap-2">
              <AiOutlineHeart className="text-[22px]" />
              Favorites
            </li>
            <Link href="/Subscription">
              <li className="flex gap-2">
                <MdOutlinePayment className="text-[22px]" />
                Subscription
              </li>
            </Link>
            <li className="flex gap-2">
              <AiOutlineSetting className="text-[22px]" />
              Settings
            </li>
          </ul>

          <div className="fixed bottom-5 xl:hidden">
            <li className="flex gap-2" onClick={signout}>
              <BiLogOut className="text-[22px]" />
              LogOut
            </li>
          </div>
        </div>
      )}
    </>
  );
};

export default Searchbar;
