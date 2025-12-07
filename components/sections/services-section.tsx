"use client"

import { useReveal } from "@/hooks/use-reveal"

export function ServicesSection() {
  const { ref, isVisible } = useReveal(0.3)

  return (
    <section
      ref={ref}
      className="flex h-screen w-screen shrink-0 snap-start items-center px-6 pt-20 md:px-12 md:pt-0 lg:px-16"
    >
      <div className="mx-auto w-full max-w-7xl">
        <div
          className={`mb-12 transition-all duration-700 md:mb-16 ${
            isVisible ? "translate-y-0 opacity-100" : "-translate-y-12 opacity-0"
          }`}
        >
          <h2 className="mb-2 font-sans text-5xl font-light tracking-tight text-foreground md:text-6xl lg:text-7xl">
            Features Continued
          </h2>
          <p className="font-mono text-sm text-foreground/60 md:text-base">
            / Technical architecture of the water
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 md:gap-x-16 md:gap-y-12 lg:gap-x-24">
          {[
            {
              number: "03",
              title: "High Negative ORP (Redox Potential)",
              description:
                "Antioxidant-capable water with ORP values reaching −400 to −800 mV (redox research 2010–2023).",
              direction: "top",
            },
            {
              number: "04",
              title: "Micro-Clustered Hydration Efficiency",
              description:
                "Altered structuring associated with rapid absorption & hydration kinetics (water morphology studies 2004–2021).",
              direction: "right",
            },
            {
              number: "05",
              title: "Electrochemical Activation (ECA Technology)",
              description:
                "Anodic & cathodic separation producing function-specific waters (ECA science 1991–2020).",
              direction: "left",
            },
            {
              number: "06",
              title: "Platinum-Coated Titanium Electrode Cell",
              description:
                "Engineered for stable hydrogen generation & long-term catalytic efficiency (electrode materials research 1998–2022).",
              direction: "bottom",
            },
          ].map((feature, i) => (
            <ServiceCard key={i} service={feature} index={i} isVisible={isVisible} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ServiceCard({
  service,
  index,
  isVisible,
}: {
  service: { number?: string; title: string; description: string; direction: string }
  index: number
  isVisible: boolean
}) {
  const getRevealClass = () => {
    if (!isVisible) {
      switch (service.direction) {
        case "left":
          return "-translate-x-16 opacity-0"
        case "right":
          return "translate-x-16 opacity-0"
        case "top":
          return "-translate-y-16 opacity-0"
        case "bottom":
          return "translate-y-16 opacity-0"
        default:
          return "translate-y-12 opacity-0"
      }
    }
    return "translate-x-0 translate-y-0 opacity-100"
  }

  return (
    <div
      className={`group transition-all duration-700 ${getRevealClass()}`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div className="mb-3 flex items-center gap-3">
        <div className="h-px w-8 bg-foreground/30 transition-all duration-300 group-hover:w-12 group-hover:bg-foreground/50" />
        <span className="font-mono text-xs text-foreground/60">{service.number}</span>
      </div>

      <h3 className="mb-2 font-sans text-xl font-light text-foreground md:text-2xl">
        {service.title}
      </h3>

      <p className="max-w-sm text-xs leading-relaxed text-foreground/80 md:text-sm">
        {service.description}
      </p>
    </div>
  )
}
