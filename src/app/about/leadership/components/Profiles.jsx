const leaders = [
  {
    name: "DANIELLE REYNOLDS",
    role: "Project Manager",
    bio: "With 20+ years in civil & EPC projects, he ensures strategic vision and excellence.",
    img: "/Rahman.jpg",
  },
  {
    name: "CHRISTOPHER REYES",
    role: "CEO Founder",
    bio: "CEO Founder of Sazin Construction",
    img: "/Hossain.avif",
  },
    {
    name: "STEPHEN OBRIEN",
    role: "Project Engineering",
    bio: "Leads technical teams and drives innovation in electro-mechanical works.",
    img: "/farjana.jpeg",
  },
];

import Image from "next/image";

export default function Profiles() {
  return (
    <section className="bg-white dark:bg-neutral-950 py-16 px-6 lg:px-8">
      <h2 className="text-3xl font-semi-bold text-center dark:text-white">Our <span className="text-red-600">Leadership Team</span></h2>
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