import Image from "next/image";
import { IoLocationOutline } from "react-icons/io5";
import { EventType } from "../types/types";
import EventModal from "../modals/eventModal";
import { useState } from "react";
import { api } from "../lib/api";
import { toast } from "react-toastify";
import { HashLoader } from "react-spinners";
import { useRouter } from "next/router";

const EventCard = ({ event }: { event: EventType }) => {
  const [modalVisible, setEventModalVisible] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [clickedEvent, setClickedEvent] = useState<EventType>({
    _id: "",
    title: "",
    description: "",
    date: "",
    price: 0,
    location: "",
    totalTicket: 0,
    availableTicket: 0,
    image: "",
  });
  const router = useRouter();

  const fetchAnEventData = async (id: string) => {
    setLoading(true);
    try {
      const response = await api.get(`/event/event/${id}`);
      const eventResponse = response.data.data.data;
      setClickedEvent(eventResponse);
      console.log("The response", eventResponse);
    } catch (error) {
      toast.error(
        "An error occured while trying to view this event. Please try again."
      );
      console.log("The error is here", error);
    } finally {
      setLoading(false);
    }
  };

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
      console.log("The booking response is here", bookingResponse);
    } catch (error) {
      toast.error(
        "An error occured while trying to view this event. Please try again."
      );
      console.log("The error is here", error);
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
      {modalVisible && (
        <EventModal event={event} setEventModalVisible={setEventModalVisible} />
      )}
      <div
        key={event?.title}
        className="flex flex-col border shadow-lg gap-[10px] rounded-[10px] bg-[#FFFFFF] p-[15px]"
      >
        <Image
          src={event?.image}
          alt={event?.title}
          className="rounded-[6px] w-full h-[200px]"
          width={300}
          height={200}
        />
        <div className="flex flex-col p-[10px] gap-[15px]">
          <div className="flex flex-col gap-[10px] justify-between">
            <h1 className="text-[#1A1A1A] uppercase font-bold text-[16px]">
              {event?.title}
            </h1>
            <p className="text-[#404040] text-[14px]">
              {event?.date} | {event?.price.toLocaleString()} NGN
            </p>
          </div>
          <div className="flex flex-row gap-[10px] items-center">
            <IoLocationOutline className="text-[#0000FF] text-[16px]" />
            <span className="text-[14px] font-medium text-[#404040]">
              {event?.location}
            </span>
          </div>
          <div className="flex flex-row gap-5 items-center">
            <h1 className="font-medium text-[#1A1A1A] text-[14px]">
              Tickets Available:
            </h1>
            <p className="text-[12px] font-medium text-[#404040]">
              {event?.availableTicket}/{event?.totalTicket}
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <button
            className="bg-[#0000FF] rounded-[8px] py-[10px] px-[16px] text-[#FFFFFF] font-medium"
            onClick={() => BookAnEventData(event._id)}
          >
            {"Book Now"}
          </button>
          <button
            disabled={loading}
            className="bg-[#FFFFFF] border border-[#0000FF] rounded-[8px] py-[10px] px-[16px] text-[#0000FF] font-medium"
            onClick={() => setEventModalVisible(true)}
          >
            {loading ? "viewing Event" : " View Details"}
          </button>
        </div>
      </div>
    </>
  );
};

export default EventCard;
