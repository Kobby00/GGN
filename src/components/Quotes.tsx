"use client";
import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

export default function Quotes() {
  const [emblaRef] = useEmblaCarousel({ loop: false }, [Autoplay()]);
  return (
    <div className="p-10">
      {/* <h1 className="text-center bold-32">Motivational Verse</h1> */}
      <div className="p-10 rounded-lg shadow-2xl">
        <div className="embla mx-auto max-w-[1440px] relative" ref={emblaRef}>
          <div className="embla__container">
            <div className="embla__slide">
              <h1 className="text-center bold-32 mb-4 border-b-2 border-orange-500">
                Mark 16:15
              </h1>
              <p className="text-center text-base">
                Jesus said to his followers, "Go everywhere in the world, and
                tell the Good News to everyone"
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
