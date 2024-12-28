import { useEffect } from "react";
import ProfileSideNavBar from "@/components/sideNav/profileSideNav";
import { useUserStore } from "@/components/store/store";
import { useRouter } from "next/router";
import { Footer } from "@/components/Footer/footer";
import { DesktopNav } from "@/components/Navbar/desktopNav";
import { MobileNav } from "@/components/Navbar/mobileNav";
import { toast } from "react-toastify";
import DashboardMain from "@/components/dashboard/dashboard";

export default function AccountDetails() {
  const { user } = useUserStore();

  const router = useRouter();
  useEffect(() => {
    if (!user) {
      toast.error("You are not login.");
      router.push("/auth/signin");
    }
  }, []);
  return (
    <>
      {
        <div>
          <DesktopNav />
          <MobileNav />
          <div className="grid grid-cols-1 my-[150px] gap-[30px] lg:grid-cols-4 px-[20px] ">
            <ProfileSideNavBar />
            <div className="  p-4 lg:col-span-3">
              <h1 className="text-[16px] py-[10px] uppercase text-[#1A1A1A] mb-[20px] border-b-[1px]  font-[500] leading-[19.2px] ">
                My dashboard
              </h1>
              <DashboardMain />
            </div>
          </div>

          <Footer />
        </div>
      }
    </>
  );
}
