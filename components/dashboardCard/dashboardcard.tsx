import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const DashboardCard = ({ title, value, icon }: { title: string, value: number | string | undefined,  color:string, icon: any }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md flex flex-col border mt-[30px] gap-3 items-center justify-center text-center w-full">
      <h3 className="text-gray-600 font-semibold mb-2">{title}</h3>
      <div className="">
        {icon}
      </div>
      <p className="text-[15px]  text-gray-800">{value}</p>
    </div>
  );
};

export default DashboardCard;
