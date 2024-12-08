import React from "react";
import DashboardCard from "../dashboardCard/dashboardcard";
import { BsCalendar2EventFill } from "react-icons/bs";
import { TbBrandBooking } from "react-icons/tb";
import { MdVerified } from "react-icons/md";
import { SiEventstore } from "react-icons/si";
const DashboardMain = () => {
  const totalProperties = 1000;
  const marketplaceProperties = 684;
  const launchpadProperties = 316;
  const totalUsers = 3672;
  const totalCities = 75;

  return (
    <main className="flex-1    pt-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <DashboardCard
          title="Account Status"
          value='Verified'
          icon={<MdVerified className="text-[70px] text-green-500"/>}
          percentage={100}
          color="#3B82F6"
        />
        <DashboardCard
          title="Available Events"
          value={5}
          icon={<SiEventstore className="text-[70px] "/>}
          percentage={(marketplaceProperties / totalProperties) * 100}
          color="#34D399"
        />
        <DashboardCard
          title="Booked Events"
          value={0}
          icon={<TbBrandBooking className="text-[70px] "/>}
          percentage={(launchpadProperties / totalProperties) * 100}
          color="#F97316"
        />
      </div>
    </main>
  );
};

export default DashboardMain;