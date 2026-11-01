import { Reveal } from "@/components/Reveal";
import floorCut from "@/assets/section-cut-floor.png";
import elevationCut from "@/assets/section-cut-elevation.png";
import contextCut from "@/assets/section-cut-context.png";

const sectionCuts = [
  {
    title: "Floor cut",
    description: "Isolate a floor to inspect its members and geometry.",
    alt: "An isolated floor of the structural model displayed as a section cut in 3D.",
    src: floorCut,
  },
  {
    title: "Plan & elevation",
    description: "Inspect the floor plan and elevation in linked views.",
    alt: "A structural model shown in adjacent plan and elevation views.",
    src: elevationCut,
  },
  {
    title: "Cut within the full model",
    description: "Inspect a section cut alongside the complete 3D structure.",
    alt: "A section cut displayed beside the full structural model in linked views.",
    src: contextCut,
  },
];

export function SectionCuts() {
  return (
    <section className="border-t border-border py-14 md:py-20">
      <div className="section-shell">
        <Reveal className="max-w-3xl mb-8">
          <h2 className="text-2xl md:text-3xl mb-4">Section cuts & linked views</h2>
          <p className="text-muted-foreground leading-relaxed">
            Isolate a floor or section and inspect it alongside plan, elevation, and 3D views.
          </p>
        </Reveal>
        <div className="grid md:grid-cols-2 gap-6">
          {sectionCuts.map((cut, index) => (
            <Reveal key={cut.title} delay={index === 2 ? 0.05 : 0} className={index === 0 ? "md:col-span-2" : "h-full"}>
              <figure className="panel h-full overflow-hidden">
                <div className="aspect-video bg-[#101722] p-2 md:p-3 border-b border-border">
                  <img src={cut.src} alt={cut.alt} loading="lazy" decoding="async" className="h-full w-full object-contain" />
                </div>
                <figcaption className="p-5">
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-2">
                    <h3 className="text-base">{cut.title}</h3>
                    <a href={cut.src} target="_blank" rel="noopener noreferrer"
                      aria-label={`View ${cut.title} screenshot at full size (opens in a new tab)`}
                      className="text-xs text-accent underline underline-offset-4 hover:text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent">
                      View full size
                    </a>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{cut.description}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
