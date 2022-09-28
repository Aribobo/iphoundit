import React from 'react';
import Link from 'next/link';
import Image from 'next/image'

const Rentitems = ( {title,backgroundImg,projectUrl} ) => {
    return ( 
        <div className="relative flex items-center justify-center h-full w-full shadow
        shadow-gray-400 rounded group object-cover group-hover:opacity-10 
         hover:scale-105 ease in duration-300 md:object-fill ">
         
        <Image className='rounded ' src={`/${backgroundImg}`} alt=' ' width={700}
              height={450}/>
              
        <div className=" absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <h3 className="text-2xl text-white tracking-wider text-center">
        
        </h3>
        <Link href={`/${projectUrl}`}>
          <h3 className="text-center py-5 px-8  text-black font-bold hover:text-white cursor-pointer">
            {title}
          </h3>
          </Link>
        
      </div>
                     </div>





     );
}
 
export default Rentitems;