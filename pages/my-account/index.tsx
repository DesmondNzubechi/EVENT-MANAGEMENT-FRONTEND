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
 
export default function AccountDetails() {

  const router = useRouter();
  const [isEditable, setIsEditable] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [userInfo, setUserInfo] = useState<any>(
  );

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleEditClick = () => {
    setIsEditable(!isEditable); // Toggle between read-only and editable
  };

  useEffect(() => {
  
  }, []); 

  return (
    <>
      <DesktopNav/>
      <MobileNav/>
      <div className="grid grid-cols-1 my-[100px] gap-[30px] lg:grid-cols-4 px-[20px] ">
        <ProfileSideNavBar />
        <div className="  p-4 lg:col-span-3">
          <h1 className="text-[16px] py-[10px] uppercase text-[#1A1A1A] mb-[20px] border-b-[1px]  font-[500] leading-[19.2px] ">
            Account Details
          </h1>

          {/* User Avatar and Buttons */}
          <div
            className={`flex flex-col rounded-[10px] gap-[10px] py-[20px] px-[10px] ${
              isEditable ? "bg-[#CBCAC74D] border-[1px] " : "bg-[#F4F2EF4D]"
            } `}
          >
            <div className="flex items-center justify-between mb-6">
              <div className="flex gap-[20px] items-center">
                <Image
                  src={userImg}
                  alt="User Avatar"
                  height={70}
                  width={70}
                  className=" rounded-full object-cover"
                />
                <div className="flex items-center gap-[10px] ">
                  <button className="bg-[#359BFD] text-[14px] leading-[16.41px] font-[500] text-[#FFFFFF] py-[8px] px-[14px] rounded-[17px] ">
                    Upload new picture
                  </button>
                  <button className="bg-[#D4D4D44D]  text-[#F82121] py-[8px] px-[14px] rounded-[17px] text-[14px] leading-[16.41px] font-[500] ">
                    Delete
                  </button>
                </div>
              </div>
            </div>

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
                <div className="grid grid-cols-2 gap-5">
                  <div className="flex flex-col gap-[10px] ">
                    <label className="block uppercase text-[#404040] leading-[11.72px] font-[500] text-[10px] ">
                      First Name
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
                  <div className="flex flex-col gap-[10px] ">
                    <label className="block uppercase text-[#404040] leading-[11.72px] font-[500] text-[10px] ">
                      Last Name
                    </label>
                    <input
                      type="text"
                      value={userInfo?.last_name}
                      onChange={(e) => {
                        if (userInfo) {
                          setUserInfo({
                            ...userInfo,
                            last_name: e.target.value,
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

                <div className="flex flex-col gap-[10px] ">
                  <label className="block uppercase text-[#404040] leading-[11.72px] font-[500] text-[10px] ">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    value={userInfo?.phone_number}
                      onChange={(e) => {
                        if (userInfo) {
                          setUserInfo({
                            ...userInfo,
                            phone_number : e.target.value,
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
                  <button className="bg-[#FD830D] text-white font-[500] py-[10px] px-[24px] w-fit rounded-[8px]  ">
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
