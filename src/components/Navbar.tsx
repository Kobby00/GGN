"use client";
import Image from "next/image";
import Link from "next/link";
import { NAV_LINKS } from "../../constants";
import { useState, useRef, useEffect } from "react";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target as Node)
      ) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [mobileMenuRef]);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`flexBetween z-30 bg-black py-1 relative sm:px-5 xs:px-5 md:px-10 lg:px-20 ${
        isSticky ? "sticky top-0" : ""
      }`}
    >
      {/* Logo */}
      <Link href="/">
        <Image
          priority={true}
          src={"https://i.ibb.co/jh6pBLv/ggn.jpg"}
          alt="logo"
          width={40}
          height={29}
          className="mb-2"
        />
      </Link>
      {/* Navigation Links */}
      <ul className="hidden h-full gap-12 lg:flex ml-9 items-center">
        {NAV_LINKS.map((link) => (
          <Link
            key={link.key}
            href={link.href}
            className="regular-16 text-white flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold"
          >
            {link.label}
          </Link>
        ))}
      </ul>

      {/* Signup and Login Buttons */}

      <div className="lg:hidden">
        <button onClick={toggleMobileMenu}>
          <Image
            src="/icons8-menu-30.png"
            alt="menu"
            width={32}
            height={32}
            className="bg-gray-60 rounded-full p-1"
          />
        </button>
      </div>
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div
          ref={mobileMenuRef}
          className="absolute top-0 right-0 bg-black p-4 z-50 h-screen w-[50%]"
        >
          <button
            onClick={closeMobileMenu}
            className="absolute top-3 right-3 text-white"
          >
            X
          </button>
          <ul className="flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <Link
                href={link.href}
                key={link.key}
                className="regular-16 text-white flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold"
              >
                {link.label}
              </Link>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
