'use client'
import  { useState } from 'react';

import AnimatedSection from "@/components/shared/AnimatedSection";
import CustomButton from '../shared/CustomButton';
import { useTranslations } from "next-intl";
import { Link } from '@/i18n/routing';
import DownloadModal from '../shared/DownloadModal';

export default function PromiseSection() {
  const t = useTranslations("about.promise");
  const [downloadModalOpen, setDownloadModalOpen] = useState(false);
  
  return (
        <>
            <DownloadModal
                isOpen={downloadModalOpen}
                onClose={() => setDownloadModalOpen(false)}
            />
            <section className="bg-color-cream py-24 px-6 flex flex-col items-center text-center">
            <div className="max-w-3xl mx-auto">

                {/* Section Tag */}
                <AnimatedSection delay={0.1} className="flex items-center justify-center gap-4 mb-6">
                    <div className="w-8 h-[1.5px] bg-secondary" />
                    <span className="text-secondary font-bold text-lg font-serif">{t("title")}</span>
                    <div className="w-8 h-[1.5px] bg-secondary" />
                </AnimatedSection>

                {/* Main Title */}
                <AnimatedSection delay={0.2}>
                    <h2 className="text-4xl md:text-5xl font-black text-[#1a1a1a] font-serif mb-8 tracking-tight">
                        {t("mainTitle")}
                    </h2>
                </AnimatedSection>

                {/* Description Paragraph */}
                <AnimatedSection delay={0.3}>
                    <p className="text-gray-500 text-xl leading-relaxed font-serif max-w-2xl mx-auto mb-12">
                        {t("description")}
                    </p>
                </AnimatedSection>

                {/* Action Buttons */}
                <AnimatedSection delay={0.4} className="flex flex-col sm:flex-row items-center justify-center gap-4">

                    <CustomButton
                        variant="primary"
                        size="md"
                        hoverScale={1.05}
                        className="group relative"
                        onClick={() => setDownloadModalOpen(true)}
                    >
                        {t("downloadApp")}
                    </CustomButton>

                    <Link href="/contact">
                        <CustomButton
                            variant="outline"
                            size="md"
                            hoverScale={1.05}
                            className="group relative border border-black/20"
                        >
                            {t("joinPartner")}
                        </CustomButton>
                    </Link>
                </AnimatedSection>
            </div>
        </section>
        </>
    );
}