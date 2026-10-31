import { Layout } from "@/components/layout/Layout";
import { Reveal } from "@/components/Reveal";
import { MediaFrame } from "@/components/MediaFrame";
import { implementationMedia } from "@/data/media";
import homeVideo from "@/assets/Home1.mp4";
import lthaVideo from "@/assets/LTHA_animation.mp4";
import heroImage from "@/assets/hero-main.png";
import feature3 from "@/assets/feature-3.png";

const SUPABASE_URL = "https://zizmttgmketyuoerainb.supabase.co";

const videos = [
  { src: homeVideo, title: "Desktop modeling workflow", description: "A recording of the Open//Structures desktop workspace.", poster: heroImage },
  { src: `${SUPABASE_URL}/storage/v1/object/public/videos/Deformed%20Shape%20and%20Animation2.mp4`, title: "Interface overview", description: "Model setup and visualization controls.", poster: heroImage },
  { src: `${SUPABASE_URL}/storage/v1/object/public/videos/Deformed%20Shape%20and%20Animation.mp4`, title: "Deformed shape animation", description: "Structural displacement under applied loads, magnified for visibility.", poster: feature3 },
  { src: `${SUPABASE_URL}/storage/v1/object/public/videos/Modal%20Analysis%20Animation.mp4`, title: "Modal analysis animation", description: "Vibration mode shapes from a modal analysis.", poster: feature3 },
  { src: `${SUPABASE_URL}/storage/v1/object/public/videos/Modal%20Analysis%20and%20%20Modal%20Table.mp4`, title: "Modal results & data tables", description: "Mode shapes with frequencies and modal mass participation data.", poster: heroImage },
  { src: lthaVideo, title: "Linear time history analysis", description: "Structural response to earthquake ground motion using modal superposition.", poster: feature3 },
];

const Showcase = () => (
  <Layout>
    <section className="border-b border-border py-14 md:py-20">
      <div className="max-w-7xl mx-auto px-5">
        <Reveal className="max-w-3xl">
          <p className="section-label mb-4">Open//Civil / Open//Structures</p>
          <h1 className="text-4xl md:text-5xl leading-tight mb-5">Implementation & demonstrations</h1>
          <p className="text-lg text-muted-foreground leading-relaxed">Recordings of the modeling interface, deformed shapes, and analysis results. Use the video controls to play each demonstration.</p>
        </Reveal>
      </div>
    </section>
    <section className="py-14 md:py-20">
      <div className="max-w-7xl mx-auto px-5">
        <Reveal className="mb-8"><h2 className="text-2xl md:text-3xl">Application recordings</h2></Reveal>
        <div className="grid md:grid-cols-2 gap-6">
          {videos.map((video, index) => (
            <Reveal key={video.title} delay={(index % 2) * 0.05} className="h-full">
              <article className="border border-border rounded-xl bg-card overflow-hidden h-full">
                <MediaFrame kind="video" src={video.src} title={video.title} poster={video.poster} className="rounded-none border-0" />
                <div className="p-5 border-t border-border">
                  <h3 className="text-lg mb-2">{video.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{video.description}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
    <section className="bg-muted/30 border-y border-border py-14 md:py-20">
      <div className="max-w-7xl mx-auto px-5">
        <Reveal className="max-w-3xl mb-8">
          <h2 className="text-2xl md:text-3xl mb-4">Additional media</h2>
          <p className="text-muted-foreground leading-relaxed">Reserved spaces for implementation screenshots and walkthroughs to be added later.</p>
        </Reveal>
        <div className="grid md:grid-cols-2 gap-6">
          <Reveal><MediaFrame kind="image" title="Implementation screenshot" src={implementationMedia.model.src} /></Reveal>
          <Reveal delay={0.05}><MediaFrame kind="video" title="Implementation walkthrough" src={implementationMedia.walkthrough.src} /></Reveal>
        </div>
      </div>
    </section>
    <section className="py-10">
      <Reveal className="max-w-7xl mx-auto px-5">
        <p className="text-sm text-muted-foreground leading-relaxed max-w-3xl">OpenSees integration is a <strong className="text-foreground">Work in Progress</strong>. Sorry in advance that not everything is perfect yet; active integration and validation are ongoing.</p>
      </Reveal>
    </section>
  </Layout>
);

export default Showcase;
