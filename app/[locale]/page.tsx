import { Metadata } from "next";
import { GetAppSection, GrowWithTigreSection, HeroSection, MarqueeBanner, StatsBar, WhoWeAreSection } from "@/components/home";
import { getHomeMetadata } from "./metadata/home";

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  return await getHomeMetadata(params.locale);
}

export default function HomePage() {
  return (
    <>
      <main>
        <HeroSection />
        <MarqueeBanner />
        <WhoWeAreSection />
        <StatsBar />
        <GetAppSection />
        <GrowWithTigreSection />
      </main>
    </>
  );
}
