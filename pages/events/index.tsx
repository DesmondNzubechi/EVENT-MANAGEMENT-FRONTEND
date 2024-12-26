import EventCard from "@/components/eventCard/eventCard";
import { Footer } from "@/components/Footer/footer";
import { api } from "@/components/lib/api";
import { DesktopNav } from "@/components/Navbar/desktopNav";
import { MobileNav } from "@/components/Navbar/mobileNav";
import { Reviews } from "@/components/Reviews/reviews";
import EventSkeletonLoader from "@/components/skeletonLoader/eventSkeletonLoader";
import { useEventStore } from "@/components/store/store";
import { events } from "@/components/theEvents/theEvents";
import Image from "next/image";
import { useEffect, useState } from "react";
import { IoLocationOutline } from "react-icons/io5";



const Events = () => {

  const {setEvent, event} = useEventStore()
  const [loading, setLoading] = useState<boolean>(false)
  
  console.log("the fetched events", event)
  const fetchEventData = async () => {
  setLoading(true)
    try {
      const response = await api.get("/event/getAllEvent");
      const theEvents = response.data.data.data;
      setEvent(theEvents)
      console.log("This is the response", response)

    } catch (error) {
      console.log("The error", error)
    } finally {
      setLoading(false)
    }

}

  useEffect(() => {
fetchEventData()
  }, [])

    return (
        <>
            <DesktopNav />
            <MobileNav/>
    <div className="grid  gap-5 px-[20px] mt-[150px]">
    
          <div>
          <h2 className=' text-slate-900 text-[20px] px-[20px] text-center  rounded-full  py-[10px] uppercase font-bold  '>Listed Events</h2>
          </div>
     
          <div className="grid  lg:grid-cols-3 py-[50px] gap-[25px]">
            {
              loading? [1,1,1].map((event) => (
                <EventSkeletonLoader/>
               )) :  event?.map((event) => (
                <EventCard event={event}/>
               ))
            }
  
      </div>
        </div>
        <Reviews/>
        <Footer/>
            </>
  );
};

export default Events;
