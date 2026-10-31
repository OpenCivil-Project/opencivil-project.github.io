import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Reveal } from "@/components/Reveal";
import { MediaFrame } from "@/components/MediaFrame";
import { implementationMedia } from "@/data/media";

export function ImplementationSection() {
  return (
    <section className="section-shell py-20 lg:py-24">
      <Reveal className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end"><div><p className="section-label mb-3">IMPLEMENTATION</p><h2 className="mb-4 text-3xl font-bold md:text-4xl">Implementation examples</h2><p className="max-w-xl text-sm leading-relaxed text-muted-foreground">Screenshots and demonstrations of the modeling and analysis workflow.</p></div><Link to="/showcase" className="inline-flex items-center gap-2 text-sm font-semibold">Watch existing demos <ArrowRight className="h-4 w-4 text-accent" /></Link></Reveal>
      <div className="grid gap-6 md:grid-cols-2">
        <Reveal><MediaFrame title="Model & analysis view" kind="image" src={implementationMedia.model.src} /><p className="mt-4 text-sm font-semibold">01 / The model</p><p className="mt-1 text-xs text-muted-foreground">A dedicated space for an implementation screenshot.</p></Reveal>
        <Reveal delay={0.1}><MediaFrame title="Implementation walkthrough" kind="video" src={implementationMedia.walkthrough.src} /><p className="mt-4 text-sm font-semibold">02 / The workflow</p><p className="mt-1 text-xs text-muted-foreground">A dedicated space for a video demonstration.</p></Reveal>
      </div>
    </section>
  );
}