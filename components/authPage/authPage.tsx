import authImg1 from "../../public/images/event2.avif";

export const AuthPage = () => {
  return (
    <>
      <div
        style={{
          background: `url(${authImg1.src})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
        className="  bg-[#FFEDE9] rounded-[20px] after:rounded-[20px]  px-[30px] py-[10px] w-full relative after:absolute after:top-0 after:bottom-0 before:bg-transparent before:absolute after:left-0 hidden md:flex flex-col gap-[40px] after:right-0 after:bg-tpr"
      ></div>
    </>
  );
};
