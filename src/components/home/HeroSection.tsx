import { Link } from "react-router-dom";
import { ArrowDown, ArrowRight, ArrowUpRight, Box, Code2 } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SITE } from "@/data/site";
import heroImage from "@/assets/hero-main.png";

export function HeroSection() {
  return (
    <header className="relative overflow-hidden border-b border-border">
      <div className="hero-grid absolute inset-0 pointer-events-none" aria-hidden="true" />
      <div className="section-shell relative pb-12 pt-16 lg:pb-16 lg:pt-24">
        <div className="grid items-center gap-12 lg:grid-cols-[0.95fr_1.15fr] lg:gap-14">
          <Reveal>
            <p className="section-label mb-5">OPEN//CIVIL / STRUCTURAL ANALYSIS</p>
            <h1 className="mb-5 text-5xl font-bold leading-[1.08] tracking-tight lg:text-6xl">Open//<wbr />Structures</h1>
            <p className="mb-5 text-xl leading-snug text-foreground lg:text-2xl">3D structural analysis for learning and research.</p>
            <p className="mb-8 max-w-lg text-base leading-relaxed text-muted-foreground">Model structures, run static and dynamic analyses, and inspect the matrices, forces, and deformations behind the results. Open//Structures is developed by Open//Civil.</p>
            <div className="flex flex-wrap gap-3">
              <a href={SITE.download} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5">Get Open//Structures <ArrowUpRight className="h-4 w-4" /></a>
              <Link to="/features" className="inline-flex items-center gap-3 rounded-lg border border-border bg-background px-5 py-3 text-sm font-semibold transition-colors hover:bg-muted">Explore features <ArrowRight className="h-4 w-4" /></Link>
            </div>
            <p className="mt-5 text-xs text-muted-foreground">Created by Shaikh Ahmed Azad · Built for learning & research</p>
          </Reveal>
          <Reveal delay={0.15} className="relative">
            <div className="overflow-hidden rounded-xl border border-border bg-card shadow-[0_18px_60px_-25px_rgba(15,23,42,0.3)]">
              <div className="flex items-center justify-between border-b border-border px-4 py-3">
                <div className="flex items-center gap-2 text-xs font-medium"><Box className="h-4 w-4 text-accent" />Open//Structures</div>
                <span className="font-mono text-[10px] text-muted-foreground">MODEL / ANALYZE / INSPECT</span>
              </div>
              <img src={heroImage} width="1365" height="718" alt="Open//Structures desktop workspace displaying a three-dimensional structural frame with loads and supports" className="block w-full" loading="eager" />
              <div className="flex items-center justify-between border-t border-border px-4 py-3 text-[11px] text-muted-foreground"><span className="inline-flex items-center gap-1.5"><span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />An inspectable analysis workspace</span><Code2 className="h-4 w-4" /></div>
            </div>
            <div className="mt-4 flex justify-end"><Link to="/showcase" className="inline-flex items-center gap-2 font-mono text-xs text-muted-foreground hover:text-foreground">See the implementation <ArrowRight className="h-3.5 w-3.5" /></Link></div>
          </Reveal>
        </div>
        <div className="mt-14 flex flex-wrap items-center justify-between gap-4 border-t border-border pt-6">
          <div className="flex flex-wrap gap-x-7 gap-y-3 text-xs text-muted-foreground"><span>Static & dynamic analysis</span><span>Interactive 3D modeling</span><span>Matrix inspection</span></div>
          <a href="#projects" onClick={(event) => { event.preventDefault(); document.getElementById("projects")?.scrollIntoView({ behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth" }); }} className="inline-flex items-center gap-2 text-xs text-muted-foreground hover:text-foreground">Explore Open//Civil <ArrowDown className="h-3.5 w-3.5" /></a>
        </div>
      </div>
    </header>
  );
}
