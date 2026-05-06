//@ts-nocheck
"use client";

import Image from "next/image";
import { images } from "@/constants/images";
import { useTranslations, useLocale } from 'next-intl';
import { APPLE_STORE_URL, GOOGLE_PLAY_URL } from '@/constants';
import { motion } from "framer-motion";
import AnimatedSection from "../shared/AnimatedSection";
import MascotImage from "../shared/MascotImage";
import { backgroundVariants, buttonVariants, imageVariants } from "@/constants/variants";
import FloatingElement from "../shared/FloatingElement";

export default function GetAppSection() {
    const t = useTranslations('home');
    const tCommon = useTranslations('common');
    const locale = useLocale();
    const isRTL = locale === 'ar';

    return (
        <section dir={isRTL ? 'rtl' : 'ltr'} className="py-24 bg-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    
                    {/* Content Column - Logic to swap order based on RTL */}
                    <div className={`flex flex-col ${isRTL ? 'lg:order-2 items-start' : 'lg:order-1 items-start'}`}>
                        <AnimatedSection delay={0.2}>
                            {/* Tag with lines like the image */}
                            <div className="flex items-center gap-2 mb-6">
                                <div className="w-4 h-[2px] bg-[#F5C518]" />
                                <p className="text-[#F5C518] font-bold text-sm uppercase tracking-widest">{t('getApp.title')}</p>
                                <div className="w-4 h-[2px] bg-[#F5C518]" />
                            </div>
                        </AnimatedSection>
                        
                        <AnimatedSection delay={0.3}>
                            <h2 className="font-serif text-5xl md:text-6xl text-[#1A0A2E] leading-tight mb-6 font-black">
                                {t('getApp.heading')}{" "}
                                <span className="text-[#1A0A2E] whitespace-nowrap">
                                    {t('getApp.headingHighlight')}
                                </span>
                            </h2>
                        </AnimatedSection>

                        <AnimatedSection delay={0.4}>
                            <p className="text-[#1A0A2E]/60 font-body text-lg leading-relaxed mb-12 max-w-xl">
                                {t('getApp.description')}
                            </p>
                        </AnimatedSection>

                        {/* Download Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 w-full">
                            <a
                                href={GOOGLE_PLAY_URL}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-3 bg-[#1A0A2E] border border-[#7B2FBE]/30 rounded-xl px-5 py-3 hover:border-[#F5C518]/50 hover:bg-[#7B2FBE]/10 transition-all duration-300 group w-full sm:w-auto justify-center sm:justify-start"
                            >
                                <Image
                                    src="/icons/google.svg"
                                    alt="Google Play"
                                    width={32}
                                    height={32}
                                    className="shrink-0"
                                />
                                <div>
                                    <div className="text-white/40 text-xs font-body">{tCommon('getItOn')}</div>
                                    <div className="text-white font-body font-bold text-sm">{tCommon('googlePlay')}</div>
                                </div>
                            </a>

                            <a
                                href={APPLE_STORE_URL}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-3 bg-[#1A0A2E] border border-[#7B2FBE]/30 rounded-xl px-5 py-3 hover:border-[#F5C518]/50 hover:bg-[#7B2FBE]/10 transition-all duration-300 group w-full sm:w-auto justify-center sm:justify-start"
                            >
                                <Image
                                    src="/icons/apple.svg"
                                    alt="App Store"
                                    width={32}
                                    height={32}
                                    className="shrink-0"
                                />
                                <div>
                                    <div className="text-white/40 text-xs font-body">{tCommon('downloadOnThe')}</div>
                                    <div className="text-white font-body font-bold text-sm">{tCommon('appStore')}</div>
                                </div>
                            </a>
                        </div>
                    </div>

                    {/* Image Column */}
                    <div className={`${isRTL ? 'lg:order-1' : 'lg:order-2'}`}>
                        <AnimatedSection animation="scale" delay={0.5}>
                                <MascotImage
                                    imageSrc={images.getApp}
                                    height="h-[500px] lg:h-[600px]"
                                    decorativeHeight="85%"
                                    decorativeWidth="90%"
                                    borderRadius="100px 20px 150px 20px"
                                    scale="scale-110"
                                    borderColor="border-[2px] border-[#63214A]"
                                    backgroundColor="bg-[#F5C518]"
                                    alt="Tigre app interface"
                                />
                        </AnimatedSection>
                    </div>

                </div>
            </div>
        </section>
    );
}