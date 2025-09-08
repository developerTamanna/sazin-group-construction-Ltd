import React from "react";
import { FaBuilding } from "react-icons/fa";

const clients = [
  { 
    name: "Public Works Department (PWD)", 
    icon: FaBuilding,
    details: "Government department responsible for public infrastructure such as roads, bridges, and government buildings." 
  },
  { 
    name: "Bangladesh Power Development Board", 
    icon: FaBuilding,
    details: "Main organization for electricity generation and distribution ensuring power supply across the country." 
  },
  { 
    name: "BPC & Petrobangla", 
    icon: FaBuilding,
    details: "Key players in oil, gas, and energy sector managing exploration, extraction, and distribution." 
  },
  { 
    name: "Private Corporates", 
    icon: FaBuilding,
    details: "Trusted corporate partners across multiple industries including finance, IT, and manufacturing." 
  },
  { 
    name: "Grameen Bank", 
    icon: FaBuilding,
    details: "World-renowned microfinance institution empowering millions with access to small loans and financial services." 
  },
  { 
    name: "BRAC", 
    icon: FaBuilding,
    details: "Largest NGO in Bangladesh working in education, healthcare, and community development with global impact." 
  },
  { 
    name: "Bangladesh Railway", 
    icon: FaBuilding,
    details: "National railway service ensuring safe, affordable, and efficient connectivity nationwide." 
  },
  { 
    name: "Local NGOs", 
    icon: FaBuilding,
    details: "Grassroots organizations actively working for community development and social welfare programs." 
  },
];

const ClientAndPartners = () => {
  return (
    <div className="bg-white dark:bg-neutral-950 py-16 px-4 lg:px-8 transition-colors duration-500">
      <div className="container mx-auto">
        {/* Heading */}
        <h2 className="text-3xl font-semibold text-left text-gray-800 dark:text-white">
          Our <span className="text-red-600">Clients</span> & Partners
        </h2>
        <p className="text-left text-xl mt-2 text-neutral-600 dark:text-neutral-300">
          Trusted by government & leading organizations across Bangladesh.
        </p>

        {/* Cards */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {clients.map((client, idx) => {
            const Icon = client.icon;
            return (
              <div
                key={idx}
                className="group bg-gray-100 dark:bg-neutral-900 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6 flex flex-col items-center text-center h-[280px]"
              >
                {/* Icon */}
                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-red-100 dark:bg-gray-200 mb-4">
                  <Icon className="text-red-600 text-3xl" />
                </div>

                {/* Name */}
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                  {client.name}
                </h3>

                {/* Description (Fixed height, scrollable on hover) */}
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 overflow-hidden group-hover:overflow-auto transition-all duration-300 h-[60px]">
                  {client.details}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ClientAndPartners;