import Link from "next/link";
import React, { useEffect, useState } from "react";
import { api } from "@/components/lib/api";
import { toast } from "react-toastify";
import { AuthPage } from "@/components/authPage/authPage";
import { useRouter } from "next/router";
import { useEmailStore, useUserStore } from "@/components/store/store";
import { HashLoader } from "react-spinners";

export default function VerifyEmail() {
  const { providedEmail } = useEmailStore();
  const [verificationCode, setVerificationCode] = useState<string>("");
  const [error, setError] = useState<string>("");
  const { user } = useUserStore();
  const [loading, setLoading] = useState<boolean>(false);
  const [loadingResend, setLoadingResend] = useState<boolean>(false);
  const router = useRouter();

  const verifyUserEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    if (
      !verificationCode ||
      verificationCode.length < 4 ||
      verificationCode.length > 4
    ) {
      setError("please provide a valid verification code sent to your email");
      return;
    }

    setLoading(true);

    try {
      await api.patch("/auth/verifyEmail", { verificationCode });

      toast.success("Email successfully verified. Kindly login now");
      router.push("/auth/signin");
    } catch (error: any) {
      toast.error(error.response.data.message);
    } finally {
      setLoading(false);
    }
  };

  const resendVerificationToken = async (e: React.FormEvent) => {
    e.preventDefault();

    setLoadingResend(true);

    try {
      await api.patch("/auth/sendVerificationCode", { email: providedEmail });

      toast.success(
        "Verification code successfully resent. Kindly check your email"
      );
    } catch (error: any | unknown) {
      toast.error(error.response.data.message);
    } finally {
      setLoadingResend(false);
    }
  };

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
            Verify email
          </h1>
          <p className="font-[400] leading-[19.98px] text-[16px] text-[#333333] ">
            Kindly used the verification code sent to your email to verify your
            email
          </p>
        </div>
        <form onSubmit={verifyUserEmail} className="flex flex-col gap-5">
          <div className="flex flex-col gap-[4px]  w-full">
            <label
              htmlFor="verificationCode"
              className="text-[16px] font-[400] text-[#666666] leading-[19.98px] "
            >
              Verification Code
            </label>
            <input
              name="verificationCode"
              value={verificationCode}
              maxLength={4}
              minLength={4}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setVerificationCode(e.target.value)
              }
              type="number"
              className="border outline-0 px-[20px]  rounded-[8px] h-[50px] text-[#333333] bg-transparent  "
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="bg-blue-700  py-[12px] px-[10px] rounded-[10px] text-[#FFFFFF] font-[400] text-[16px] text-center "
          >
            {loading ? "Verifying..." : "Verify email"}
          </button>
          <div className="flex flex-col md:flex-row items-center w-full gap-5">
            <Link
              href="/auth/signin"
              className="text-textTitle text-center w-full p-2 rounded border "
            >
              Verify Later
            </Link>
            <button
              type="button"
              disabled={loadingResend}
              onClick={resendVerificationToken}
              className=" rounded w-full   text-slate-50 bg-slate-900 p-2 border font-[400] text-[16px] text-center "
            >
              {loadingResend ? "resending code" : "Resend code"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
