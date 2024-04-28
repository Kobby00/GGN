import { ImageSlider } from "./ImageSlider";

const IMAGES = [
  "https://i.ibb.co/LJjTyHM/donation1.jpg",
  "https://i.ibb.co/DWHrCGP/donation2.jpg",
  "https://i.ibb.co/RyRVXKV/donation3.jpg",
];

export const Donation = () => {
  return (
    <div className="px-4 py-10">
      <div className="max-w-[1440px] w-full aspect-w-10 aspect-h-6 m-auto">
        <ImageSlider imageUrls={IMAGES} />
      </div>
    </div>
  );
};
