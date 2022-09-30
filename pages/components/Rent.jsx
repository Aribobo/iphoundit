import React from "react";
import Rentitems from "./Rentitems";
const Rent = () => {
  return (
    <div id="rent" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16 justify-center">
        <h2 className="py-4 text-bold text-center items-center mb-4 text-[#fd7e14] text-bold"> What are you looking for?</h2>
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full h-full ">
         
          <Rentitems
            title="House For Sale"
            backgroundImg="house.jpg"
            projectUrl="estate/House"
          
          />
          <Rentitems
            title="House For Rent"
            backgroundImg="rent.jpg"
            projectUrl="estate/Rent"
           
          />
          <Rentitems
            title="Shop To Let"
            backgroundImg="shop.jpg"
            projectUrl="estate/Shop"
           
          />
           <Rentitems
            title="Land For Sale"
            backgroundImg="land.jpg"
            projectUrl="estate/Land"
             
          />
        </div>
      </div>
    </div>
  );
};

export default Rent;
