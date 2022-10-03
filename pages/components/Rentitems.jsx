import React from 'react';
import Link from 'next/link';
import Image from 'next/image'

const Rentitems = ( {title,backgroundImg,projectUrl} ) => {
    return ( 
      <div
      className="relative flex items-center justify-center h-auto w-full shadow
      shadow-gray-700 rounded  group hover:bg-gradient-to-r from-[#e5e7eb] to-[#1e1e20] opacity-1"
    >
         
        <Image className="rounded group-hover:opacity-10" src={`/${backgroundImg}`} alt=' ' width={700}
              height={450}/>
              
              <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <h3 className="text-2xl text-[#d7c69d] tracking-wider text-center">
         
        </h3>
       <br/>
        <Link href={`/${projectUrl}`}>
          <p className="text-center py-3 rounded-lg bg-[#e5e7eb] text-gray-700 font-bold">
          {title}
          </p>
        </Link>
      </div>
                     </div>





     );
}
 
export default Rentitems;