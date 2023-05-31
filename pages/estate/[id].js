import React from "react";
import Link from "next/link";
import Image from "next/image";
import { connectMongo } from "../../utils/connectMongo";
import Insert from "../../models/upload";
import { FaBath } from "react-icons/fa";
import { ImPriceTag } from "react-icons/im";
import { FaBed } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";

export async function getServerSideProps(context) {
  const { id } = context.params; // Use `context.params` to get dynamic params

  try {
    await connectMongo();

    console.log("connecting to document.....");

    const estates = await Insert.find({ category: id }).select(
      "_id title price image location slug desc"
    );
    if (estates) {
      console.log(estates);
    } else {
      console.log("something went wrong");
    }
    console.log("Document fetched succesfully....");

    console.log(estates);
    return {
      props: { estates: JSON.parse(JSON.stringify(estates)) },
    };
  } catch (error) {}
}

const Estate = ({ estates }) => {
  return (
    <div id="rent" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16 justify-center">
        <div className="flex items-center justify-center mt-8 ">
          <h2 className="text-xl md:text-2xl mt-2  uppercase p-2">
            {" "}
            Available house for rent
          </h2>
        </div>
        <div className="grid grid-cols md:grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-4">
          {estates.map((estate) => (
            <div
              className=" 
               relative group hover:bg-gradient-to-r from-[#e5e7eb]
                to-[#e5e7eb] opacity-1 bg-[#eee3bc] shadow-gray-600 rounded-lg overflow-hidden shadow-xl"
              key={estate._id}
            >
              <Image
                className="w-full shadow 
                 group-hover:opacity-10 object-fillrounded-lg hover:scale-105 ease in duration-300 md:object-fill cursor-pointer"
                src={estate.image}
                alt=" "
                width={900}
                height={600}
              />

              <div
                className="hidden group-hover:block
               absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
              >
                <Link href={`/desc/${estate._id}`}>
                  <p className="hlex justify-center items-center text-center py-3  font-bold underline cursor-pointer">
                    <button className="px-8 py-2 text-xl mt-4 mr-8 bg-[#eee3bc] text-black font-bold rounded mb-10">
                      Click
                    </button>
                  </p>
                </Link>
              </div>
              <div className="p-6  rounded-xl bg-[#eee3bc]">
                <p className="pb-2 flex justify-center text-black  text-bold text-2xl">
                  {" "}
                  <ImPriceTag size={30} /> ₦{estate.price}
                </p>
                <p className="text-bold text-black pb-2 flex justify-center text-2xl">
                  <FaBed size={30} /> {estate.title}
                </p>
                <p className="pb-2 flex justify-center text-black text-xl">
                  {" "}
                  <MdLocationOn size={30} /> {estate.location}{" "}
                </p>
                <p className="pb-2 flex justify-center text-black text-xl ">
                  {" "}
                  <FaBath size={30} /> {estate.slug}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Estate;
