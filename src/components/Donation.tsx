import donation1 from "../../public/donation1.jpg";
import donation2 from "../../public/donation2.jpg";
import donation3 from "../../public/donation3.jpg";
import { ImageSlider } from "./ImageSlider";

const IMAGES = [donation1, donation2, donation3];

export const Donation = () => {
  return (
    <div className="px-4 py-10">
      <div className="max-w-[1440px] w-full aspect-w-10 aspect-h-6 m-auto">
        <ImageSlider imageUrls={IMAGES} />
      </div>
    </div>
  );
};
