import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { RiMenu3Fill } from "react-icons/ri";
import { GrClose } from "react-icons/gr";
import { FaFacebook } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [NavBg, setNavBg] = useState("#eee3bc");
  const [LinkColor, setLinkColor] = useState("#eae7dc");
  const router = useRouter();

  useEffect(() => {
    if (
      router.asPath === "/estate/about" ||
      router.asPath === "/estate/howto" ||
      router.asPath === "/estate/Rent" ||
      router.asPath === "/land/Land" ||
      router.asPath === "/house/House" ||
      router.asPath === "/shd/Shd" ||
      router.asPath === "/desc/" ||
      router.asPath === "/shop/Shop"
    ) {
      setNavBg("#eee3bc");
      setLinkColor("black");
    } else {
      setNavBg("transparent");
      setLinkColor("#eee3bc");
    }
  }, [router]);

  const handleNav = () => {
    setNav(!nav);
  };
  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 300) {
        setShadow(true);
        setNavBg("#eee3bc");
        setLinkColor("black");
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
          ? "fixed w-full h-20 shadow-xl shadow-gray-500 z-[70]"
          : "fixed w-full h-20 z-[70]"
      }
    >
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        <Link href="/#home">
          <p
            style={{ color: `${LinkColor}` }}
            className="font-bold text-3xl pb-6 hover:cursor-pointer"
          >
            Iphound<span className="text-[#fd7e14]">It</span>
          </p>
        </Link>
        <div>
          <ul style={{ color: `${LinkColor}` }} className="hidden md:flex">
            <Link href="/house/House">
              <li className="ml-10 text-sm uppercase hover:border-b">House</li>
            </Link>
            <Link href="/estate/Rent">
              <li className="ml-10 text-sm uppercase hover:border-b">Rent</li>
            </Link>
            <Link href="/land/Land">
              <li className="ml-10 text-sm uppercase hover:border-b">Land </li>
            </Link>
            <Link href="/shop/Shop">
              <li className="ml-10 text-sm uppercase hover:border-b">Shop</li>
            </Link>
            <Link href="/shd/Shd">
              <li className="ml-10 text-sm uppercase hover:border-b">2hd</li>
            </Link>
            <Link href="/estate/about">
              <li className="ml-10 text-sm uppercase hover:border-b">About</li>
            </Link>
          </ul>
          <div
            style={{ color: `${LinkColor}` }}
            onClick={handleNav}
            className="md:hidden"
          >
            <RiMenu3Fill size={25} />
          </div>
        </div>
      </div>
      <div
        className={
          nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : ""
        }
      >
        <div
          className={
            nav
              ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#eee3bc] p-10 ease-in duration-500"
              : "fixed left-[-150%] top-0  p-10 ease-in duration-800"
          }
        >
          <div>
            <div className="flex w-full items-center justify-between ">
              <Link href="/#home">
                <p
                  className="text-gray-800 font-bold text-3xl pb-6 hover:cursor-pointer"
                  onClick={() => setNav(false)}
                >
                  Iphound<span className="text-[#fd7e14]">It</span>
                </p>
              </Link>

              <div
                onClick={handleNav}
                className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer"
              >
                <GrClose />
              </div>
            </div>
            <div className="border-b border-orange-400 my-4">
              <p className="w-[85%] md:w-[90%] py-4 ">
                {" "}
                Let&apos;s help you find{" "}
                <span className="text-[#fd7e14]">it</span>
              </p>
            </div>
          </div>
          <div className="py-4 flex flex-col overflow-y-scroll">
            <ul className="uppercase">
              <Link href="house/House">
                <li className="py-4 text-md" onClick={() => setNav(false)}>
                  House
                </li>
              </Link>
              <Link href="/estate/Rent">
                <li className="py-4 text-md" onClick={() => setNav(false)}>
                  Rent
                </li>
              </Link>
              <Link href="/land/Land">
                <li className="py-4 text-md" onClick={() => setNav(false)}>
                  Land
                </li>
              </Link>
              <Link href="/shop/Shop">
                <li className="py-4 text-md" onClick={() => setNav(false)}>
                  Shop
                </li>
              </Link>
              <Link href="/estate/about">
                <li className="py-4 text-md" onClick={() => setNav(false)}>
                  About
                </li>
              </Link>
            </ul>
            <br />
            <p className="py-4 text-2xl">Connect with us</p>
          </div>

          <div className="flex gap-6 pb-5 justify-start items-center">
            <FaFacebook className=" flex text-3xl cursor-pointer hover:text-blue-700" />
            <a href="mailto:iphounditonline@gmail.com">
              <AiOutlineMail className=" flex text-3xl cursor-pointer hover:text-[#fd7e14]" />
            </a>
            <a href=" https://wa.me/+2349063899239">
              <FaWhatsapp className=" flex text-3xl cursor-pointer hover:text-green-700" />
            </a>
            <a href="tel:+2349063899239">
              <FiPhoneCall className=" flex text-3xl cursor-pointer hover:text-[#fd7e14]" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
