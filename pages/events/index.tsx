import EventCard from "@/components/eventCard/eventCard";
import { Footer } from "@/components/Footer/footer";
import { api } from "@/components/lib/api";
import { DesktopNav } from "@/components/Navbar/desktopNav";
import { MobileNav } from "@/components/Navbar/mobileNav";
import { Reviews } from "@/components/Reviews/reviews";
import EventSkeletonLoader from "@/components/skeletonLoader/eventSkeletonLoader";
import { useEventStore } from "@/components/store/store";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const Events = () => {
  const { setEvent, event } = useEventStore();
  const [loading, setLoading] = useState<boolean>(false);

  const fetchEventData = async () => {
    setLoading(true);
    try {
      const response = await api.get("/event/getAllEvent");
      const theEvents = response.data.data.data;
      setEvent(theEvents);
    } catch (error: unknown | any) {
      const theErr = error!.response?.data?.message;
      toast.error(theErr);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEventData();
  }, []);

  return (
    <>
      <DesktopNav />
      <MobileNav />
      <div className="grid  gap-5 px-[20px] mt-[150px]">
        <div>
          <h2 className=" text-slate-900 text-[20px] px-[20px] text-center  rounded-full  py-[10px] uppercase font-bold  ">
            Listed Events
          </h2>
        </div>

        <div className="grid  lg:grid-cols-3 py-[50px] gap-[25px]">
          {loading
            ? [1, 1, 1].map((event) => <EventSkeletonLoader />)
            : event?.map((event) => <EventCard event={event} />)}
        </div>
      </div>
      <Reviews />
      <Footer />
    </>
  );
};

export default Events;
