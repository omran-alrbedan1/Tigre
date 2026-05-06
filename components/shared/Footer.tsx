import { images, futureXLogo, socialIcons } from "@/constants/images";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from 'next-intl';
import { useLocale } from 'next-intl';

export default function Footer() {
    const locale = useLocale();
    const t = useTranslations('home');
    const currentYear = new Date().getFullYear();

    const socialLinks = [
        {
            label: t('footer.email'),
            href: "mailto:hello@tigre.com",
            icon: <Image src={socialIcons.email} alt="Email" width={20} height={20} />,
        },
        {
            label: t('footer.instagram'),
            href: "https://www.instagram.com/tigre.delivery?igsh=MTliYjVqcWxuYWdzbg==",
            icon: <Image src={socialIcons.instagram} alt="Instagram" width={20} height={20} />,
        },
        {
            label: t('footer.whatsapp'),
            href: "https://wa.me/972542833740",
            icon: <Image src={socialIcons.whatsapp} alt="WhatsApp" width={20} height={20} />,
        },
    ];

    return (
        <footer className="bg-color-tigre-purple border-t border-primary/20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 md:py-12">
                
                {/* Main footer content - All elements centered on mobile */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-6">
                    
                    {/* Brand Section */}
                    <div className="w-full md:max-w-xs flex flex-col items-center md:items-start rtl:md:items-end text-center md:text-left rtl:md:text-right">
                        <Link href="/" className="inline-block  ">
                            <Image
                                src={images.logo}
                                height={148}
                                width={160}
                                alt={'logo'}
                                className="w-auto h-32  rtl:md:ml-32 mx-auto "
                            />
                        </Link>
                        <p className="text-white/50 text-xs sm:text-sm font-body leading-relaxed mt-3 max-w-md">
                            {t('footer.brandDescription')}
                        </p>
                    </div>

                    {/* Navigation Links */}
                    <div className="w-full md:w-auto text-center">
                        <span className="text-white text-[10px] sm:text-xs tracking-widest uppercase font-body block mb-3">
                            {t('footer.navigation')}
                        </span>
                        <div className="flex flex-col items-center md:items-start rtl:md:items-end gap-3 sm:gap-6">
                            <Link href="/" className="text-white/60 hover:text-secondary transition-colors text-sm font-body">
                                {t('footer.home')}
                            </Link>
                            <Link href="/about" className="text-white/60 hover:text-secondary transition-colors text-sm font-body">
                                {t('footer.aboutUs')}
                            </Link>
                            <Link href="/contact" className="text-white/60 hover:text-secondary transition-colors text-sm font-body">
                                {t('footer.contactUs')}
                            </Link>
                        </div>
                    </div>

                    {/* Social Links */}
                    <div className="w-full md:w-auto text-center">
                        <span className="text-white/30 text-[10px] sm:text-xs tracking-widest uppercase font-body block mb-3">
                            {t('footer.connectOnSocialMedia')}
                        </span>
                        <div className="flex items-center justify-center gap-2 sm:gap-3">
                            {socialLinks.map((s) => (
                                <a
                                    key={s.label}
                                    href={s.href}
                                    aria-label={s.label}
                                    className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full bg-white border border-primary/30 flex items-center justify-center text-white/60 hover:text-secondary hover:border-secondary/50 transition-all duration-300"
                                >
                                    <div className="w-4 h-4 sm:w-5 sm:h-5 relative">
                                        {s.icon}
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-primary/10 mt-8 sm:mt-10 pt-6 sm:pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-white text-[10px] sm:text-xs font-body text-center md:text-left rtl:md:text-right order-2 md:order-1">
                        {t('footer.copyright', { year: currentYear })}
                    </p>

                    <div className="flex items-center justify-center gap-1 sm:gap-2 order-1 md:order-2">
                        <span className="text-white/40 text-[10px] sm:text-xs hidden sm:inline">•</span>
                        <div className="flex items-center gap-1 sm:gap-2">
                            <span className="text-white text-[10px] sm:text-xs font-body">{t('footer.poweredBy')}</span>
                            <Link
                                href="https://futxtech.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center hover:opacity-80 transition-opacity"
                            >
                                <Image
                                    src={futureXLogo}
                                    alt="Future X"
                                    width={60}
                                    height={25}
                                    className="h-6 sm:h-7 md:h-8 w-auto transition-opacity"
                                />
                            </Link>
                        </div>
                    </div>
                </div>

            </div>
        </footer>
    );
}