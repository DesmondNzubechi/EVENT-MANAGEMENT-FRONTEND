import Image from "next/image";
import { IoLocationOutline } from "react-icons/io5";
import { EventType } from "../types/types";


const EventCard = ({ event }: { event: EventType }) => {
  return (
          <div
            key={event.title}
            className="flex flex-col border shadow-lg gap-[10px] rounded-[10px] bg-[#FFFFFF] p-[15px]"
          >
            <Image
              src={event.image}
              alt={event.title}
              className="rounded-[6px] w-full h-[200px]"
              width={300}
              height={200}
            />
            <div className="flex flex-col p-[10px] gap-[15px]">
              <div className="flex flex-col gap-[10px] justify-between">
                <h1 className="text-[#1A1A1A] uppercase font-bold text-[16px]">
                  {event.title}
                </h1>
                <p className="text-[#404040] text-[14px]">
                  {event.date} | {event.price.toLocaleString()} USD
                </p>
              </div>
              <div className="flex flex-row gap-[10px] items-center">
                <IoLocationOutline className="text-[#0000FF] text-[16px]" />
                <span className="text-[14px] font-medium text-[#404040]">
                  {event.location}
                </span>
              </div>
              <div className="flex flex-row gap-5 items-center">
                <h1 className="font-medium text-[#1A1A1A] text-[14px]">
                  Tickets Available:
                </h1>
                <p className="text-[12px] font-medium text-[#404040]">
                  {event.availableTicket}/{event.totalTicket}
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <button
                className="bg-[#0000FF] rounded-[8px] py-[10px] px-[16px] text-[#FFFFFF] font-medium"
                onClick={() => alert("Book this event")}
              >
                Book Now
              </button>
              <button
                className="bg-[#FFFFFF] border border-[#0000FF] rounded-[8px] py-[10px] px-[16px] text-[#0000FF] font-medium"
                onClick={() => alert("View Event Details")}
              >
                View Details
              </button>
            </div>
          </div>
       
  );
};

export default EventCard;
