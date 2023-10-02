"use client";

// import
import Card from "./Card";

const Photos = [
  {
    id: 1,
    url: "/background/bg1.jpg",
    alt: "photo1",
    heading: "Rooms & Suites",
    event: "ShangriLa Circle Exclusive Member Rate with Breakfast",
    disc: "Exclusive Member Rate with Breakfast for Shangri-La Circle member.",
    offer: "From AED 661.16 Average Per Night",
  },
  {
    id: 2,
    url: "/background/bg2.jpg",
    alt: "photo2",
    heading: "Rooms & Suites",
    event: "Shangri–La Circle Exclusive Member Rate",
    disc: "Exclusive Member Rate for Shangri-La Circle member.",
    offer: "From BRL 806.30 Average Per Night",
  },
  {
    id: 3,
    url: "/background/bg3.jpg",
    alt: "photo3",
    heading: "Weddings",
    event: "Engagements and Registrations 2023",
    disc: "Begin your journey to matrimony with an intimate event for your loved ones.",
    offer: "",
  },
];

export const Offers = () => {
  return (
    <div className="relative mt-10 py-10 px-16 bg-white">
      <h1 className="p-2 mb-2 text-7xl text-indigo-600 font-serif font-extrabold text-center">
        Offers
      </h1>
      <div className="flex items-center w-full  justify-between">
        {Photos.map((photo) => (
          <div key={photo.id} className="w-fit">
            <Card
              key={photo.id}
              id={photo.id}
              url={photo.url}
              alt={photo.url}
              heading={photo.heading}
              event={photo.event}
              disc={photo.disc}
              offer={photo.offer}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
