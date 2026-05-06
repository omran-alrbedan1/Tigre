import AnimatedSection from "@/components/shared/AnimatedSection";
import { useTranslations } from "next-intl";

export default function ValuesSection() {
  const t = useTranslations("about.values");
  
  const values = [
    { id: "01", title: t("speedTitle"), description: t("speedDescription") },
    { id: "02", title: t("passionTitle"), description: t("passionDescription") },
    { id: "03", title: t("trustTitle"), description: t("trustDescription") },
    { id: "04", title: t("diversityTitle"), description: t("diversityDescription") },
    { id: "05", title: t("techTitle"), description: t("techDescription") },
    { id: "06", title: t("communityTitle"), description: t("communityDescription") }
  ];
  
  return (
    <section className="bg-[#FAF7F2] py-24 px-6">
      <div className="container mx-auto max-w-6xl">
        
        {/* Header Section */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16 items-start">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-6 h-px bg-yellow-500" />
              {/* Used tracking-widest which works fine in both directions */}
              <span className="text-[#F5C518] font-bold uppercase tracking-widest text-sm">{t("title")}</span>
              <div className="w-6 h-px bg-yellow-500" />
            </div>
            <h2 className="text-4xl md:text-5xl font-serif font-black text-[#1a1a1a] leading-tight">
              {t("mainTitle")}
            </h2>
          </div>
          
          <div className="lg:pt-10">
            {/* Added rtl:text-right and ltr:text-left for safety if the parent container isn't inherited */}
            <p className="text-gray-500 text-lg leading-relaxed font-serif">
              {t("description")}
            </p>
          </div>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((value, index) => (
            <AnimatedSection key={value.id} delay={index * 0.1}>
              {/* Changed border radius to rounded-[2rem] (uniform) to avoid flipping logic complexities */}
              <div className="relative p-8 h-full bg-transparent border border-[#6B2147]/30 rounded-[2rem] flex flex-col justify-between group hover:border-[#6B2147] transition-colors duration-300">
                
                {/* Number Watermark - CHANGED: right-8 to end-8 */}
                <span className="absolute top-6 end-8 text-4xl font-serif font-black text-gray-200 group-hover:text-gray-300 transition-colors">
                  {value.id}
                </span>

                <div className="relative z-10">
                  {/* Text alignment will automatically follow the document direction */}
                  <h3 className="text-xl font-black text-[#1a1a1a] mb-4 font-serif">
                    {value.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed font-serif">
                    {value.description}
                  </p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}