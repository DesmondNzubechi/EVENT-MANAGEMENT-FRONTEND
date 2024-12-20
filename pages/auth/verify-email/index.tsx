import Link from "next/link";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import signImg from '../../public/images/login1.avif'
import Image from "next/image";
import React, { useState } from "react";
import { api } from "@/components/lib/api";
import { toast } from 'react-toastify'
import { AuthPage } from "@/components/authPage/authPage";

export default function VerifyEmail() {


    const [verificationCode, setVerificationCode] = useState<string>('')
    const [error, setError] = useState<string>('')
    const [loading, setLoading] = useState<boolean>(false);

    const validateForm = () => {

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(verificationCode)) {
            setError("Please provide a valid email address")
            return false
        }

        return true;
    }

    const forgotPasswordFn = async (e: any) => {
        e.preventDefault()
        if (!validateForm) {
            return;
        }

        if (!verificationCode) {
            setError("please provide the verification code sent to your email");
            return;
        }

        setLoading(true);
 

        try {
         
            await api.post('/user/forgotPassword', { verificationCode })
            
            toast.success("Rest password link has been sent to your. Kindly check")
            setLoading(false)
        } catch (error) {
            
            toast.error("An error occured. Please try again")
            setLoading(false)
        }

    }
     
    return <div className='grid md:px-[50px] px-[20px] py-[20px] lg:px-[50px] grid-cols-1 gap-[100px]  md:grid-cols-2  '>
   <AuthPage/>
        <div className="flex flex-col gap-[50px] justify-center h-full by-primaryBg px-[50px] md:px-[100px] py-[50px] ">
            <div className='flex flex-col justify-center  text-center gap-2 mb-[20px] '>
                <h1 className='font-[700] text-[32px] leading-[39.97px] text-[#111111] '>Forgot password</h1>
               <p className='font-[400] leading-[19.98px] text-[16px] text-[#333333] '>Submit your email. a reset password link will be sent to the email provided</p>
            </div>
            <form onSubmit={forgotPasswordFn} className="flex flex-col gap-5">
            <div className='flex flex-col gap-[4px]  w-full'>
    <label htmlFor="verificationCode" className='text-[16px] font-[400] text-[#666666] leading-[19.98px] '>verificationCode</label>
    <input name='verificationCode'  value={verificationCode} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setVerificationCode(e.target.value)} type="number" className='border outline-0 px-[20px]  rounded-[8px] h-[50px] text-[#333333] bg-transparent  ' />
</div>
            
                <button type="submit" disabled={loading} className='bg-blue-700  py-[12px] px-[10px] rounded-[10px] text-[#FFFFFF] font-[400] text-[16px] text-center '>{loading? "Verifying..." : "Verify email"}</button>

                <Link href="/signin" className="text-textTitle hover:text-btn-primary">Remember password?</Link>
            </form>
        </div>
    </div>
}