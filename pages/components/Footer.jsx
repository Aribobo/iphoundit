import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";

import Link from "next/link";

const Footer = () => {
  return (
    <>
      {" "}
      <div
        className="bg-[#eee3bc]  shadow-xl
        shadow-gray-400 rounded-xl"
      >
        <div
          id="footer"
          className="  w-full grid grid-cols md:grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 justify-center items-center p-20  "
        >
          <div className="p-2 ">
            <ul>
              <Link href="/#home">
                <p className=" flex text-gray-800 font-bold text-3xl pb-6 justify-center items-center">
                  Iphound<span className="text-[#fd7e14]">It</span>
                </p>
              </Link>
              <div className="flex gap-6 pb-5 justify-center items-center">
              <a href="https://www.facebook.com/profile.php?id=100093083571109">               
                <FaFacebook className=" flex text-3xl cursor-pointer hover:text-blue-700" />
                </a>
                <a href="mailto:iphounditonline@gmail.com">
                  <AiOutlineMail className=" flex text-3xl cursor-pointer hover:text-[#fd7e14] " />
                </a>
                <a href=" https://wa.me/+2349063899239">
                  <FaWhatsapp className=" flex text-3xl cursor-pointer hover:text-green-700" />
                </a>
                <a href="tel:+2349063899239">
                  <FiPhoneCall className=" flex text-3xl cursor-pointer hover:text-[#fd7e14]" />
                </a>
              </div>
            </ul>
          </div>
          <div className="p-2 flex justify-center items-center">
            <ul>
              <p className=" flex justify-center items-center font-bold text-2xl pb-4 text-[#fd7e14]">
                PROPERTIES
              </p>
              <Link href="/land/Land">
                <li
                  className="text-gray-700 flex justify-center items-center text-xl pb-2 font-semibold
						 hover:text-[#fd7e14] cursor-pointer"
                >
                  Lands For Sale
                </li>
              </Link>
              <Link href="/estate/Rent">
                <li className="text-gray-700 flex justify-center items-center text-xl pb-2 font-semibold hover:text-[#fd7e14] cursor-pointer">
                  House For Rent
                </li>
              </Link>

              <Link href="/house/House">
                <li className="text-gray-700  flex justify-center items-center text-xl pb-2 font-semibold hover:text-[#fd7e14] cursor-pointer">
                  House For Sale
                </li>
              </Link>

              <Link href="/shd/Shd">
                <li className="text-gray-700 flex justify-center items-center text-xl pb-2 font-semibold hover:text-[#fd7e14] cursor-pointer">
                  2hd(Fairly used)
                </li>
              </Link>
              <Link href="/shop/Shop">
                <li className="text-gray-700 flex justify-center items-center text-xl pb-2 font-semibold hover:text-[#fd7e14] cursor-pointer">
                  Shop To Let
                </li>
              </Link>
            </ul>
          </div>
          <div className="p-2 flex justify-center items-center">
            <ul>
              <p className=" flex justify-center items-center font-bold text-2xl pb-4 text-[#fd7e14]">
                COMPANY
              </p>
              <Link href="/estate/about">
                <li
                  className="flex justify-center items-center
						  hover:text-[#fd7e14] cursor-pointer text-gray-700 text-xl  font-semibold py-2  pt-2"
                >
                  About
                </li>
              </Link>

              <Link href="/estate/howto">
                <li className="flex justify-center items-center hover:text-[#fd7e14] cursor-pointer text-gray-700 text-xl  font-semibold py-2  pt-2">
                  Help
                </li>
              </Link>
            </ul>
          </div>

          <div className="p-2 flex justify-center items-center">
            <ul>
              <p className=" flex justify-center items-center font-bold text-2xl pb-6 text-[#fd7e14]">
                CONTACT
              </p>
              <li className="flex justify-center items-center text-gray-700 text-xl  font-semibold py-2  ">
                +2349063899239
              </li>
              <li className="text-gray-700 text-xl  font-semibold py-2 flex ">
                8 Orba Road Nsukka,Enugu
              </li>
              <li className="flex justify-center items-center text-gray-700 text-xl  font-semibold py-2 ">
                iphounditonline@gmail.com
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center text-center  p-5 bg-[#eee3bc]">
          <h5 className=" text-gray-800 font-semibold">
            © 2023 Iphound<span className="text-[#fd7e14]">It</span> || All
            rights reserved
          </h5>
        </div>
      </div>
    </>
  );
};

export default Footer;
