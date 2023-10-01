"use client";

import React from "react";

export const DiningPopUp = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center pl-44 pt-10 pr-20">
      <div className="flex flex-row items-start justify-start px-10 w-full h-fit mr-10">
        <div className="flex flex-col items-start justify-start w-fit h-full mr-20">
          <h1 className="text-2xl text-gray-700 font-serif font-semibold mb-5">
            Restaurants{" "}
          </h1>
          <a className="text-sm text-gray-700 font-serif font-normal hover:text-yellow-500 mb-3">
            Cake Temptations by Shangri-La Colombo
          </a>
          <a className="text-sm text-gray-700 font-serif font-normal hover:text-yellow-500 mb-3">
            Shang Palace
          </a>
          <a className="text-sm text-gray-700 font-serif font-normal hover:text-yellow-500 mb-3">
            Capital Bar & Grill
          </a>
          <a className="text-sm text-gray-700 font-serif font-normal hover:text-yellow-500 mb-3">
            Central
          </a>
          <a className="text-sm text-gray-700 font-serif font-normal hover:text-yellow-500 mb-3">
            Central café
          </a>
        </div>
        <div className="flex flex-col items-start justify-start w-30 h-full mr-20">
          <h1 className="text-2xl text-gray-700 font-serif font-semibold mb-5">
            Bars & Lounges
          </h1>
          <a className="text-sm text-gray-700 font-serif font-normal hover:text-yellow-500 mb-3">
            Sapphyr Lounge{" "}
          </a>
          <a className="text-sm text-gray-700 font-serif font-normal hover:text-yellow-500 mb-3">
            Capital Bar & Grill{" "}
          </a>
          <a className="text-sm text-gray-700 font-serif font-normal hover:text-yellow-500 mb-3">
            Capital Bar & Grill
          </a>
          <a className="text-sm text-gray-700 font-serif font-normal hover:text-yellow-500 mb-3">
            Pool Bar
          </a>
        </div>
      </div>
      <hr className="h-2 my-8 bg-gray-700 border-0 " />
      <div className="flex flex-col items-start justify-start h-fit w-full px-5">
        <a className="text-sm text-gray-700 font-serif font-normal hover:text-yellow-500 mt-3 mb-10 text-start cursor-pointer">
          DINING OVERVIEW
        </a>
      </div>
    </div>
  );
};
