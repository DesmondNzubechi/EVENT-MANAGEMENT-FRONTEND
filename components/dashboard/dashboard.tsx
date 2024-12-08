import React from "react";
import DashboardCard from "../dashboardCard/dashboardcard";

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
          title="Total Properties"
          value={totalProperties}
          percentage={100}
          color="#3B82F6"
        />
        <DashboardCard
          title="Marketplace Properties"
          value={marketplaceProperties}
          percentage={(marketplaceProperties / totalProperties) * 100}
          color="#34D399"
        />
        <DashboardCard
          title="Launchpad Properties"
          value={launchpadProperties}
          percentage={(launchpadProperties / totalProperties) * 100}
          color="#F97316"
        />
      </div>
    </main>
  );
};

export default DashboardMain;