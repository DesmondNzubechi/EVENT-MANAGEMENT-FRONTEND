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
import { IoIosArrowForward } from "react-icons/io";
import { RiDeleteBinLine } from "react-icons/ri";
import { LuDownload } from "react-icons/lu";
import Link from "next/link";

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
  const data = [
    {
      id: "#0023",
      propertyName: "Ethan's Grove",
      billingTo: "Chike Golden",
      amount: "₦50,000,000",
      date: "March 10, 2024, 10:30AM",
      paymentType: "Payment plan",
      status: "In progress",
    },
    {
      id: "#0023",
      propertyName: "Ethan's Grove",
      billingTo: "Chike Golden",
      amount: "₦50,000,000",
      date: "March 10, 2024, 10:30AM",
      paymentType: "Outright payment",
      status: "Completed",
    },
    // More data here...
  ];

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
      <div className="grid grid-cols-1 my-[150px] gap-[50px] lg:grid-cols-4 px-[20px] ">
        <ProfileSideNavBar />
 
        <div className="  p-4 lg:col-span-3">
          <h1 className="text-[16px] py-[10px] uppercase text-[#1A1A1A] mb-[20px] border-b-[1px]  font-[500] leading-[19.2px] ">
           my bookings
          </h1>

          {/* User Avatar and Buttons */}
          <div className=" overflow-x-auto ">
            <table className=" overflow-x-scroll w-full rounded-[20px] border bg-white">
              <thead className="bg-[#EAF0FC4D] py-[5px] px-[6px] ">
                <tr>
                  <th className="py-[10px] px-[12px] text-[12px] leading-[14.4px] text-[#404040] ">S/N</th>
                  <th className="py-[10px] px-[12px] text-[12px] leading-[14.4px] text-[#404040] ">Event Name</th>
                  <th className="py-[10px] px-[12px] text-[12px] leading-[14.4px] text-[#404040] ">Event Date</th>
                  <th className="py-[10px] px-[12px] text-[12px] leading-[14.4px] text-[#404040] ">Ticket price</th>
                  <th className="py-[10px] px-[12px] text-[12px] leading-[14.4px] text-[#404040] ">Booked Date</th>
                  <th className="py-[10px] px-[12px] text-[12px] leading-[14.4px] text-[#404040] ">Payment Status</th>
                  <th className="py-[10px] px-[12px] text-[12px] leading-[14.4px] text-[#404040] ">Action</th>
                </tr>
              </thead>
              <tbody>
                {data.map((order, index) => (
                  <tr key={index} className="border-b py-[8px] px-[6px] ">
                    <td className="p-[10px] text-[14px] text-[#1A1A1A] ">

                    {order.id}
                    </td>
                    <td className="p-[10px] text-[14px] text-[#1A1A1A] ">{order.propertyName}</td>
                    <td className="p-[10px] text-[14px] text-[#1A1A1A] ">{order.billingTo}</td>
                    <td className="p-[10px] text-[14px] text-[#1A1A1A] ">{order.amount}</td>
                    <td className="p-[10px] text-[14px] text-[#1A1A1A] ">{order.date}</td>
                    <td className="p-[10px] text-[14px] text-[#1A1A1A] ">
                      <span
                        className={`py-[4px] px-[12px] rounded-[10px] text-sm ${
                          order.status === "Completed"
                            ? "bg-[#CFFFE691] text-[#0BD36D] "
                            : "bg-[#CFE7FF66] text-[#0B70D3] "
                        }`}
                      >
                        {order.status}
                      </span>
                    </td>
                    <td className="py-2 px-4 flex space-x-2">
                      <Link href='' className="border-[1px] border-[#CBCAC780] p-2 rounded-[4px]  ">
                      <LuDownload className="text-gray-500 text-[14px] hover:text-blue-500 cursor-pointer" />
                      </Link>
                      <Link href='/vault/payment-history/hhdhgdgg' className="border-[1px] border-[#CBCAC780] p-2 rounded-[4px]  ">
                      <IoIosArrowForward className="text-gray-500 text-[14px]  hover:text-green-500 cursor-pointer" />
                      </Link>
                      
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
