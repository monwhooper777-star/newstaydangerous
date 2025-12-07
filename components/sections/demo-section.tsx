"use client";

import Link from "next/link";

export function DemoSection() {
  return (
    <section
      id="demo"
      className="w-full min-h-screen flex flex-col items-start justify-center px-6 py-24 space-y-10 md:px-16"
    >
      {/* HEADER — matches DX Gotha styling used sitewide */}
      <h2 className="font-dxgotha text-5xl sm:text-6xl md:text-7xl font-light tracking-tight leading-tight text-foreground">
        Product Demo.
      </h2>

      {/* SUBCOPY */}
      <p className="text-base md:text-lg max-w-xl text-foreground/70">
        Watch how Kangen Water® technology works and why it remains one of the
        most trusted ionisation systems. This short demo will show you the
        fundamentals clearly.
      </p>

      {/* VIDEO */}
      <div className="w-full max-w-xl aspect-video rounded-xl overflow-hidden shadow-2xl">
        <iframe
          className="w-full h-full"
          src="https://www.youtube.com/embed/IFuqrKO_Y2A"
          title="Kangen Water Demo"
          allowFullScreen
        />
      </div>

      {/* CTA BUTTON — matches top-right Product Demo button */}
      <Link
        href="/contact"
        className="
          inline-flex items-center justify-center
          px-8 py-3
          rounded-full
          border border-foreground/20
          bg-foreground/10
          backdrop-blur-md
          text-sm md:text-base text-foreground
          font-medium
          hover:bg-foreground/20
          transition
        "
      >
        Contact
      </Link>
    </section>
  );
}
