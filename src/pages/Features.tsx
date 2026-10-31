import { Link } from "react-router-dom";
import { Activity, ArrowRight, Box, Braces, Cable, Cuboid, Eye, Layers3, MoveUp, Ruler, Terminal, Waves } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Reveal } from "@/components/Reveal";
import { DesignCodes } from "@/components/DesignCodes";
import { Button } from "@/components/ui/button";
import feature1 from "@/assets/feature-1.png";
import feature2 from "@/assets/feature-2.png";
import deformedShape from "@/assets/deformed_shape.png";
import responseSpectra from "@/assets/TBDY_Response_Spectra.png";
import modalImg from "@/assets/modal-analysis.png";
import staticImg from "@/assets/linear-static.png";

const capabilities = [
  { icon: Box, title: "3D frame modeling", description: "Define nodes, members, supports, loads, releases, rigid end offsets, and cardinal insertion points." },
  { icon: Ruler, title: "Section Designer", description: "Define custom cross-sections and assign section geometry and material properties." },
  { icon: Cable, title: "Cable & catenary elements", description: "Model tension-dominated members using cable and catenary element workflows." },
  { icon: Cuboid, title: "Shell & solid elements", description: "Developing surface and continuum element workflows alongside frame analysis.", status: "Experimental" },
  { icon: Activity, title: "Linear static analysis", description: "Calculate nodal displacements, support reactions, and member forces under static loads." },
  { icon: Waves, title: "Modal analysis", description: "Calculate natural periods, vibration mode shapes, and modal mass participation." },
  { icon: Layers3, title: "Response spectrum analysis", description: "Study dynamic response through modal combinations and TBDY 2018 spectrum generation." },
  { icon: Activity, title: "Linear time history analysis", description: "Calculate response to ground motion over time using modal superposition." },
  { icon: MoveUp, title: "Buckling analysis", description: "Investigate elastic instability through the buckling analysis workflow." },
  { icon: Eye, title: "Matrix Spy & result inspection", description: "Inspect element stiffness and transformation matrices, fixed-end forces, deformed shapes, and reactions." },
  { icon: Terminal, title: "Python API & embedded CLI", description: "Create and inspect models through Python commands or the application's embedded command line." },
  { icon: Braces, title: "JSON project files", description: "Read, edit, and generate model data using the JSON-based .mf project format." },
];

const developing = [
  { title: "Nonlinear static analysis", description: "Pushover and displacement-control workflows, fiber sections, and plastic-hinge modeling are being developed." },
  { title: "OpenSees integration", description: "OpenSees model transfer, nonlinear analysis, diagnostics, and result integration are under active development." },
];

const screenshots = [
  { title: "Section properties", description: "Section geometry and property assignment.", src: feature1 },
  { title: "Matrix Spy", description: "Element matrices in the inspection workspace.", src: feature2 },
  { title: "Deformed shape", description: "Structural displacement displayed in 3D.", src: deformedShape },
  { title: "TBDY response spectra", description: "Response spectrum generation and visualization.", src: responseSpectra },
];

const Features = () => (
  <Layout>
    <section className="border-b border-border py-14 md:py-20">
      <div className="max-w-7xl mx-auto px-5">
        <Reveal className="max-w-3xl">
          <p className="section-label mb-4">Open//Civil / Open//Structures</p>
          <h1 className="text-4xl md:text-5xl leading-tight mb-5">Open//<wbr />Structures features</h1>
          <p className="text-lg leading-relaxed text-muted-foreground">3D structural modeling, static and dynamic analysis, and tools for inspecting the underlying calculations. The application is under active development.</p>
        </Reveal>
      </div>
    </section>

    <section className="py-14 md:py-20">
      <div className="max-w-7xl mx-auto px-5">
        <Reveal className="mb-8">
          <h2 className="text-2xl md:text-3xl">Modeling, analysis & inspection</h2>
        </Reveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {capabilities.map(({ icon: Icon, title, description, status }, index) => (
            <Reveal key={title} delay={(index % 3) * 0.05} className="h-full">
              <article className="h-full bg-card border border-border rounded-xl p-6">
                <div className="flex justify-between items-center gap-3 mb-4">
                  <Icon className="w-5 h-5 text-accent" aria-hidden="true" />
                  {status && <span className="font-mono text-[11px] text-muted-foreground border border-border rounded px-2 py-1">{status}</span>}
                </div>
                <h3 className="text-lg mb-2">{title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{description}</p>
              </article>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-12 mb-6">
          <h2 className="text-2xl md:text-3xl">Work in progress</h2>
        </Reveal>
        <div className="grid md:grid-cols-2 gap-4">
          {developing.map((feature, index) => (
            <Reveal key={feature.title} delay={index * 0.05}>
              <article className="h-full border border-border bg-muted/30 rounded-xl p-6">
                <span className="font-mono text-xs text-muted-foreground border border-border rounded px-2 py-1">Work in Progress</span>
                <h3 className="text-xl mt-4 mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
              </article>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-5">
          <p className="text-sm leading-relaxed text-muted-foreground">Sorry in advance that not everything is perfect yet. Integration, testing, and validation are ongoing.</p>
        </Reveal>
      </div>
    </section>

    <DesignCodes />

    <section className="bg-muted/30 border-y border-border py-14 md:py-20">
      <div className="max-w-7xl mx-auto px-5">
        <Reveal className="mb-8"><h2 className="text-2xl md:text-3xl">Application screenshots</h2></Reveal>
        <div className="grid md:grid-cols-2 gap-6">
          {screenshots.map((item, index) => (
            <Reveal key={item.title} delay={(index % 2) * 0.05}>
              <figure className="bg-card border border-border rounded-xl overflow-hidden h-full">
                <div className="aspect-video bg-muted p-3 flex items-center justify-center border-b border-border">
                  <img src={item.src} alt={item.description} loading="lazy" decoding="async" className="w-full h-full object-contain rounded" />
                </div>
                <figcaption className="p-5">
                  <h3 className="text-base mb-1">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    <section className="py-14 md:py-20">
      <div className="max-w-7xl mx-auto px-5">
        <Reveal className="max-w-3xl mb-8">
          <h2 className="text-2xl md:text-3xl mb-4">Validation examples</h2>
          <p className="text-muted-foreground leading-relaxed">Selected modal and linear static comparisons with SAP2000. These screenshots document individual examples; validation continues as the application develops.</p>
        </Reveal>
        <div className="grid md:grid-cols-2 gap-6">
          {[{ title: "Modal analysis", src: modalImg }, { title: "Linear static analysis", src: staticImg }].map((item, index) => (
            <Reveal key={item.title} delay={index * 0.05}>
              <figure className="border border-border bg-card rounded-xl overflow-hidden">
                <figcaption className="flex flex-wrap justify-between items-center gap-2 p-5 border-b border-border">
                  <h3 className="text-base">{item.title}</h3>
                  <span className="text-xs text-muted-foreground">Example comparison</span>
                </figcaption>
                <div className="bg-white p-3"><img src={item.src} alt={`${item.title} example comparison with SAP2000`} className="w-full h-auto" loading="lazy" decoding="async" /></div>
              </figure>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-8">
          <Button asChild variant="outline"><Link to="/showcase">View demonstrations <ArrowRight className="w-4 h-4 ml-2" /></Link></Button>
        </Reveal>
      </div>
    </section>
  </Layout>
);

export default Features;
