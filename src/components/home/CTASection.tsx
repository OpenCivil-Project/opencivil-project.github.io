import { ArrowUpRight, Github } from "lucide-react";
import { Link } from "react-router-dom";
import { Reveal } from "@/components/Reveal";
import { SITE } from "@/data/site";

export function CTASection() {
  return (
    <section className="section-shell pb-20 lg:pb-24">
      <Reveal className="rounded-2xl border border-border bg-primary p-8 text-primary-foreground md:p-12">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-center"><div><p className="mb-4 font-mono text-[10px] tracking-[0.15em] opacity-60">OPEN STRUCTURES</p><h2 className="mb-4 text-3xl font-bold text-primary-foreground">Get Open Structures</h2><p className="max-w-xl text-sm leading-relaxed opacity-75">Download the application or explore its repository. Open Structures is intended for education and research, and remains under active development.</p></div><div className="flex shrink-0 flex-wrap gap-3"><a href={SITE.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-lg bg-background px-5 py-3 text-sm font-semibold text-foreground"><Github className="h-4 w-4" />View on GitHub</a><Link to="/contact" className="inline-flex items-center gap-2 rounded-lg border border-current/20 px-5 py-3 text-sm font-semibold">Get in touch <ArrowUpRight className="h-4 w-4" /></Link></div></div>
      </Reveal>
    </section>
  );
}