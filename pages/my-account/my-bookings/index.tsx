import { useEffect, useState } from "react";
import { FiEye } from "react-icons/fi";
import ProfileSideNavBar from "@/components/sideNav/profileSideNav";
import { api } from "@/components/lib/api";
import { toast } from "react-toastify";
import { DesktopNav } from "@/components/Navbar/desktopNav";
import { MobileNav } from "@/components/Navbar/mobileNav";
import { Footer } from "@/components/Footer/footer";
import { LuDownload } from "react-icons/lu";
import Link from "next/link";
import { BookingSkeleton } from "@/components/skeletonLoader/bookingSkeletonLoader";
import { BookingType } from "@/components/types/types";
import BookingModal from "@/components/modals/bookingModal";
import { useBookedEventStore } from "@/components/store/store";

export default function MyBookedEvent() {
  const { bookedEvent, setBookedEvent } = useBookedEventStore();
  const [clickedBooking, setClickedBooking] = useState<
    BookingType | undefined
  >();
  const [bookingModalVisible, setBookingModalVisible] =
    useState<boolean>(false);

  const [loading, setLoading] = useState<boolean>(false);

  const fetchUserBookedEvent = async () => {
    setLoading(true);

    try {
      const response = await api.get("/booking/getUserBookedEvent", {
        withCredentials: true,
      });
      console.log("The response is here", response);
      const theBookings = response.data.data.data;
      setBookedEvent(theBookings);
    } catch (error: unknown | any) {
      toast.error(error?.response?.data?.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUserBookedEvent();
  }, []);

  return (
    <>
      {bookingModalVisible && (
        <BookingModal
          booking={clickedBooking}
          setBookingModalVisible={setBookingModalVisible}
        />
      )}
      <DesktopNav />
      <MobileNav />
      <div className="grid grid-cols-1 my-[150px] gap-[50px] lg:grid-cols-4 px-[20px] ">
        <ProfileSideNavBar />

        <div className="  p-4 lg:col-span-3">
          <h1 className="text-[16px] py-[10px] uppercase text-[#1A1A1A] mb-[20px] border-b-[1px]  font-[500] leading-[19.2px] ">
            my bookings
          </h1>
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
                  bookedEvent?.map((order: BookingType, index: number) => (
                    <tr key={index} className="border-b py-[8px] px-[6px] ">
                      <td className="p-[10px] text-[14px] text-[#1A1A1A] ">
                        0{index + 1}
                      </td>
                      <td className="p-[10px] flex flex-col text-[14px] text-[#1A1A1A] ">
                        {order.event.title}
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
                        {order.paymentStatus !== "pending" && (
                          <Link
                            href=""
                            className="border-[1px] border-[#CBCAC780] p-2 rounded-[4px]  "
                          >
                            <LuDownload className="text-gray-500 text-[14px] hover:text-blue-500 cursor-pointer" />
                          </Link>
                        )}
                        <button
                          type="button"
                          onClick={() => {
                            setBookingModalVisible(true);
                            setClickedBooking(order);
                          }}
                          className="border-[1px] border-[#CBCAC780] p-2 rounded-[4px]  "
                        >
                          <FiEye className="text-gray-500 text-[14px]  hover:text-green-500 cursor-pointer" />
                        </button>
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
