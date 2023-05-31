import React from "react";
import Link from "next/link";
import Image from "next/image";

const Rentitems = ({ title, backgroundImg, projectUrl }) => {
  return (
    <div className="relative flex h-auto w-full rounded-lg text-center bg-[#eee3bc] shadow-md ">
      <Image
        className="rounded group-hover:opacity-10"
        src={`/${backgroundImg}`}
        alt=" "
        width={100}
        height={90}
      />

      <div className="justify-end">
        <br />
        <Link href={`/${projectUrl}`}>
          <p className="text-center px-12 rounded-lg text-gray-700 font-bold ">
            {title}
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Rentitems;
