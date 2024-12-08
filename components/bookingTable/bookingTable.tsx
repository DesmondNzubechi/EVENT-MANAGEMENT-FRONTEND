import Link from "next/link";
import React from "react";
import { FaEye, FaEdit, FaTrash } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import { LuDownload } from "react-icons/lu";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { RiArrowRightSLine, RiDeleteBinLine } from "react-icons/ri";

const PaymentHistory = () => {
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

  return (
    <>
      <div className=" bg-[#FBFBFA] py-[100px]  grid grid-cols-1 ">

        <div className="p-4  flex flex-col gap-5  pt-[100px]  px-[30px] ">
          <div className=" overflow-x-auto ">
            <table className=" overflow-x-scroll w-full rounded-[20px] border bg-white">
              <thead className="bg-[#EAF0FC4D] py-[5px] px-[6px] ">
                <tr>
                  <th className="py-[10px] px-[12px] text-[12px] leading-[14.4px] text-[#404040] ">Order ID</th>
                  <th className="py-[10px] px-[12px] text-[12px] leading-[14.4px] text-[#404040] ">Property Name</th>
                  <th className="py-[10px] px-[12px] text-[12px] leading-[14.4px] text-[#404040] ">Billing To</th>
                  <th className="py-[10px] px-[12px] text-[12px] leading-[14.4px] text-[#404040] ">Amount</th>
                  <th className="py-[10px] px-[12px] text-[12px] leading-[14.4px] text-[#404040] ">Date</th>
                  <th className="py-[10px] px-[12px] text-[12px] leading-[14.4px] text-[#404040] ">Payment Type</th>
                  <th className="py-[10px] px-[12px] text-[12px] leading-[14.4px] text-[#404040] ">Status</th>
                  <th className="py-[10px] px-[12px] text-[12px] leading-[14.4px] text-[#404040] ">Action</th>
                </tr>
              </thead>
              <tbody>
                {data.map((order, index) => (
                  <tr key={index} className="border-b py-[8px] px-[6px] ">
                    <td className="p-[10px] text-[14px] text-[#1A1A1A] ">
                      <input type="checkbox" name="" className=" mr-[10px] " id="" />

                    {order.id}
                    </td>
                    <td className="p-[10px] text-[14px] text-[#1A1A1A] ">{order.propertyName}</td>
                    <td className="p-[10px] text-[14px] text-[#1A1A1A] ">{order.billingTo}</td>
                    <td className="p-[10px] text-[14px] text-[#1A1A1A] ">{order.amount}</td>
                    <td className="p-[10px] text-[14px] text-[#1A1A1A] ">{order.date}</td>
                    <td className="p-[10px] text-[14px] text-[#1A1A1A] ">{order.paymentType}</td>
                    <td className="p-[10px] text-[14px] text-[#1A1A1A] ">
                      <span
                        className={`py-[4px] px-[12px] rounded-full text-sm ${
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
                      <Link href='' className="border-[1px] border-[#CBCAC780] p-2 rounded-[4px]  ">
                      <RiDeleteBinLine className="text-gray-500 text-[14px]  hover:text-red-500 cursor-pointer" />
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
          <div className="flex justify-between w-full items-center gap-5 ">
            <p className="text-[#404040]  text-[14px] font-[400] leading-[16.41px]  ">
              1-12 of 12
            </p>
            <div className="flex  gap-5">
              <button className="text-[26px] rounded-full border p-1 ">
                <MdKeyboardArrowLeft />{" "}
              </button>
              <button className="text-[26px] rounded-full border p-1 ">
                <RiArrowRightSLine />
              </button>
            </div>
          </div>
        </div>
      </div>
    
    </>
  );
};

export default PaymentHistory;
