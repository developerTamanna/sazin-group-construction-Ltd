const capabilities = [
  { title: "LV/MV Power Distribution", points: ["MDB, SDB, ATS/AMF", "Busbar trunking, cable tray", "Earthing & lightning protection"] },
  { title: "Substations", points: ["Transformer, RMU, VCB/ACB", "Protection relays & SCADA I/O", "Testing & commissioning"] },
  { title: "HVAC & Ventilation", points: ["Chillers/VRF/VRV", "Ducting, AHU, Exhaust", "Clean room & pressurization"] },
  { title: "Fire Detection & Suppression", points: ["Addressable/Conventional panel", "Sprinkler, hydrant, pump room", "Inert gas/Foam systems"] },
  { title: "BMS & Industrial Automation", points: ["PLC, VFD, HMI/SCADA", "Energy monitoring & analytics", "Access control & CCTV integration"] },
  { title: "Renewables & Power Quality", points: ["Solar PV integration", "UPS & AVR", "Harmonics & PFC"] },
];

export default function Capabilities() {
  return (
    <section className="bg-neutral-50 dark:bg-neutral-900 py-16 px-6 lg:px-8">
      <h2 className="text-3xl font-bold text-center text-red-600">Core Capabilities</h2>
      <div className="mt-10 grid lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
        {capabilities.map((cap) => (
          <div
            key={cap.title}
            className="bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-700 rounded-xl p-6 shadow-sm"
          >
            <h3 className="text-xl font-semibold text-red-600">{cap.title}</h3>
            <ul className="mt-3 list-disc pl-5 text-neutral-700 dark:text-neutral-300 space-y-1">
              {cap.points.map((p) => <li key={p}>{p}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
