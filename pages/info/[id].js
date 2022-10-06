import React, { useEffect, useState } from "react";
import Image from "next/image";
import { connectMongo } from "../../utils/connectMongo";
import Insert from "../../models/upload";
import Dashnav from "../components/Dashnav";
import{useSession} from "next-auth/react"
import Router from 'next/router';

export async function getServerSideProps(context) {
  const { id } = context.params; // Use `context.params` to get dynamic params

  try {
    await connectMongo();

    console.log("connecting to document.....");

    const estates = await Insert.find({ _id: id }).select(
      "_id title price image slug desc agent location createdAt"
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



const Info = ({ estates }) => {

    const session = useSession();
    const {status,data} = useSession();
    useEffect(() => {
    if(status==="unauthenticated") Router.replace("/auth/signin");
    },[status]);
  
    //console.log(session)
    if (status==="authenticated")


  return (
    <div className="w-full h-full max-w-[1240px] ">
      {estates.map((estate) => (
        <div
          className="w-screen h-[70vh] lg:h-[40vh] md:h-[50vh] relative"
          key={estate._id}
        >
          <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] md:h-[50vh] sm:h-[40vh] md:mb-4" />

          <img
            src={estate.image}
            className="absolute z-1 object-cover h-full w-full"
            alt=" "
          />

          <div className="p-2 text-[#e5e7eb]  absolute top-[95%] max-w-[1240px] w-full h-full left-[50%] translate-x-[-50%] translate-y-[-50%]">
           
            
           
          </div>
        </div>
      ))}

      <div className="grid lg:grid-cols-2 gap-8 mt-10 px-8 mb-20">
        {estates.map((estate) => (
          <div key={estate._id}>
            <Image
              className="w-full shadow-xl 
               group-hover:opacity-10 object-fill hover:scale-105 ease in duration-300 md:object-fill rounded"
              src={estate.image}
              width={900}
              height={500}
              alt=""
            />
          </div>
        ))}
        <div className="max-w-[1240px] max-auto p-2 grid md:grid-cols-2 gap-6 pt-20 px-4">
          {estates.map((estate) => (
            <div className="col-span-4" key={estate._id}>
              <h2>Description</h2>
              <br />
              <p className="text-2xl">{estate.desc}</p>
              <div className="grid grid-cols-2 md:grid-cols-2 gap-4 mt-8">
              <h3 className="p-2">TITLE: <span className="text-[#fd7e14]">{estate.title}</span></h3>
              <h3 className="p-2">AGENT: <span className="text-[#fd7e14]"> {estate.agent}</span></h3>
              <h3 className="p-2">LOCATION: <span className="text-[#fd7e14]">{estate.location}</span></h3>
              <h3 className="p-2">PRICE: <span className="text-[#fd7e14]">NGN  {estate.price}</span></h3>
              <h3 className="p-2">KEY: <span className="text-[#fd7e14]">{estate.slug}</span></h3>
              <h3 className="p-2">DATE: <span className="text-[#fd7e14]">{estate.createdAt}</span></h3>

              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Info;

Info.getLayout = function pageLayout(page) {
    return (
      <>
        <Dashnav/>
        {page}
      
      </>
    );
  };
