import { FaTools, FaTruckMoving, FaHardHat, FaBolt, FaFan, FaShieldAlt } from "react-icons/fa";

const equipment = [
  { name: "Excavators", icon: FaTools, desc: "High-performance excavators for earthwork and foundation projects." },
  { name: "Cranes & Dump Trucks", icon: FaTruckMoving, desc: "Heavy-duty cranes and dump trucks for lifting and transport." },
  { name: "Concrete Mixers", icon: FaHardHat, desc: "Reliable concrete mixers ensuring quality construction materials." },
  { name: "Power Substations", icon: FaBolt, desc: "Complete electro-mechanical solutions for industrial projects." },
  { name: "HVAC & Fire Systems", icon: FaFan, desc: "Heating, ventilation, AC and firefighting systems for industries." },
  { name: "Safety Gear", icon: FaShieldAlt, desc: "Comprehensive safety gear ensuring worker safety at every project." },
];

const AllEquipments = () => {
  return (
    <div className="bg-white dark:bg-neutral-950 py-16 px-4 lg:px-8 transition-colors duration-500">
      <div className="container mx-auto">
        {/* Heading */}
        <h2 className="text-3xl font-semibold text-left text-gray-800 dark:text-white">
          Our <span className="text-red-600">Equipment</span> & Capabilities
        </h2>
        <p className="text-left text-xl mt-2 text-neutral-600 dark:text-neutral-300">
          Empowering projects with modern equipment and strong technical expertise.
        </p>

        {/* Cards */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
          {equipment.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="group bg-gray-100 dark:bg-neutral-900 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6 flex flex-col items-center text-center"
              >
                {/* Icon */}
                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-red-100 dark:bg-gray-200 mb-4">
                  <Icon className="text-red-600 text-3xl" />
                </div>

                {/* Name */}
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                  {item.name}
                </h3>

                {/* Description */}
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AllEquipments;
