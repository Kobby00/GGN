import ProfileCard from "./ReuseCard";

export const Card = () => {
  const profiles = [
    {
      name: "Lawrence Anin Botwe",
      role: "Founder",
      imageUrl: "/ggn.jpg",
    },
    { name: "Elizabeth Korkor", role: "Tresurer", imageUrl: "/ggn.jpg" },
    // { name: "John William", role: "Tresurer", imageUrl: "/ggn.jpg" },
    // Add more profiles as needed
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
          />
        ))}
      </div>
    </div>
  );
};
