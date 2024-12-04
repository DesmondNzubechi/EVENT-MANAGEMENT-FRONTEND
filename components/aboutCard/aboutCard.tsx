import Image from 'next/image';
import eventImage from '../../public/images/event1.avif'; // Replace with an appropriate event-related image
import { FaCalendarCheck } from "react-icons/fa6";
import { FaUsers } from "react-icons/fa6";
import { MdOutlineEvent } from "react-icons/md";
import { GiTicket } from "react-icons/gi";
import Link from 'next/link';

export const AboutCard = () => {
    return (
        <div className="bg-white flex justify-center px-[30px] pt-[150px] py-[100px]">
            <div className="grid grid-cols-1 gap-[100px] lg:grid-cols-2">
                {/* Image Section */}
                <div className="  rounded">
                    <Image src={eventImage}  alt="event" className="rounded" />
                </div>
                
                {/* Content Section */}
                <div className="flex flex-col gap-[30px] max-w-[600px]">
                    <h2 className="bg-blue-600 text-white text-[15px] px-[20px] rounded-full py-[10px] font-bold w-fit">
                        About Us
                    </h2>
                    <h1 className="font-bold text-[15px] md:text-[20px] lg:text-[30px] text-black">
                        Your Trusted Partner for Seamless Event Management.
                    </h1>
                    <p className="text-gray-700 font-medium text-[12px] md:text-[15px]">
                        With our expertise in event management, we provide a one-stop solution for all your booking needs. From concerts to corporate gatherings, our platform is designed to make event organization simple, efficient, and enjoyable. Join thousands of satisfied customers who trust us to make their events unforgettable.
                    </p>
                    <p className="text-gray-700 font-medium text-[12px] md:text-[15px]">Experience the ease of managing your events with our cutting-edge tools. From booking venues to sending invitations, we’re here to ensure everything runs smoothly, so you can focus on creating memories.</p>
                    
                </div>
            </div>
        </div>
    );
};
