import Image from "next/image";
import localFont from "next/font/local";
import { MobileNav } from "@/components/Navbar/mobileNav";
import { DesktopNav } from "@/components/Navbar/desktopNav";
import { HeroSection } from "@/components/HeroSection/HeroSection";
import { Poppins } from "next/font/google";
import { WhyChooseUs } from "@/components/WhyChooseUs/WhyChooseUs";
import { Footer } from "@/components/Footer/footer";
import { PopularEvents } from "@/components/popularEvents/popularEvents";
import { Reviews } from "@/components/Reviews/reviews";

export const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'], 
  style: ['normal', 'italic'],
});

export default function Home() {
  return (
    <>
    <MobileNav />
    <DesktopNav/>
  <main
    className={` overflow-x-hidden  ${poppins.className}`}
      > 
        <div className="px-[20px] ">
        <HeroSection /> 
        </div>
        <WhyChooseUs />
        <Reviews/>
        <PopularEvents/>
      </main>
      <Footer/>
    </>
  );
}
