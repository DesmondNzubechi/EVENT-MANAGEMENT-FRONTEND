import Image from "next/image";
import { ChangeEvent, useEffect, useState } from "react";
import { FiEdit, FiEye, FiEyeOff } from "react-icons/fi";
import userImg from "../../../public/IMAGES/user.jpg";
import { RxPencil1 } from "react-icons/rx";
import ProfileSideNavBar from "@/components/sideNav/profileSideNav";
import { useUserStore } from "@/components/store/store";
import { useRouter } from "next/router";

import { api } from "@/components/lib/api";
import { toast } from "react-toastify";
import { HashLoader } from "react-spinners";
import { DesktopNav } from "@/components/Navbar/desktopNav";
import { MobileNav } from "@/components/Navbar/mobileNav";
import { Footer } from "@/components/Footer/footer";

export default function AccountDetails() {
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [currentPassword, setCurrentPassword] = useState<string>("");
  const [error, setError] = useState<string | any>("");
  const router = useRouter();
  const [isEditable, setIsEditable] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const [loading, setLoading] = useState<boolean>(false);

  const changePassword = async (e: any) => {
    e.preventDefault();

    if (!password || !confirmPassword) {
      toast.error("Please provide password and confirm password.");
      return;
    }
    if (!currentPassword) {
      toast.error("Please provide your current password.");
      return;
    }

    if (password.length < 10 || confirmPassword.length < 10) {
      toast.error("Your password length must be greater than or equal to 10.");
      return;
    }

    if (password !== confirmPassword) {
      toast.error("Confirm password and password are not the same.");
      return;
    }

    setLoading(true);
    try {
      await api.patch(
        `/auth/changePassword`,
        {
          currentPassword: currentPassword,
          newPassword: password,
          confirmNewPassword: confirmPassword,
        },
        {
          withCredentials: true,
        }
      );

      toast.success("Password change succesful. Please login again");

      router.push("/auth/signin");
    } catch (error: any) {
     

      setError(error?.response?.data?.message);
      toast.error(error?.response?.data?.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {loading && (
        <div className="fixed bg-tpr w-full z-[500] left-0 right-0 flex justify-center h-full top-0 bottom-0 items-center">
          <HashLoader color="#0000FF" size={100} />
        </div>
      )}
      <DesktopNav />
      <MobileNav />
      <div className="grid grid-cols-1 my-[150px] gap-[50px] lg:grid-cols-4 px-[20px] ">
        <ProfileSideNavBar />

        <div className="  p-4 lg:col-span-3">
          <h1 className="text-[16px] py-[10px] uppercase text-[#1A1A1A] mb-[20px] border-b-[1px]  font-[500] leading-[19.2px] ">
            Change my password
          </h1>

          {/* User Avatar and Buttons */}
          <div
            className={`flex flex-col rounded-[10px] gap-[10px] py-[20px] px-[10px] ${
              isEditable ? "bg-[#CBCAC74D] border-[1px] " : "bg-[#F4F2EF4D]"
            } `}
          >
            {/* User Information Section */}
            <div className="  p-4 ">
              <div className="flex justify-between mb-4">
                <h2 className="text-[16px] text-[#404040] leading-[19.2px] font-[500]">
                  Password Change
                </h2>
              </div>

              {/* Form Fields */}
              <form
                onSubmit={changePassword}
                className="flex flex-col gap-[20px] "
              >
                <div className="flex flex-col gap-[10px] ">
                  <label className="block uppercase text-[#404040] leading-[11.72px] font-[500] text-[10px] ">
                    Current Password
                  </label>
                  <input
                    name="resetToken"
                    value={currentPassword}
                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                      setCurrentPassword(e.target.value)
                    }
                    type="password"
                    className={`w-full p-[12px] border-[0.5px]   rounded-[6px] 
                      bg-[#FFFFFF] border-[0.5px] outline-0`}
                  />
                </div>

                <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                  <div className="flex flex-col gap-[10px] relative">
                    <label className="block uppercase text-[#404040] leading-[11.72px] font-[500] text-[10px] ">
                      Password
                    </label>
                    <input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      value={password}
                      onChange={(e: ChangeEvent<HTMLInputElement>) =>
                        setPassword(e.target.value)
                      }
                      className={`w-full p-[12px] border-[0.5px]   rounded-[6px] 
                      bg-[#FFFFFF] border-[0.5px] outline-0`}
                    />
                    <button
                      className="absolute inset-y-0 right-2 flex items-center text-gray-500"
                      onClick={togglePasswordVisibility}
                    >
                      {showPassword ? (
                        <FiEyeOff className="text-[#1A1A1A] " />
                      ) : (
                        <FiEye className="text-[#1A1A1A] " />
                      )}
                    </button>
                  </div>

                  <div className="flex flex-col gap-[10px] relative">
                    <label className="block uppercase text-[#404040] leading-[11.72px] font-[500] text-[10px] ">
                      confirm password
                    </label>
                    <input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      value={confirmPassword}
                      onChange={(e: ChangeEvent<HTMLInputElement>) =>
                        setConfirmPassword(e.target.value)
                      }
                      className={`w-full p-[12px] border-[0.5px]   rounded-[6px] 
                       bg-[#FFFFFF] border-[0.5px] outline-0`}
                    />
                    <button
                      className="absolute inset-y-0 right-2 flex items-center text-gray-500"
                      onClick={togglePasswordVisibility}
                    >
                      {showPassword ? (
                        <FiEyeOff className="text-[#1A1A1A] " />
                      ) : (
                        <FiEye className="text-[#1A1A1A] " />
                      )}
                    </button>
                  </div>
                </div>
                {error && (
                  <p className="text-red-500 text-[10px] capitalize">{error}</p>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="bg-[#0000FF] text-white font-[500] py-[10px] px-[24px] w-fit rounded-[8px]  "
                >
                  {loading ? "Changing Password" : "Change Password"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
