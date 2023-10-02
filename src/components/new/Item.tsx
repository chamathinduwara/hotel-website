"use client";

// import
import Image from "next/image";
import { useState } from "react";

type ItemProps = {
  id: number;
  url: string;
  alt: string;
  name: string;
  disc: string
};

const Item = ({ id, url, alt, name, disc }: ItemProps) => {
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
            <p className=" w-full font-bold text-xl p-10 text-neutral-50">{name}</p>
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
        <div
          onClick={togglePopup}
          className="fixed top-0 bottom-0 left-0 right-0 z-50 flex items-center justify-center w-full p-4 max-h-full bg-gray-800 bg-opacity-10 backdrop-blur-sm"
        >
          <div
            onClick={togglePopup}
            className="flex flex-col items-center justify-start w-fit h-fit px-4 pb-10 bg-white shadow-md shadow-gray-800 scroll-m-0"
          >
            <div className="flex flex-row items-start justify-center w-full">
              <h1 className="w-full text-center p-2 text-lg font-serif font-thin text-blue-600 tracking-wide">
                {name}
              </h1>
            </div>
            <hr className="p-2 w-full mx-2" />
            <div className="flex flex-col justify-center items-center">
              <Image src={url} alt={alt} width={500} height={500} />
              <p className="mt-10 w-[30rem] text-sm font-serif font-thin text-gray-700">
                {disc}
              </p>
            </div>
            <div className="flex flex-row justify-center items-center mt-10">
              <button className=" w-20 py-1 bg-blue-500 mx-5 rounded-lg text-white text-md font-serif font-thin outline outline-2 outline-gray-300 hover:bg-gray-500">
                Stay
              </button>
              <button
                onClick={togglePopup}
                className="w-20 py-1 bg-red-500 mx-5 rounded-lg text-white text-md font-serif font-thin outline outline-2 outline-gray-300 hover:bg-red-400"
              >
                Cancle
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Item;
