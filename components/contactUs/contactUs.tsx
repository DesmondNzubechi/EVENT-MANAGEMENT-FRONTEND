import emailIcon from '../../public/images/messageIcon.png';
import callIcon from '../../public/images/callIcon.png';
import locationIcon from '../../public/images/locationIcon.png';
import Image from 'next/image';
import { FaUserAlt } from "react-icons/fa";
import { MdMessage, MdEmail, MdOutlineMail } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import { FaPencil } from "react-icons/fa6";
import { CiLocationOn } from 'react-icons/ci';

export const ContactUsComponent = () => {
    return (
        <div className="bg-white w-full flex flex-col gap-[50px] pt-[150px] py-[100px]">
            <div className='grid grid-cols-1 w-full md:grid-cols-2 gap-5 px-[30px] lg:grid-cols-3'>
                {/* Email Section */}
                <div className='border flex flex-col gap-5 w-full items-center justify-center py-[50px] px-[50px]'>
                <MdOutlineMail className="text-[40px] text-slate-50 p-2 rounded-full bg-sky-400 " />
                    <h1 className='text-blue-600 font-bold text-[20px] md:text-[25px] lg:text-[30px]'>Email Address</h1>
                    <p className='text-gray-700 text-[12px] md:text-[15px]'>support@uevents.com</p>
                </div>

                {/* Phone Section */}
                <div className='border flex flex-col gap-5 w-full items-center justify-center py-[50px] px-[50px]'>
                    <Image src={callIcon} alt='' />
                    <h1 className='text-blue-600 font-bold text-[20px] md:text-[25px] lg:text-[30px]'>Phone No</h1>
                    <p className='text-gray-700 text-[12px] md:text-[15px]'>+234708418000</p>
                </div>

                {/* Location Section */}
                <div className='border flex flex-col gap-5 w-full items-center justify-center py-[50px] px-[50px]'>
                <CiLocationOn className="text-[50px] text-slate-50 p-2 rounded-full bg-sky-400 " />
                    <h1 className='text-blue-600 font-bold text-[20px] md:text-[25px] lg:text-[30px]'>Location</h1>
                    <p className='text-gray-700 text-[12px] md:text-[15px]'>1A Denten Street, Off Ogui Road, Enugu.</p>
                </div>
            </div>

        </div>
    );
};
