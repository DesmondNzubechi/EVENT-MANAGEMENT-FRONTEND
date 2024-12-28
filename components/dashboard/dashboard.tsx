import React, { useEffect } from "react";
import DashboardCard from "../dashboardCard/dashboardcard";
import { TbBrandBooking } from "react-icons/tb";
import { MdVerified } from "react-icons/md";
import { SiEventstore } from "react-icons/si";
import {
  useBookedEventStore,
  useEventStore,
  useUserStore,
} from "../store/store";
import { useRouter } from "next/router";
const DashboardMain = () => {
  const { event } = useEventStore();
  const { user } = useUserStore();
  const { bookedEvent } = useBookedEventStore();
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push("/auth/signin");
    }
  }, []);

  return (
    <>
      <main className="flex-1    pt-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <DashboardCard
            title="Account Status"
            value="Verified"
            icon={<MdVerified className="text-[70px] text-green-500" />}
            color="#3B82F6"
          />
          <DashboardCard
            title="Available Events"
            value={event?.length}
            icon={<SiEventstore className="text-[70px] " />}
            color="#34D399"
          />
          <DashboardCard
            title="Booked Events"
            value={bookedEvent?.length}
            icon={<TbBrandBooking className="text-[70px] " />}
            color="#F97316"
          />
        </div>
      </main>
    </>
  );
};

export default DashboardMain;
