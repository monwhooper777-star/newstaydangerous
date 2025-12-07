"use client";

import Link from "next/link";

export function DemoSection() {
  return (
    <section
      id="demo"
      className="flex min-h-screen w-screen shrink-0 flex-col justify-center px-6 py-24 md:px-16"
    >
      <div className="max-w-5xl">
        {/* HEADER — match 'Kenneth Castaneda' style (clean sans) */}
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-foreground">
          Product Demo.
        </h2>

        {/* SUBCOPY */}
        <p className="mt-4 max-w-xl text-base md:text-lg text-foreground/70">
          Watch how Kangen Water® technology works and why it remains one of the
          most trusted ionisation systems. This short demo will show you the
          fundamentals clearly.
        </p>

        {/* VIDEO — full width on mobile, visible in its own screen */}
        <div className="mt-8 w-full max-w-xl aspect-video rounded-xl overflow-hidden shadow-2xl">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/IFuqrKO_Y2A"
            title="Kangen Water Demo"
            allowFullScreen
          />
        </div>

        {/* CTA BUTTON — matches top-right button style, text = 'Contact' */}
        <Link
          href="/contact"
          className="
            mt-8 inline-flex items-center justify-center
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
      </div>
    </section>
  );
}
