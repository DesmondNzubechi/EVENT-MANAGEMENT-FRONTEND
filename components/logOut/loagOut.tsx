import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { useUserStore } from "../store/store";
import { api } from "../lib/api";
import { BounceLoader } from "react-spinners";

export const LogOut = ({
  logOut,
  setLogOut,
}: {
  logOut: boolean;
  setLogOut: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const { clearUser } = useUserStore();
  const [loading, setLoading] = useState<boolean>(false);

  const router = useRouter();
  const signOutUser = async () => {
    setLoading(true);
    try {
      await api.post("/auth/logout", {}, { withCredentials: true });
      clearUser();
      setLogOut(false);
      router.push("/auth/signin");
      toast.success("Logout successful");
    } catch (error) {
      toast.error("An error occured, Try again.");
    } finally {
      setLoading(false);
    }
  };
  return (
    logOut && (
      <span
        onClick={(e: React.MouseEvent<HTMLSpanElement>) => {
          if (
            e.target instanceof HTMLElement &&
            e.target.classList.contains("logout-dialog")
          ) {
            setLogOut(false);
          }
        }}
        className="py-[100px] z-[2000] bg-tpr h-full fixed flex logout-dialog justify-center items-center top-0 left-0 w-full px-[40px] "
      >
        {loading ? (
          <div className="flex flex-col items-center justify-center  bg-white font-poppins rounded p-[50px] relative gap-5">
            {" "}
            <BounceLoader color="#0000FF" size={100} />{" "}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center  bg-white font-poppins rounded p-[50px] relative gap-5">
            <h1 className="text-[20px] text-center capitalize font-semibold">
              Are you sure <br /> you want to logout?
            </h1>
            <div className="flex flex-row gap-[30px]">
              <button
                onClick={signOutUser}
                className="bg-green-500 hover:bg-green-700 px-[20px] py-[5px] rounded shadow-2xl text-slate-50 font-bold uppercase "
              >
                Yes
              </button>
              <button
                onClick={() => setLogOut(false)}
                className="bg-red-500 hover:bg-red-700 px-[20px] py-[5px] rounded shadow-2xl text-slate-50 font-bold uppercase "
              >
                No
              </button>
            </div>
          </div>
        )}
      </span>
    )
  );
};
