import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { CiLock } from "react-icons/ci";
import { IoSettingsOutline } from "react-icons/io5";

import { LiaUserEditSolid } from "react-icons/lia";
import { MdLogout, MdOutlineMessage, MdPayment } from "react-icons/md";
import { PiUserSquareBold } from "react-icons/pi";
import { RiLockPasswordFill } from "react-icons/ri";
import { useUserStore } from "../store/store";
import { LogOut } from "../logOut/loagOut";

const ProfileSideNavBar = () => {
  const router = useRouter();
  const {user, clearUser} = useUserStore()
  const [pathname, setPathname] = useState<string>("");
  const [logOut, setLogOut] = useState(false)

  useEffect(() => {
    if (router.isReady) {
      setPathname(router.pathname);
    }
  }, [router.isReady, router.pathname]);

  const profileLinks = [
    {
      name: "Account details",
      link: "/profile",
      icon: LiaUserEditSolid,
    },
    {
      name: "Change Password",
      link: "/profile/change-password",
      icon: RiLockPasswordFill,
    },
    {
      name: "KYC",
      link: "/profile/kyc",
      icon: PiUserSquareBold,
    },
    {
      name: "Message",
      link: "/profile/message",
      icon: MdOutlineMessage,
    },
    // {
    //   name: "Billing method",
    //   link: "/profile/billing-method",
    //   icon: MdPayment,
    // },
    {
      name: "Settings",
      link: "/profile/settings",
      icon: IoSettingsOutline,
    },
    {
      name: "Security",
      link: "/profile/security",
      icon: CiLock,
    },
  ];

  return (
    <>
      <LogOut logOut={logOut} setLogOut={setLogOut} />
    <div className=" hidden lg:flex  left-0 top-[100px] lg:w-full  flex-col mt-[20px]  p-6 ">
  
      {/* Menu Items */}
      <ul className="flex flex-col h-full  px-[20px] ">
        {/* Orders */}

        {profileLinks.map((link) => {
          return (
            <Link
              href={link.link}
              className={`flex items-center gap-2 font-[500] py-[20px] ${
                link.link === pathname && pathname.includes(link.link)
                  ? "text-[#1A1A1A]    border-r-[4px] border-[#FD830D]  "
                  : "text-[#666666]  border-r-[4px] border-gray "
              } px-[10px]  cursor-pointer   hover:text-black`}
            >
              <link.icon className="" />
              <span>{link.name}</span>
            </Link>
          );
        })}
          <button onClick={() => setLogOut(true)}>  <li className="text-slate-50 w-fit px-[20px] py-[10px] hover:bg-red-700 rounded font-[400] gap-[10px] text-[16px] bg-red-500 leading-[18.75px] flex items-center"><MdLogout className="text-[16px] "/> Logout</li></button>
      </ul>
      </div>
      </>
  );
};

export default ProfileSideNavBar;
