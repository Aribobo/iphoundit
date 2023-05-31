import React from "react";
import Rentitems from "./Rentitems";
const Rent = () => {
  return (
    <div id="rent" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-4 justify-center">
        <h2 className="py-4 text-xl md:text-2xl flex justify-center mb-4">
          Listing category
        </h2>
        <div className="grid grid-cols sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2  items-center gap-8 w-full h-full ">
          <Rentitems
            title="House For Sale"
            backgroundImg="heroll.jpg"
            projectUrl="house/House"
          />
          <Rentitems
            title="House For Rent"
            backgroundImg="stan11.jpg"
            projectUrl="estate/Rent"
          />
          <Rentitems
            title="Shop To Let"
            backgroundImg="shop.jpg"
            projectUrl="shop/Shop"
          />
          <Rentitems
            title="Land For Sale"
            backgroundImg="land.jpg"
            projectUrl="land/Land"
          />
        </div>
      </div>
    </div>
  );
};

export default Rent;
