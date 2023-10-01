"use client";

// import
import Image from "next/image";
import { useState } from "react";

type ItemProps = {
  id: number;
  url: string;
  alt: string;
};

const Item = ({ id, url, alt }: ItemProps) => {
  const [popup, setPopup] = useState(false);
  const [animate, setAnimate] = useState(false);

  const togglePopup = () => {
    setPopup((popup) => !popup);
  };
  const toggleAnimate = () => {
    setAnimate((animate) => !animate);
  };
  return (
    <div key={id} className="relative">
      <button
        onClick={togglePopup}
        onMouseEnter={toggleAnimate}
        onMouseLeave={toggleAnimate}
        className="relative focus:outline focus:outline-2 focus:outline-gray-900 p-0.5 h-fit"
      >
        <div className="absolute h-full w-full m-0">
          <div
            className={`${
              animate ? "-translate-y-1/3" : ""
            } flex items-end justify-center h-full w-full m-0 transition duration-500 `}
          >
            <p className="text-white w-full font-bold text-xl p-10">HELLO</p>
          </div>
        </div>
        <Image
          src={url}
          alt={alt}
          width={450}
          height={150}
          className="h-[18rem]"
        />
      </button>

      {popup && (
        <div className="absolute w-full h-full bg-gray-400">
          <p className="text-red-700 font-bold text-2xl">hellow world</p>
        </div>
      )}
    </div>
  );
};

export default Item;
