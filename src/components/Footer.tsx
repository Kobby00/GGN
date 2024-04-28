import Image from "next/image";
import React from "react";
import {
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaFacebook,
  FaYoutube,
} from "react-icons/fa";
import ProductList from "./List";
import { company, products } from "../../constants";

export const Footer = () => {
  return (
    <footer className="bg-black h-1/2 flex md:flex-row flex-col justify-around items-start p-20">
      <div className="flex flex-col md:flex-row justify-around items-start w-full">
        <div className="p-5">
          <div className="mb-9">
            <Image
              priority={true}
              src={"/ggn.JPG"}
              alt="logo"
              width={79}
              height={29}
              className="mb-2"
            />
          </div>
          <div className="flex gap-6 pb-5">
            <FaInstagram className="text-2xl text-white cursor-pointer hover:text-yellow-600" />
            <FaTwitter className="text-2xl text-white cursor-pointer hover:text-yellow-600" />
            <FaLinkedin className="text-2xl text-white cursor-pointer hover:text-yellow-600" />
            <FaFacebook className="text-2xl text-white cursor-pointer hover:text-yellow-600" />
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-20">
          <div className="p-5">
            <ProductList products={products} title="About Us" />
          </div>
          <div className="p-5">
            <ProductList products={company} title="Get Involved" />
          </div>
        </div>
      </div>
    </footer>
  );
};
