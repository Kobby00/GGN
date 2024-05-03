import React from "react";
import Image from "next/image";

type Blog = {
  images: string[];
};

const BlogPost = ({ images }: Blog) => {
  return (
    <div className="grid grid-cols-4 gap-4 md:grid-cols-2 sm:grid-cols-1 p-5">
      {images.map((imageUrl, index) => (
        <div key={index} className="relative">
          <Image
            src={imageUrl}
            alt={`Image ${index}`}
            width={300}
            height={200}
          />
        </div>
      ))}
    </div>
  );
};

export default BlogPost;
