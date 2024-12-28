import { ContactUsComponent } from "@/components/contactUs/contactUs";
import { Footer } from "@/components/Footer/footer";
import { DesktopNav } from "@/components/Navbar/desktopNav";
import { MobileNav } from "@/components/Navbar/mobileNav";
import { WhyChooseUs } from "@/components/WhyChooseUs/WhyChooseUs";

export default function ContactUs() {
  return (
    <>
      <MobileNav />
      <DesktopNav />
      <ContactUsComponent />
      <WhyChooseUs />
      <Footer />
    </>
  );
}
