import ProfileCard from "./ReuseCard";

export const Card = () => {
  const profiles = [
    {
      name: "Nana Kwasi Botwe",
      role: "Founder",
      imageUrl: "https://i.ibb.co/v1LSg9j/founder.jpg",
      paragraph:
        "As the founder of Good News Network, Nana Kwasi Botwe has exemplified extraordinary leadership and vision since the organization's inception in 2013. With a deep-rooted passion for spreading positivity and uplifting communities, Nana Kwasi Botwe has been instrumental in driving Good News Network's mission forward. His unwavering dedication to promoting stories of hope and inspiration has touched countless lives, making a profound impact on individuals and communities worldwide.",
    },
    {
      name: "Dr Amoako Atta",
      role: "Co-Founder",
      imageUrl: "https://i.ibb.co/vvW3NJy/cofounder.jpg",
      paragraph:
        "Dr. Amoako Atta, co-founder of Good News Network, embodies the essence of optimism and compassion. Since 2013, his unwavering dedication to spreading positivity has been instrumental in shaping the organization's mission. Dr. Atta's leadership inspires hope and uplifts communities, making a profound impact on the lives of many.",
    },
  ];
  return (
    <div className="py-5 px-2 mt-4 lg:p-20">
      <h1 className="text-center bold-40 mb-2">Who We Are</h1>
      <h1 className="text-center bold-52 mb-4 text-[#ff5400]">
        We are on a mission{" "}
        <span className="tx:hidden lg:block">to help the helpless</span>
      </h1>

      <div className="mb-4 sm:flex sm:p-6">
        {profiles.map((profile, index) => (
          <ProfileCard
            key={index}
            name={profile.name}
            role={profile.role}
            imageUrl={profile.imageUrl}
            paragraph={profile.paragraph}
          />
        ))}
      </div>
    </div>
  );
};
