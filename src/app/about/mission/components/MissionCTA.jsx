export default function MissionCTA() {
  return (
    <section className="bg-red-600 text-white py-16 px-6 lg:px-8 text-center rounded-2xl mx-4 lg:mx-16 shadow-lg">
      <h2 className="text-3xl font-bold">Let’s Build a Better Future Together</h2>
      <p className="mt-4 max-w-2xl mx-auto">
        Join us in shaping a sustainable and innovative future for Bangladesh
        through engineering excellence and integrity.
      </p>
      <div className="mt-8 flex justify-center gap-4">
        <a
          href="/about"
          className="bg-white text-red-600 px-6 py-3 rounded-lg font-semibold hover:bg-neutral-100"
        >
          Learn About Us
        </a>
        <a
          href="/contact"
          className="border border-white px-6 py-3 rounded-lg hover:bg-white hover:text-red-600"
        >
          Contact Us
        </a>
      </div>
    </section>
  );
}
