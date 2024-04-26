// ProfileCard.tsx

import React from "react";
import Image from "next/image";

type ProfileCardProps = {
  name: string;
  role: string;
  imageUrl: string;
};

const ProfileCard: React.FC<ProfileCardProps> = ({ name, role, imageUrl }) => {
  return (
    <div className="cursor-pointer m-1 rounded-2xl flex flex-col justify-start items-center border-gradient-to-1 from-[#ff5400] via-white to-[#ff5400] bg-gradient-to-tr mb-5">
      <div>
        <div className="flex justify-center items-center mt-3">
          <Image
            src={imageUrl}
            width={90}
            height={90}
            alt="header"
            className="rounded-lg sepia"
          />
        </div>
        <h1 className="text-black font-bold text-3xl text-center">{name}</h1>
        <p className="font-normal uppercase text-base text-black text-center pb-4">
          {role}
        </p>
        <h3 className="font-semibold text-md uppercase text-center py-0">
          About
        </h3>
        <p className="text-sm text-neutral-600 text-center mb-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
          nostrum assumenda id cupiditate. Necessitatibus deleniti ab hic
          numquam, eveniet voluptas, vel pariatur harum, impedit perspiciatis
          nulla iste modi cupiditate ipsum.
        </p>
      </div>
    </div>
  );
};

export default ProfileCard;
