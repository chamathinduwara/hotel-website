"use client";

import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";

// icons import
import { IoMdArrowDropdown } from "react-icons/io";
import Image from "next/image";

// import components
import { KandySrlLanka } from "./info/KandySrlLanka";

const destinations = [
  { id: 1, name: "Sri Lanka", url: "/background/bg1.jpg" },
  { id: 2, name: "Malaysia", url: "/background/bg2.jpg" },
  { id: 3, name: "Singapore", url: "/background/bg3.jpg" },
  { id: 4, name: "Thailand", url: "/background/bg1.jpg" },
  { id: 5, name: "Indonesia", url: "/background/bg2.jpg" },
];

const Destinations = () => {
  const [selected, setSelected] = useState(destinations[0]);

  const toggleDestination = (value: any) => {
    setSelected((selected) => (selected = value));
  };

  return (
    <div className="flex flex-col h-full items-center justify-center bg-white">
      <h1 className="relative p-4 m-4 mt-40 text-7xl text-indigo-600 font-serif font-extrabold ">
        Our Destinations
      </h1>
      <div className="z-20">
        <Listbox
          value={selected}
          onChange={(value) => toggleDestination(value)}
        >
          {({ open }) => (
            <div className="relative">
              <Listbox.Button className="relative w-full py-4 px-20 bg-white shadow-bottom-2 shadow-md outline outline-1 outline-gray-500 ">
                <span className="text-2xl font-extrabold text-indigo-900 font-i">
                  {selected.name}
                </span>
              </Listbox.Button>
              <Transition
                show={open}
                as={Fragment}
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Listbox.Options className="absolute outline outline-1 outline-blue-800 max-h-56 overflow-auto w-full rounded-b-md">
                  {destinations.map((destination) => (
                    <Listbox.Option
                      key={destination.id}
                      className={({ active }) =>
                        `${
                          active
                            ? "bg-gray-600 text-black"
                            : "bg-white text-gray-500"
                        }`
                      }
                      value={destination}
                    >
                      {({ selected, active }) => (
                        <div className="flex items-center">
                          {destination.name}
                        </div>
                      )}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </Transition>
            </div>
          )}
        </Listbox>
      </div>
      <div className="relative mt-20 z-10 h-[30rem]">
        <Image src={selected.url} alt="image" width={800} height={500} />
        <div className="absolute flex items-center justify-center -right-48 top-5 h-[25rem] w-[20rem] bg-white shadow-lg shadow-gray-500">
          {selected.id === 1 && <KandySrlLanka />}
        </div>
      </div>
    </div>
  );
};

export default Destinations;
