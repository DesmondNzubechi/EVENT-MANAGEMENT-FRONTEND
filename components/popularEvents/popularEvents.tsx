import { events } from "../theEvents/theEvents";
import EventCard from "../eventCard/eventCard";

export const PopularEvents = () => {

  return (
      <>
       
      <div className="py-[50px] px-[30px] ">
        <div className="flex flex-col gap-5 justify-center mb-[50px] items-center text-center">
          <h2 className="bg-blue-700 text-white text-[15px] px-[20px] rounded-full  py-[10px] font-bold w-fit ">
            Events
          </h2>
          <h1 className="font-bold text-[20px] md:text-[30px] lg:text-[35px] text-slate-900 ">
            Popular Events
          </h1>
        </div>
        <div className="grid grid-cols-1 gap-[50px] md:grid-cols-2 lg:grid-cols-3">
          {events.slice(0, 3).map((event) => (
            <EventCard event={event} />
          ))}
        </div>
      </div>
    </>
  );
};
