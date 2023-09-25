import React, { useEffect } from "react";
import { GoHome } from "react-icons/go";
import { RxDashboard } from "react-icons/rx";
import { AiOutlineHeart, AiOutlineSetting } from "react-icons/ai";
import { BiLogOut } from "react-icons/bi";
import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/router";
import { MdOutlinePayment } from "react-icons/md";
import Link from "next/link";

const Sidebar = () => {
  const { data: session } = useSession();
  const router = useRouter();

  const signout = () => {
    signOut();
    router.push("/login");
  };

  return (
    <div className="text-white xl:p-5 xl:pr-10 xl:border-r border-r-[#5f5f5f] cursor-pointer">
      <h1 className="text-white xl:flex hidden gap-1">
        Xgenrix <span className="logo"> ai.</span>
      </h1>
      <ul className="mt-20 flex flex-col gap-7 xl:flex hidden">
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
        <Link href="/Cart">
          <li className="flex gap-2">
            <AiOutlineHeart className="text-[22px]" />
            Favorites
          </li>
        </Link>
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

      <div className="fixed bottom-5 xl:flex hidden">
        <li className="flex gap-2" onClick={signout}>
          <BiLogOut className="text-[22px]" />
          LogOut
        </li>
      </div>
    </div>
  );
};

export default Sidebar;
