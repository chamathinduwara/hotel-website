"use client";

export const EventPopUp = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center pl-44 pt-10 pr-20">
      <div className="flex flex-row items-start justify-start px-10 w-full h-fit mr-10">
        <div className="flex flex-col items-start justify-start w-40 h-full mr-20">
          <h1 className="text-2xl text-gray-700 font-serif font-semibold mb-5">
            Meetings & Events
          </h1>
          <a className="text-sm text-gray-700 font-serif font-normal hover:text-yellow-500 mb-3 cursor-pointer">
            Overview{" "}
          </a>
          <a className="text-sm text-gray-700 font-serif font-normal hover:text-yellow-500 mb-3 cursor-pointer">
            Experience It{" "}
          </a>
          <a className="text-sm text-gray-700 font-serif font-normal hover:text-yellow-500 mb-3 cursor-pointer">
            Coworking Space{" "}
          </a>
          <a className="text-sm text-gray-700 font-serif font-normal hover:text-yellow-500 mb-3 cursor-pointer">
            Outside Catering{" "}
          </a>
          <a className="text-sm text-gray-700 font-serif font-normal hover:text-yellow-500 mb-3 cursor-pointer">
            Request For Proposal{" "}
          </a>
        </div>
        <div className="flex flex-col items-start justify-start w-40 h-full mr-20">
          <h1 className="text-2xl text-gray-700 font-serif font-semibold mb-5">
            Wedding and Celebrations{" "}
          </h1>
          <a className="text-sm text-gray-700 font-serif font-normal hover:text-yellow-500 mb-3 cursor-pointer">
            Overview{" "}
          </a>
          <a className="text-sm text-gray-700 font-serif font-normal hover:text-yellow-500 mb-3 cursor-pointer">
            Wedding Planning{" "}
          </a>
          <a className="text-sm text-gray-700 font-serif font-normal hover:text-yellow-500 mb-3 cursor-pointer">
            Weddings By Shangri-La{" "}
          </a>
          <a className="text-sm text-gray-700 font-serif font-normal hover:text-yellow-500 mb-3 cursor-pointer">
            Request for Proposal{" "}
          </a>
        </div>
      </div>
    </div>
  );
};
