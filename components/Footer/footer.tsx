import Image from "next/image"
import Link from "next/link"
import logo from '../../public/images/logo2.png'
import { SiHomeassistantcommunitystore } from "react-icons/si";

import { FaLinkedin } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
export const Footer = () => {
    return <div className="bg-primaryBg relative pt-[300px]">
        <div className="px-[30px] absolute   left-0 right-0 top-0 lg:top-[50px]">
        <div className="bg-btn-primary flex flex-col justify-around gap-[30px] lg:flex-row  py-[100px] px-[30px] ">
                <div className="flex flex-col gap-4  justify-between items-center lg:items-start ">
                    <h1 className="font-bold text-light text-[25px] md:text-[30px] capitalize lg:text-[35px]">Looking for a dream Property</h1>
                    <p className="text-light text-[15px] md:text-[20px] lg:text-[20px] ">We can help you realize your dream of a new home</p>
                </div>
                <Link href='' className="text-textTitle self-center w-fit bg-primaryBg px-[20px] py-[15px]">Explore Our Properties</Link>
</div>
        </div>
        <div className="text-slate-50 flex flex-col gap-5 pt-[150px] bg-footerBg px-[20px] py-[50px] ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-[40px]">
            <div className="flex flex-col lg:col-span-2 gap-1">
                    <Link href='' className="flex  gap-1 items-center">
                        <Image src={logo} alt="logo"/>
                    </Link>
                {/* <h1 className="font-bold text-[25px] capitalize mb-[5px] ">b2r-tech</h1> */}
                <p>We bring your real estate visions to life with innovative solutions. Our expert team transforms your property goals into reality, ensuring excellence at every stage. Partner with us to achieve your real estate success and find the perfect property or maximize your investment.</p>
            </div>
            <div className="flex flex-col gap-1">
                <h1 className="font-bold text-[25px] capitalize mb-[5px]">Company</h1>
                <div className="flex flex-col gap-2 ">
                    <Link className="text-slate-300 text-[15px]" href='/'>Home</Link>
                    <Link className="text-slate-300 text-[15px]" href='/about'>About Us</Link>
                    <Link className="text-slate-300 text-[15px]" href='/contact-us'>Contact Us</Link>
                        <Link className="text-slate-300 text-[15px]" href='/properties'>Properties</Link>
                        <Link className="text-slate-300 text-[15px]" href='/land'>Land</Link>
                    <Link className="text-slate-300 text-[15px]" href='/blog'>Blog</Link>
                  
                </div>
            </div>
            <div className="flex flex-col gap-1">
                <h1 className="font-bold text-[25px] capitalize mb-[5px]">Our Services</h1>
                <div className="flex flex-col gap-2 ">
                    <Link className="text-slate-300 text-[15px]" href='/properties'>Buy Properties</Link>
                    <Link className="text-slate-300 text-[15px]" href='/properties'>Sell Properties</Link>
                    <Link className="text-slate-300 text-[15px]" href='/properties'>Rent Properties</Link>
                    <Link className="text-slate-300 text-[15px]" href='/land'>Buy Land</Link>
                    <Link className="text-slate-300 text-[15px]" href='/land'>Sell Land</Link>
                   
                </div>
            </div>
            <div className="flex flex-col gap-1">
                <h1 className="font-bold text-[25px] capitalize mb-[5px]">Get In Touch</h1>
                <div className="flex flex-col gap-2 ">
                   <a href="mailto:"></a>
                    <Link className="text-slate-300 text-[15px]" href=''>ceo@homefeatures.com</Link>
                    <Link className="text-slate-300 text-[15px]" href='tel:+2347084183611'>+234 708 4183 0000</Link>
                    <div className="flex lex-row gap-2">
                        <Link href=''><FaLinkedin /></Link>
                        <Link href=''><FaFacebookSquare /></Link>
                        <Link href=''><FaXTwitter /></Link>  
                    <Link href=''><FaInstagramSquare /></Link>    
    </div>
                </div>
            </div>
        </div>
        <hr />
        <div>
            <p className="text-center text-[12px] mt-[30px]">© All Right Reserved HOMEFEATURES</p>
        </div>
    </div>
        </div>
}