"use client";

export const RoomPopUp = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center pl-44 pt-10 pr-20">
      <div className="flex flex-row items-start justify-start px-10 w-full h-fit mr-10">
        <div className="flex flex-col items-start justify-start w-40 h-full mr-20">
          <h1 className="text-2xl text-gray-700 font-serif font-semibold mb-5">
            Rooms
          </h1>
          <a className="text-sm text-gray-700 font-serif font-normal hover:text-yellow-500 mb-3 cursor-pointer">
            Deluxe Lake View
          </a>
          <a className="text-sm text-gray-700 font-serif font-normal hover:text-yellow-500 mb-3 cursor-pointer">
            Deluxe Ocean View
          </a>
          <a className="text-sm text-gray-700 font-serif font-normal hover:text-yellow-500 mb-3 cursor-pointer">
            Premier Balcony
          </a>
          <a className="text-sm text-gray-700 font-serif font-normal hover:text-yellow-500 mb-3 cursor-pointer">
            Premier Ocean View
          </a>
        </div>
        <div className="flex flex-col items-start justify-start w-40 h-full mr-20">
          <h1 className="text-2xl text-gray-700 font-serif font-semibold mb-5">
            Horizon Club
          </h1>
          <a className="text-sm text-gray-700 font-serif font-normal hover:text-yellow-500 mb-3 cursor-pointer">
            Horizon Club Lake View
          </a>
          <a className="text-sm text-gray-700 font-serif font-normal hover:text-yellow-500 mb-3 cursor-pointer">
            Horizon Club Ocean View
          </a>
        </div>
        <div className="flex flex-col items-start justify-start w-40 h-full mr-20">
          <h1 className="text-2xl text-gray-700 font-serif font-semibold mb-5">
            Suites
          </h1>
          <a className="text-sm text-gray-700 font-serif font-normal hover:text-yellow-500 mb-3 cursor-pointer">
            Executive Suites
          </a>
          <a className="text-sm text-gray-700 font-serif font-normal hover:text-yellow-500 mb-3 cursor-pointer">
            Specialty Suites
          </a>
          <a className="text-sm text-gray-700 font-serif font-normal hover:text-yellow-500 mb-3 cursor-pointer">
            Shangri-La Suite
          </a>
        </div>
        <div className="flex flex-col items-start justify-start w-40 h-full mr-20">
          <h1 className="text-2xl text-gray-700 font-serif font-semibold mb-5">
            Connecting Rooms
          </h1>
          <a className="text-sm text-gray-700 font-serif font-normal hover:text-yellow-500 mb-3 cursor-pointer">
            Executive Suite & Premier Ocean Room Connecting
          </a>
          <a className="text-sm text-gray-700 font-serif font-normal hover:text-yellow-500 mb-3 cursor-pointer">
            Two Deluxe Lake View Rooms Connecting
          </a>
        </div>
      </div>
      <hr className="h-2 my-8 bg-gray-700 border-0 " />
      <div className="flex flex-col items-start justify-start h-fit w-full px-5">
        <a className="text-sm text-gray-700 font-serif font-normal hover:text-yellow-500 mt-3 mb-10 text-start cursor-pointer">
          ROOMS & SUITES OVERVIEW
        </a>
      </div>
    </div>
  );
};
