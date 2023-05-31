import React from "react";
import Image from "next/image";
const Main = () => {
  return (
    <div id="home" className="w-full h-screen text-center">
      <div className="max-w-[1350px] w-full h-full mx-auto p-2 flex justify-center items-center bg-cover lg-center relative">
        <img
          src="/nero2.jpg"
          className="absolute  object-cover w-full h-full"
          alt=""
          height={750}
          width={1600}
        />
        <div className="text-[#eee3bc] absolute">
          <h1 className="py-4 text[#eae7dc] ">
            You <span className="text-[#eee3bc]">Deserve</span> a
            <span className="text-[#fd7e14]"> Home</span>
          </h1>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <h2 className="uppercase text-xl tracking-widest text-[#eee3bc]  p-2 ">
            Let&apos;s help you  <span className="text-black-700">find</span> <span className="text-[#fd7e14]">it</span>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Main;
