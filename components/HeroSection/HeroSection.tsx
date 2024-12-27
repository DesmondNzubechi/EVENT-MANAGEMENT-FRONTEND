import React from "react";
import HeroImg from "../../public/images/event1.avif";
import Link from "next/link";
import { TbTruckDelivery } from "react-icons/tb";
import { MdChair } from "react-icons/md";
import { MdPayments } from "react-icons/md";

import { useContext } from "react";
import { useUserStore } from "../store/store";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa6";

export const HeroSection = () => {
  const { user } = useUserStore();

  return (
    <>
      <div
        style={{
          background: `url(${HeroImg.src})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
        className="w-full flex flex-col px-[20px] after:absolute after:bg-[#071C1F99] after:w-full rounded-[10px] after:rounded-[10px] after:h-full after:top-0 after:left-0 my-[50px]  mt-[150px] relative backdrop-blur-[10px] py-[50px] h-[376px] justify-center   "
      >
        <div className="relative z-[2] flex flex-col justify-center items-center gap-[30px] ">
          <h1 className="md:text-[24px] text-[15px] text-[#FFFFFF] capitalize font-[500] leading-[27px] text-center ">
            Plan, Book, and Celebrate – All in One Place
          </h1>
          <p className="md:text-[20px] text-[12px] max-w-[700px] text-slate-50 font-[500] leading-[27px] text-center ">
            Your ultimate platform for seamless event management and hassle-free
            bookings. Discover venues, manage guests, and book services with
            ease.
          </p>
          <div className="flex items-center md:flex-row  mt-[30px] gap-[20px]  ">
            <Link
              href="/auth/signin"
              className="flex items-center p-[10px] gap-[5px] md:text-[15px] text-[12px] rounded-[6px] text-[#FFFFFF] bg-slate-900 hover:bg-slate-700 "
            >
              Get Started
            </Link>
            <Link
              href="/events"
              className="flex items-center p-[10px] md:text-[15px] text-[12px]  gap-[5px] rounded-[6px] hover:bg-slate-100 bg-[#FFFFFF] text-slate-900 "
            >
              Explore Events
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
