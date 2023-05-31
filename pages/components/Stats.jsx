import React from "react";
import Link from "next/link";
const Stats = () => {
  return (
    <div className="w-full md:h-full p-4  py-8 ">
      <div className="max-w-[1100px] m-auto rounded text-2xl">
        <div className="flex items-center justify-center ">
          <h2 className="text-xl md:text-2xl ">
            {" "}
            what&apos;s happening at iphoundit
          </h2>
        </div>
        <div
          className=" grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 
        lg:grid-cols-4 w-full h-full mt-8 gap-8 justify-center items-center"
        >
          <div className="h-40 w-70 items-center justify-center bg-[#eee3bc] rounded-lg shadow-md ">
            <p className="flex items-center justify-center mt-10 text-[#fd7e14]">
              {" "}
              50+
            </p>
            <p className="flex items-center justify-center text-xl">
              {" "}
              In property sales
            </p>
          </div>
          <div className="h-40 w-70 items-center justify-center bg-[#eee3bc] rounded-lg shadow-md ">
            <p className="flex items-center justify-center mt-10 text-[#fd7e14]">
              5+
            </p>
            <p className="flex items-center justify-center text-xl">
              {" "}
              Homes for sale
            </p>
          </div>
          <div className="h-40 w-70 items-center justify-center bg-[#eee3bc] rounded-lg shadow-md  ">
            <p className="flex items-center justify-center mt-10 text-[#fd7e14]">
              {" "}
              12+
            </p>
            <p className="flex items-center justify-center text-xl">
              Resently sold
            </p>
          </div>
          <div className="h-40 w-70 items-center justify-center bg-[#eee3bc] rounded-lg shadow-md ">
            <p className="flex items-center justify-center mt-10 text-[#fd7e14]">
              20+
            </p>
            <p className="flex items-center justify-center text-xl">
              Homes for rent
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
