import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineClose, AiOutlineMenu, AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { BsFillPersonFill } from "react-icons/bs";
import { useRouter } from "next/router";
import {signOut} from "next-auth/react"

const Dashnav = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [NavBg, setNavBg] = useState("#ecf0f3");
  const [LinkColor, setLinkColor] = useState("#1f2937");
  const router = useRouter();

  useEffect(() => {
    if (router.asPath === "/Property" || router.asPath === "/Twitch") {
      setNavBg("transparent");
      setLinkColor("#ecf0f3");
    } else {
      setNavBg("white");
      setLinkColor("#1f2937");
    }
  }, [router]);

  const handleNav = () => {
    setNav(!nav);
  };
  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
  }, []);

  return (
    <div
      style={{ backgroundColor: `${NavBg}` }}
      className={
        shadow
          ? "  bg-gradient-to-r from-orange-200 to-sky-200 fixed w-full h-20 shadow-xl z-[100]"
          : "fixed w-full h-20 z-[100] bg-gradient-to-r from-orange-200 to-sky-200 "
      }
    >
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
      <Link href="/estates/Dashboard">
            <p className="text-gray-800 font-bold text-3xl pb-6 hover:cursor-pointer">
							Iphound<span className="text-[#fd7e14]">It</span>
						</p>
            </Link>
        <div>
          <ul style={{ color: `${LinkColor}` }} className="hidden md:flex">
            <Link href="/estates/House">
              <li className="ml-10 text-sm uppercase hover:border-b">House</li>
            </Link>
            <Link href="/estates/Rent">
              <li className="ml-10 text-sm uppercase hover:border-b">Rent</li>
            </Link>

            <Link href="/estates/Land ">
              <li className="ml-10 text-sm uppercase hover:border-b">Land </li>
            </Link>
            <Link href="/estates/Shop">
              <li className="ml-10 text-sm uppercase hover:border-b">Shop</li>
            </Link>
          
              <li className="ml-10 text-sm uppercase hover:border-b" onClick={() => signOut()}>
                Log-Out
              </li>
            
          </ul>
          <div onClick={handleNav} className="md:hidden">
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>
      <div
        className={
          nav ? " md:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : ""
        }
      >
        <div
          className={
            nav
              ? "  bg-gradient-to-r from-orange-200 to-sky-200 fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ffffff] p-10 ease-in duration-500"
              : "fixed left-[-150%] top-0  p-10 ease-in duration-500"
          }
        >
          <div>
            <div className="flex w-full items-center justify-between">
            <Link href="/estates/Dashboard">
            <p className="text-gray-800 font-bold text-3xl pb-6 hover:cursor-pointer"  onClick={() => setNav(false)}>
							Iphound<span className="text-[#fd7e14]">It</span>
						</p>
            </Link>
              <div
                onClick={handleNav}
                className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer"
              >
                <AiOutlineClose />
              </div>
            </div>
            <div className="border-b border-orange-400 my-4">
              <p className="w-[85%] md:w-[90%] py-4">
                {" "}
                Let&apos;s help you find <span className="text-[#fd7e14]">it</span>
              </p>
            </div>
          </div>
          <div className="py-4 flex flex-col">
            <ul className="uppercase">
              <Link href="/estates/House">
                <li className="py-4 text-md" onClick={() => setNav(false)}>
                  House
                </li>
              </Link>
              <Link href="/estates/Rent">
                <li className="py-4 text-md" onClick={() => setNav(false)}>
                  Rent
                </li>
              </Link>
              <Link href="/estates/Land">
                <li className="py-4 text-md" onClick={() => setNav(false)}>
                  Land
                </li>
              </Link>
              <Link href="/estates/Shop">
                <li className="py-4 text-md" onClick={() => setNav(false)}>
                  Shop
                </li>
              </Link>
              
            </ul>
            <div className="pt-20 ">
              <p className="uppercase tracking-widest text-[#fd7e14] hover:cursor-pointer" onClick={() => signOut()}>
              <Link href="#">Log-Out
                </Link>
              </p>
            </div>
            <br />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashnav;
