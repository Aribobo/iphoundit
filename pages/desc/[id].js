import React from "react";
import Link from "next/link";
                              
export const getStaticPaths = async () => {
  const res = await fetch("http://localhost:3000/api/test/get");
  const data = await res.json();
  const paths = data.map((estate) => ({
    params: { id: estate._id },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const res = await fetch(`http://localhost:3000/api/desc/${params.id}`);
  const data = await res.json();

  return {
    props: { estates: data },
  };
};
const Desc = ({ estates }) => {
  return (
    <div className="w-full h-full max-w-[1240px] ">
      {estates.map((estate) => (
        <div className="w-screen h-[70vh] lg:h-[40vh] md:h-[50vh] relative">
          <div
            className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] md:h-[50vh] sm:h-[40vh] md:mb-4"
            key={estate._id}
          />

          <img
            src={estate.image}
            className="absolute z-1 object-cover h-full w-full"
          />

          <div className=" text-white absolute top-[95%] max-w-[1240px] w-full h-full left-[50%] translate-x-[-50%] translate-y-[-50%]">
            <h2 className="py-2">{estate.title}</h2>
            <h3>{estate.slug}</h3>
          </div>
        </div>
      ))}

      <div className="grid lg:grid-cols-2 gap-8 mt-10 px-8 mb-20">
        {estates.map((estate) => (
          <div key={estate._id}>
            <img
              className="w-full shadow-xl h-50 
               group-hover:opacity-10 object-fill hover:scale-105 ease in duration-300 md:object-fill rounded"
              src={estate.image}
              width={900}
              height={500}
            />
          </div>
        ))}
        <div className="max-w-[1240px] max-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
          {estates.map((estate) => (
            <div className="col-span-4" key={estate._id}>
        
              <h2>Description</h2>
              <br />
              <p>{estate.desc}</p>
              <a href="tel:+2349063899239"> <button className="px-8 py-2 mt-4 mr-8 bg-green-700 text-white font-bold rounded mb-3">
                Call
              </button>
              </a>
              <a href=" https://wa.me/+2349063899239"><button className="px-8 py-2 mt-4 mr-8 bg-[#fd7e14] text-white font-bold rounded mb-3">
              Chat Us
              </button>
              </a>
             
              {/* <Link href="/#project">
                <p className="underline cursor-pointer">Back</p>
              </Link> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Desc;
