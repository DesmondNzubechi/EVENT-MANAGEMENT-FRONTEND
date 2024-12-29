import { HiXMark } from "react-icons/hi2";
import Image from "next/image";
import { useState } from "react";
import { EventType } from "../types/types";
import { IoLocationOutline } from "react-icons/io5";
import { useRouter } from "next/router";
import { api } from "../lib/api";
import { toast } from "react-toastify";
import { HashLoader } from "react-spinners";
import { useUserStore } from "../store/store";

interface EventModalProps {
  setEventModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
  event: EventType;
}

export default function EventModal(props: EventModalProps) {
  const { setEventModalVisible, event } = props;
  const { user } = useUserStore();
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();

  const BookAnEventData = async (id: string) => {
    setLoading(true);
    try {
      const response = await api.post(
        `/booking/bookEvent/${id}`,
        {},
        { withCredentials: true }
      );
      const bookingResponse = response.data.data.data;
      const paymentLink = response.data.data.data.paymentUrl;
      router.push(paymentLink);

    } catch (error) {
      toast.info(
        "Sorry, you cannot book this event at the moment. This feature is only available in the development environment, as the payment API is set up for testing purposes and not for production."
      );
      
    
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {loading && (
        <div className="fixed bg-tpr w-full z-[500] left-0 right-0 flex justify-center h-full top-0 bottom-0 items-center">
          <HashLoader color="#0000FF" size={100} />
        </div>
      )}
      <div className="bg-[#071C1F99] z-[10000] no-scrollbar fixed w-full justify-center md:flex px-[20px] items-center py-[50px] top-0 bottom-0 left-0 right-0">
        <div className="flex bg-[#FFFFFF] left-0 right-0 w-full  max-w-[1200px] h-[90vh] no-scrollbar rounded-[10px] overflow-y-auto flex-col gap-5">
          <button
            onClick={() => setEventModalVisible(false)}
            className="p-2 bg-[#FFFFFF] hover:bg-slate-50 rounded-full shadow-xl fixed top-[20px] right-[60px]"
          >
            <HiXMark className="text-[20px] text-[#404040]" />
          </button>
          <div className="flex px-[20px] py-[20px] flex-row justify-between gap-2">
            <h1 className="text-[20px] text-[#1A1A1A] leading-[24px] font-[500]">
              {event.title}
            </h1>
          </div>

          <div className="flex flex-col bg-[#CBCAC74D] px-[20px] py-[20px] gap-[50px] md:justify-around md:flex-row">
            <div className="flex flex-col w-full max-w-[556px] gap-5">
              <div className="relative mb-4">
                <Image
                  src={event.image}
                  alt={`Event Image ${currentImageIndex + 1}`}
                  className="object-cover h-[400px] rounded-lg w-full"
                  width={500}
                  height={500}
                />
              </div>
            </div>

            {/* Event Info Section */}
            <section className="flex flex-col w-full max-w-[500px] gap-[20px] border p-[10px] rounded-[10px]">
              <section className="flex flex-col gap-[10px] border p-[10px] rounded-[10px]">
                <h2 className="font-[500] text-[#161616]">About</h2>
                <p className="text-[#404040] text-[14px] leading-[25px] font-[400]">
                  {event.description}
                </p>
              </section>
              <ul className="flex flex-col gap-[10px]">
                <li className="border-b p-[10px] flex justify-between items-center text-[#404040] font-[400] text-[14px]">
                  Date: <span>{event.date}</span>
                </li>
                <li className="border-b p-[10px] flex justify-between items-center text-[#404040] font-[400] text-[14px]">
                  <IoLocationOutline className="text-[#0000FF] text-[16px]" />{" "}
                  <span>{event.location}</span>
                </li>
                <li className="border-b p-[10px] flex justify-between items-center text-[#404040] font-[400] text-[14px]">
                  Total Tickets: <span>{event.totalTicket}</span>
                </li>
                <li className="border-b p-[10px] flex justify-between items-center text-[#404040] font-[400] text-[14px]">
                  Available Tickets: <span>{event.availableTicket}</span>
                </li>
                <li className="p-[10px] flex justify-between items-center text-[#404040] font-[400] text-[14px]">
                  Ticket Price: <span>{event.price} NGN</span>
                </li>
              </ul>
              <button
                disabled={loading}
                type="button"
                onClick={() => {
                  if (!user) {
                    toast.error(
                      "Kindly login before you can perform this action"
                    );
                    return;
                  }
                  BookAnEventData(event._id);
                }}
                className="bg-[#0000FF] text-white font-[500] py-[10px] px-[24px] rounded-[8px]"
              >
                {loading? "Buying..." : "Buy Tickets"}
              </button>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
