import Image from "next/image";

type Leadership = {
  title?: string;
  imageSrc: string;
  name: string;
  position: string;
};

export const LeadershipCard = ({
  title,
  imageSrc,
  name,
  position,
}: Leadership) => {
  return (
    <div className="flexCenter flex-col mb-10">
      {title && <h1 className="bold-32 mb-3">{title}</h1>}
      <Image
        src={imageSrc}
        width={150}
        height={90}
        alt="header"
        className="rounded-full mb-5"
      />
      <h4 className="font-semibold">{name}</h4>
      <p>{position}</p>
    </div>
  );
};
