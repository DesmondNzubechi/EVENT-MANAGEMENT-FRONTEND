const EventSkeletonLoader = () => {
  return (
    <div className="flex flex-col border shadow-lg gap-[10px] rounded-[10px] bg-[#FFFFFF] p-[15px] animate-pulse">
      <div className="rounded-[6px] w-full h-[200px] bg-gray-300"></div>
      <div className="flex flex-col p-[10px] gap-[15px]">
        <div className="flex flex-col gap-[10px] justify-between">
          <div className="h-[20px] bg-gray-300 rounded-md w-3/4"></div>
          <div className="h-[16px] bg-gray-300 rounded-md w-1/2"></div>
        </div>
        <div className="flex flex-row gap-[10px] items-center">
          <div className="bg-gray-300 rounded-full h-[20px] w-[20px]"></div>
          <div className="h-[16px] bg-gray-300 rounded-md w-1/3"></div>
        </div>
        <div className="flex flex-row gap-5 items-center">
          <div className="h-[16px] bg-gray-300 rounded-md w-1/4"></div>
          <div className="h-[14px] bg-gray-300 rounded-md w-1/5"></div>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <div className="bg-gray-300 rounded-[8px] py-[10px] w-full"></div>
        <div className="bg-gray-300 rounded-[8px] py-[10px] w-full"></div>
      </div>
    </div>
  );
};

export default EventSkeletonLoader;
