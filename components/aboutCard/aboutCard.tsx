import Image from 'next/image';
import eventImage from '../../public/images/event1.avif'; // Replace with an appropriate event-related image
import { FaCalendarCheck } from "react-icons/fa6";
import { FaUsers } from "react-icons/fa6";
import { MdOutlineEvent } from "react-icons/md";
import { GiTicket } from "react-icons/gi";
import Link from 'next/link';

export const AboutCard = () => {
    return (
        <div className="bg-white flex justify-center px-[30px] py-[100px]">
            <div className="grid grid-cols-1 gap-[100px] lg:grid-cols-2">
                {/* Image Section */}
                <div className="p-[20px] shadow-2xl rounded">
                    <Image src={eventImage} alt="event" className="" />
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
                    
                    {/* Features Section */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div className="flex gap-5 items-center">
                            <FaCalendarCheck className="bg-blue-600 text-white p-[10px] text-[40px] md:text-[50px] rounded-full" />
                            <p className="text-gray-700 text-[12px] md:text-[15px]">
                                Hassle-Free Booking
                            </p>
                        </div>
                        <div className="flex gap-5 items-center">
                            <FaUsers className="bg-blue-600 text-white p-[10px] text-[40px] md:text-[50px] rounded-full" />
                            <p className="text-gray-700 text-[12px] md:text-[15px]">
                                Attendee Management
                            </p>
                        </div>
                        <div className="flex gap-5 items-center">
                            <MdOutlineEvent className="bg-blue-600 text-white p-[10px] text-[40px] md:text-[50px] rounded-full" />
                            <p className="text-gray-700 text-[12px] md:text-[15px]">
                                Event Customization
                            </p>
                        </div>
                        <div className="flex gap-5 items-center">
                            <GiTicket className="bg-blue-600 text-white p-[10px] text-[40px] md:text-[50px] rounded-full" />
                            <p className="text-gray-700 text-[12px] md:text-[15px]">
                                Secure Ticketing
                            </p>
                        </div>
                    </div>
                    
                    {/* Callout Section */}
                    <div className="border-l-[20px] border-blue-600 py-[50px] p-[20px] bg-blue-50">
                        <p className="text-gray-700 text-[12px] md:text-[15px]">
                            Experience the ease of managing your events with our cutting-edge tools. From booking venues to sending invitations, we’re here to ensure everything runs smoothly, so you can focus on creating memories.
                        </p>
                    </div>
                    
                    {/* Call-to-Action */}
                    <Link href="/services" className="text-white w-fit bg-blue-600 px-[30px] py-[15px] hover:bg-blue-700">
                        Explore Our Services
                    </Link>
                </div>
            </div>
        </div>
    );
};
