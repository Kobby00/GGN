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
            Welcome to our charity, a sanctuary of compassion and hope where
            each individual's journey is embraced with warmth and understanding.
            Here, we believe in the power of kindness and the transformative
            impact of collective goodwill. With open arms, we invite you to be
            part of our mission, where every act of generosity and support
            creates ripples of positive change. Together, let's weave a tapestry
            of love and empathy, reaching out to those in need and illuminating
            the path towards a brighter tomorrow. Join us as we embark on this
            journey of compassion and solidarity, where every hand extended in
            kindness brings us closer to a world filled with hope and
            resilience.
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
