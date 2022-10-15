import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";


import Link from "next/link";

const Footer = () => {
	return (
		<>
			<div  id="footer"className=" shadow-xl
        shadow-gray-400 rounded  bg-[#e5e7eb] h-1/2 w-full flex md:flex-row flex-col justify-around items-start p-20">
				<div className="p-2 ">
					<ul><Link href="/#home">
						<p className="text-gray-800 font-bold text-3xl pb-6">
							Iphound<span className="text-[#fd7e14]">It</span>
						</p>
						</Link>
						<div className="flex gap-6 pb-5">
							<FaFacebook className="text-3xl cursor-pointer hover:text-blue-700" />
							<FaTwitter className="text-3xl cursor-pointer hover:text-blue-600" />
							<FaWhatsapp className="text-3xl cursor-pointer hover:text-green-700" />
							{/* <FaYoutube className="text-2xl cursor-pointer hover:text-red-600" /> */}
						</div>
					</ul>
				</div>
				<div className="p-2">
					<ul>
						<p className=" font-bold text-2xl pb-4 text-[#fd7e14]">PROPERTIES</p>
						<Link href="/estate/Land">
						<li className="text-gray-700 text-xl pb-2 font-semibold hover:text-[#fd7e14] cursor-pointer">
							Lands For Sale
						</li>
						</Link>
						<Link href="/estate/Rent">
						<li className="text-gray-700 text-xl pb-2 font-semibold hover:text-[#fd7e14] cursor-pointer">
							House For Rent
						</li>
						</Link>
						<Link href="#">
						<li className="text-gray-700 text-xl pb-2 font-semibold hover:text-[#fd7e14] cursor-pointer">
							Shop To Let
						</li>
						</Link>
						<Link href="#">
						<li className="text-gray-700 text-xl pb-2 font-semibold hover:text-[#fd7e14] cursor-pointer">
							House For Sale
						</li>
						</Link>
					</ul>
				</div>
				<div className="p-2">
					<ul>
						<p className="font-bold text-2xl pb-4 text-[#fd7e14]">CONTACT</p>
						<li className="text-gray-700 text-xl  font-semibold py-2 flex ">
						+2349063899239
						
						</li>
						{/* <li className="text-gray-700 text-xl  font-semibold py-2 flex ">
						No 56 Ibagwa Road Nsukka 
						</li> */}
						<li className="text-gray-700 text-xl  font-semibold py-2 flex ">
						iphounditonline@gmail.com
						</li>
						
					</ul>
				</div>
				
			</div>
			<div className="flex flex-col justify-center items-center text-center  p-5 bg-[#e5e7eb]">
				<h5 className=" text-gray-800 font-semibold">
					© 2022  Iphound<span className="text-[#fd7e14]">It</span> || All rights reserved
				
				</h5>
			</div>
		</>
	);
}

export default Footer;