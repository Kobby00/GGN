"use client";
import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

export default function EmblaCarousel() {
  const [emblaRef] = useEmblaCarousel({ loop: false }, [Autoplay()]);
  return (
    <div className="embla mx-auto max-w-[1440px] relative" ref={emblaRef}>
      <div className="embla__container">
        <div className="embla__slide">
          <Image
            src={"https://i.ibb.co/smXNR77/slider.jpg"}
            width={1000}
            height={100}
            alt="image"
            className="w-full h-[20rem] object-cover lg:h-[30rem]"
          />
        </div>
        <div className="embla__slide">
          <Image
            src={"https://i.ibb.co/qxbbnJQ/slider2.jpg"}
            width={1000}
            height={100}
            alt="image"
            className="w-full object-cover h-[20rem]"
          />
        </div>
        <div className="embla__slide">
          <Image
            src={"https://i.ibb.co/P631wSL/slider3.jpg"}
            width={1000}
            height={100}
            alt="image"
            className="w-full object-cover h-[20rem]"
          />
        </div>
      </div>
    </div>
  );
}
