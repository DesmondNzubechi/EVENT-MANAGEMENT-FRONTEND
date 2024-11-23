import Link from 'next/link';
import { api } from '@/components/lib/api';
import { toast } from 'react-toastify';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { AuthPage } from '@/components/authPage/authPage';
import { BounceLoader } from 'react-spinners';

const Register = () => {

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const [formValid, setFormValid] = useState({
        firstName: false,
        lastName: false,
        email: false,
        password: false,
        confirmPassword: false
    });

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const router = useRouter();

    

    const validateInput = (name: string, value: string) => {
        switch (name) {
            case 'firstName':
            case 'lastName':
                return value.length > 0;
            case 'email':
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                return emailRegex.test(value);
            case 'password':
                return value.length >= 10;
            case 'confirmPassword':
                return value === formData.password && value.length >= 10;
            default:
                return false;
        }
    };

    const validateForm = () => {
        return (
            formValid.firstName &&
            formValid.lastName &&
            formValid.email &&
            formValid.password &&
            formValid.confirmPassword
        );
    };

    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });

        setFormValid({
            ...formValid,
            [name]: validateInput(name, value)
        });
    };

    const signUpUser = async (e: any) => {
        e.preventDefault();

        setError("");


        if (formData.password.length < 10 && formData.confirmPassword.length < 10) {
            toast.error("Your password length must be longer than 10");
            return;
        }

        if (formData.password !== formData.confirmPassword) {
            toast.error("Password and confirm password are not the same!");
            return;
        }

        if (!validateForm()) {
            toast.error("Please fill in all fields correctly");
            return;
        }

        setLoading(true);
        try {
         const response = await api.post('/user/signup', formData, {withCredentials: true});


            router.push('/my-account');
            toast.success("Signup successful", {
                hideProgressBar: true,
                closeOnClick: true,
                autoClose: 5000,
                pauseOnHover: true,
            });
        } catch (error : any) {

           
            if (error instanceof Error) {
                    setError(error.message);
            } else {
                setError("An unexpected error occurred");
                }
                if (error?.response?.data?.message === "user already exist with email") {
                        toast.error("user already exist. Please login", {
                                hideProgressBar: true,
                                closeOnClick: true,
                                autoClose: 1000,
                                pauseOnHover: true,
                            });      
                }
        } finally {
            setLoading(false);
        }
    };
 

    return <>
    <div className='grid md:px-[50px] px-[20px] py-[20px] lg:px-[50px] grid-cols-1 gap-[100px]  md:grid-cols-2  '>
    {loading && <div className="fixed bg-tpr w-full z-[500] left-0 right-0 flex justify-center h-full top-0 bottom-0 items-center"><BounceLoader color="#FF5A3C"
                    size={100}
                /></div>}
<AuthPage/>

<div className='flex flex-col justify-center items-center bg-white  gap-5 px-[30px] py-[20px] '>
    
    <form action="" onSubmit={signUpUser} className='flex flex-col w-full gap-2'>
        <div className='flex flex-col justify-center  text-center gap-2 mb-[20px] '>
            <h1 className='font-[700] text-[32px] leading-[39.97px] text-[#111111] '>Create Account</h1>
            <p className='font-[400] leading-[19.98px] text-[16px] text-[#333333] '>Have a login account</p>
        </div>
<div className='flex flex-col gap-[4px]  w-full'>
    <label htmlFor="firstName" className='text-[16px] font-[400] text-[#666666] leading-[19.98px] '>Firstname</label>
    <input  name='firstName'
    value={formData.firstName}
                            onChange={handleChange}
                             type="text" required className='border outline-0 px-[20px]  rounded-[8px] h-[50px] text-[#333333] bg-transparent  '
                              />
</div>
<div className='flex flex-col gap-[4px]  w-full'>
    <label htmlFor="LastName" className='text-[16px] font-[400] text-[#666666] leading-[19.98px] '>Lastname</label>
    <input name='lastName' required value={formData.lastName}
                            onChange={handleChange} type="text" className='border outline-0 px-[20px]  rounded-[8px] h-[50px] text-[#333333] bg-transparent  ' />
</div>
<div className='flex flex-col gap-[4px]  w-full'>
    <label htmlFor="email" className='text-[16px] font-[400] text-[#666666] leading-[19.98px] '>Email</label>
    <input name='email' required value={formData.email}
                            onChange={handleChange} type="text" className='border outline-0 px-[20px]  rounded-[8px] h-[50px] text-[#333333] bg-transparent  ' />
</div>
<div className='flex flex-col gap-[4px]  w-full'>
    <label htmlFor="password" className='text-[16px] font-[400] text-[#666666] leading-[19.98px] '>Password</label>
    <input name='password' required value={formData.password}
                            onChange={handleChange} type="password" className='border outline-0 px-[20px]  rounded-[8px] h-[50px] text-[#333333] bg-transparent  ' />
</div>
<div className='flex flex-col gap-[4px]  w-full'>
    <label htmlFor="confirmPassword"  className='text-[16px] font-[400] text-[#666666] leading-[19.98px] '>Confirm Password</label>
    <input name='confirmPassword' required value={formData.confirmPassword}
                            onChange={handleChange} type="password" className='border outline-0 px-[20px]  rounded-[8px] h-[50px] text-[#333333] bg-transparent  ' />
</div>
<button   disabled={loading}  type='submit' className='bg-[#FF5733]  py-[12px] px-[10px] rounded-[10px] text-[#FFFFFF] font-[400] text-[16px] text-center '> {loading ? "Creating account..." : "Create an account"}</button>
<div className="flex items-center  justify-center gap-2">
                    <h1 className="font-[400] text-[#666666] leading-[19.98px]  text-[15px] ">
                        Already have an Account?
                    </h1>
                    <Link href='/signin' className=' text-[15px] w-fit text-btn-primary  py-[15px] font-[400]  hover:text-[#666666]'>
                        Sign in
                    </Link> 
                </div>
    </form>
</div>
    </div>
    </> 
}

export default Register;