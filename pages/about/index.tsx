import { AboutCard } from "@/components/aboutCard/aboutCard"
import { Footer } from "@/components/Footer/footer"
import { DesktopNav } from "@/components/Navbar/desktopNav"
import { MobileNav } from "@/components/Navbar/mobileNav"
import { Reviews } from "@/components/Reviews/reviews"

export default function AboutUs() {

    return <>
        <MobileNav/>
        <DesktopNav/>
        <AboutCard />
        <Reviews/>
        <Footer/>
    </>
}