"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { FaBars } from "react-icons/fa";

const Header = () => {
  const [scrolling, setScrolling] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    // Add an event listener to the window for scrolling
    window.addEventListener("scroll", handleScroll);
    return () => {
      // Clean up the event listener when the component unmounts
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    // Check the scroll position and update the state
    if (window.scrollY > 100) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };
  return (
    <header
      className={`text-white border-b border-white/20 fixed top-0 left-0 right-0 w-full ${
        scrolling ? "bg-secondary" : ""
      } z-50 py-8 lg:p-0`}
    >
      <div className="container flex items-center justify-between gap-5">
        <div>
          <Link href="/" className="font-semibold text-lg">
            MarufDev
          </Link>
        </div>
        <nav
          className={`absolute transition-all duration-300 md:relative ${
            showMenu ? "top-24 md:top-0" : "-top-[500%] md:top-0"
          } left-0 right-0 w-full bg-secondary flex flex-col md:flex-row md:items-center md:gap-11 uppercase text-white font-semibold md:flex`}
        >
          <li className="transition-all hover:text-gray-500 py-4 px-8 md:p-0 border-b md:border-none border-white/20">
            <a href="#home">Home</a>
          </li>
          <li className="transition-all hover:text-gray-500 py-4 px-8 md:p-0 border-b md:border-none border-white/20">
            <a href="#services">Services</a>
          </li>
          <li className="transition-all hover:text-gray-500 py-4 px-8 md:p-0 border-b md:border-none border-white/20">
            <a href="#projects">Projects</a>
          </li>
          <li className="transition-all hover:text-gray-500 py-4 px-8 md:p-0 border-b md:border-none border-white/20">
            <a href="#testimonials">Testimonials</a>
          </li>
          <li className="transition-all hover:text-gray-500 py-4 px-8 md:p-0 border-b md:border-none border-white/20">
            <a href="#blogs">Blogs</a>
          </li>
          <li className="transition-all hover:text-gray-500 py-4 px-8 md:p-0 border-b md:border-none border-white/20">
            <a href="#contact">Contact</a>
          </li>
        </nav>
        <div className="block md:hidden">
          <FaBars
            className="text-2xl cursor-pointer"
            onClick={() => setShowMenu(!showMenu)}
          />
        </div>
        <div className="p-8 border-l border-r border-white/20 cursor-pointer hidden lg:block">
          <AiOutlineSearch className="text-lg" />
        </div>
      </div>
    </header>
  );
};

export default Header;
