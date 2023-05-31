import React from "react";
import Link from "next/link";
import Image from "next/image";
const Testimonial = () => {
  return (
    <div className="w-full md:h-full p-4  py-8 ">
      <div className="max-w-[1200px] m-auto rounded text-2xl">
        <div className="flex items-center justify-center ">
          <h2 className="text-xl md:text-2xl "> How we sell your home</h2>
        </div>
        <div
          className=" grid grid-cols sm:grid-cols-2 md:grid-cols-2 
      lg:grid-cols-4 w-full h-full mt-8 gap-6 justify-center items-center "
        >
          <div className="h-40 w-70  flex items-center justify-center bg-[#eee3bc] rounded-xl shadow-xl">
            <p className=" items-center justify-center text-xl  px-12 py-4 ">
              We estimate your home and help you prepare to sell it
            </p>
          </div>
          <div className="h-40 w-70 flex items-center justify-center bg-[#eee3bc] rounded-xl shadow-xl">
            <p className="items-center justify-center  px-12 py-4 text-xl">
              {" "}
              We find the best price that works for you
            </p>
          </div>
          <div className="h-40 w-70 flex items-center justify-center  px-6 py-4 bg-[#eee3bc] rounded-xl shadow-xl ">
            <p className="flex items-center justify-center text-xl  px-6 py-4">
              We take care of the sale from start to finish
            </p>
          </div>
          <div className="h-40 w-70 flex items-center justify-center bg-[#eee3bc] rounded-xl  px-6 py-4 shadow-xl">
            <p className=" items-center justify-center text-xl  px-6 py-4">
              We acquire for our clients properties in desirable neighborhood
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
