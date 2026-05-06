import { images } from "@/constants/images";
import AnimatedSection from "@/components/shared/AnimatedSection";
import MascotImage from "@/components/shared/MascotImage";
import { useTranslations } from "next-intl";
import FloatingElement from "../shared/FloatingElement";

export default function OriginSection() {
    const t = useTranslations("about.origin");

    return (
        <section className="relative w-full py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">

                <div >
                    <AnimatedSection animation="scale" delay={0.5}>
                            <MascotImage
                                imageSrc={images.origin}
                                height="h-[500px] lg:h-[600px]"
                                decorativeHeight="85% "
                                decorativeWidth="80%"
                                borderRadius="100px 20px 150px 20px"
                                scale="scale-200 md:scale-150"
                                borderColor="border-[2px] border-[#63214A]"
                                backgroundColor="bg-secondary -bottom-32"
                                alt="Tigre mascot"
                            />
                    </AnimatedSection>
                </div>
                {/* Right Side: Content */}
                <div className="flex flex-col space-y-8 max-w-2xl">

                    {/* Section Header */}
                    <AnimatedSection delay={0.1} className="flex items-center gap-3">
                        <div className="w-5 h-2 bg-secondary" />
                        <span className="text-secondary font-bold text-xl font-serif tracking-tight">{t("title")}</span>
                        <div className="w-5 h-2 bg-secondary" />
                    </AnimatedSection>

                    {/* Main Title */}
                    <AnimatedSection delay={0.2}>
                        <h2 className="text-4xl md:text-5xl font-black text-[#1a1a1a] font-serif leading-[1.1]">
                            {t("mainTitle")}
                        </h2>
                    </AnimatedSection>

                    {/* Blockquote with Left Border */}
                    <AnimatedSection delay={0.3} className="border-l-[3px] border-[#FFD662] pl-5 py-1">
                        <p className="text-[#666666] text-lg italic leading-relaxed">
                            "{t("quote")}"
                        </p>
                    </AnimatedSection>

                    {/* Body Paragraphs */}
                    <AnimatedSection delay={0.4} className="space-y-6 text-[#555555] leading-relaxed text-lg">
                        <p>
                            {t("paragraph1")}
                        </p>
                        <p>
                            {t("paragraph2")}
                        </p>
                        <p>
                            {t("paragraph3")}
                        </p>
                    </AnimatedSection>

                </div>
            </div>
        </section>
    );
}