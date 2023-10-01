"use client";

// import
import { useState } from "react";

// import module
import { AboutPopup } from "./popup/AboutPopup";
import { DiningPopUp } from "./popup/DiningPopUp";
import { EventPopUp } from "./popup/EventPopUp";
import { ExperiencePopUp } from "./popup/ExperiencePopUp";
import { GalleryPopUp } from "./popup/GalleryPopUp";
import { OffersPopUp } from "./popup/OffersPopUp";
import { MorePopUp } from "./popup/MorePopUp";
import { RoomPopUp } from "./popup/RoomPopUp";

const Navigation = () => {
  const [popUp, setPopUp] = useState(false);
  const [active, setActive] = useState(0);

  const togglePopup = (num: number) => {
    setPopUp((popUp) => !popUp);
    if (num != 10) {
      setActive((active) => (active = num));
    }
  };

  return (
    <div className="flex h-fit w-full flex-col items-center justify-center">
      <div className="flex flex-row items-center justify-center w-full h-fit px-5 bg-gray-700">
        <div
          onMouseEnter={() => togglePopup(1)}
          onMouseLeave={() => togglePopup(10)}
          className={`${
            popUp && active == 1 ? "bg-white text-black" : "text-white"
          }
            mx-0 px-5 h-10 w-fit flex flex-col items-center justify-center cursor-pointer `}
        >
          <span className=" text-md font-sans font-semibold">ABOUT</span>
        </div>
        <div
          onMouseEnter={() => togglePopup(2)}
          onMouseLeave={() => togglePopup(10)}
          className={`${
            popUp && active == 2 ? "bg-white text-black" : "text-white"
          }
            mx-0 px-5 h-10 w-fit flex flex-col items-center justify-center cursor-pointer `}
        >
          <span className=" text-md font-sans font-semibold">
            ROOMS & SUITES
          </span>
        </div>
        <div
          onMouseEnter={() => togglePopup(3)}
          onMouseLeave={() => togglePopup(10)}
          className={`${
            popUp && active == 3 ? "bg-white text-black" : "text-white"
          }
            mx-0 px-5 h-10 w-fit flex flex-col items-center justify-center cursor-pointer `}
        >
          <span className=" text-md font-sans font-semibold">DINING</span>
        </div>
        <div
          onMouseEnter={() => togglePopup(4)}
          onMouseLeave={() => togglePopup(10)}
          className={`${
            popUp && active == 4 ? "bg-white text-black" : "text-white"
          }
            mx-0 px-5 h-10 w-fit flex flex-col items-center justify-center cursor-pointer `}
        >
          <span className=" text-md font-sans font-semibold">EXPERIENCE</span>
        </div>
        <div
          onMouseEnter={() => togglePopup(5)}
          onMouseLeave={() => togglePopup(10)}
          className={`${
            popUp && active == 5 ? "bg-white text-black" : "text-white"
          }
            mx-0 px-5 h-10 w-fit flex flex-col items-center justify-center cursor-pointer `}
        >
          <span className=" text-md font-sans font-semibold">EVENTS</span>
        </div>
        <div
          onMouseEnter={() => togglePopup(6)}
          onMouseLeave={() => togglePopup(10)}
          className={`${
            popUp && active == 6 ? "bg-white text-black" : "text-white"
          }
            mx-0 px-5 h-10 w-fit flex flex-col items-center justify-center cursor-pointer `}
        >
          <span className=" text-md font-sans font-semibold">GALLERY</span>
        </div>
        <div
          onMouseEnter={() => togglePopup(7)}
          onMouseLeave={() => togglePopup(10)}
          className={`${
            popUp && active == 7 ? "bg-white text-black" : "text-white"
          }
            mx-0 px-5 h-10 w-fit flex flex-col items-center justify-center cursor-pointer `}
        >
          <span className=" text-md font-sans font-semibold">OFFERS</span>
        </div>
        <div
          onMouseEnter={() => togglePopup(8)}
          onMouseLeave={() => togglePopup(10)}
          className={`${
            popUp && active == 8 ? "bg-white text-black" : "text-white"
          }
            mx-0 px-5 h-10 w-fit flex flex-col items-center justify-center cursor-pointer `}
        >
          <span className=" text-md font-sans font-semibold">MORE</span>
        </div>
        <div className="ml-10 border-white">
          <a className="px-5 text-white text-md font-sans font-medium outline outline-1 cursor-pointer">
            FIND A HOTEL
          </a>
        </div>
      </div>
      {popUp && (
        <div
          onMouseEnter={() => togglePopup(10)}
          onMouseLeave={() => togglePopup(0)}
          className="h-fit w-full bg-white"
        >
          {active == 1 && <AboutPopup />}
          {active == 2 && <RoomPopUp />}
          {active == 3 && <DiningPopUp />}
          {active == 4 && <ExperiencePopUp />}
          {active == 5 && <EventPopUp />}
          {active == 6 && <GalleryPopUp />}
          {active == 7 && <OffersPopUp />}
          {active == 8 && <MorePopUp />}
        </div>
      )}
    </div>
  );
};

export default Navigation;
