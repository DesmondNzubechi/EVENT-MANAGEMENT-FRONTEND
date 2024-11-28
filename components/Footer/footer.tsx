import Image from "next/image";
import Link from "next/link";
import logo from '../../public/images/logo2.png';
import { FaLinkedin, FaTwitter, FaInstagramSquare, FaFacebookSquare } from "react-icons/fa";
import { SiEventbrite } from "react-icons/si";

export const Footer = () => {
    return (
        <div className="bg-transparent relative">
           
            <div className="text-slate-300 flex flex-col gap-5  bg-blue-900 px-[20px] py-[50px]">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[40px]">
                    <div className="flex flex-col lg:col-span-2 gap-1">
                    <Link href='/' className="flex  gap-1 items-center">
                <div className='flex items-center relative z-[10] gap-1'>
     <span className='bg-slate-900 rounded-[3.89px] p-2'><SiEventbrite className='text-[#FFFFFF]  text-[10px] '/></span>
                                <h1 className={`text-[19.05px] uppercase leading-[21.43px] font-[700] text-slate-50  `}>UEvents</h1>
    </div>
                    </Link>
                        <p>
                            At EventMaster, we specialize in connecting you with the perfect venue, services, and tools to host extraordinary events. Let’s make your vision a reality!
                        </p>
                    </div>
                    <div className="flex flex-col gap-1">
                        <h1 className="font-bold text-[25px] capitalize mb-[5px]">Company</h1>
                        <div className="flex flex-col gap-2">
                            <Link className="text-slate-300 text-[15px]" href="/">Home</Link>
                            <Link className="text-slate-300 text-[15px]" href="/about">About Us</Link>
                            <Link className="text-slate-300 text-[15px]" href="/contact-us">Contact Us</Link>
                            <Link className="text-slate-300 text-[15px]" href="/services">Services</Link>
                            <Link className="text-slate-300 text-[15px]" href="/blog">Events</Link>
                        </div>
                    </div>
                   
                    <div className="flex flex-col gap-1">
                        <h1 className="font-bold text-[25px] capitalize mb-[5px]">Get In Touch</h1>
                        <div className="flex flex-col gap-2">
                            <Link className="text-slate-300 text-[15px]" href="mailto:support@eventmaster.com">support@eventmaster.com</Link>
                            <Link className="text-slate-300 text-[15px]" href="tel:+123456789">+234 709 567 890</Link>
                            <div className="flex flex-row gap-2">
                                <Link href="#"><FaLinkedin /></Link>
                                <Link href="#"><FaFacebookSquare /></Link>
                                <Link href="#"><FaTwitter /></Link>
                                <Link href="#"><FaInstagramSquare /></Link>
                            </div>
                        </div>
                    </div>
                </div>
                <hr />
                <div>
                    <p className="text-center text-[12px] mt-[30px]">
                        © 2024 All Rights Reserved EventMaster
                    </p>
                </div>
            </div>
        </div>
    );
};
