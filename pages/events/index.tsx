import EventCard from "@/components/eventCard/eventCard";
import { DesktopNav } from "@/components/Navbar/desktopNav";
import { MobileNav } from "@/components/Navbar/mobileNav";
import { events } from "@/components/theEvents/theEvents";
import Image from "next/image";
import { IoLocationOutline } from "react-icons/io5";

interface EventType {
  title: string;
  description: string;
  date: string;
  price: number;
  location: string;
  totalTicket: number;
  availableTicket: number;
  image: string;
}

const Events = () => {
    return (
        <>
            <DesktopNav />
            <MobileNav/>
    <div className="grid  gap-5 px-[20px] mt-[150px]">
    
     
      <div className="grid  lg:grid-cols-3 py-[50px] pt-[100px] gap-[25px]">
        {events.map((event) => (
         <EventCard event={event}/>
        ))}
      </div>
            </div>
            </>
  );
};

export default Events;
