import Image from 'next/image';
import authImg1 from '../../public/images/event2.avif';
import authImg2 from '../../public/images/event1.avif';
import userImg1 from '../../public/images/user1.png';
import userImg2 from '../../public/images/user2.png';
import userImg3 from '../../public/images/user3.png';
import userImg4 from '../../public/images/user4.png';
import userImg5 from '../../public/images/user5.jpeg';

import { LiaBathSolid } from "react-icons/lia";
import { MdOutlineGames } from "react-icons/md";
import { FaStar } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { MdBed } from "react-icons/md";
import { FaRegFileAlt } from "react-icons/fa";
import { GiFallingStar } from "react-icons/gi";
import { FaHouse } from "react-icons/fa6";
import Link from 'next/link';


export const AuthPage = () => {
    return <>
    <div style={{
    background : `url(${authImg1.src})`,
    backgroundSize : "cover",
    backgroundRepeat : "no-repeat"
}}
className='  bg-[#FFEDE9] rounded-[20px] after:rounded-[20px]  px-[30px] py-[10px] w-full relative after:absolute after:top-0 after:bottom-0 before:bg-transparent before:absolute after:left-0 hidden md:flex flex-col gap-[40px] after:right-0 after:bg-tpr'
>
    {/* <div className='flex flex-col gap-[30px]'>
    <Link href='/' className='flex items-center relative z-[10] gap-2'>
     <span className='bg-[#FF5733] rounded-[3.89px] p-2'><FaHouse className='text-[#FFFFFF]  text-[10px] '/></span>
<h1 className='text-[19.05px] leading-[21.43px] font-[700] text-[#FFFFFF] '>Home Features</h1>
    </Link>

<div className='bg-white h-fit p-[20px] self-center justify-center mt-[30px] z-[10] flex flex-col gap-2 w-fit rounded-[10px] relative '>
<div className='absolute right-[-20%] top-[110px] z-[10] w-fit'>

</div>
    <Image src={authImg2} alt='sigin image' className='rounded-[5px] max-w-[348.71px] max-h-[185.51px] '/>

    </div>

    <div>

    </div>
</div> */}


</div>

    </>
}