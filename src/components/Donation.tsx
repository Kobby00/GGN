"use client";
import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

export default function Donation() {
  const [emblaRef] = useEmblaCarousel({ loop: false }, [Autoplay()]);
  return (
    <div className="p-10">
      <div
        className="embla mx-auto max-w-[1440px] relative rounded-lg shadow-2xl"
        ref={emblaRef}
      >
        <div className="embla__container">
          <div className="embla__slide">
            <Image
              src={"https://i.ibb.co/LJjTyHM/donation1.jpg"}
              width={1000}
              height={100}
              alt="image"
              className="w-full h-[20rem] object-cover lg:h-[30rem]"
            />
            <div className="p-5 bg-white">
              <h1 className="font-bold text-2xl mt-5 mb-3">Sponsor a Child</h1>
              <p className="text-lg mb-5">
                Transform lives. Sponsor a child today. Make a lasting impact.
              </p>
              <button className="bg-[#ff5400] rounded-2xl py-3 px-10 text-white font-semibold shadow-2xl">
                Donate
              </button>
            </div>
          </div>

          <div className="embla__slide">
            <Image
              src={"https://i.ibb.co/DWHrCGP/donation2.jpg"}
              width={1000}
              height={100}
              alt="image"
              className="w-full object-cover h-[20rem]"
            />
            <div className="p-5 bg-white">
              <h1 className="font-bold text-2xl mt-4 mb-3">
                Help Senior Citizens
              </h1>
              <p className="text-lg mb-5">
                Extend compassion and aid to our cherished senior community.
              </p>
              <button className="bg-[#ff5400] rounded-2xl py-3 px-10 text-white font-semibold shadow-2xl">
                Donate
              </button>
            </div>
          </div>
          <div className="embla__slide">
            <Image
              src={"https://i.ibb.co/M6zGh9T/slider4.jpg"}
              width={1000}
              height={100}
              alt="image"
              className="w-full object-cover h-[20rem]"
            />
          </div>
          <div className="embla__slide">
            <Image
              src={"https://i.ibb.co/RyRVXKV/donation3.jpg"}
              width={1000}
              height={100}
              alt="image"
              className="w-full object-cover h-[20rem]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
