import { Link } from "react-router-dom";
import { ArrowUpRight, Box, Waves } from "lucide-react";
import { Reveal } from "@/components/Reveal";

export function ProjectsSection() {
  return (
    <section id="projects" className="section-shell py-20 lg:py-24">
      <Reveal className="mb-9 flex flex-col justify-between gap-4 md:flex-row md:items-end">
        <div><p className="section-label mb-3">OPEN CIVIL</p><h2 className="text-3xl font-bold md:text-4xl">Applications</h2></div>
        <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">Open tools for civil engineering education and research.</p>
      </Reveal>
      <div className="grid gap-5 md:grid-cols-[1.35fr_1fr]">
        <Reveal className="panel relative p-7 md:p-9">
          <div className="mb-8 flex items-center justify-between"><Box className="h-7 w-7 text-accent" /><span className="status-pill">FLAGSHIP APPLICATION</span></div>
          <h3 className="mb-3 text-2xl font-bold">Open Structures</h3>
          <p className="mb-7 max-w-lg text-sm leading-relaxed text-muted-foreground">A transparent structural analysis workspace. Model in 3D, explore static and dynamic response, and inspect the matrices behind the results.</p>
          <Link to="/features" className="inline-flex items-center gap-2 text-sm font-semibold">Explore Open Structures <ArrowUpRight className="h-4 w-4 text-accent" /></Link>
        </Reveal>
        <Reveal delay={0.1} className="panel flex flex-col justify-between bg-muted/30 p-7 md:p-9">
          <div className="mb-8 flex items-center justify-between"><Waves className="h-7 w-7 text-muted-foreground" /><span className="rounded-full border border-border px-3 py-1 font-mono text-[10px] text-muted-foreground">COMING SOON</span></div>
          <div><h3 className="mb-3 text-2xl font-bold">Open Seismic</h3><p className="text-sm text-muted-foreground">Coming Soon</p></div>
        </Reveal>
      </div>
    </section>
  );
}
