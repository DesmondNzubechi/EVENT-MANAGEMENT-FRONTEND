import Image from "next/image";
import { useEffect, useState } from "react";
import { FiEdit, FiEye, FiEyeOff } from "react-icons/fi";
import userImg from "../../public/images/user.jpg";
import { RxPencil1 } from "react-icons/rx";
import ProfileSideNavBar from "@/components/sideNav/profileSideNav";
import { useUserStore } from "@/components/store/store";
import { useRouter } from "next/router";
import { Footer } from "@/components/Footer/footer";
import { DesktopNav } from "@/components/Navbar/desktopNav";
import { MobileNav } from "@/components/Navbar/mobileNav";
import { MdEdit } from "react-icons/md";
import { api } from "@/components/lib/api";
import { toast } from "react-toastify";
import DashboardMain from "@/components/dashboard/dashboard";
 
export default function AccountDetails() {

  const router = useRouter();
  const [isEditable, setIsEditable] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [myPic, setMyPic] = useState<string | undefined>(undefined)
  const [userInfo, setUserInfo] = useState<any>(
  );

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleEditClick = () => {
    setIsEditable(!isEditable); // Toggle between read-only and editable
  };

   

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
           
    const file = e.target.files?.[0];
    if (file) {
      setFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        if (typeof reader.result === "string") {
          setMyPic(reader.result);
        }
      };
      reader.readAsDataURL(file);
          }
          
  };
  
            
      
      const handleFileUpload = async () => {
              
      if (!file) return;
  
      const formData = new FormData();
      formData.append("images", file);
  
              try {
          
       await api.patch(
              `/user/updateProfilePic/${"user?._id"}`,
           formData,
           {
              headers: { "Content-Type": "multipart/form-data"},
              withCredentials: true
           });
                  
          toast.success("Profile picture updated successfully");
              } catch (error) {
                   
                  toast.error("An error occurred during profile picture update");
                  
      }
  };
  

  return (
    <>
      <DesktopNav/>
      <MobileNav/>
      <div className="grid grid-cols-1 my-[150px] gap-[30px] lg:grid-cols-4 px-[20px] ">
        <ProfileSideNavBar />
        <div className="  p-4 lg:col-span-3">
          <h1 className="text-[16px] py-[10px] uppercase text-[#1A1A1A] mb-[20px] border-b-[1px]  font-[500] leading-[19.2px] ">
           My dashboard
          </h1>

          {/* User Avatar and Buttons */}
        <DashboardMain/>
        </div>
      </div>

      <Footer />
    </>
  );
}
