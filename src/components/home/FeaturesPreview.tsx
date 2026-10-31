import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Reveal } from "@/components/Reveal";
import { features } from "@/data/site";

export function FeaturesPreview() {
  return (
    <section className="border-y border-border bg-muted/30 py-20 lg:py-24">
      <div className="section-shell">
        <Reveal className="mb-10"><p className="section-label mb-3">OPEN STRUCTURES</p><h2 className="mb-4 text-3xl font-bold md:text-4xl">Modeling, analysis, and inspection</h2><p className="max-w-xl text-sm leading-relaxed text-muted-foreground">Frame modeling, section design, static and dynamic solvers, and access to the underlying analysis data.</p></Reveal>
        <div className="grid gap-5 md:grid-cols-3">
          {features.slice(0, 6).map((feature, index) => <Reveal key={feature.title} delay={(index % 3) * 0.08} className="panel p-7"><div className="mb-5"><feature.icon className="h-6 w-6 text-accent" strokeWidth={1.5} /></div><h3 className="mb-3 text-lg font-semibold">{feature.title}</h3><p className="text-sm leading-relaxed text-muted-foreground">{feature.description}</p></Reveal>)}
        </div>
        <Reveal className="mt-8"><Link to="/features" className="inline-flex items-center gap-2 text-sm font-semibold">Explore all capabilities <ArrowRight className="h-4 w-4 text-accent" /></Link></Reveal>
      </div>
    </section>
  );
}
