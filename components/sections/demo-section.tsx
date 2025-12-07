"use client";

import { MagneticButton } from "@/components/magnetic-button";

type DemoSectionProps = {
  scrollToSection?: (index: number) => void;
};

export function DemoSection({ scrollToSection }: DemoSectionProps) {
  return (
    <section
      id="demo"
      className="flex min-h-screen w-screen shrink-0 flex-col justify-center px-6 py-24 md:px-16"
    >
      <div className="max-w-5xl">
        {/* HEADER */}
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-foreground">
          Product Demo.
        </h2>

        {/* SUBCOPY */}
        <p className="mt-4 max-w-xl text-base md:text-lg text-foreground/70">
          Watch how Kangen Water® technology works and why it remains one of the
          most trusted ionisation systems. This short demo will show you the
          fundamentals clearly.
        </p>

        {/* VIDEO */}
        <div className="mt-8 w-full max-w-xl aspect-video rounded-xl overflow-hidden shadow-2xl">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/IFuqrKO_Y2A"
            title="Kangen Water Demo"
            allowFullScreen
          />
        </div>

        {/* MOBILE — pills that echo desktop styling but wrap nicely */}
        <div className="mt-8 flex flex-wrap gap-3 md:hidden">
          <MagneticButton
            size="lg"
            variant="secondary"
            onClick={() => scrollToSection?.(5)} // Contact section index
            className="
              rounded-full px-6 py-3
              border border-foreground/20 bg-foreground/10
              backdrop-blur-md text-sm text-foreground
              hover:bg-foreground/20 transition
            "
          >
            Contact
          </MagneticButton>

          <div
            className="
              flex flex-col justify-center
              rounded-full border border-white/25 bg-black/40
              px-6 py-3 text-[11px] text-white/90
              backdrop-blur-md
            "
          >
            <span className="text-xs font-semibold">ISO 9001</span>
            <span className="text-[10px] leading-tight text-white/70">
              Quality Management System
            </span>
          </div>

          <div
            className="
              flex flex-col justify-center
              rounded-full border border-white/25 bg-black/40
              px-6 py-3 text-[11px] text-white/90
              backdrop-blur-md
            "
          >
            <span className="text-xs font-semibold">ISO 14001</span>
            <span className="text-[10px] leading-tight text-white/70">
              Environmental Management System
            </span>
          </div>

          <div
            className="
              flex flex-col justify-center
              rounded-full border border-white/25 bg-black/40
              px-6 py-3 text-[11px] text-white/90
              backdrop-blur-md
            "
          >
            <span className="text-xs font-semibold">ISO 13485</span>
            <span className="text-[10px] leading-tight text-white/70">
              Medical Device Quality Management
            </span>
          </div>
        </div>

        {/* DESKTOP — unchanged “Contact + ISO” strip, Hydrochem-style */}
        <div
          className="
            mt-8 hidden md:inline-flex
            overflow-hidden rounded-full border border-white/25
            bg-black/35 text-white/90 shadow-xl backdrop-blur-md
          "
        >
          {/* Contact segment */}
          <MagneticButton
            size="lg"
            variant="ghost"
            onClick={() => scrollToSection?.(5)}
            className="
              rounded-none px-10 py-4 text-sm md:text-base font-medium
              bg-white/5 hover:bg-white/10
              border-r border-white/25
            "
          >
            Contact
          </MagneticButton>

          {/* ISO 9001 */}
          <div className="flex flex-col justify-center px-8 py-3 border-r border-white/25 text-xs">
            <span className="text-sm font-semibold">ISO 9001</span>
            <span className="mt-1 text-[10px] leading-tight text-white/70">
              Quality Management System
            </span>
          </div>

          {/* ISO 14001 */}
          <div className="flex flex-col justify-center px-8 py-3 border-r border-white/25 text-xs">
            <span className="text-sm font-semibold">ISO 14001</span>
            <span className="mt-1 text-[10px] leading-tight text-white/70">
              Environmental Management System
            </span>
          </div>

          {/* ISO 13485 */}
          <div className="flex flex-col justify-center px-8 py-3 text-xs">
            <span className="text-sm font-semibold">ISO 13485</span>
            <span className="mt-1 text-[10px] leading-tight text-white/70">
              Medical Device Quality Management
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
