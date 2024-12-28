import { useEffect, useState } from "react";

import { RxPencil1 } from "react-icons/rx";
import ProfileSideNavBar from "@/components/sideNav/profileSideNav";
import { useUserStore } from "@/components/store/store";
import { useRouter } from "next/router";
import { Footer } from "@/components/Footer/footer";
import { DesktopNav } from "@/components/Navbar/desktopNav";
import { MobileNav } from "@/components/Navbar/mobileNav";
import { api } from "@/components/lib/api";
import { toast } from "react-toastify";

import { BounceLoader } from "react-spinners";

export default function AccountDetails() {
  const router = useRouter();
  const [isEditable, setIsEditable] = useState(false);
  const { user, setUser } = useUserStore();
  const [userInfo, setUserInfo] = useState<any>({
    fullName: user?.fullName,
    email: user?.email,
  });
  const [error, setError] = useState<string | any>("");
  const [loading, setLoading] = useState<boolean>(false);

  const handleEditClick = () => {
    setIsEditable(!isEditable);
  };

  const editUserInfo = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await api.patch(
        `/auth/updateMe`,
        { newFullName: userInfo.fullName, newEmail: userInfo.email },
        {
          withCredentials: true,
        }
      );
      const userResponse = response.data.data.user;
      setUser(userResponse);
      setIsEditable(false);
      setError("");
      toast.success("Profile updated successfully.");
    } catch (error: unknown | any) {
      toast.error(error?.response.data?.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!user) {
      toast.error("You are not login.");
      router.push("/auth/signin");
    }
  }, []);

  return (
    <>
      {loading && (
        <div className="fixed bg-tpr w-full z-[500] left-0 right-0 flex justify-center h-full top-0 bottom-0 items-center">
          <BounceLoader color="#0000FF" size={100} />
        </div>
      )}
      <DesktopNav />
      <MobileNav />
      <div className="grid grid-cols-1 my-[150px] gap-[30px] lg:grid-cols-4 px-[20px] ">
        <ProfileSideNavBar />
        <div className="  p-4 lg:col-span-3">
          <h1 className="text-[16px] py-[10px] uppercase text-[#1A1A1A] mb-[20px] border-b-[1px]  font-[500] leading-[19.2px] ">
            edit My profile
          </h1>

          <div
            className={`flex flex-col rounded-[10px] gap-[10px] py-[20px] px-[10px] ${
              isEditable ? "bg-[#CBCAC74D] border-[1px] " : "bg-[#F4F2EF4D]"
            } `}
          >
            <div className="  p-4 ">
              <div className="flex justify-between mb-4">
                <h2 className="text-[16px] text-[#404040] leading-[19.2px] font-[500]">
                  User Information
                </h2>
                {!isEditable && (
                  <button
                    className="flex items-center text-[#66635A] text-[14px] leading-[16.41px] py-[8px] px-[14px] gap-[7px] "
                    onClick={handleEditClick}
                  >
                    Edit
                    <RxPencil1 className="text-[12px] " />
                  </button>
                )}
              </div>

              <form
                onSubmit={editUserInfo}
                className="flex flex-col gap-[20px] "
              >
                <div className="grid grid-cols-1 gap-5">
                  <div className="flex flex-col gap-[10px] ">
                    <label className="block uppercase text-[#404040] leading-[11.72px] font-[500] text-[10px] ">
                      Fullname
                    </label>
                    <input
                      type="text"
                      value={userInfo?.fullName}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        if (userInfo) {
                          setUserInfo({
                            ...userInfo,
                            fullName: e.target.value,
                          });
                        }
                      }}
                      className={`w-full p-[12px] border-[0.5px]   rounded-[6px] ${
                        isEditable
                          ? "bg-[#FFFFFF] border-[0.5px] "
                          : "bg-[#CBCAC780]"
                      } outline-0`}
                      readOnly={!isEditable}
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-[10px] ">
                  <label className="block uppercase text-[#404040] leading-[11.72px] font-[500] text-[10px] ">
                    Email
                  </label>
                  <input
                    type="email"
                    value={userInfo?.email}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                      if (userInfo) {
                        setUserInfo({
                          ...userInfo,
                          email: e.target.value,
                        });
                      }
                    }}
                    className={`w-full p-[12px] border-[0.5px]   rounded-[6px] ${
                      isEditable
                        ? "bg-[#FFFFFF] border-[0.5px] "
                        : "bg-[#CBCAC780]"
                    } outline-0`}
                    readOnly={!isEditable}
                  />
                </div>
                {error && (
                  <p className="text-red-500 text-[10px] capitalize">{error}</p>
                )}
                {isEditable && (
                  <button
                    type="submit"
                    className="bg-[#0000FF] text-white font-[500] py-[10px] px-[24px] w-fit rounded-[8px]  "
                  >
                    {loading ? "Saving Changes" : "Save Change"}
                  </button>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
