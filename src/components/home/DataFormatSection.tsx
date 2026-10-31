import { Braces, ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SITE } from "@/data/site";
import { BrandName } from "@/components/BrandName";

const fragment = [
  "{",
  '  "info": {',
  '    "name": "Frame study",',
  '    "units": "kN, m, C"',
  "  },",
  '  "elements": [{',
  '    "id": 1,',
  '    "n1_id": 1, "n2_id": 2,',
  '    "sec_name": "IPE300"',
  "  }]",
  "}",
].join("\n");

const fragmentTokens = fragment.split(/("(?:\\.|[^"\\])*"|-?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?|\b(?:true|false|null)\b)/g);

function HighlightedJson() {
  return (
    <code>
      {fragmentTokens.map((token, index) => {
        let color = "";
        if (token.startsWith('"')) {
          color = fragmentTokens[index + 1]?.trimStart().startsWith(":") ? "text-sky-300" : "text-emerald-300";
        } else if (/^-?\d/.test(token)) {
          color = "text-violet-300";
        } else if (/^(true|false|null)$/.test(token)) {
          color = "text-rose-300";
        }
        return color ? <span key={index} className={color}>{token}</span> : token;
      })}
    </code>
  );
}

export function DataFormatSection() {
  return (
    <section className="border-y border-border bg-muted/30 py-20 lg:py-24">
      <div className="section-shell grid items-center gap-12 lg:grid-cols-2">
        <Reveal><p className="section-label mb-3">PROJECT DATA & AUTOMATION</p><h2 className="mb-5 text-3xl font-bold md:text-4xl">Readable models.<br />Scriptable workflows.</h2><p className="mb-6 max-w-lg text-sm leading-relaxed text-muted-foreground"><BrandName product="structures" /> stores models in human-readable JSON-based .mf files. Inspect your project data, build models through the Python API, and use the embedded terminal for command-driven workflows.</p><a href={SITE.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-semibold">Project repository <ArrowUpRight className="h-4 w-4 text-accent" /></a></Reveal>
        <Reveal delay={0.1} className="overflow-hidden rounded-xl border border-slate-700 bg-[#17202d]">
          <div className="flex items-center justify-between border-b border-slate-700 px-5 py-3 font-mono text-xs text-slate-400"><span className="inline-flex items-center gap-2"><Braces className="h-4 w-4" />frame-study.mf</span><span>ILLUSTRATIVE FRAGMENT</span></div>
          <pre aria-label="Illustrative JSON model data" tabIndex={0} className="overflow-x-auto p-6 text-[13px] leading-[1.85] text-slate-400"><HighlightedJson /></pre>
        </Reveal>
      </div>
    </section>
  );
}
