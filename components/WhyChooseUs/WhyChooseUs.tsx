import Image from "next/image"
import Link from "next/link"
import { FaArrowRightLong } from "react-icons/fa6";
import icon1 from '../../public/images/houseIcon1.png';
import icon2 from '../../public/images/houseIcon2.png';
import icon3 from '../../public/images/houseIcon3.png';

export const WhyChooseUs = () => {

    const services = [
        {
            "image": icon1,
            "title": "All-in-One Solution",
            "descrip": "Simplify your event planning with our all-in-one platform. From managing bookings and guest lists to coordinating with venues and vendors, we provide everything you need in one seamless experience. Stay organized and stress-free as you bring your event to life.",
            "link": "/events"
        },
        {
            "image": icon2,
            "title": "Flexible Bookings",
            "descrip": "Enjoy the freedom to explore and book venues and services with real-time availability. Our flexible booking system allows you to find the perfect match for your event, ensuring every detail aligns with your vision and timeline.",
            "link": "/events"
        },
        {
            "image": icon3,
            "title": "Reliable Support",
            "descrip": "With our 24/7 dedicated support team, help is always at hand. Whether it’s navigating the platform, troubleshooting an issue, or getting advice for your event, we’re here to ensure your planning journey is smooth and successful.",
            "link": "/events"
        }
    ]
    
    return <>
        <div className="bg-transparent gap-[50px] py-[100px] px-[30px] flex flex-col items-center text-center">
              
<div className='flex flex-col gap-5 justify-center mb-[50px] items-center text-center'>
            <h2 className='bg-blue-700 text-white text-[15px] px-[20px] rounded-full  py-[10px] capitalize font-bold w-fit '>WHY CHOOSE US</h2>
            <h1 className="font-bold text-[20px] md:text-[30px] lg:text-[35px] text-textTitle ">Join Thousands of Happy Event Planners Today!</h1>
        </div>
            <div className="grid grid-cols-1 gap-[50px]  md:grid-cols-2 lg:grid-cols-3">
                {
                    services.map((service: any, index : number) => {
                        return  <div key={index} className="shadow-2xl rounded-2xl items-center bg-primaryBg py-[50px] flex px-[20px] flex-col gap-5">
                        {/* <Image src={service.image} width={100} height={100} alt="g" /> */}
                        <h1 className="text-textTitle font-bold uppercase text-[15px] ">{service.title}</h1>
                        <p className="text-textColor text-[12px] ">{service.descrip}</p>
                        <Link href={service.link} className="text-btn2 text-[15px] flex items-center">Explore<FaArrowRightLong /></Link>
                    </div>
                    })
                }
            </div>
        </div>
    </>
}