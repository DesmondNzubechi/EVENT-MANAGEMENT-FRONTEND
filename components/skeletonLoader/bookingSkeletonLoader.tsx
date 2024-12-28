import React from "react";

export const BookingSkeleton = () => {
  return Array.from({ length: 5 }).map((_, index) => (
    <tr key={index} className="border-b py-[8px] px-[6px]">
      <td className="p-[10px]">
        <div className="h-4 w-8 bg-gray-300 rounded animate-pulse"></div>
      </td>
      <td className="p-[10px]">
        <div className="h-4 w-32 bg-gray-300 rounded animate-pulse"></div>
      </td>
      <td className="p-[10px]">
        <div className="h-4 w-24 bg-gray-300 rounded animate-pulse"></div>
      </td>
      <td className="p-[10px]">
        <div className="h-4 w-20 bg-gray-300 rounded animate-pulse"></div>
      </td>
      <td className="p-[10px]">
        <div className="h-4 w-24 bg-gray-300 rounded animate-pulse"></div>
      </td>
      <td className="p-[10px]">
        <div className="h-6 w-16 bg-gray-300 rounded animate-pulse"></div>
      </td>
      <td className="py-2 px-4 flex space-x-2">
        <div className="h-6 w-6 bg-gray-300 rounded animate-pulse"></div>
        <div className="h-6 w-6 bg-gray-300 rounded animate-pulse"></div>
      </td>
    </tr>
  ));
};
