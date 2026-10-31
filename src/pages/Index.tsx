import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { ProjectsSection } from "@/components/home/ProjectsSection";
import { FeaturesPreview } from "@/components/home/FeaturesPreview";
import { DesignCodes } from "@/components/DesignCodes";
import { AnalysisEngineSection } from "@/components/home/AnalysisEngineSection";
import { DataFormatSection } from "@/components/home/DataFormatSection";
import { ImplementationSection } from "@/components/home/ImplementationSection";
import { CTASection } from "@/components/home/CTASection";

export default function Index() {
  return <Layout><HeroSection /><ProjectsSection /><FeaturesPreview /><DesignCodes /><AnalysisEngineSection /><DataFormatSection /><ImplementationSection /><CTASection /></Layout>;
}
