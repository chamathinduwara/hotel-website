"use client";

export const ExperiencePopUp = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center pl-44 pt-10 pr-20">
      <div className="flex flex-row items-start justify-start px-10 w-full h-fit mr-10">
        <div className="flex flex-col items-start justify-start w-40 h-full mr-20">
          <h1 className="text-2xl text-gray-700 font-serif font-semibold mb-5">
            For Kids
          </h1>
          <a className="text-sm text-gray-700 font-serif font-normal hover:text-yellow-500 mb-3 cursor-pointer">
            Overview
          </a>
          <a className="text-sm text-gray-700 font-serif font-normal hover:text-yellow-500 mb-3 cursor-pointer">
            Adventure Zone
          </a>
          <a className="text-sm text-gray-700 font-serif font-normal hover:text-yellow-500 mb-3 cursor-pointer">
            Celebrations
          </a>
        </div>
        <div className="flex flex-col items-start justify-start w-40 h-full mr-20">
          <h1 className="text-2xl text-gray-700 font-serif font-semibold mb-5">
            Health & Leisure
          </h1>
          <a className="text-sm text-gray-700 font-serif font-normal hover:text-yellow-500 mb-3 cursor-pointer">
            Overview
          </a>
          <a className="text-sm text-gray-700 font-serif font-normal hover:text-yellow-500 mb-3 cursor-pointer">
            Health Club
          </a>
          <a className="text-sm text-gray-700 font-serif font-normal hover:text-yellow-500 mb-3 cursor-pointer">
            Chi, The Spa
          </a>
        </div>
      </div>
    </div>
  );
};
