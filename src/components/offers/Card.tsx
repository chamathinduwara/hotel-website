"user client";

type CardProps = {
  id: number;
  url: string;
  alt: string;
  heading: string;
  event: string;
  disc: string;
  offer: string;
};

// import
import Image from "next/image";

const Card = ({ id, url, alt, heading, event, disc, offer }: CardProps) => {
  return (
    <div
      key={id}
      className="flex flex-col h-full w-fit items-center justify-center m-auto p-0"
    >
      <div className="flex flex-col items-center justify-center">
        <Image
          src={url}
          alt={alt}
          width={450}
          height={150}
          className="h-[15rem]"
        />
        <p className="pt-1 text-sm text-gray-800">{heading}</p>
      </div>
      <div className="flex flex-col items-center justify-center w-fit my-2 p-1">
        <p className="w-96 h-10 text-md font-bold text-center">{event}</p>
        <p className="w-96 mt-1 h-10 text-sm font-light text-center">{disc}</p>
      </div>
      <div className="flex flex-col items-center justify-center w-fit my-2 p-1">
        <p className="w-80 h-10 text-md font-semibold text-center">{offer}</p>
        <button className="outline outline-1 px-2 py-1 m-2 text-yellow-800 hover:bg-yellow-300">
          View Details
        </button>
      </div>
    </div>
  );
};

export default Card;
