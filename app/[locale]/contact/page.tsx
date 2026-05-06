import { images } from '@/constants/images'
import Image from 'next/image'
import React from 'react'
import AnimatedSection from '@/components/shared/AnimatedSection'
import CustomButton from '@/components/shared/CustomButton'
import { useTranslations } from 'next-intl'
import { useLocale } from 'next-intl'

const ContactPage = () => {
  const locale = useLocale()
  const isRTL = locale === 'ar'
  const t = useTranslations('contact')

  return (
    <section 
      className="relative w-full min-h-screen overflow-hidden flex items-center bg-[#2D0A24] py-8 sm:py-12 px-4 sm:px-6" 
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      {/* 1. Background Texture */}
      <div className="absolute inset-0 z-0 opacity-60">
        <Image
          src={images.heroBackground}
          alt="Textured background"
          fill
          className={`object-cover ${isRTL ? 'scale-x-[-1]' : ''}`}
          priority
        />
      </div>

      <div className="container mx-auto relative mt-12 z-10 grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
        
        <div className="hidden md:block relative h-75 sm:h-100 lg:h-125 mt-4 order-1 lg:order-2">
        </div>

        <div className="w-full max-w-xl mx-auto lg:mx-0 order-2 lg:order-1">
          <div className="bg-white/10 backdrop-blur-md border border-white/20 p-5 sm:p-6 md:p-8 lg:p-10 rounded-2xl sm:rounded-3xl md:rounded-[3rem] shadow-2xl">
            
            {/* Header */}
            <div className="text-center mb-4 sm:mb-5 md:mb-6">
              <div className="flex items-center justify-center gap-2 sm:gap-3 mb-1 sm:mb-2">
                <div className="w-4 sm:w-5 md:w-6 h-0.5 sm:h-1 bg-yellow-500" />
                <span className="text-yellow-500 font-bold uppercase tracking-widest text-[8px] sm:text-[9px] md:text-[10px]">
                  {t('getInTouch')}
                </span>
                <div className="w-4 sm:w-5 md:w-6 h-0.5 sm:h-1 bg-yellow-500" />
              </div>
              <h1 className="text-white text-2xl sm:text-3xl md:text-4xl font-serif font-black mb-1 sm:mb-2">
                {t('subtitle')}
              </h1>
              <p className="text-white/70 text-xs sm:text-sm leading-relaxed max-w-xs mx-auto font-serif px-2">
                {t('subdescription')}
              </p>
            </div>

            {/* Form */}
            <form className="space-y-3 sm:space-y-4 md:space-y-5 mt-6 sm:mt-8 md:mt-10 lg:mt-12">
              {/* Name & Phone Row - Stack on mobile, side by side on tablet+ */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div className="space-y-1">
                  <label className="text-white font-bold text-[10px] sm:text-xs ml-1 font-serif block">
                    {t('form.name')}
                  </label>
                  <input
                    type="text"
                    placeholder={t('form.placeholders.name')}
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl bg-white text-gray-800 text-xs sm:text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-all"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-white font-bold text-[10px] sm:text-xs ml-1 font-serif block">
                    {t('form.phone')}
                  </label>
                  <input
                    type="text"
                    placeholder={t('form.placeholders.phone')}
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl bg-white text-gray-800 text-xs sm:text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-all"
                  />
                </div>
              </div>

              {/* Email Field */}
              <div className="space-y-1">
                <label className="text-white font-bold text-[10px] sm:text-xs ml-1 font-serif block">
                  {t('form.email')}
                </label>
                <input
                  type="email"
                  placeholder={t('form.placeholders.email')}
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl bg-white text-gray-800 text-xs sm:text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-all"
                />
              </div>

              {/* Message Field */}
              <div className="space-y-1">
                <label className="text-white font-bold text-[10px] sm:text-xs ml-1 font-serif block">
                  {t('form.message')}
                </label>
                <textarea
                  rows={3}
                  placeholder={t('form.placeholders.message')}
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl bg-white text-gray-800 text-xs sm:text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-all resize-none"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-2 sm:pt-3 md:pt-4">
                  <div className="flex justify-center sm:block">
                    <CustomButton size="md">
                      {t('form.send')}
                    </CustomButton>
                  </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactPage