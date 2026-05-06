import { images } from "@/constants/images";
import AnimatedSection from "@/components/shared/AnimatedSection";
import AnimatedCard from "@/components/shared/AnimatedCard";
import FloatingElement from "@/components/shared/FloatingElement";
import MascotImage from "@/components/shared/MascotImage";
import { useLocale, useTranslations } from "next-intl";


export default function WhoWeAreSection() {
  const locale = useLocale();
  const isRTL = locale === 'ar';
  const t = useTranslations('home');
  
  const features = [
    {
      title: t('whoWeAre.features.fastDelivery.title'),
      desc: t('whoWeAre.features.fastDelivery.desc'),
    },
    {
      title: t('whoWeAre.features.restaurantVariety.title'),
      desc: t('whoWeAre.features.restaurantVariety.desc'),
    },
    {
      title: t('whoWeAre.features.easyToUse.title'),
      desc: t('whoWeAre.features.easyToUse.desc'),
    },
  ];

  return (
    <section dir={isRTL ? 'rtl' : 'ltr'} className="py-24 bg-[#FFFBF7] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Content Column - Logic to swap order based on RTL */}
          <div className={`flex flex-col ${isRTL ? 'lg:order-2 items-start' : 'lg:order-1 items-start'}`}>
            <AnimatedSection delay={0.2}>
              {/* Tag with lines like the image */}
              <div className="flex items-center gap-2 mb-6">
                <div className="w-4 h-[2px] bg-[#F5C518]" />
                <p className="text-[#F5C518] font-bold text-sm uppercase tracking-widest">{t('whoWeAre.tag')}</p>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={0.3}>
              <h2 className="font-serif text-5xl md:text-6xl text-[#1A0A2E] leading-tight mb-6 font-black">
                {t('whoWeAre.title')}
              </h2>
            </AnimatedSection>

            <AnimatedSection delay={0.4}>
              <p className="text-[#1A0A2E]/60 font-body text-lg leading-relaxed mb-12 max-w-xl">
                {t('whoWeAre.description')}
              </p>
            </AnimatedSection>

            {/* Feature cards */}
            <div className="flex flex-wrap md:flex-nowrap gap-4 w-full">
              {features.map((f, index) => (
                <AnimatedCard
                  key={f.title}
                  className="flex-1 min-w-[180px] p-6 rounded-3xl border border-gray-100 bg-white shadow-sm text-start flex flex-col justify-start"
                  hoverScale={1.05}
                  index={index}
                >
                  <h3 className="text-[#1A0A2E] font-extrabold text-base mb-3 leading-tight">{f.title}</h3>
                  <p className="text-[#1A0A2E]/50 text-xs leading-relaxed">
                    {f.desc}
                  </p>
                </AnimatedCard>
              ))}
            </div>
          </div>

          {/* Image Column */}
          <div className={`${isRTL ? 'lg:order-1' : 'lg:order-2'}`}>
            <AnimatedSection animation="scale" delay={0.5}>
              <FloatingElement duration={5} amplitude={8}>
                <MascotImage
                  imageSrc={images.whoWeAre}
                  height="h-[500px] lg:h-[600px]"
                  decorativeHeight="85%"
                  decorativeWidth="90%"
                  borderRadius="100px 20px 150px 20px"
                  scale="scale-110"
                        borderColor="border-[2px] border-[#63214A]"
                  backgroundColor="bg-[#F5C518]"
                  alt="Tigre mascot"
                />
              </FloatingElement>
            </AnimatedSection>
          </div>

        </div>
      </div>
    </section>
  );
}