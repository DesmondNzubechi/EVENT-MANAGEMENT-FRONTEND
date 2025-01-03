import Link from "next/link";
import React, { useEffect, useState } from "react";
import { api } from "@/components/lib/api";
import { toast } from "react-toastify";
import { AuthPage } from "@/components/authPage/authPage";
import { HashLoader } from "react-spinners";
import { useUserStore } from "@/components/store/store";
import { useRouter } from "next/router";

export default function ForgotPassword() {
  const [email, setEmail] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const validateForm = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Please provide a valid email address");
      return false;
    }

    return true;
  };

  const forgotPasswordFn = async (e: any) => {
    e.preventDefault();
    if (!validateForm) {
      return;
    }

    if (!email) {
      setError("Please provide your email");
      return;
    }

    setLoading(true);
    try {
      await api.post("/auth/forgotPassword", { email });

      toast.success("Rest password link has been sent to your. Kindly check");
      setLoading(false);
    } catch (error: any) {
      toast.error(error.response.data.message);
    } finally {
      setLoading(false);
    }
  };
  const { user } = useUserStore();
  const router = useRouter();
  useEffect(() => {
    if (user) {
      router.push("/my-account");
    }
  }, []);

  return (
    <>
      {loading && (
        <div className="fixed bg-tpr w-full z-[500] left-0 right-0 flex justify-center h-full top-0 bottom-0 items-center">
          <HashLoader color="#0000FF" size={100} />
        </div>
      )}
      <div className="grid md:px-[50px] px-[20px] py-[20px] lg:px-[50px] grid-cols-1 gap-[100px]  md:grid-cols-2  ">
        <AuthPage />
        <div className="flex flex-col gap-[50px] justify-center h-full by-primaryBg px-[50px] md:px-[100px] py-[50px] ">
          <div className="flex flex-col justify-center  text-center gap-2 mb-[20px] ">
            <h1 className="font-[700] text-[32px] leading-[39.97px] text-[#111111] ">
              Forgot password
            </h1>
            <p className="font-[400] leading-[19.98px] text-[16px] text-[#333333] ">
              Submit your email. a reset password link will be sent to the email
              provided
            </p>
          </div>
          <form onSubmit={forgotPasswordFn} className="flex flex-col gap-5">
            <div className="flex flex-col gap-[4px]  w-full">
              <label
                htmlFor="email"
                className="text-[16px] font-[400] text-[#666666] leading-[19.98px] "
              >
                Email
              </label>
              <input
                name="email"
                value={email}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setEmail(e.target.value)
                }
                type="email"
                className="border outline-0 px-[20px]  rounded-[8px] h-[50px] text-[#333333] bg-transparent  "
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="bg-blue-700  py-[12px] px-[10px] rounded-[10px] text-[#FFFFFF] font-[400] text-[16px] text-center "
            >
              {loading ? "Submitting..." : "Submit email"}
            </button>

            <Link
              href="/auth/signin"
              className="text-textTitle hover:text-btn-primary"
            >
              Remember password?
            </Link>
          </form>
        </div>
      </div>
    </>
  );
}
