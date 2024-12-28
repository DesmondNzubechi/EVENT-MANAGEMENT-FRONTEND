import { MdOutlineMail } from "react-icons/md";
import { IoCall } from "react-icons/io5";

import { CiLocationOn } from "react-icons/ci";

export const ContactUsComponent = () => {
  return (
    <div className="bg-white w-full flex flex-col gap-[50px] pt-[150px] py-[50px]">
      <h2 className=" text-slate-900 text-[20px] px-[20px] text-center  rounded-full  py-[10px] uppercase font-bold  ">
        Contact Us
      </h2>

      <div className="grid grid-cols-1 w-full md:grid-cols-2 gap-5 px-[30px] lg:grid-cols-3">
        <div className="border flex flex-col gap-5 w-full items-center justify-center py-[50px] px-[50px]">
          <MdOutlineMail className="text-[50px] text-slate-50 p-2 rounded-full bg-slate-900 " />
          <h1 className="text-blue-600 font-bold text-[20px] md:text-[25px] lg:text-[30px]">
            Email Address
          </h1>
          <p className="text-gray-700 text-[12px] md:text-[15px]">
            support@uevents.com
          </p>
        </div>

        <div className="border flex flex-col gap-5 w-full items-center justify-center py-[50px] px-[50px]">
          <IoCall className="text-[50px] text-slate-50 p-2 rounded-full bg-slate-900 " />
          <h1 className="text-blue-600 font-bold text-[20px] md:text-[25px] lg:text-[30px]">
            Phone No
          </h1>
          <p className="text-gray-700 text-[12px] md:text-[15px]">
            +234708418000
          </p>
        </div>

        <div className="border flex flex-col gap-5 w-full items-center justify-center py-[50px] px-[50px]">
          <CiLocationOn className="text-[50px] text-slate-50 p-2 rounded-full bg-slate-900 " />
          <h1 className="text-blue-600 font-bold text-[20px] md:text-[25px] lg:text-[30px]">
            Location
          </h1>
          <p className="text-gray-700 text-[12px] md:text-[15px]">
            1A Denten Street, Off Ogui Road, Enugu.
          </p>
        </div>
      </div>
    </div>
  );
};
