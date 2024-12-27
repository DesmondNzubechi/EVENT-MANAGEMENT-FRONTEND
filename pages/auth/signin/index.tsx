import Link from "next/link";
import { api } from "@/components/lib/api";
import { ChangeEvent, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import { BounceLoader } from "react-spinners";
import { AuthPage } from "@/components/authPage/authPage";
import { useEmailStore, useUserStore } from "@/components/store/store";

export default function SignIn() {
  const router = useRouter();
  const { setProvidedEmail } = useEmailStore();
  const { setUser} = useUserStore()

  const [userLoginDetail, setUserLoginDetail] = useState<any>({
    email: "",
    password: "",
  });

  const [error, setError] = useState<string | any>("");
  const [loading, setLoading] = useState<boolean>(false);

  const validateForm = () => {
    if (!userLoginDetail.email || !userLoginDetail.password) {
      setError("Please input both email and password");
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(userLoginDetail.email)) {
      setError("Please provide a valid email address");
      return false;
    }

    return true;
  };

  const loginUser = async (e: any) => {
    e.preventDefault();

    setError("");

    if (!validateForm) {
      return;
    }

    setLoading(true);
    try {
      const response = await api.post(
        "/auth/login",
        { email: userLoginDetail.email, password: userLoginDetail.password },
        { withCredentials: true }
      );
      console.log(response, "The response")
      setProvidedEmail(userLoginDetail.email);
      const userInfo = response.data.data.user;
      setUser(userInfo)
      toast.success("Login successful");
        router.push("/my-account");
    } catch (error) {
        console.log(error, " The error is here")
      if (error instanceof Error) {
        setError("wrong email or password. Please try again.");
      } else {
        setError("An unexpected error occurred");
      }
    } finally {
      setLoading(false);
    }
  };

  
  const { user } = useUserStore();
  useEffect(() => {
      if (user) {
      router.push("/my-account")
    }
  }, [])
   
  return (
    <div className="grid md:px-[50px] px-[20px] py-[20px] lg:px-[50px] grid-cols-1 gap-[100px]  md:grid-cols-2  ">
      {loading && (
        <div className="fixed bg-tpr w-full z-[500] left-0 right-0 flex justify-center h-full top-0 bottom-0 items-center">
          <BounceLoader color="#0000FF" size={100} />
        </div>
      )}
      <AuthPage />
      <div className="flex flex-col gap-[50px] justify-center h-full by-primaryBg px-[50px] md:px-[100px] py-[50px] ">
        <div className="flex flex-col justify-center  text-start gap-2 mb-[20px] ">
          <h1 className="font-[700] text-[32px] leading-[39.97px] text-[#111111] ">
            Sign In To Your Account
          </h1>
        </div>
        <form onSubmit={loginUser} className="flex flex-col gap-5">
          <div className="flex flex-col gap-[4px]  w-full">
            <label
              htmlFor="email"
              className="text-[16px] font-[400] text-[#666666] leading-[19.98px] "
            >
              Email
            </label>
            <input
              name="email"
              value={userLoginDetail.email}
              required
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setUserLoginDetail({
                  ...userLoginDetail,
                  email: e.target.value,
                })
              }
              type="email"
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
              value={userLoginDetail.password}
              required
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setUserLoginDetail({
                  ...userLoginDetail,
                  password: e.target.value,
                })
              }
              type="password"
              className="border outline-0 px-[20px]  rounded-[8px] h-[50px] text-[#333333] bg-transparent  "
            />
          </div>
          {error && <p className="text-red-500 capitalize">{error}</p>}
          <button
            type="submit"
            disabled={loading}
            className="bg-blue-700  py-[12px] px-[10px] rounded-[10px] text-[#FFFFFF] font-[400] text-[16px] text-center "
          >
            {loading ? "Login progress" : "Login "}
          </button>

          <Link
            href="/auth/forgot-password"
            className="text-textTitle hover:text-btn-primary"
          >
            Forgotten your password?
          </Link>
        </form>

        <div className="flex items-center md:flex-row flex-col  justify-center ">
          <h1 className="font-[400] text-[#666666] leading-[19.98px]  text-[12px] ">
            Don't have an account yet?
          </h1>
          <Link
            href="/auth/register"
            className=" text-[12px] w-fit text-blue-500  font-[400]  hover:text-[#666666]"
          >
            create an account
          </Link>
        </div>
      </div>
    </div>
  );
}
