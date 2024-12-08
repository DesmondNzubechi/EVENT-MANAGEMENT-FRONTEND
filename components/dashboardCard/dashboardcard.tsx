import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const DashboardCard = ({ title, value, percentage, color }: { title: any, value: any, percentage:any, color:any }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center justify-center text-center w-full">
      <h3 className="text-gray-600 font-semibold mb-2">{title}</h3>
      <div className="w-20 h-20 mb-4">
        <CircularProgressbar
          value={percentage}
          text={`${percentage}%`}
          styles={buildStyles({
            textColor: "#333",
            pathColor: color,
            trailColor: "#e6e6e6",
          })}
        />
      </div>
      <p className="text-2xl font-bold text-gray-800">{value}</p>
    </div>
  );
};

export default DashboardCard;
