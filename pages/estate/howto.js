import React from "react";
import Link from "next/link";
import { FaFacebook } from "react-icons/fa";
import {  FiPhoneCall} from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";

const Howto = () => {
  return (
    <div className="w-full md:h-full p-4 flex items-center py-16">
      <div className="max-w-[1240px] m-auto rounded text-xl">
        <div className="col-span-2 ">
          <p className="uppercase text-2xl text-[#fd7e14] mt-10 px-10 mb-4 text-bold">
            Help
          </p>
         
          <div className="bg-[#eee3bc] rounded-xl px-10 shadow-2xl">
          <h3 className="py-4">How do i get my property listed? </h3>
          <p className="py-2 text-gray-800 flex items-center justify-center">
         listing your property at iphoundit has not being any way easier than contacting our help line 09063899239,

         legal credentials of the property is required for smooth and effective transaction.
          </p>
          <h3 className="py-2">What&apos;s 2HD?</h3>
          <p className="text-gray-800 flex items-center justify-center">
      2hd is a property listing of second hand or branded fairly used product which could be electronics,
       furniture, fashion wears and many more.
          </p>
          <h3 className="py-2">CONTACT-US</h3>
          <div className="flex gap-6 pb-5 justify-start items-center">
							<FaFacebook className=" flex text-3xl cursor-pointer hover:text-blue-700" />
                            <a href="mailto:iphounditonline@gmail.com">
                                <AiOutlineMail className=" flex text-3xl cursor-pointer hover:text-[#fd7e14]" />
                                </a>
							<a href=" https://wa.me/+2349063899239">
							<FaWhatsapp className=" flex text-3xl cursor-pointer hover:text-green-700" />
							</a>
                            <a href="tel:+2349063899239">
                           < FiPhoneCall className=" flex text-3xl cursor-pointer hover:text-[#fd7e14]" />
						   </a>
						</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Howto;
