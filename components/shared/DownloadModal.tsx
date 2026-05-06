"use client";

import { useTranslations } from 'next-intl';
import { useLocale } from 'next-intl';
import Image from "next/image";
import { X } from "lucide-react";
import { images } from "@/constants/images";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { APPLE_STORE_URL, GOOGLE_PLAY_URL } from '@/constants';

interface DownloadModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function DownloadModal({ isOpen, onClose }: DownloadModalProps) {
  const locale = useLocale();
  const isRTL = locale === 'ar';
  const t = useTranslations('common');

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="bg-black/20 backdrop-blur-xl border-white/20 max-w-md mx-4">
        <DialogHeader>
          <DialogTitle className="sr-only">
            {t('downloadModal.title') || 'Download App'}
          </DialogTitle>
          <DialogDescription className="sr-only">
            {t('downloadModal.description') || 'Download the app and start ordering delicious food'}
          </DialogDescription>
        </DialogHeader>
        
        
        <div className="flex flex-col items-center py-4">
          {/* Logo */}
          <div className="flex justify-center mb-6">
            <Image
              src={images.logo}
              height={60}
              width={60}
              alt="Tigre Logo"
              className="w-32 h-32"
            />
          </div>

          {/* Description */}
          <p className={`
            text-white/80 text-center text-sm sm:text-base font-body mb-8
            ${isRTL ? 'font-arabic' : ''}
          `}>
            {t('downloadModal.description') || 'Download the app and start ordering delicious food'}
          </p>

          {/* Store Buttons */}
          <div className="flex flex-col gap-3 w-full">
            {/* Apple Store */}
            <a
              href={APPLE_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl px-5 py-4 transition-all duration-200 group"
            >
              <Image
                src="/icons/apple.svg"
                alt="App Store"
                width={32}
                height={32}
                className="shrink-0"
              />
              <div className="flex-1">
                <p className="text-white/60 text-xs">{t('downloadModal.downloadOn') || 'Download on the'}</p>
                <p className="text-white font-bold text-base leading-tight">{t('downloadModal.appStore') || 'App Store'}</p>
              </div>
              <svg className="w-4 h-4 text-white/40 group-hover:text-yellow-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isRTL ? "M15 5l-7 7 7 7" : "M9 5l7 7-7 7"} />
              </svg>
            </a>

            {/* Google Play */}
            <a
              href={GOOGLE_PLAY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl px-5 py-4 transition-all duration-200 group"
            >
              <Image
                src="/icons/google.svg"
                alt="Google Play"
                width={32}
                height={32}
                className="shrink-0"
              />
              <div className="flex-1">
                <p className="text-white/60 text-xs">{t('downloadModal.getItOn') || 'Get it on'}</p>
                <p className="text-white font-bold text-base leading-tight">{t('downloadModal.googlePlay') || 'Google Play'}</p>
              </div>
              <svg className="w-4 h-4 text-white/40 group-hover:text-yellow-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isRTL ? "M15 5l-7 7 7 7" : "M9 5l7 7-7 7"} />
              </svg>
            </a>
          </div>

          {/* Footer text */}
          <div className="mt-6 text-center">
            <p className="text-white/40 text-xs">
              {t('downloadModal.footerText') || 'Available for iOS and Android devices'}
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}