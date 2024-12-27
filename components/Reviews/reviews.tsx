import Image from "next/image";
import Link from "next/link";
import Slider from "react-slick";
import { FaUserAlt } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const Reviews = () => {
  const reviews = [
    {
      name: "Ike Emmanuel",
      feedback:
        "The event planning was seamless! From booking the venue to coordinating schedules, the team made it effortless and stress-free.",
    },
    {
      name: "John Smith",
      feedback:
        "Our conference ran flawlessly thanks to this platform. The booking tools and responsive support team were a lifesaver.",
    },
    {
      name: "Chukwuebuka Henry",
      feedback:
        "The best event experience I've ever had! They helped us organize a wedding with beautiful venues and personalized services.",
    },
    ];
    
    
    const PrevButton = ({ onClick }: any) => (
        <button
          className="absolute left-[5px] z-[10] top-[50%] transform -translate-y-1/2 text-blue-700 bg-white px-[20px] py-[5px] rounded shadow-md "
          onClick={onClick}
        >
          Prev
        </button>
      );
    
      const NextButton = ({ onClick }: any) => (
        <button
          className="absolute right-[5px] z-[10] top-[50%] transform -translate-y-1/2 text-blue-700 px-[20px] py-[5px] bg-white  rounded shadow-md "
          onClick={onClick}
        >
          Next
        </button>
      );

    const settings = {
        autoplay: true, 
        autoplaySpeed: 2000,
        // prevArrow: <PrevButton />,
        // nextArrow: <NextButton />,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
    };
    

  return (
    <div className="bg-primaryBg py-[100px] px-[30px]">
   
      <div className="flex flex-col gap-5 justify-center mb-[50px] items-center text-center">

        <h1 className="font-bold text-[25px] md:text-[30px] lg:text-[35px] text-textTitle">
         Our Clients Reviews
        </h1>
      </div>

      {/* Feedback Slider */}
      <Slider {...settings}>
        {reviews.map((item, index) => (
          <div
            key={index}
            className="flex flex-col py-[50px] gap-[30px] mb-[50px] p-[20px]  border w-full max-w-[400px] items-center bg-white rounded-lg md:mx-[50px] "
          >
            {/* Avatar and Name */}
            <div className="flex flex-col gap-2 items-center">
              <div className="bg-blue-700 p-[20px] rounded-full">
                <FaUserAlt className="text-light text-[30px]" />
              </div>
              <h1 className="md:text-[20px] text-[15px] font-bold text-textTitle">
                {item.name}
              </h1>
            </div>

            {/* Feedback Text */}
            <p className="text-textColor text-[12px] md:text-[15px] text-center">
              {item.feedback}
            </p>
          </div>
        ))}
      </Slider>
    </div>
  );
};
