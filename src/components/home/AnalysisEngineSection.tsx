import { Activity, Waves, Construction } from "lucide-react";
import { Reveal } from "@/components/Reveal";

export function AnalysisEngineSection() {
  return (
    <section className="section-shell py-20 lg:py-24">
      <div className="grid gap-12 lg:grid-cols-2">
        <Reveal><p className="section-label mb-3">ANALYSIS</p><h2 className="mb-5 text-3xl font-bold md:text-4xl">Static and dynamic response</h2><p className="max-w-lg text-sm leading-relaxed text-muted-foreground">Review displacements, member forces, reactions, natural frequencies, and time-history results in the same modeling workspace.</p></Reveal>
        <div className="space-y-6">
          <Reveal className="flex gap-4"><Activity className="mt-1 h-5 w-5 shrink-0 text-accent" /><div><h3 className="mb-2 text-base font-semibold">Static behavior & vibration</h3><p className="text-sm leading-relaxed text-muted-foreground">Study linear static displacements, member forces, and reactions. Use modal analysis to explore natural frequencies and mode shapes.</p></div></Reveal>
          <Reveal delay={0.08} className="flex gap-4"><Waves className="mt-1 h-5 w-5 shrink-0 text-accent" /><div><h3 className="mb-2 text-base font-semibold">Dynamic response</h3><p className="text-sm leading-relaxed text-muted-foreground">Explore response spectrum and linear time-history workflows, with animated results and data tables for closer inspection.</p></div></Reveal>
        </div>
      </div>
      <Reveal className="mt-12 rounded-xl border border-accent/25 bg-accent/5 p-6 md:p-8">
        <div className="flex flex-col gap-4 sm:flex-row"><Construction className="h-6 w-6 shrink-0 text-accent" /><div><div className="mb-3 flex flex-wrap items-center gap-3"><h3 className="text-lg font-semibold">OpenSees and nonlinear analysis</h3><span className="status-pill">WORK IN PROGRESS</span></div><p className="max-w-4xl text-sm leading-relaxed text-muted-foreground"><strong className="font-semibold text-foreground">OpenSees integration and advanced nonlinear workflows are a Work in Progress.</strong> Active integration, testing, and refinement are ongoing. Sorry in advance for the rough edges — not everything is perfect yet. Your feedback helps us improve.</p></div></div>
      </Reveal>
    </section>
  );
}
