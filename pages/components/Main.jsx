import React from "react";
import Image from "next/image"
const Main = () => {
  return (
    <div id="home" className="w-full h-screen text-center">
      <div className="max-w-[1350px] w-full h-full mx-auto p-2 flex justify-center items-center bg-cover lg-center relative">
        <img src="/hero.jpg" className="absolute  object-cover w-full h-full" alt="" height={750} width={1600} />
        <div className="text-black absolute">
          <h1 className="py-4">
            You <span className="text-[#fd7e14]">Deserve</span> a 
            <span className="text-[#fd7e14]"> Home</span>
          </h1>
          <h2 className="uppercase text-sm tracking-widest text-black p-2">
            Let&apos;s help you find <span className="text-[#fd7e14]">it</span>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Main;
