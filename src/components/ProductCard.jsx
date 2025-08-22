import React from "react";
import Image from "next/image";
import MotionSection from "../utils/MotonForCard";

export default function ProductCardDemo({products=[],Contents={}}) {

  return (
    <main className="min-h-screen bg-neutral-50 text-neutral-900 antialiased dark:bg-neutral-950 dark:text-neutral-100">
      {/* Page header */}
      <div className="mx-auto max-w-6xl px-6 py-10">
        <header className="mb-8 flex items-end justify-between">
          <div>
            <h1 className="text-2xl font-semibold tracking-tight">Minimal Product Cards</h1>
            <p className="text-sm text-neutral-500 dark:text-neutral-400">Clean, reusable, dark/light aware</p>
          </div>
        </header>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products?.map((p) => (
            <MotionSection key={p.id} >
              {/* Media */}
              <div className="relative h-56 w-full sm:h-60">
                <Image
                  src={p.image}
                  alt={p.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  priority={false}
                />
                {/* subtle gradient for legibility */}
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/40 to-transparent" />
              </div>

              {/* Content */}
              <div className="flex flex-col gap-3 p-4">
                <h3 className="line-clamp-2 text-base font-medium text-neutral-900 dark:text-neutral-100">{p.title}</h3>
                <div className="flex items-baseline gap-2">
                  <span className="text-lg font-semibold tracking-tight">${p.price}</span>
                </div>

                <div className="mt-1">
                  <button
                    className="inline-flex w-full items-center justify-center rounded-xl border border-neutral-200 px-4 py-2 text-sm font-medium text-neutral-900 transition hover:bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-neutral-300 active:scale-95 dark:border-neutral-700 dark:text-neutral-100 dark:hover:bg-neutral-800 dark:focus:ring-neutral-600"
                  >
                    View Details
                  </button>
                </div>
              </div>

              {/* Subtle ring */}
              <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-black/5 dark:ring-white/5" />
            </MotionSection>
          ))}
        </div>

        {/* Footer note */}
        <p className="mt-10 text-xs text-neutral-500 dark:text-neutral-400">Tip: Put this in <code>components/ProductCard.jsx</code> and map over your own data.</p>
      </div>
    </main>
  );
}