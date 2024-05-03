import BlogPost from "@/components/BlogPost";
import React from "react";

const images = [
  "https://i.ibb.co/8sHTNQT/image7.jpg",
  "https://i.ibb.co/t4cpjNP/image2.jpg",
  "https://i.ibb.co/CPfgHL0/image3.jpg",
  "https://i.ibb.co/vDsfrXp/image4.jpg",
  "https://i.ibb.co/tzXqXs9/image5.jpg",
  "https://i.ibb.co/ZSWm7tc/image6.jpg",
  // Add more image URLs as needed
];

export default function page() {
  return (
    <div className="p-3">
      <h1 className="text-center bold-32">NEWS FEED</h1>
      <BlogPost images={images} />
    </div>
  );
}
