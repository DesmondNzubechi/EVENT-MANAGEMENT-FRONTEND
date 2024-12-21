import Image from "next/image";
import { useEffect, useState } from "react";
import { FiEdit, FiEye, FiEyeOff } from "react-icons/fi";
import userImg from "../../../public/images/user.jpg";
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
          edit My profile
          </h1>

          {/* User Avatar and Buttons */}
          <div
            className={`flex flex-col rounded-[10px] gap-[10px] py-[20px] px-[10px] ${
              isEditable ? "bg-[#CBCAC74D] border-[1px] " : "bg-[#F4F2EF4D]"
            } `}
          >
            {/* <div className="flex items-center justify-between mb-6">
            <div className="items-center flex relative">
                                <Image
                                    src={
                                        myPic ?
                                        myPic: 
                                        userInfo?.images ?
                                            userInfo?.images :
                                            userImg 
                                    }
                                    alt={`profile picture`}
                                    height={200}
                                    width={200} 
                                    className="rounded-full h-[80px] w-[80px]"
                                />
                                <input
                                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleFileChange(e)}
                                    type="file"
                                    accept="image/*"
                                    name="user profile pic"
                                    className="hidden"
                                    id="user profile pic"
                                />
                                <label
                                    htmlFor="user profile pic"
                                    className="absolute text-[25px] rounded-full bottom-0"
                                >
                                    <MdEdit className="bg-secondaryBg border text-btn-primary rounded-full" />
                                </label>
                            </div>
            </div> */}

            {/* User Information Section */}
            <div className="  p-4 ">
              <div className="flex justify-between mb-4">
                <h2 className="text-[16px] text-[#404040] leading-[19.2px] font-[500]">
                  User Information
                </h2>
                {!isEditable && (
                  <button
                    className="flex items-center text-[#66635A] text-[14px] leading-[16.41px] py-[8px] px-[14px] gap-[7px] "
                    onClick={handleEditClick}
                  >
                    Edit
                    <RxPencil1 className="text-[12px] " />
                  </button>
                )}
              </div>

              {/* Form Fields */}
              <form className="flex flex-col gap-[20px] ">
                <div className="grid grid-cols-1 gap-5">
                  <div className="flex flex-col gap-[10px] ">
                    <label className="block uppercase text-[#404040] leading-[11.72px] font-[500] text-[10px] ">
                      Fullname
                    </label>
                    <input
                      type="text"
                      value={userInfo?.first_name}
                      onChange={(e) => {
                        if (userInfo) {
                          setUserInfo({
                            ...userInfo,
                            first_name: e.target.value,
                          });
                        }
                      }}
                      className={`w-full p-[12px] border-[0.5px]   rounded-[6px] ${
                        isEditable
                          ? "bg-[#FFFFFF] border-[0.5px] "
                          : "bg-[#CBCAC780]"
                      } outline-0`}
                      readOnly={!isEditable}
                    />
                  </div>
                
                </div>

                <div className="flex flex-col gap-[10px] ">
                  <label className="block uppercase text-[#404040] leading-[11.72px] font-[500] text-[10px] ">
                    Email
                  </label>
                  <input
                    type="email"
                    value={userInfo?.email}
                    onChange={(e) => {
                      if (userInfo) {
                        setUserInfo({
                          ...userInfo,
                          email: e.target.value,
                        });
                      }
                    }}
                    className={`w-full p-[12px] border-[0.5px]   rounded-[6px] ${
                      isEditable
                        ? "bg-[#FFFFFF] border-[0.5px] "
                        : "bg-[#CBCAC780]"
                    } outline-0`}
                    readOnly={!isEditable}
                  />
                </div>

                {isEditable && (
                  <button className="bg-[#0000FF] text-white font-[500] py-[10px] px-[24px] w-fit rounded-[8px]  ">
                    Save Change
                  </button>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}