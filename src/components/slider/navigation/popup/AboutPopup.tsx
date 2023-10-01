"use client";

export const AboutPopup = () => {
  return (
    <div className="w-full h-full flex items-center justify-center pl-44 pt-10">
      <div className="flex flex-row items-start justify-start px-10 w-full h-full">
        <div className="flex flex-col items-start justify-start w-30 h-full">
          <h1 className="text-2xl text-gray-700 font-serif font-semibold mb-5">
            About The Hotel
          </h1>
          <a className="text-sm text-gray-700 font-serif font-normal hover:text-yellow-500 mb-3 cursor-pointer">
            Overview
          </a>
          <a className="text-sm text-gray-700 font-serif font-normal hover:text-yellow-500 mb-3 cursor-pointer">
            Explore Colombo
          </a>
          <a className="text-sm text-gray-700 font-serif font-normal hover:text-yellow-500 mb-3 cursor-pointer">
            Services & Facilities
          </a>
          <a className="text-sm text-gray-700 font-serif font-normal hover:text-yellow-500 mb-3 cursor-pointer">
            Map & Directions
          </a>
        </div>
      </div>
    </div>
  );
};
