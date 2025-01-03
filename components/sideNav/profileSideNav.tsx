import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

import { LiaUserEditSolid } from "react-icons/lia";
import { MdDashboard, MdLogout } from "react-icons/md";

import { RiLockPasswordFill } from "react-icons/ri";
import { useUserStore } from "../store/store";
import { LogOut } from "../logOut/loagOut";
import { TbBrandBooking } from "react-icons/tb";
import { toast } from "react-toastify";

const ProfileSideNavBar = () => {
  const router = useRouter();
  const { user, clearUser } = useUserStore();
  const [pathname, setPathname] = useState<string>("");
  const [logOut, setLogOut] = useState(false);

  useEffect(() => {
    if (router.isReady) {
      setPathname(router.pathname);
    }
  }, [router.isReady, router.pathname]);

  const profileLinks = [
    {
      name: "Dashboard",
      link: "/my-account",
      icon: MdDashboard,
    },
    {
      name: "Edit profile",
      link: "/my-account/edit-profile",
      icon: LiaUserEditSolid,
    },
    {
      name: "Change Password",
      link: "/my-account/change-password",
      icon: RiLockPasswordFill,
    },
    {
      name: "Booked Events",
      link: "/my-account/my-bookings",
      icon: TbBrandBooking,
    },
  ];

  useEffect(() => {
    if (!user) {
      toast.error("Kindly login.");
      router.push("/auth/login");
    }
  }, []);

  return (
    <>
      <LogOut logOut={logOut} setLogOut={setLogOut} />
      <div className=" hidden lg:flex  left-0 top-[100px] lg:w-full  flex-col mt-[20px]  p-6 ">
        <ul className="flex flex-col h-full  px-[20px] ">
          {profileLinks.map((link) => {
            return (
              <Link
                href={link.link}
                className={`flex items-center gap-2 font-[500] py-[20px] ${
                  link.link === pathname && pathname.includes(link.link)
                    ? "text-[#1A1A1A]    border-r-[4px] border-[#0000FF]  "
                    : "text-[#666666]  border-r-[4px] border-gray "
                } px-[10px]  cursor-pointer   hover:text-black`}
              >
                <link.icon className="" />
                <span>{link.name}</span>
              </Link>
            );
          })}
          <button
            onClick={() => setLogOut(true)}
            className=" border-r-[4px] border-gray"
          >
            {" "}
            <li className="text-red-700 w-fit px-[20px] py-[10px] hover:text-red-900 rounded font-[400] gap-[10px] text-[16px]  leading-[18.75px] flex items-center">
              <MdLogout className="text-[16px] " /> Logout
            </li>
          </button>
        </ul>
      </div>
    </>
  );
};

export default ProfileSideNavBar;
