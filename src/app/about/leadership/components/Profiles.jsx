const leaders = [
  {
    name: "Engr. Md. Rahman",
    role: "Managing Director",
    bio: "With 20+ years in civil & EPC projects, he ensures strategic vision and excellence.",
    img: "/images/leaders/md.jpg",
  },
  {
    name: "Engr. Fatema Akter",
    role: "Director (Engineering)",
    bio: "Leads technical teams and drives innovation in electro-mechanical works.",
    img: "/images/leaders/eng.jpg",
  },
  {
    name: "Mr. Kabir Hossain",
    role: "Chief Financial Officer",
    bio: "Expert in financial management, ensuring stability and sustainable growth.",
    img: "/images/leaders/cfo.jpg",
  },
];

import Image from "next/image";

export default function Profiles() {
  return (
    <section className="bg-white dark:bg-neutral-950 py-16 px-6 lg:px-8">
      <h2 className="text-3xl font-bold text-center">Our Leadership Team</h2>
      <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {leaders.map((leader) => (
          <div
            key={leader.name}
            className="bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 rounded-xl p-6 shadow-sm hover:shadow-lg transition text-center"
          >
            <Image
              src={leader.img}
              alt={leader.name}
              width={200}
              height={200}
              className="w-32 h-32 mx-auto rounded-full object-cover mb-4"
            />
            <h3 className="text-xl font-semibold text-red-600">{leader.name}</h3>
            <p className="font-medium text-neutral-700 dark:text-neutral-300">
              {leader.role}
            </p>
            <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
              {leader.bio}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
