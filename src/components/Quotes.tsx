"use client";
import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

export default function EmblaCarousel() {
  const [emblaRef] = useEmblaCarousel({ loop: false }, [Autoplay()]);
  return (
    <div className="p-10">
      <h1 className="text-center bold-32">QUOTE OF THE DAY</h1>
      <div className="p-10 rounded-lg shadow-2xl">
        <div className="embla mx-auto max-w-[1440px] relative" ref={emblaRef}>
          <div className="embla__container">
            <div className="embla__slide">
              <h1 className="text-center bold-32 mb-4 border-b-2 border-orange-500">
                BIBLE VERSE
              </h1>
              <p className="text-center text-base">
                Jesus taught that there are two great commandments: “Thou shalt
                love the Lord thy God with all thy heart” and “Thou shalt love
                thy neighbour as thyself” (Matthew 22:37, 39). While loving God
                is often easy, feeling love for all His children is sometimes
                difficult—especially when we dont always see eye to eye. As you
                learn more about Jesus, you can learn to love others as He did.
                Good News Global Network can help you grow closer to Christ,
                understand His teachings, and introduce you to a church
                community of service and love.
              </p>
            </div>
            <div className="embla__slide">
              <h1 className="text-center bold-32 mb-4 border-b-2 border-orange-500">
                BIBLE VERSE
              </h1>
              <p className="text-center text-base">
                Jesus taught that there are two great commandments: “Thou shalt
                love the Lord thy God with all thy heart” and “Thou shalt love
                thy neighbour as thyself” (Matthew 22:37, 39). While loving God
                is often easy, feeling love for all His children is sometimes
                difficult—especially when we dont always see eye to eye. As you
                learn more about Jesus, you can learn to love others as He did.
                Good News Global Network can help you grow closer to Christ,
                understand His teachings, and introduce you to a church
                community of service and love.
              </p>
            </div>
            <div className="embla__slide">
              <h1 className="text-center bold-32 mb-4 border-b-2 border-orange-500">
                BIBLE VERSE
              </h1>
              <p className="text-center text-base">
                Jesus taught that there are two great commandments: “Thou shalt
                love the Lord thy God with all thy heart” and “Thou shalt love
                thy neighbour as thyself” (Matthew 22:37, 39). While loving God
                is often easy, feeling love for all His children is sometimes
                difficult—especially when we dont always see eye to eye. As you
                learn more about Jesus, you can learn to love others as He did.
                Good News Global Network can help you grow closer to Christ,
                understand His teachings, and introduce you to a church
                community of service and love.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
