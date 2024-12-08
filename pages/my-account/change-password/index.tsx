import Image from "next/image";
import { ChangeEvent, useEffect, useState } from "react";
import { FiEdit, FiEye, FiEyeOff } from "react-icons/fi";
import userImg from "../../../public/IMAGES/user.jpg";
import { RxPencil1 } from "react-icons/rx";
import ProfileSideNavBar from "@/components/sideNav/profileSideNav";
import { useUserStore } from "@/components/store/store";
import { useRouter } from "next/router";

import { api} from "@/components/lib/api";
import { toast } from "react-toastify";
import { HashLoader } from "react-spinners";
import { DesktopNav } from "@/components/Navbar/desktopNav";
import { MobileNav } from "@/components/Navbar/mobileNav";
import { Footer } from "@/components/Footer/footer";

export default function AccountDetails() {
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [resetToken, setResetToken] = useState<string>("");

  const router = useRouter();
  const [isEditable, setIsEditable] = useState(false);
  const [showPassword, setShowPassword] = useState(false);


  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleEditClick = () => {
    setIsEditable(!isEditable); // Toggle between read-only and editable
  };


  const [loading, setLoading] = useState<boolean>(false);

  const sendResetToken = async (e: any) => {
      e.preventDefault()

      setLoading(true);


      try {
       
          await api.post('/auth/reset_password', { email : "user?.email" })
           
          toast.success("Rest token has been sent to your email. Kindly check")
      } catch (error) {
          
          toast.error("An error occured. Please try again")
         
      } finally {
        setLoading(false)
      }

  }

  const changePassword = async (e: any) => {
    e.preventDefault();

    if (!password || !confirmPassword) {
      toast.error("Please provide password and confirm password.");
      return;
    }
    if (!resetToken) {
      toast.error(
        "Please provide the reset password token that was sent to your email or request for a new one."
      );
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
      await api.post(`/auth/change_password`, {
        password: password,
        password_confirmation: confirmPassword,
        remember_token: resetToken,
      });

      toast.success("Password change succesful. Please login again");
      setLoading(false);

      router.push("/signin");
    } catch (error) {
      toast.error("An error occured. Please try again");
      setLoading(false);
    }
  };

  useEffect(() => {
  
  }, []);

  return (
    <>
        {loading && (
        <div className="fixed bg-tpr w-full z-[500] left-0 right-0 flex justify-center h-full top-0 bottom-0 items-center">
          <HashLoader color="#FD830D" size={100} />
        </div>
      )}
     <DesktopNav/>
      <MobileNav/>
      <div className="grid grid-cols-1 my-[100px] gap-[50px] lg:grid-cols-4 px-[20px] ">
        <ProfileSideNavBar />
 
        <div className="  p-4 lg:col-span-3">
          <h1 className="text-[16px] py-[10px] uppercase text-[#1A1A1A] mb-[20px] border-b-[1px]  font-[500] leading-[19.2px] ">
            Change password
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
                <button onClick={sendResetToken} type="button" className="bg-[#359BFD] text-[14px] leading-[16.41px] font-[500] text-[#FFFFFF] py-[8px] px-[14px] rounded-[5px] ">
                    Request Reset Token
                  </button>
              </div>

              {/* Form Fields */}
              <form onSubmit={changePassword} className="flex flex-col gap-[20px] ">
                <div className="flex flex-col gap-[10px] ">
                  <label className="block uppercase text-[#404040] leading-[11.72px] font-[500] text-[10px] ">
                 Current Password
                  </label>
                  <input
                     name="resetToken"
                     value={resetToken}
                     onChange={(e: ChangeEvent<HTMLInputElement>) =>
                       setResetToken(e.target.value)
                     }
                     type="text"
                    
                     className={`w-full p-[12px] border-[0.5px]   rounded-[6px] 
                      bg-[#FFFFFF] border-[0.5px] outline-0`}
                  />
                </div>

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
                

                <button type="submit" className="bg-[#FD830D] text-white font-[500] py-[10px] px-[24px] w-fit rounded-[8px]  ">
                  Save Change
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
