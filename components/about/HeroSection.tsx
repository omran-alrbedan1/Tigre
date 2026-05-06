import { images } from "@/constants/images";
import Image from "next/image";
import AnimatedSection from "@/components/shared/AnimatedSection";
import FloatingElement from "@/components/shared/FloatingElement";
import { useTranslations } from "next-intl";
import { useLocale } from 'next-intl';

export default function HeroSection() {
  const locale = useLocale();
  const isRTL = locale === 'ar';
  const t = useTranslations("about.hero");
  
  return (
    <section
        dir={isRTL ? 'rtl' : 'ltr'}
        className="relative w-full h-[91vh] overflow-hidden flex items-center bg-[#2D0A24]"
    >
      <div className="absolute inset-0 z-0 opacity-60">
        <Image
          src={images.heroBackground}
          alt="Textured background"
          fill
          className={`object-cover ${isRTL ? 'scale-x-[-1]' : ''}`}
          priority
        />
      </div>

      <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 items-center h-full pt-20">

        <div className="relative flex flex-col items-start -mt-32 space-y-6">

          <AnimatedSection delay={0.1} className="flex items-center gap-3">
            <div className="w-8 h-[2px] bg-yellow-500" />
            <span className="text-yellow-500 font-bold uppercase tracking-widest text-sm">{t("ourStory")}</span>
            <div className="w-8 h-[2px] bg-yellow-500" />
          </AnimatedSection>

          <AnimatedSection delay={0.3} className="text-white">
            <h1 className="text-4xl md:text-6xl font-black uppercase leading-none tracking-tighter">
              {t("weAreTigre")} <span className="text-yellow-500">{t("tigre")}</span>
            </h1>
            {/* Outlined Text Effect */}
            <h2 className="text-2xl md:text-4xl font-black uppercase leading-none tracking-tighter mt-2"
              style={{ WebkitTextStroke: '1px rgba(255,255,255,0.5)', color: 'transparent' }}>
              {t("bornHungry")}
            </h2>
          </AnimatedSection>

          {/* Description */}
          <AnimatedSection delay={0.5} className="max-w-xl">
            <p className="text-gray-300 text-xl leading-relaxed">
              {t("movementDescription")}
            </p>
          </AnimatedSection>
        </div>

        <div className="relative h-full flex items-center justify-end">

          <AnimatedSection animation="scale" delay={0.4} className="hidden md:block">
            <FloatingElement duration={6} amplitude={12}>
              <div className="relative w-[120%] aspect-square -mt-56 z-20 ltr:md:right-96 rtl:md:left-96">
                <Image
                  src={images.hero4}
                  alt={t("tigreBurgerStack")}
                  height={100}
                  width={100}
                  priority
                  className={`object-cover ${isRTL ? 'scale-x-[-1]' : ''}`}
                />
              </div>
            </FloatingElement>
          </AnimatedSection>

          <AnimatedSection animation="rotate" delay={0.5} className="hidden md:block">
            <FloatingElement duration={4} amplitude={10} delay={0.8}>
              <div className="absolute ltr:-right-32 rtl:-left-32 -top-60 w-64 h-64 z-30">
                <Image src={images.hero1} alt={t("badge")} fill className="object-contain" />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center p-6 mt-[-20px]">
                  <p className="text-xs font-bold text-yellow-400 uppercase tracking-widest">{t("boldFlavors")}</p>
                  <p className="text-sm font-bold leading-tight">{t("lightningDelivery")}</p>
                </div>
              </div>
            </FloatingElement>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}