"use client";

import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";

// icons import
import { IoMdArrowDropdown } from "react-icons/io";
import Image from "next/image";

// import components
import { KandySrlLanka } from "./info/KandySrlLanka";
import { ColomboSriLanka } from "./info/ColomboSriLanka";
import { HabaranaSriLanka } from "./info/HabaranaSriLanka";
import { LakeSideSriLanka } from "./info/LakeSideSriLanka";
import { HuraaMaldives } from "./info/HuraaMaldives";

const destinations = [
  { id: 1, name: "Cinnamon Grand Colombo", url: "/hotels/hotel1.jpg" },
  { id: 2, name: "Habarana Village by Cinnamon", url: "/hotels/hotel2.jpg" },
  { id: 3, name: "Cinnamon Lakeside Colombo", url: "/hotels/hotel3.jpg" },
  { id: 4, name: "Cinnamon Hakuraa Huraa Maldives", url: "/hotels/hotel4.jpg" },
  { id: 5, name: "Cinnamon Citadel Kandy", url: "/hotels/hotel5.jpg" },
];

const Destinations = () => {
  const [selected, setSelected] = useState(destinations[0]);

  const toggleDestination = (value: any) => {
    setSelected((selected) => (selected = value));
  };

  return (
    <div className="flex flex-col h-full items-center justify-center p-4 bg-white ">
      <h1 className="relative p-2 mb-4 text-7xl text-indigo-600 font-serif font-extrabold ">
        Our Destinations
      </h1>
      <div className="z-20">
        <Listbox
          value={selected}
          onChange={(value) => toggleDestination(value)}
        >
          {({ open }) => (
            <div className="relative">
              <Listbox.Button className="relative w-[30rem] py-4 px-20 bg-white shadow-bottom-2 shadow-md outline outline-1 outline-gray-500 ">
                <span className="text-xl font-thin font-serif text-blue-900 font-i">
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
                <Listbox.Options className="absolute outline outline-1 outline-blue-800 max-h-56 overflow-auto w-full">
                  {destinations.map((destination) => (
                    <Listbox.Option
                      key={destination.id}
                      className={({ active }) =>
                        `${
                          active
                            ? "bg-gray-100 text-black"
                            : "bg-white text-gray-500"
                        } pl-2 py-2 outline outline-1`
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
      <div className="relative mt-20 z-10 h-full">
        <Image src={selected.url} alt="image" width={800} height={500} />
        <div className="absolute flex items-center justify-center -right-48 top-2 h-[30rem] w-[23rem] bg-white shadow-lg shadow-gray-500">
          {selected.id === 1 && <ColomboSriLanka />}
          {selected.id === 2 && <HabaranaSriLanka />}
          {selected.id === 3 && <LakeSideSriLanka />}
          {selected.id === 4 && <HuraaMaldives />}
          {selected.id === 5 && <KandySrlLanka />}
        </div>
      </div>
    </div>
  );
};

export default Destinations;
