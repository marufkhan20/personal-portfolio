"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";

const Header = () => {
  const [scrolling, setScrolling] = useState(false);

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
      } z-50`}
    >
      <div className="container flex items-center justify-between gap-5">
        <div>
          <Link href="/" className="font-semibold text-lg">
            MarufDev
          </Link>
        </div>
        <nav className="flex items-center gap-11 uppercase text-white font-semibold">
          <li className="transition-all hover:text-secondary">
            <Link href="#">Home</Link>
          </li>
          <li className="transition-all hover:text-secondary">
            <Link href="#">Services</Link>
          </li>
          <li className="transition-all hover:text-secondary">
            <Link href="#">Experience</Link>
          </li>
          <li className="transition-all hover:text-secondary">
            <Link href="#">Blog</Link>
          </li>
          <li className="transition-all hover:text-secondary">
            <Link href="#">Client</Link>
          </li>
          <li className="transition-all hover:text-secondary">
            <Link href="#">Contact</Link>
          </li>
        </nav>
        <div className="p-8 border-l border-r border-white/20 cursor-pointer">
          <AiOutlineSearch className="text-lg" />
        </div>
      </div>
    </header>
  );
};

export default Header;
