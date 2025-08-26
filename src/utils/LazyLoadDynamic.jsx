"use client";
import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";

export default function LazyLoadDynamic({ loader, height = "300px" }) {
  const [isVisible, setIsVisible] = useState(false);
  const [Component, setComponent] = useState(null);
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  useEffect(() => {
    if (isVisible && loader) {
      const DynamicComp = dynamic(loader, {
        loading: () => <p>Loading...</p>,
        ssr: false,
      });
      setComponent(() => DynamicComp);
    }
  }, [isVisible, loader]);

  return (
    <div ref={ref} style={{ minHeight: height }}>
      {isVisible && Component ? <Component /> : <div>Loading...</div>}
    </div>
  );
}
