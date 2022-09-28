import React from "react";
import Rentitems from "./Rentitems";
const Rent = () => {
  return (
    <div id="rent" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16 justify-center">
        <h2 className="py-4 text-bold text-center items-center mb-4 text-[#fd7e14]"> What are you looking for?</h2>
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full h-full ">
         
          <Rentitems
            title="House For Sale"
            backgroundImg="house4.jpg"
            projectUrl="estate/House"
          
          />
          <Rentitems
            title="House To Rent"
            backgroundImg="house.jpg"
            projectUrl="estate/Rent"
           
          />
          <Rentitems
            title="Shop To Let"
            backgroundImg="house5.jpg"
            projectUrl="estate/Shop"
           
          />
           <Rentitems
            title="Land For Sale"
            backgroundImg="house6.jpg"
            projectUrl="estate/Land"
             
          />
        </div>
      </div>
    </div>
  );
};

export default Rent;
