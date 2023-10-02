"use client";

// component import
import Item from "./Item";

const Photos = [
  {
    id: 1,
    url: "/hotels/hotel6.jpg",
    alt: "hotel1",
    name: "Boston",
    disc: "A trip to New England isn't complete without a stop in Boston. From clam chowder to lobster rolls, Fenway Park to the Freedom Trail—experience it all in Beantown.A trip to New England isn't complete without a stop in Boston. From clam chowder to lobster rolls, Fenway Park to the Freedom Trail—experience it all in Beantown.",
  },
  {
    id: 2,
    url: "/hotels/hotel7.jpg",
    alt: "hotel2",
    name: "Nashville",
    disc: "Welcome to Music City, the country music capital of the world. Be sure to experience the vibe on Broadway -from designer boots and live music to great southern eats.",
  },
  {
    id: 3,
    url: "/hotels/hotel2.jpg",
    alt: "hotel3",
    name: "Philadelphia",
    disc: "Discover a city rich in history and full of places to explore. From the Liberty Bell to Reading Terminal Market, there's always plenty to love in the City of Brotherly Love.",
  },
];

const New = () => {
  return (
    <div className="bg-white mt-10 py-10 px-16">
      <div className="flex items-start justify-center w-full ">
        <h1 className="p-2 text-7xl text-indigo-600 font-serif font-extrabold ">
          NEW
        </h1>
      </div>
      <p className="mt-2 text-xl font-light font-serif text-black tracking-wide text-center">
        Fall into a relaxing stay with one of our exclusive offers.
      </p>
      <div className="flex items-center justify-between w-full h-fit mt-5">
        {Photos.map((photo) => (
          <div className="" key={photo.id}>
            <Item
              id={photo.id}
              url={photo.url}
              alt={photo.alt}
              name={photo.name}
              disc={photo.disc}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default New;
