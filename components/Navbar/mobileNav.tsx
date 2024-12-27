import Link from "next/link";
import { SiEventbrite, SiHomeassistantcommunitystore } from "react-icons/si";
import { TbHomeSearch } from "react-icons/tb";
import { FaHouse, FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn, FaUser } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { HiXMark } from "react-icons/hi2";
import { FaBarsStaggered } from "react-icons/fa6";
import { IoIosArrowDown, IoIosArrowUp, IoMdCall } from "react-icons/io";
import { Poppins } from "next/font/google";
import { FaLocationDot } from "react-icons/fa6";
import { useState } from "react";
import { useEffect } from "react";
import { useUserStore } from "../store/store";
import logo from '../../public/images/logo2.png';
import Image from "next/image";
import { FaCircleUser } from "react-icons/fa6";
import { TfiArrowCircleUp } from "react-icons/tfi";
import { useRouter } from "next/router";
import { CiLock } from "react-icons/ci";
import { IoSettingsOutline } from "react-icons/io5";

import { LiaUserEditSolid } from "react-icons/lia";
import { MdDashboard, MdLogout, MdOutlineMessage, MdPayment } from "react-icons/md";
import { PiUserSquareBold } from "react-icons/pi";
import { RiLockPasswordFill } from "react-icons/ri";

import { LogOut } from "../logOut/loagOut";
import { TbBrandBooking } from "react-icons/tb";


export const poppins = Poppins({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'], 
    style: ['normal', 'italic'],
});
  
export const MobileNav = () => {
  const [logOut, setLogOut] = useState(false)
    const { user } = useUserStore()
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

    const [navState, setNavState] = useState<string>("left-[-2000px]")

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


  const profileLinks = [
    {
      name: "Dashboard",
      link: "/my-account",
      icon: MdDashboard,
    },
    {
      name: "Edit profile",
      link: "/my-account/edit-profile",
      icon: LiaUserEditSolid,
    },
    {
      name: "Change Password",
      link: "/my-account/change-password",
      icon: RiLockPasswordFill,
    },
    {
      name: "Booked Events",
      link: "/my-account/my-bookings",
      icon: TbBrandBooking,
    },
   
    ];
    
    const [isProfileOpen, setIsProfileOpen] = useState(false);

  const toggleProfile = (e: React.FormEvent) => {
e.preventDefault()
    setIsProfileOpen(!isProfileOpen);
  };
    
  return (
    <>
    { logOut && <LogOut logOut={logOut} setLogOut={setLogOut} />}
        <nav className={`${poppins.className} lg:hidden relative z-[10000]`}>
            <TfiArrowCircleUp onClick={scrollToTop} style={{
                    transition: "ease-in .7s",
                    scrollBehavior : "smooth"
            }}
                className={` bg-blue-500 fixed ${isScrolled? "bottom-[50px] " : "top-[-1000px]"} text-[50px] rounded-full text-light hover:bg-blue-700 right-[20px] z-[2000000]`} />
            <div
                 style={{
                    transition: "ease-in 1s",
                    scrollBehavior : "smooth"
                  }}
                className={`py-[15px]  px-[30px] flex flex-col gap-y-[20px] fixed shadow left-0 right-0 top-0 w-full ${isScrolled? "bg-textTitle" : "bg-transparent"} `}>
               {/* {!isScrolled && <> <div className="flex justify-around ">
                <div className="flex items-center"><IoMdCall className="text-btn-primary text-[20px] "/> <p className="text-light font-bold text-large">+2347084183611</p></div>
                    <div className="flex items-center"><FaLocationDot className="text-btn-primary text-[20px] "/> <p className="text-light font-bold text-large">1A Denten Street, Ogui, Enugu.</p></div>
                </div>
                <hr /> </>}  */}
                <div className="flex items-center justify-between ">
                <Link href='/' className="flex  gap-1 items-center">
                <div className='flex items-center relative z-[10] gap-1'>
     <span className='bg-slate-900 rounded-[3.89px] p-2'><SiEventbrite className='text-[#FFFFFF]  text-[10px] '/></span>
                                <h1 className={`text-[19.05px] uppercase leading-[21.43px] font-[700] ${isScrolled? "text-blue-500": "text-blue-500"}  `}>UEvents</h1>
    </div>
                    </Link>
                        {navState !== "left-[-2000px]" ?
                        <HiXMark onClick={() => setNavState('left-[-2000px]')} className={` text-[40px] bg-transparent ${!isScrolled? "text-slate-900": "text-light"}   p-2  hover:text-slate-200 `} /> :
                        <FaBarsStaggered onClick={() => setNavState('left-0')} className={` text-[40px] bg-transparent  ${!isScrolled? "text-slate-900": "text-light"} p-2  hover:text-slate-200 `} />}
                   
                </div>
            </div>
            <span onClick={(e:any) => {
                if (e.target.tagName !== 'DIV') {
                    setNavState('left-[-2000px]')
                }
            }} style={{ transition: ".5s" }} className={`fixed z-[10000] min-h-[100vh] text-priimaryText bg-tp ${navState} right-0 top-0 bottom-0 w-full`}>
                <div className="flex bg-primaryBg flex-col overflow-y-auto gap-[30px] absolute top-0 bottom-0 w-[70%] left-0 px-[30px] py-[30px]">
                    <div className="flex justify-between items-center">
                    <Link href='/' className="flex  gap-1 items-center">
                <div className='flex items-center relative z-[10] gap-1'>
     <span className='bg-slate-900 rounded-[3.89px] p-2'><SiEventbrite className='text-[#FFFFFF]  text-[10px] '/></span>
                                <h1 className={`text-[19.05px] uppercase leading-[21.43px] font-[700] ${isScrolled? "text-blue-500": "text-blue-500"}  `}>UEvents</h1>
    </div>
                    </Link>
                        {/* <button onClick={() => setNavState('left-[-2000px]')}>
                        <HiXMark className="bg-black-bg text-[40px]  hover:bg-slate-700 p-1 text-light"/>
                        </button> */}
                    </div>  
                   
                    <ul className="bg-primaryBg flex flex-col gap-2">
                        {navItems.map((nav: any, index: number) => (
                            <li key={index}>
                                <Link className="text-[15px] text-textColor capitalize" href={nav.url}>
                                    {nav.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                   
                    {user ? 
                        <div className="w-fit">
                   
              <button onClick={toggleProfile} type="button" className="flex w-fit items-center w-full focus:outline-none">
                <FaUser className="mr-3" />
                <div>Profile</div>
                {isProfileOpen ? <IoIosArrowUp className="ml-auto" /> : <IoIosArrowDown className="ml-auto" />}
              </button>
              {isProfileOpen && (
                <ul className="ml-6 mt-2 space-y-2">
                  {
                    profileLinks.map(pro => {
                      return  <Link href={`${pro.link}`} className="flex items-center gap-[10px] "><pro.icon className="text-[16px] text-slate-700 "/> <span className="text-slate-700 font-[400] text-[16px] leading-[18.75px]  ">{pro.name}</span> </Link>
                    })
                  }
                 
                  <button onClick={() => setLogOut(true)} type="button" className="text-red-500 font-[400] gap-[10px] text-[16px] leading-[18.75px] flex items-center"><MdLogout className="text-[16px] "/> Logout</button>
                </ul>
              )}
            </div> :
                    <div className="flex my-[20px] flex-col gap-2">
                        {/* <Link href='' className="flex text-[15px] items-center">
                            <TbHomeSearch className="text-[20px]" />
                            <span>Search</span>
                        </Link> */}
                        <Link href='/auth/register' className="bg-blue-700 text-primary text-light text-[15px] text-center w-[150px] py-[5px] px-[20px] rounded ">
                            Register
                        </Link>
                        <Link href='/auth/signin' className="text-[15px] text-center border py-[5px] w-[150px] rounded px-[20px]">
                            Login
                        </Link>
                    </div> }
                  
                  
                </div>
            </span>
        </nav>
</>
    )
}
