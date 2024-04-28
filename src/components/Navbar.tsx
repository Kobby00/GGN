import Image from "next/image";
import Link from "next/link";
import { NAV_LINKS } from "../../constants";

const Navbar = () => {
  return (
    <nav className="flexBetween items-center w-full max-container lg:px-20 py-1 relative z-30 bg-black sm:px-5 xs:px-5 md:px-10">
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

      <Image
        src="/icons8-menu-30.png"
        alt="menu"
        width={32}
        height={32}
        className="inline-block lg:hidden ml-3 bg-gray-60 rounded-full p-1"
      />
    </nav>
  );
};

export default Navbar;
