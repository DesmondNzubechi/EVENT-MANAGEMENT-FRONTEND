import { Footer } from "@/components/Footer/Footer";
import SignedInDesktopNav from "@/components/Navbar/signedInDesktopNav";
import { SignedInMobileNav } from "@/components/Navbar/signedInMobileNav";
import ProfileSideNavBar from "@/components/sideNav/profileSideNav";
import React, { useState } from "react";

export default function Settings() {
  // State to manage the toggles and dropdown
  const [emailNotification, setEmailNotification] = useState(true);
  const [alertChannel, setAlertChannel] = useState("Email");
  const [accountDeactivated, setAccountDeactivated] = useState(false);

  // Handlers for each control
  const handleEmailNotificationToggle = () => {
    setEmailNotification(!emailNotification);
  };

  const handleAlertChannelChange = (e: any) => {
    setAlertChannel(e.target.value);
  };

  const handleAccountDeactivationToggle = () => {
    setAccountDeactivated(!accountDeactivated);
  };

  return (
    <>
     <SignedInMobileNav/>
<SignedInDesktopNav/>
  <div className='grid grid-cols-1 my-[100px] mb-[150px] gap-[50px]  lg:grid-cols-4 px-[20px] '>
    <ProfileSideNavBar/>

  <div className="  p-4  lg:col-span-3 bg-[#FFFFFF] rounded-lg  ">
        <h1 className=" py-[10px] text-[16px] leading-[19.2px] font-[500] text-[#1A1A1A] border-b mb-[20px] w-fit gap-[10px] uppercase">
          Settings
        </h1>

        <div className="flex flex-col gap-[33px] px-[10px] py-[20px] rounded-[10px] bg-[#F4F2EF4D] ">
          <div className="flex justify-between items-center mb-4">
            <div className="flex flex-col gap-2">
              <h2 className="font-[500] uppercase text-[10px] leading-[11.72px] text-[#404040] ">
                Email Notification
              </h2>
              <p className="font-[400]  text-[14px] leading-[16.41px] text-[#404040] ">
                Preferred communication channel
              </p>
            </div>
            <div
              className={` ${
                emailNotification
                  ? "bg-[#34C759] justify-end"
                  : "bg-slate-200 justify-start"
              } px-[1px] rounded-[20px] h-[23.71px] w-[39px] flex items-center `}
            >
              {!emailNotification && (
                <button
                  onClick={() => setEmailNotification(true)}
                  className="h-[20.65px]  w-[20.65px] bg-[#FFFFFF] rounded-full "
                ></button>
              )}
              {emailNotification && (
                <button
                  onClick={() => setEmailNotification(false)}
                  className="h-[20.65px]  w-[20.65px] bg-[#FFFFFF] rounded-full "
                ></button>
              )}
            </div>
          </div>

          <div className="flex justify-between items-center mb-4">
            <div className="flex flex-col gap-2">
              <h2 className="font-[500] uppercase text-[10px] leading-[11.72px] text-[#404040] ">
                Alert Notification
              </h2>
              <p className="font-[400]  text-[14px] leading-[16.41px] text-[#404040] ">
                Preferred communication channel
              </p>
            </div>
            <select
              value={alertChannel}
              onChange={handleAlertChannelChange}
              className="border outline-0 bg-[#FFFFFF]  border-gray-300 rounded-[5px] px-[14px] py-[10px] uppercase text-[#756250] text-[14px] leading-[16.94px] "
            >
              <option value="Email">Email</option>
              <option value="SMS">SMS</option>
              <option value="Push">Push Notifications</option>
            </select>
          </div>

          <div className="flex justify-between items-center mb-4">
            <div className="flex flex-col gap-2">
              <h2 className="font-[500] uppercase text-[10px] leading-[11.72px] text-[#404040] ">
                Deactivate Account
              </h2>
              <p className="font-[400]  text-[14px] leading-[16.41px] text-[#404040] ">
                Your account will be shut down. It will be reactivated when you
                sign in again.
              </p>
            </div>
            <div
              className={` ${
                accountDeactivated
                  ? "bg-[#34C759] justify-end"
                  : "bg-slate-200 justify-start"
              } px-[1px] rounded-[20px] h-[23.71px] min-w-[39px] flex items-center `}
            >
              {!accountDeactivated && (
                <button
                  onClick={() => setAccountDeactivated(true)}
                  className="h-[20.65px]  w-[20.65px] bg-[#FFFFFF] rounded-full "
                ></button>
              )}
              {accountDeactivated && (
                <button
                  onClick={() => setAccountDeactivated(false)}
                  className="h-[20.65px]  w-[20.65px] bg-[#FFFFFF] rounded-full "
                ></button>
              )}
            </div>
          </div>
        </div>
      </div>
      </div>
      <Footer />
    </>
  );
}
