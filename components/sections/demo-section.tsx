"use client";

import Link from "next/link";

export function DemoSection() {
  return (
    <section
      id="demo"
      className="w-full min-h-screen flex flex-col items-center justify-center px-6 py-24 space-y-10"
    >
      <h2 className="text-5xl md:text-6xl font-bold text-foreground">
        Product Demo.
      </h2>

      <p className="text-lg max-w-2xl text-foreground/70 text-center">
        Watch how Kangen Water® technology works and why it remains one of the
        most trusted ionisation systems. This short demo will show you the
        fundamentals clearly.
      </p>

      <div className="w-full max-w-3xl aspect-video rounded-xl overflow-hidden shadow-2xl">
        <iframe
          className="w-full h-full"
          src="https://www.youtube.com/embed/IFuqrKO_Y2A"
          title="Kangen Water Demo"
          allowFullScreen
        />
      </div>

      <Link
        href="/contact"
        className="px-10 py-4 rounded-full bg-white text-black text-lg font-semibold hover:opacity-80 transition"
      >
        Contact Monwhooper
      </Link>
    </section>
  );
}
