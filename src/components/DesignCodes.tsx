import { CheckCircle2 } from "lucide-react";
import { Reveal } from "@/components/Reveal";

const designCodes = [
  {
    name: "TBDY 2018",
    description: "Support for Turkish earthquake design code workflows, including response spectrum generation.",
  },
  {
    name: "TS 500",
    description: "Support for reinforced concrete design workflows using the Turkish TS 500 code.",
  },
];

export function DesignCodes() {
  return (
    <section className="border-t border-border py-14 md:py-20">
      <div className="max-w-7xl mx-auto px-5">
        <Reveal className="mb-8">
          <h2 className="text-2xl md:text-3xl">Design code support</h2>
        </Reveal>
        <div className="grid md:grid-cols-2 gap-4">
          {designCodes.map((code, index) => (
            <Reveal key={code.name} delay={index * 0.05} className="h-full">
              <article className="h-full border border-border rounded-xl bg-card p-6">
                <span className="inline-flex items-center gap-2 rounded border border-accent/20 bg-accent/5 px-2.5 py-1 text-xs font-medium text-accent">
                  <CheckCircle2 className="h-3.5 w-3.5" aria-hidden="true" />
                  Available now
                </span>
                <h3 className="mt-4 mb-2 text-xl">{code.name}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{code.description}</p>
              </article>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-5">
          <p className="text-sm text-muted-foreground">Other design codes will be implemented soon.</p>
        </Reveal>
      </div>
    </section>
  );
}
