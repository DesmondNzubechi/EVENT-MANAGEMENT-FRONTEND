import Image from "next/image";
import { ChangeEvent, useEffect, useState } from "react";
import { FiEdit, FiEye, FiEyeOff } from "react-icons/fi";
import userImg from "../../../public/IMAGES/user.jpg";
import { RxPencil1 } from "react-icons/rx";
import ProfileSideNavBar from "@/components/sideNav/profileSideNav";
import { useBookedEventStore, useUserStore } from "@/components/store/store";
import { useRouter } from "next/router";

import { api } from "@/components/lib/api";
import { toast } from "react-toastify";
import { HashLoader } from "react-spinners";
import { DesktopNav } from "@/components/Navbar/desktopNav";
import { MobileNav } from "@/components/Navbar/mobileNav";
import { Footer } from "@/components/Footer/footer";
import { IoIosArrowForward } from "react-icons/io";
import { RiDeleteBinLine } from "react-icons/ri";
import { LuDownload } from "react-icons/lu";
import Link from "next/link";
import { BookingSkeleton } from "@/components/skeletonLoader/bookingSkeletonLoader";
import { BookingType } from "@/components/types/types";

export default function AccountDetails() {

  const router = useRouter();
  const {bookedEvent, setBookedEvent} = useBookedEventStore()

console.log("The booked events", bookedEvent)
  const [loading, setLoading] = useState<boolean>(false);

  const fetchUserBookedEvent = async () => {
    setLoading(true);

    try {
      const response = await api.get("/booking/getUserBookedEvent", {
        withCredentials: true,
      });
      console.log("The response is here", response);
      const theBookings = response.data.data.data;
      setBookedEvent(theBookings)
    } catch (error) {
      toast.error("An error occured. Please try again");
      console.log(error, "The error is here");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUserBookedEvent();
  }, []);

  useEffect(() => {}, []);

  return (
    <>
      {/* {loading && (
        <div className="fixed bg-tpr w-full z-[500] left-0 right-0 flex justify-center h-full top-0 bottom-0 items-center">
          <HashLoader color="#FD830D" size={100} />
        </div>
      )} */}
      <DesktopNav />
      <MobileNav />
      <div className="grid grid-cols-1 my-[150px] gap-[50px] lg:grid-cols-4 px-[20px] ">
        <ProfileSideNavBar />

        <div className="  p-4 lg:col-span-3">
          <h1 className="text-[16px] py-[10px] uppercase text-[#1A1A1A] mb-[20px] border-b-[1px]  font-[500] leading-[19.2px] ">
            my bookings
          </h1>

          {/* User Avatar and Buttons */}
          <div className=" overflow-x-auto ">
            <table className=" overflow-x-scroll w-full rounded-[20px] border bg-white">
              <thead className="bg-[#EAF0FC4D] py-[5px] px-[6px] ">
                <tr>
                  <th className="py-[10px] px-[12px] text-[12px] leading-[14.4px] text-[#404040] ">
                    S/N
                  </th>
                  <th className="py-[10px] px-[12px] text-[12px] leading-[14.4px] text-[#404040] ">
                    Event Name
                  </th>
                  <th className="py-[10px] px-[12px] text-[12px] leading-[14.4px] text-[#404040] ">
                    Event Date
                  </th>
                  <th className="py-[10px] px-[12px] text-[12px] leading-[14.4px] text-[#404040] ">
                    Ticket price
                  </th>
                  <th className="py-[10px] px-[12px] text-[12px] leading-[14.4px] text-[#404040] ">
                    Booked Date
                  </th>
                  <th className="py-[10px] px-[12px] text-[12px] leading-[14.4px] text-[#404040] ">
                    Payment Status
                  </th>
                  <th className="py-[10px] px-[12px] text-[12px] leading-[14.4px] text-[#404040] ">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {loading ? (
                  <BookingSkeleton />
                ) : (
                  bookedEvent?.map((order : BookingType, index: number) => (
                    <tr key={index} className="border-b py-[8px] px-[6px] ">
                      <td className="p-[10px] text-[14px] text-[#1A1A1A] ">
                       0{index + 1}
                      </td>
                      <td className="p-[10px] flex flex-col text-[14px] text-[#1A1A1A] ">
                        {order.event.title}
                        {/* <Image src={order.event.image} height={100} width={100} alt={`event image ${order.event.title}`} /> */}
                      </td>
                      <td className="p-[10px] text-[14px] text-[#1A1A1A] ">
                        {order.event.date}
                      </td>
                      <td className="p-[10px] text-[14px] text-[#1A1A1A] ">
                       N {order.event.price}
                      </td>
                      <td className="p-[10px] text-[14px] text-[#1A1A1A] ">
                      {new Date(order.dateBooked).toLocaleString()}
                      </td>
                      <td className="p-[10px] text-[14px] text-[#1A1A1A] ">
                        <span
                          className={`py-[4px] px-[12px] rounded-[5px] text-sm ${
                            order.paymentStatus === "Confirmed"
                              ? "bg-[#CFFFE691] text-[#0BD36D] "
                              : "bg-red-100 text-red-700 "
                          }`}
                        >
                          {order.paymentStatus}
                        </span>
                      </td>
                      <td className="py-2 px-4 flex space-x-2">
                      { order.paymentStatus !== "pending" && <Link
                          href=""
                          className="border-[1px] border-[#CBCAC780] p-2 rounded-[4px]  "
                        >
                          <LuDownload className="text-gray-500 text-[14px] hover:text-blue-500 cursor-pointer" />
                        </Link>}
                        <Link
                          href="/vault/payment-history/hhdhgdgg"
                          className="border-[1px] border-[#CBCAC780] p-2 rounded-[4px]  "
                        >
                          <IoIosArrowForward className="text-gray-500 text-[14px]  hover:text-green-500 cursor-pointer" />
                        </Link>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
