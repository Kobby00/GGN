"use client";

import Image from "next/image";
import { useState } from "react";

type ImageSliderProps = {
  imageUrls: any;
};

export const ImageSlider = ({ imageUrls }: ImageSliderProps) => {
  const [imageIndex, setImageIndex] = useState(0);

  return (
    <div>
      <Image
        src={imageUrls[imageIndex]}
        alt="slides"
        width={1000}
        height={100}
      />
    </div>
  );
};
