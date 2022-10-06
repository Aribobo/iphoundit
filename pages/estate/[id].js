import React from "react";
import Link from "next/link";
import Image from "next/image"
import { connectMongo } from "../../utils/connectMongo";
import Insert from "../../models/upload";

export async function getServerSideProps(context) {
  const { id } = context.params; // Use `context.params` to get dynamic params

  try {
    await connectMongo();

    console.log("connecting to document.....");

    const estates = await Insert.find({category: id }).select(
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
  } catch (error) {
    
  }
}

const Estate = ({ estates }) => {
  return (
    <div id="rent" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16 justify-center">
        {/* <p className=" p-2 text-xl tracking items-center uppercase text-[#fd7e14] text-bold text-center mt-10">
          Properties
        </p> */}

        <div className="grid rows-3 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
          {estates.map((estate) => (
            <div
              className=" bg-[#e5e7eb] shadow-gray-600 rounded-xl overflow-hidden shadow-xl"
              key={estate._id}
            >
              <Link href={`/desc/${estate._id}`}>
                <Image
                  className="w-full shadow 
                 group-hover:opacity-10 object-fill hover:scale-105 ease in duration-300 md:object-fill"
                  src={estate.image}
                  alt=" "
                  width={900}
              height={600} 
                />
              </Link>
              <div className="p-6  rounded-xl ">
                <h4 className="text-xl text-black tracking-wider pb-2 ">
                  {estate.title}
                </h4>
                <p className="pb-2  text-black text-xl">{estate.location}</p>
                <p className="pb-2  text-black text-xl ">{estate.slug}</p>
                <p className="pb-2  text-black text-xl">NGN {estate.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Estate;
