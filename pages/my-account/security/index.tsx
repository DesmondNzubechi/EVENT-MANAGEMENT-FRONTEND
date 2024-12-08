import { Footer } from '@/components/Footer/Footer';
import SignedInDesktopNav from '@/components/Navbar/signedInDesktopNav';
import { SignedInMobileNav } from '@/components/Navbar/signedInMobileNav';
import ProfileSideNavBar from '@/components/sideNav/profileSideNav';
import React, { useState } from 'react';

export default function Security() {
  // State to manage the toggles and dropdown
  const [emailNotification, setEmailNotification] = useState(true);
  const [alertChannel, setAlertChannel] = useState('Email');
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
  <div className='grid grid-cols-1 my-[100px] mb-[150px] gap-[50px] lg:grid-cols-4 px-[20px] '>
    <ProfileSideNavBar/>

  <div className="  p-4 lg:col-span-3 rounded-lg bg-[#FFFFFF] ">
      <h1 className=" py-[10px] text-[16px] leading-[19.2px] font-[500] text-[#1A1A1A] border-b mb-[20px] w-fit gap-[10px] uppercase">Security</h1>

     <div className='flex flex-col gap-[33px] px-[10px] py-[20px] rounded-[10px] bg-[#F4F2EF4D] '>

     <div className="flex justify-between items-center mb-4">
        <div className='flex flex-col gap-2'>
          <h2 className="font-[500] uppercase text-[10px] leading-[11.72px] text-[#404040] ">2-factor authentication</h2>
          <p className="font-[400]  text-[14px] leading-[16.41px] text-[#404040] ">Make account secure. You’ll need an extra code</p>
        </div>
        <div className={` ${emailNotification?  "bg-[#34C759] justify-end" : "bg-slate-200 justify-start"} px-[1px] rounded-[20px] h-[23.71px] w-[39px] flex items-center `} >
{!emailNotification && <button onClick={() => setEmailNotification(true)} className='h-[20.65px]  w-[20.65px] bg-[#FFFFFF] rounded-full '></button>}
{emailNotification && <button onClick={() => setEmailNotification(false)} className='h-[20.65px]  w-[20.65px] bg-[#FFFFFF] rounded-full '></button>}
        </div>
      </div>

      <div className="flex justify-between items-center mb-4">
        <div className='flex flex-col gap-2'>
          <h2 className="font-[500] uppercase text-[10px] leading-[11.72px] text-[#404040] ">Deactivate Account</h2>
          <p className="font-[400]  text-[14px] leading-[16.41px] text-[#404040] ">Your account will be shut down. It will be reactivated when you sign in again.</p>
        </div>
        <div className={` ${accountDeactivated?  "bg-[#34C759] justify-end" : "bg-slate-200 justify-start"} px-[1px] rounded-[20px] h-[23.71px] min-w-[39px] flex items-center `} >
{!accountDeactivated && <button onClick={() => setAccountDeactivated(true)} className='h-[20.65px]  w-[20.65px] bg-[#FFFFFF] rounded-full '></button>}
{accountDeactivated && <button onClick={() => setAccountDeactivated(false)} className='h-[20.65px]  w-[20.65px] bg-[#FFFFFF] rounded-full '></button>}
        </div>
      </div>

      <div className="flex justify-between items-center mb-4">
        <div className='flex flex-col gap-2'>
          <h2 className="font-[500] uppercase text-[10px] leading-[11.72px] text-[#404040] ">delete account</h2>
          <p className="font-[400]  text-[14px] leading-[16.41px] text-[#404040] ">Your account will be permanently deleted from Odinala Network</p>
        </div>
        <button className='text-[14px] text-[#404040] leading-[16.41px] font-[400] '>Delete</button>
      </div>
     </div>
   
    </div>
    </div>
    <Footer/>
    </>
  );
}
