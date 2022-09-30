import React, { useState, useEffect } from "react";
import Link from "next/link";
import { AiOutlineClose, AiOutlineMenu} from "react-icons/ai";
import { useRouter } from "next/router";
const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [NavBg, setNavBg] = useState("#e5e7eb");
  const [LinkColor, setLinkColor] = useState("#1f2937");
  const router = useRouter();

  useEffect(() => {
    if (router.asPath === "/Property" || router.asPath === "/desc/") {
      setNavBg("transparent");
      setLinkColor("#ecf0f3");
    } else {
      setNavBg("#e5e7eb");
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
          ? "fixed w-full h-20 shadow-xl shadow-gray-500 z-[70]"
          : "fixed w-full h-20 z-[70]"
      }
    >
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
      <Link href="/#home">
            <p className="text-gray-800 font-bold text-3xl pb-6 hover:cursor-pointer">
							Iphound<span className="text-[#fd7e14]">It</span>
						</p>
            </Link>
        <div>
          <ul style={{ color: `${LinkColor}` }} className="hidden md:flex">
          <Link href="/estate/House">
              <li className="ml-10 text-sm uppercase hover:border-b">House</li>
            </Link>
            <Link href="/estate/Rent">
              <li className="ml-10 text-sm uppercase hover:border-b">Rent</li>
            </Link>
            <Link href="/estate/Land">
              <li className="ml-10 text-sm uppercase hover:border-b">Land </li>
            </Link>
            <Link href="/estate/Shop">
              <li className="ml-10 text-sm uppercase hover:border-b">Shop</li>
            </Link>
            <Link href="/#about">
              <li className="ml-10 text-sm uppercase hover:border-b">About</li>
            </Link>
            <Link href="/#footer">
              <li className="ml-10 text-sm uppercase hover:border-b">
                Contact
              </li>
            </Link>
          </ul>
          <div onClick={handleNav} className="md:hidden">
            <AiOutlineMenu size={25} />
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
              ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#e5e7eb] p-10 ease-in duration-500"
              : "fixed left-[-150%] top-0  p-10 ease-in duration-500"
          }
        >
          <div>
            <div className="flex w-full items-center justify-between">
            <Link href="/#home">
            <p className="text-gray-800 font-bold text-3xl pb-6 hover:cursor-pointer">
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
                Let&apos;s find a<span className="text-[#fd7e14]"> home</span> that&apos;s
                perfect for you
              </p>
            </div>
          </div>
          <div className="py-4 flex flex-col">
            <ul className="uppercase">
            <Link href="/estate/House">
                <li className="py-4 text-md" onClick={() => setNav(false)}>
                  House
                </li>
              </Link>
              <Link href="/estate/Rent">
                <li className="py-4 text-md" onClick={() => setNav(false)}>
                  Rent
                </li>
              </Link>
              <Link href="/estate/Land">
                <li className="py-4 text-md" onClick={() => setNav(false)}>
                  Land
                </li>
              </Link>
              <Link href="/estate/Shop">
              <li className="py-4 text-md" onClick={() => setNav(false)}>Shop</li>
            </Link>
              <Link href="/#about">
                <li className="py-4 text-md" onClick={() => setNav(false)}>
                  About
                </li>
              </Link>
              <Link href="/#footer">
                <li className="py-4 text-md" onClick={() => setNav(false)}>
                  Contact
                </li>
              </Link>
            </ul>
            <br/>
            <br/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
