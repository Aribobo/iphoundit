import React from "react";
import Link from "next/link";
const About = () => {
  return (
    <div id="about" className="w-full md:h-full p-4 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-2 gap-8 rounded text-2xl">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#fd7e14]">
            About Us
          </p>
          <h2 className="py-2 ">Who are we? </h2>
          <p className="py-4 text-gray-800">
            Iphoundit is an online place which help individuals with the service of Sales and Rental of Properties
            based in Enugu, Nigeria.
            we provide users with the best property search experience both online and offline with property listings
           like homes, houses, lands, shops, office spaces and other commercial properties.
          </p>
          <p className="py-4 text-gray-800">
          we ensure all the Properties listed are verified to ensure listings pictures and description are the same as 
          real life.
          </p>
          <p className="py-4 text-gray-800">
           we make finding right property easy in 2 ways;
           <br/>
           <br/>
           1. Browse through the amazing and verified listing and read through  the property descriptions.
           <br/>
           <br/>
           2. Use either of the buttons to call or chat us up regarding the property.
            
          </p>
      
            <p className="py-2 text-gray-800 underline cursor-pointer">
            <a href="mailto:stboystan@gmail.com"> Contact us for something unique</a>
            </p>
          
        </div>
      </div>
    </div>
  );
};

export default About;
