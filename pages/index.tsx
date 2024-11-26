import Image from "next/image";
import localFont from "next/font/local";
import { MobileNav } from "@/components/Navbar/mobileNav";
import { DesktopNav } from "@/components/Navbar/desktopNav";
import { HeroSection } from "@/components/HeroSection/HeroSection";
import { Poppins } from "next/font/google";

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
    className={`flex overflow-x-hidden flex-col items-center justify-between ${poppins.className}`}
  > 
      <HeroSection /> 
    </main>
    </>
  );
}
