import Link from "next/link";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import signImg from "../../public/images/login1.avif";
import Image from "next/image";
import { ChangeEvent, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { api } from "@/components/lib/api";
import { useRouter } from "next/router";
import { AuthPage } from "@/components/authPage/authPage";
import { HashLoader } from "react-spinners";
import { useUserStore } from "@/components/store/store";

export default function ResetPassword() {
  const router = useRouter();
  const { token } = router.query;

  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const passwordResetFn = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!password || !confirmPassword) {
      toast.error("Please provide password and confirm password.");
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
      await api.patch(`/auth/resetPassword/${token}`, {
        password,
        confirmPassword,
      });

      toast.success("Reset password successful. Login with your new password.");
      setLoading(false);

      router.push("/auth/signin");
    } catch (error: unknown | any) {
      toast.error(error.response.data.message);
    } finally {
      setLoading(false);
    }
  };

  const { user } = useUserStore();

  useEffect(() => {
    if (user) {
      router.push("/my-account");
    }
  }, []);

  return (
    <div className="grid md:px-[50px] px-[20px] py-[20px] lg:px-[50px] grid-cols-1 gap-[100px]  md:grid-cols-2  ">
      {loading && (
        <div className="fixed bg-tpr w-full z-[500] left-0 right-0 flex justify-center h-full top-0 bottom-0 items-center">
          <HashLoader color="#0000FF" size={100} />
        </div>
      )}
      <AuthPage />
      <div className="flex flex-col gap-[50px] justify-center h-full by-primaryBg px-[50px] md:px-[100px] py-[50px] ">
        <div className="flex flex-col justify-center  text-center gap-2 mb-[20px] ">
          <h1 className="font-[700] text-[32px] leading-[39.97px] text-[#111111] ">
            Reset password
          </h1>
          <p className="font-[400] leading-[19.98px] text-[16px] text-[#333333] ">
            Please make sure you provide a password that you would remember
          </p>
        </div>
        <form onSubmit={passwordResetFn} className="flex flex-col gap-5">
          <div className="flex flex-col gap-[4px]  w-full">
            <label
              htmlFor="password"
              className="text-[16px] font-[400] text-[#666666] leading-[19.98px] "
            >
              Password
            </label>
            <input
              name="password"
              value={password}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setPassword(e.target.value)
              }
              type="password"
              className="border outline-0 px-[20px]  rounded-[8px] h-[50px] text-[#333333] bg-transparent  "
            />
          </div>
          <div className="flex flex-col gap-[4px]  w-full">
            <label
              htmlFor="password"
              className="text-[16px] font-[400] text-[#666666] leading-[19.98px] "
            >
              Password
            </label>
            <input
              name="password"
              value={confirmPassword}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setConfirmPassword(e.target.value)
              }
              type="password"
              className="border outline-0 px-[20px]  rounded-[8px] h-[50px] text-[#333333] bg-transparent  "
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="bg-blue-700 py-[12px] px-[10px] rounded-[10px] text-[#FFFFFF] font-[400] text-[16px] text-center "
          >
            {loading ? "Reseting password" : "Reset Password"}
          </button>
        </form>
      </div>
    </div>
  );
}
