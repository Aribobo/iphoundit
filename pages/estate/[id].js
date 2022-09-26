import React from "react";
import Link from "next/link";

export const getStaticPaths = async () => {
  const res = await fetch("http://localhost:3000/api/test/get");
  const data = await res.json();
  const paths = data.map((estate) => ({
    params: { id: estate.category },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const res = await fetch(`http://localhost:3000/api/estates/${params.id}`);
  const data = await res.json();

  return {
    props: { estates: data },
  };
};

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
                <img
                  className="w-full shadow h-48 
                 group-hover:opacity-10 object-fill hover:scale-105 ease in duration-300 md:object-fill"
                  src={estate.image}
                  alt="/"
                  width={500}
                  height={300}
                />
              </Link>
              <div className="p-6  rounded-xl ">
                <h4 className="text-xl text-black tracking-wider ">
                  {estate.title}
                </h4>
                <p className="pb-4  text-black ">{estate.location}</p>
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
