'use client'
import { images } from "@/constants/images";
import Image from "next/image";
import AnimatedSection from "@/components/shared/AnimatedSection";
import AnimatedCard from "@/components/shared/AnimatedCard";
import FloatingElement from "@/components/shared/FloatingElement";
import CustomButton from "../shared/CustomButton";
import { useTranslations } from 'next-intl';
import { useLocale } from 'next-intl';
import { useState } from "react";
import DownloadModal from "../shared/DownloadModal";

export default function HeroSection() {
    const [downloadModalOpen, setDownloadModalOpen] = useState(false);
    const locale = useLocale();
    const isRTL = locale === 'ar';
    const t = useTranslations('home');

    return (
        <>
            <DownloadModal
                isOpen={downloadModalOpen}
                onClose={() => setDownloadModalOpen(false)}
            />

            <section
                dir={isRTL ? 'rtl' : 'ltr'}
                className="relative w-full min-h-[91vh] overflow-hidden flex items-center"
            >
                <div className="absolute inset-0 z-0">
                    <Image
                        src={images.heroBackground}
                        alt="Hero background"
                        fill
                        className={`object-cover ${isRTL ? 'scale-x-[-1]' : ''}`}
                        priority
                    />
                </div>

                <div className="container mx-auto px-6 relative z-10 h-full pt-20 pb-8
                                grid grid-cols-1 lg:grid-cols-2 items-center">

                    {/* ── Text Content ── */}
                    <div className="relative flex flex-col items-start mt-8 md:ltr:ml-24 lg:-mt-26">

                        {/* Title */}
                        <AnimatedSection className="text-white mb-2" delay={0.2}>
                            <span className="block text-2xl sm:text-3xl lg:text-4xl font-dancing mb-[-6px] lg:mb-[-10px]">
                                {t('hero.super')}
                            </span>
                            <h2 className="text-4xl sm:text-5xl lg:text-7xl tracking-tight">
                                <span className="text-yellow-400 font-display">
                                    {t('hero.delicious')}
                                </span>
                                <span className="font-serif italic ltr:ml-2 rtl:mr-2 lg:ltr:ml-4 lg:rtl:mr-4 font-light">
                                    {t('hero.food')}
                                </span>
                            </h2>
                        </AnimatedSection>

                        {/* Brush Stroke — hidden on mobile to avoid overflow */}
                        <AnimatedSection
                            className="relative h-full w-full mt-2 mb-4 lg:mb-8 py-6 lg:py-12 px-6"
                            delay={0.4}
                        >
                            <div className="absolute -top-10  ltr:-left-6 rtl:-right-6 ltr:lg:-left-12 rtl:lg:-right-12  sm:block ml-4">
                                <Image
                                    src={isRTL ? images.hero2Arabic : images.hero2}
                                    alt="brush stroke"
                                    width={340}
                                    height={100}
                                    className="rotate-6"
                                />
                            </div>
                        </AnimatedSection>

                        {/* Description */}
                        <AnimatedSection delay={0.6}>
                            <p className="text-white/90 ltr:ml-4 rtl:mr-4 ltr:sm:ml-12 rtl:sm:mr-12
                                           text-base lg:text-lg max-w-xs sm:max-w-md
                                           lg:mt-4 leading-snug font-medium mt-4">
                                {t('hero.description')}
                            </p>
                        </AnimatedSection>

                        {/* CTA Button */}
                        <AnimatedSection delay={0.8}>
                            <div className="relative mt-8 lg:mt-12 ltr:ml-4 rtl:mr-4 ltr:sm:ml-10 rtl:sm:mr-10">
                                <div onClick={() => setDownloadModalOpen(true)}>
                                    <AnimatedCard hoverScale={1.1} hoverColor="#F5C518">
                                        <CustomButton variant="primary" size="md" hoverScale={1.05}>
                                            {t('hero.downloadApp')}
                                        </CustomButton>
                                    </AnimatedCard>
                                </div>

                                {/* Swirl — only md+ */}
                                <FloatingElement duration={5} amplitude={6} delay={1}>
                                    <div className={`absolute hidden md:block
                                        ${isRTL ? '-right-48 scale-x-[-1]' : '-left-48'} -top-54`}>
                                        <Image src={images.hero3} alt="decoration" height={320} width={240} />
                                    </div>
                                </FloatingElement>
                            </div>
                        </AnimatedSection>
                    </div>

                    <div className="relative flex items-center justify-center lg:justify-end
                                    mt-8 lg:mt-0 h-64 sm:h-80 lg:h-full">

                        {/* Burger */}
                        <AnimatedSection animation="scale" delay={0.3} className="hidden  md:block">
                            <FloatingElement duration={6} amplitude={12}>
                                <div className="relative 
                                                w-32 h-32
                                                lg:w-[120%] lg:aspect-square
                                                lg:-mt-56 z-20
                                                ltr:lg:right-96 rtl:lg:left-96">
                                    <Image
                                        src={images.hero4}
                                        alt="Tigre Burger"
                                        fill
                                        priority
                                        className={`object-contain ${isRTL ? 'scale-x-[-1]' : ''}`}
                                    />
                                </div>
                            </FloatingElement>
                        </AnimatedSection>

                        {/* Badge — repositioned for mobile */}
                        <div className="absolute hidden md:block
                                                ltr:-right-4 rtl:-left-4 top-32
                                                ltr:sm:-right-8 rtl:sm:-left-8 sm:-top-8
                                                ltr:lg:-right-32 rtl:lg:-left-32 lg:-top-60
                                                w-28 h-28 sm:w-40 sm:h-40 lg:w-64 lg:h-64
                                                z-30 mt-32">
                            <Image src={images.hero1} alt="Lightning delivery" fill className="object-contain" />
                            <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center
                                                    p-2 sm:p-4 lg:p-6 mt-[-10px] lg:mt-[-20px]">
                                <p className="text-[8px] sm:text-[10px] lg:text-xs font-bold text-yellow-400 uppercase tracking-widest"
                                    dangerouslySetInnerHTML={{ __html: t('hero.boldFlavors') }}></p>
                                <p className="text-[10px] sm:text-xs lg:text-sm font-bold leading-tight"
                                    dangerouslySetInnerHTML={{ __html: t('hero.lightningDelivery') }}></p>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </>
    );
}