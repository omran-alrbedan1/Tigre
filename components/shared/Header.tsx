"use client";

import { useState } from "react";
import { Link } from '@/i18n/routing';
import { usePathname } from "next/navigation";
import { useTranslations, useLocale } from 'next-intl';
import { useRouter } from 'next/navigation';
import { useTransition } from 'react';
import Image from "next/image";
import { images } from "@/constants/images";
import DownloadModal from './DownloadModal';
import LanguageSwitcher from './LanguageSwitcher';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [downloadModalOpen, setDownloadModalOpen] = useState(false);
  const pathname = usePathname();
  const locale = useLocale();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const t = useTranslations('navigation');
  const tCommon = useTranslations('common');

  // Remove locale from pathname for comparison
  const getCleanPathname = () => {
    // Remove the locale prefix (e.g., /en, /ar) for comparison
    const parts = pathname.split('/');
    if (parts.length > 2 && (parts[1] === 'en' || parts[1] === 'ar')) {
      return '/' + parts.slice(2).join('/');
    }
    return pathname;
  };

  const cleanPathname = getCleanPathname();

  const navLinks: Array<{ href: "/" | "/about" | "/contact"; label: string }> = [
    { href: "/", label: t('home') },
    { href: "/about", label: t('aboutUs') },
    { href: "/contact", label: t('contactUs') },
  ];

  const isActiveLink = (href: string) => {
    if (href === "/") {
      return cleanPathname === "/";
    }
    return cleanPathname === href || cleanPathname.startsWith(href + '/');
  };

  const handleLanguageChange = (newLocale: string) => {
    const pathnameWithoutLocale = pathname.replace(`/${locale}`, '') || '/';
    startTransition(() => {
      router.replace(`/${newLocale}${pathnameWithoutLocale}`);
    });
  };

  return (
    <>
      <DownloadModal
        isOpen={downloadModalOpen}
        onClose={() => setDownloadModalOpen(false)}
      />

      <header className="fixed top-0 left-0 right-0 z-50 bg-color-tigre-purple backdrop-blur-lg border-b border-primary/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2">
              <Image src={images.logo} height={64} width={150} alt={"logo"} />
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`font-body font-medium text-sm transition-all duration-300 relative group ${
                    isActiveLink(link.href) ? "text-secondary" : "text-white/70 hover:text-white"
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute -bottom-1 left-0 h-0.5 bg-secondary transition-all duration-300 ${
                      isActiveLink(link.href) ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden md:flex items-center gap-4">
              <button
                onClick={() => setDownloadModalOpen(true)}
                className="btn-primary text-sm"
              >
                {tCommon('downloadApp')}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
              {/* LanguageSwitcher component for medium devices */}
              <div className="">
                <LanguageSwitcher />
              </div>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              className="md:hidden text-white p-2"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              <div className="w-6 flex flex-col gap-1.5 transition-all">
                <span className={`block h-0.5 bg-secondary transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
                <span className={`block h-0.5 bg-white transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
                <span className={`block h-0.5 bg-secondary transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-300 overflow-hidden ${menuOpen ? "max-h-[400px] border-b border-primary/20" : "max-h-0"}`}>
          <nav className="flex flex-col px-6 py-6 gap-5 bg-color-tigre-purple">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`font-body font-semibold text-base py-2 transition-colors duration-200 relative group ${
                  isActiveLink(link.href) ? "text-secondary" : "text-white/70 hover:text-white"
                }`}
              >
                {link.label}
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 bg-secondary transition-all duration-300 ${
                    isActiveLink(link.href) ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            ))}
            
            {/* Download Button in Mobile Menu */}
            <button
              onClick={() => { 
                setMenuOpen(false); 
                setDownloadModalOpen(true); 
              }}
              className="btn-primary text-sm justify-center mt-2 w-full"
            >
              {tCommon('downloadApp')}
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>

            {/* Language Switcher in Mobile Menu */}
            <div className="flex justify-center pt-4 border-t border-white/10 mt-2">
              <div className="flex items-center gap-2">
                <span className="text-white text-sm font-medium">اللغة :</span>
                <button
                  onClick={() => handleLanguageChange('ar')}
                  disabled={isPending}
                  className={`px-3 py-1 text-sm font-medium rounded-lg transition-all duration-200 ${
                    locale === 'ar' 
                      ? 'bg-secondary text-white' 
                      : 'bg-white/10 text-white hover:bg-white/20'
                  } ${isPending ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                  العربية
                </button>
                <button
                  onClick={() => handleLanguageChange('en')}
                  disabled={isPending}
                  className={`px-3 py-1 text-sm font-medium rounded-lg transition-all duration-200 ${
                    locale === 'en' 
                      ? 'bg-secondary text-white' 
                      : 'bg-white/10 text-white hover:bg-white/20'
                  } ${isPending ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                  EN
                </button>
              </div>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}