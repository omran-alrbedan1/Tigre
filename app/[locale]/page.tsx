import { GetAppSection, GrowWithTigreSection, HeroSection, MarqueeBanner, StatsBar, WhoWeAreSection } from "@/components/home";

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
