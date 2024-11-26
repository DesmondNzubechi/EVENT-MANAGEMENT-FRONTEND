import Link from "next/link";
import { navType } from "../types/types"
import { SiHomeassistantcommunitystore } from "react-icons/si";
import { TbHomeSearch } from "react-icons/tb";
import { FaCircleUser, FaHouse, FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { HiXMark } from "react-icons/hi2";
import { FaBarsStaggered } from "react-icons/fa6";
import { IoMdCall } from "react-icons/io";
import { CiLocationOn } from "react-icons/ci";
import { Poppins } from "next/font/google";
import { FaLocationDot } from "react-icons/fa6";
import { useState } from "react";
import { useEffect } from "react";
import logo from '../../public/images/logo2.png';
import Image from "next/image";
import { useRouter } from "next/router";
import { useUserStore } from "../store/store";
import { TfiArrowCircleUp } from "react-icons/tfi";

export const poppins = Poppins({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'], 
    style: ['normal', 'italic'],
});
  
export const DesktopNav = () => {
    const {isAuthenticated, user} = useUserStore()

    const router = useRouter();
    const [pathname, setPathname] = useState('');

    useEffect(() => {
        if (router.isReady) {
    setPathname(router.pathname)
}
    }, [router.isReady, router.pathname])


    const navItems: navType[] = [ 
        {
            name: "home",
            url : "/"
        },
        {
            name: "property",
            url : "/properties"
        },
        {
            name: "land",
            url : "/land"
        },
        {
            name: "blog",
            url : "/blog"
        },
        {
            name: "about",
            url : "/about"
        },
        {
            name: "contact",
            url : "/contact-us"
        },
    ]

    
    const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollThreshold = 40;
      const currentScrollY = window.scrollY || document.documentElement.scrollTop;
  
      if (currentScrollY > scrollThreshold) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
  
    window.addEventListener('scroll', handleScroll);
  
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior : "smooth"})
  }

    return (
        <nav className={`${poppins.className} hidden lg:flex  relative z-[1000]`}>
           <TfiArrowCircleUp onClick={scrollToTop} style={{
                    transition: "ease-in .7s",
                    scrollBehavior : "smooth"
            }}
                className={`bg-btn-primary fixed ${isScrolled? "bottom-[50px] " : "top-[-1000px]"} text-[50px] rounded-full text-light hover:bg-textTitle right-[20px] z-[2000000]`} />
           
            <div
                 style={{
                    transition: "ease-in .7s",
                    scrollBehavior : "smooth"
                  }}
                className={`py-[10px]  px-[30px] flex flex-col gap-y-[10px] fixed left-0 right-0 top-0 w-full ${isScrolled? "bg-textTitle" : "bg-transparent"} `}>
               
                <div className="flex justify-between px-[50px] ">
                <div className="flex items-center justify-between ">
                <Link href='/' className="flex  gap-1 items-center">
                <div className='flex items-center relative z-[10] gap-2'>
     <span className='bg-[#FF5733] rounded-[3.89px] p-2'><FaHouse className='text-[#FFFFFF]  text-[10px] '/></span>
<h1 className='text-[19.05px] uppercase leading-[21.43px] font-[700] text-[#FFFFFF] '>Home Features</h1>
    </div>
                    </Link>

                    </div>
                 
                    <ul className=" flex flex-row items-center gap-5">
                        {navItems.map((nav: navType, index: number) => (
                            <li key={index}>
                                <Link className={`text-[15px]  ${pathname === nav.url? "text-btn-primary font-bold" : "text-light"} capitalize`} href={nav.url}>
                                    {nav.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    {isAuthenticated?  <div className="flex my-[20px] flex-row items-center gap-2">
                <Link href='/my-account' className="bg-btn-primary text-primary text-light text-[15px] w-fit  py-[10px] rounded px-[20px] flex items-center gap-2"><FaCircleUser /> My Account</Link>
                   
                </div> :
                    <div className="flex my-[20px] flex-row items-center gap-2">
                        {/* <Link href='' className="flex text-[25px] items-center">
                            <TbHomeSearch className="text-[20px]" />
                        </Link> */}
                        <Link href='/register' className="bg-btn-primary rounded text-primary text-center text-light text-[15px] min-w-[150px] py-[5px] px-[20px]">
                            Register
                        </Link>
                        <Link href='/signin' className="text-[15px] rounded bg-primaryBg text-center border py-[5px] min-w-[150px] px-[20px]">
                            Login
                        </Link>
                    </div>}
             

                </div>
            </div>

        </nav>
    )
}
