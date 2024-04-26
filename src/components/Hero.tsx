"use client";
import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

export default function EmblaCarousel() {
  const [emblaRef] = useEmblaCarousel({ loop: false }, [Autoplay()]);
  return (
    <div className="embla mx-auto max-w-[1440px]" ref={emblaRef}>
      <div className="embla__container">
        <div className="embla__slide">
          <Image
            src={"/slider1.jpg"}
            width={1000}
            height={100}
            alt="image"
            className="w-full object-contain"
          />
        </div>
        <div className="embla__slide">
          <Image
            src={"/slider1.jpg"}
            width={1000}
            height={100}
            alt="image"
            className="w-full object-contain"
          />
        </div>
        <div className="embla__slide">
          <Image
            src={"/slider1.jpg"}
            width={1000}
            height={100}
            alt="image"
            className="w-full object-contain"
          />
        </div>
      </div>
    </div>
  );
}
