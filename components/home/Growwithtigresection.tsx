'use client'
import AnimatedSection from "@/components/shared/AnimatedSection";
import AnimatedCard from "@/components/shared/AnimatedCard";
import FloatingElement from "@/components/shared/FloatingElement";
import CustomButton from "../shared/CustomButton";
import { useTranslations } from 'next-intl';
import { useRouter } from "next/navigation";

export default function GrowWithTigreSection() {
    const t = useTranslations('home');
    const tCommon = useTranslations('common');
    const router = useRouter();
    const restaurantBenefits = [
        {
            title: t('growWithTigre.benefits.moreRevenue.title'),
            desc: t('growWithTigre.benefits.moreRevenue.desc'),
            gridClass: "md:col-span-1",
            mobileOrder: 1,
        },
        {
            title: t('growWithTigre.benefits.newCustomers.title'),
            desc: t('growWithTigre.benefits.newCustomers.desc'),
            gridClass: "md:col-span-1",
            mobileOrder: 2,
        },
        {
            title: t('growWithTigre.benefits.smartDashboard.title'),
            desc: t('growWithTigre.benefits.smartDashboard.desc'),
            gridClass: "md:col-span-2",
            titleColor: "text-[#F5C518]",
            mobileOrder: 3,
        },
        {
            title: t('growWithTigre.benefits.fastOnboarding.title'),
            desc: t('growWithTigre.benefits.fastOnboarding.desc'),
            gridClass: "md:col-span-1",
            mobileOrder: 4,
        },
        {
            title: t('growWithTigre.benefits.featuredSpots.title'),
            desc: t('growWithTigre.benefits.featuredSpots.desc'),
            gridClass: "md:col-span-1",
            mobileOrder: 5,
        },
    ];

    return (
        <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-color-cream relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Stack on mobile, grid on desktop */}
                <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-center">

                    {/* Left Content - appears first on mobile */}
                    <div className="space-y-4 sm:space-y-6 md:space-y-8 w-full order-1 lg:order-none">
                        <AnimatedSection delay={0.2}>
                            <div className="flex items-center gap-2 sm:gap-4">
                                <span className="w-4 sm:w-8 h-px bg-secondary" />
                                <p className="text-secondary font-bold uppercase tracking-wider sm:tracking-widest text-xs sm:text-sm">
                                    {tCommon('forRestaurants')}
                                </p>
                                <span className="w-4 sm:w-8 h-px bg-secondary" />
                            </div>
                        </AnimatedSection>

                        <AnimatedSection delay={0.3}>
                            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#1A0A2E] leading-tight">
                                {t('growWithTigre.heading')}
                            </h2>
                        </AnimatedSection>

                        <AnimatedSection delay={0.4}>
                            <p className="text-[#1A0A2E]/60 font-body text-base sm:text-lg leading-relaxed max-w-xl">
                                {t('growWithTigre.description')}
                            </p>
                        </AnimatedSection>

                        {/* Benefit Pills - Responsive wrapping */}
                        <div className="flex flex-wrap gap-2 sm:gap-3 justify-center sm:justify-start text-center">
                            {[tCommon('zeroSetupFees'), tCommon('dashboardAnalytics'), tCommon('dedicatedSupport')].map((text, index) => (
                                <AnimatedCard
                                    key={text}
                                    className="flex items-center gap-1 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-primary/30 bg-white/50 text-[#1A0A2E] text-xs sm:text-sm font-medium"
                                    hoverScale={1.05}
                                    hoverColor="#F5C518"
                                    index={index}
                                >
                                    <span className="text-secondary text-xs sm:text-sm">✔</span> {text}
                                </AnimatedCard>
                            ))}
                        </div>

                        {/* CTA Button - Full width on mobile, auto on desktop */}
                        <AnimatedSection delay={0.6} className="w-full sm:w-auto">
                            <div className="flex justify-center sm:justify-start">
                                <CustomButton
                                    onClick={() => router.push('/contact')}
                                    variant="primary" size="md" hoverScale={1.05}
                                        className="hover:pointer"
                                    >
                                    {tCommon('joinUsAsPartner')}
                                </CustomButton>
                            </div>
                        </AnimatedSection>
                    </div>

                    {/* Right: Bento Grid Container - appears second on mobile */}
                    <AnimatedSection animation="scale" delay={0.5} className="w-full order-2 lg:order-none">
                        <FloatingElement duration={4} amplitude={6}>
                            <div className="bg-color-purple p-3 sm:p-4 rounded-2xl sm:rounded-[30px] md:rounded-[40px] shadow-2xl">
                                {/* Responsive grid: 1 column on mobile, 2 on tablet/desktop */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                                    {restaurantBenefits.map((benefit, index) => (
                                        <AnimatedCard
                                            key={benefit.title}
                                            className={`${benefit.gridClass} bg-white/10 backdrop-blur-md border border-white/5 rounded-2xl sm:rounded-3xl flex flex-col items-center text-center justify-center min-h-[140px] sm:min-h-[160px] p-4 sm:p-6`}
                                            hoverScale={1.02}
                                            hoverColor="#F5C518"
                                            index={index}
                                        >
                                            <h3 className={`${benefit.titleColor || 'text-white'} font-serif text-lg sm:text-xl mb-2 sm:mb-3 text-center`}>
                                                {benefit.title}
                                            </h3>
                                            <p className="text-white/70 text-[11px] sm:text-xs font-body leading-relaxed max-w-[200px] sm:max-w-[220px] text-center">
                                                {benefit.desc}
                                            </p>
                                        </AnimatedCard>
                                    ))}
                                </div>
                            </div>
                        </FloatingElement>
                    </AnimatedSection>

                </div>
            </div>
        </section>
    );
}