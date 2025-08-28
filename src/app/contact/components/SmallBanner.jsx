"use client";
import Image from "next/image";

const SmallBanner = () => {
  return (
    <section
      className=" h-fit w-full "
    >
      {/* Overlay */}
      <Image
        src="/contact-banner.jpg"
        alt="Contact Banner"
        width={1920}
        height={1080}
        className=" object-contain"
      />
    </section>
  );
};

export default SmallBanner;