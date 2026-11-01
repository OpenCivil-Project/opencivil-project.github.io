import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Reveal } from "@/components/Reveal";
import { MediaFrame } from "@/components/MediaFrame";
import { implementationMedia } from "@/data/media";
import sectionCutFloor from "@/assets/section-cut-floor.png";

export function ImplementationSection() {
  return (
    <section className="section-shell py-20 lg:py-24">
      <Reveal className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end"><div><p className="section-label mb-3">IMPLEMENTATION</p><h2 className="mb-4 text-3xl font-bold md:text-4xl">Implementation examples</h2><p className="max-w-xl text-sm leading-relaxed text-muted-foreground">Screenshots and demonstrations of the modeling and analysis workflow.</p></div><Link to="/showcase" className="inline-flex items-center gap-2 text-sm font-semibold">Watch existing demos <ArrowRight className="h-4 w-4 text-accent" /></Link></Reveal>
      <div className="grid gap-6 md:grid-cols-2">
        <Reveal><MediaFrame title="Floor section cut" kind="image" src={sectionCutFloor} alt="An isolated floor cut showing meshed slab areas and frame members in Open//Structures" /><p className="mt-4 text-sm font-semibold">01 / Section cuts</p><p className="mt-1 text-xs text-muted-foreground">Isolate a floor and inspect its frame members, slab mesh, and openings.</p><Link to="/features" className="mt-3 inline-flex items-center gap-2 text-xs font-semibold">Explore section cuts & linked views <ArrowRight className="h-3.5 w-3.5 text-accent" /></Link></Reveal>
        <Reveal delay={0.1}><MediaFrame title="Implementation walkthrough" kind="video" src={implementationMedia.walkthrough.src} /><p className="mt-4 text-sm font-semibold">02 / The workflow</p><p className="mt-1 text-xs text-muted-foreground">A dedicated space for a video demonstration.</p></Reveal>
      </div>
    </section>
  );
}
