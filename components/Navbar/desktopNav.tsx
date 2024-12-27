import Link from "next/link";
import { FaCircleUser, FaHouse, FaXTwitter } from "react-icons/fa6";
import { Poppins } from "next/font/google";
import { FaLocationDot } from "react-icons/fa6";
import { useState } from "react";
import { useEffect } from "react";
import logo from '../../public/images/logo2.png';
import Image from "next/image";
import { useRouter } from "next/router";
import { useUserStore } from "../store/store";
import { TfiArrowCircleUp } from "react-icons/tfi";
import { SiEventbrite } from "react-icons/si";

export const poppins = Poppins({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'], 
    style: ['normal', 'italic'],
});
  
export const DesktopNav = () => {
    const { user} = useUserStore()

    const router = useRouter();
    const [pathname, setPathname] = useState('');

    useEffect(() => {
        if (router.isReady) {
    setPathname(router.pathname)
}
    }, [router.isReady, router.pathname])


    const navItems = [ 
        {
            name: "home",
            url : "/"
        },
        {
            name: "events",
            url : "/events"
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
                className={`bg-blue-500 shadow-2xl fixed ${isScrolled? "bottom-[50px] " : "top-[-1000px]"} text-[50px] rounded-full text-light hover:bg-blue-700 right-[20px] z-[2000000]`} />
           
            <div
                 style={{
                    transition: "ease-in .7s",
                    scrollBehavior : "smooth"
                  }}
                className={`py-[10px]  px-[30px] flex flex-col gap-y-[10px] shadow fixed left-0 right-0 top-0 w-full ${isScrolled? "bg-white" : "bg-white"} `}>
               
                <div className="flex justify-between px-[50px] ">
                <div className="flex items-center justify-between ">
                <Link href='/' className="flex  gap-1 items-center">
                <div className='flex items-center relative z-[10] gap-1'>
     <span className='bg-slate-900 rounded-[3.89px] p-2'><SiEventbrite className='text-[#FFFFFF]  text-[10px] '/></span>
                                <h1 className={`text-[19.05px] uppercase leading-[21.43px] font-[700] ${isScrolled? "text-blue-500": "text-blue-500"}  `}>UEvents</h1>
    </div>
                    </Link>

                    </div>
                 
                    <ul className=" flex flex-row items-center gap-5">
                        {navItems.map((nav: any, index: number) => (
                            <li key={index}>
                                <Link className={`text-[15px]  text-slate-700 ${pathname === nav.url? "font-bold text-slate-900" : "text-slate-700"} capitalize`} href={nav.url}>
                                    {nav.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    {user?  <div className="flex my-[20px] flex-row items-center gap-2">
                <Link href='/my-account' className="bg-slate-900 text-primary text-light text-[15px] w-fit  py-[10px] rounded px-[20px] flex items-center gap-2"><FaCircleUser /> My Account</Link>
                   
                </div> :
                    <div className="flex my-[20px] flex-row items-center gap-2">
                        {/* <Link href='' className="flex text-[25px] items-center">
                            <TbHomeSearch className="text-[20px]" />
                        </Link> */}
                        <Link href='/auth/register' className="bg-slate-900 rounded text-slate-50 text-center text-light text-[15px] min-w-[150px] py-[5px] px-[20px]">
                            Register
                        </Link>
                        <Link href='/auth/signin' className="text-[15px] rounded bg-primaryBg text-center border py-[5px] min-w-[150px] px-[20px]">
                            Login
                        </Link>
                    </div>}
             

                </div>
            </div>

        </nav>
    )
}
