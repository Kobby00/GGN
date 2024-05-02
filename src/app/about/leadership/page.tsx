import { LeadershipCard } from "@/components/LeadershipCard";
import Image from "next/image";
import React from "react";

const details = [
  {
    title: "Our Leadership",
    imageSrc: "https://i.ibb.co/v1LSg9j/founder.jpg",
    name: "Nana Kwasi Botwe",
    position: "Founder & CEO",
  },

  {
    imageSrc: "https://i.ibb.co/vvW3NJy/cofounder.jpg",
    name: "Dr Amoako Atta",
    position: "Co-Founder",
  },
  {
    title: "Patrons",
    imageSrc: "https://i.ibb.co/HxsG47S/cofounder2.jpg",
    name: "Mr & Mrs Botwe",
    position: "Patron",
  },
  {
    imageSrc: "https://i.ibb.co/10SN0kd/patron2.jpg",
    name: "Mr & Mrs Asare-Botwe",
    position: "Patron",
  },
  {
    imageSrc: "https://i.ibb.co/rQykZKf/patron1.jpg",
    name: "Dr & Mrs Osei-Akoto",
    position: "Patron",
  },
];

export default function leadership() {
  return (
    <div className="p-5">
      {details.map((data, index) => (
        <LeadershipCard
          title={data.title}
          key={index}
          imageSrc={data.imageSrc}
          name={data.name}
          position={data.position}
        />
      ))}
    </div>
  );
}
