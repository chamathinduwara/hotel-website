"use client";

import Image from "next/image";
import Navigation from "./navigation/Navigation";
import Search from "./search/Search";

// background image
// import background from "@/assets/images/background.jpg";
import bg1 from "@/public/background/bg1.jpg";

// import css file
import "./Slider.module.css";

const Slider = () => {
  return (
    <div className="relative h-[rem100]">
      <div className="absolute z-20 bottom-6  left-60">
        <Search />
      </div>
      <div className="relative flex flex-col bg">
        <div className="absolute w-full">
          <Navigation />
        </div>

        <div className="">
          <Image
            src="/background/bg2.jpg"
            alt="background"
            width={1920}
            height={1080}
            className="flex flex-col h-[40rem] max-w-full bg"
          />
        </div>
      </div>
    </div>
  );
};

export default Slider;
