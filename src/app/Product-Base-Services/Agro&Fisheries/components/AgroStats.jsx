"use client";
import { FaWater, FaTractor, FaTree, FaLeaf } from "react-icons/fa";
import CountUp from "react-countup";

export default function AgroStats({ data }) {
  const stats = [
    {
      id: 1,
      value: data.ponds,
      label: "Number of Ponds",
      icon: <FaWater className="w-10 h-10 text-slate-700" />,
    },
    {
      id: 2,
      value: parseInt(data.pondArea), // string হলে parse করা দরকার
      label: "Pond Area (Bigha)",
      icon: <FaTractor className="w-10 h-10 text-slate-700" />,
    },
    {
      id: 3,
      value: parseInt(data.agriLand),
      label: "Agricultural Land (Bigha)",
      icon: <FaLeaf className="w-10 h-10 text-slate-700" />,
    },
    {
      id: 4,
      value: data.mangoTrees,
      label: "Mango Trees",
      icon: <FaTree className="w-10 h-10 text-slate-700" />,
    },
    {
      id: 5,
      value: data.lemonTrees,
      label: "Lemon Trees",
      icon: <FaLeaf className="w-10 h-10 text-green-600" />,
    },
    {
      id: 6,
      value: data.bananaTrees,
      label: "Banana Plants",
      icon: <FaTree className="w-10 h-10 text-slate-700" />,
    },
  ];

  return (
    <div className="bg-white py-12">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 text-center">
        {stats.map((stat) => (
          <div key={stat.id} className="flex flex-col items-center">
            {stat.icon}
            <h3 className="text-2xl font-bold text-slate-900 mt-2">
              <CountUp end={stat.value} duration={3} separator="," />
            </h3>
            <p className="text-sm text-slate-700">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
