import Image from "next/image";
import React from "react";

export const Charity = () => {
  return (
    <div className="mb-10">
      <div className="grid grid-cols-1 p-4 sm:px-10 lg:grid-cols-2">
        <div className="sm:p-8">
          <h1 className="bold-36 mb-7 text-center tx:text-black">
            Welcome to our charity
          </h1>
          <p className="text-base text-center font-normal mb-6 whitespace-normal">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
            laboriosam non pariatur quasi voluptas tenetur quaerat, reiciendis
            architecto nobis accusantium nulla placeat maiores assumenda quam
            excepturi, exercitationem saepe nostrum voluptates! Illum voluptas
            deleniti consequatur minus cupiditate, totam culpa esse a nesciunt
            aliquid iste consequuntur, quibusdam ipsam unde tempore odio quidem
            eligendi necessitatibus vel reprehenderit. Ducimus dolorem mollitia
          </p>
          <button className="bg-[#ff5400] rounded-2xl py-3 px-10  text-white font-semibold shadow-2xl">
            Read More
          </button>
        </div>
        <div className="hidden lg:block">
          <Image src={"/slider1.jpg"} width={1000} height={600} alt="image" />
        </div>
      </div>
    </div>
  );
};
