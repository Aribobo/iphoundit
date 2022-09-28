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
    //errorHandler(error, res);
  }
}

const Estate = ({ estates }) => {
  return (
    <div id="rent" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16 justify-center ">
        <p className=" p-2 text-xl tracking items-center uppercase text-[#fd7e14] text-bold text-center mt-10">
          Hot Now
        </p>

        <div className="grid grid-cols-2 rows-3 md:grid-cols-2 lg:grid-cols-4 gap-4 ">
          {estates.map((estate) => (
            <div
              className=" bg-white rounded overflow-hidden shadow-xl"
              key={estate._id}
            >
              <Link href={`/desc/${estate._id}`}>
                <Image
                  className="w-full shadow h-48 
                 group-hover:opacity-10 object-fill hover:scale-105 ease in duration-300 md:object-fill"
                  src={estate.image}
                  alt=" "
                  width={500}
                  height={300}
                />
              </Link>
              <div className="p-6  rounded-xl ">
                <h4 className="text-xl text-black tracking-wider ">
                  {estate.title}
                </h4>
                <p className="pb-4  text-black ">{estate.location}</p>
                <p className="pb-4  text-black ">{estate.slug}</p>
                <p className="pb-4  text-black ">{estate.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Estate;
