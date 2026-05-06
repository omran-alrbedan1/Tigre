import { Metadata } from "next";
import { getAboutMetadata } from '../metadata/about';
import HeroSection from "@/components/about/HeroSection";
import OriginSection from "@/components/about/originSection";
import ValuesSection from "@/components/about/ValuesSection";
import PromiseSection from "@/components/about/PromiseSection";
import { MarqueeBanner, StatsBar } from "@/components/home";

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  return await getAboutMetadata(params.locale);
}

export default function AboutPage() {
  return (
    <main>
      <HeroSection />
      <MarqueeBanner />
      <OriginSection />
      <StatsBar />
      <ValuesSection />
      <PromiseSection />

    </main>
  );
} 
