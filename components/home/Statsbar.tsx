import { useTranslations } from 'next-intl';
import { useLocale } from 'next-intl';

export default function StatsBar() {
  const locale = useLocale();
  const isRTL = locale === 'ar';
  const t = useTranslations('home');
  
  const stats = [
    { number: "500+", label: t('stats.restaurants') },
    { number: "10K+", label: t('stats.dailyOrders') },
    { number: "30 min", label: t('stats.avgDelivery') },
    { number: "4.9", label: t('stats.appRating') },
  ];

  return (
    <section className="w-full py-4 sm:py-12 bg-color-purple">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Responsive container with RTL-aware padding */}
        <div className={`
          bg-white/10 backdrop-blur-sm rounded-sm 
          py-8 sm:py-10 md:py-12 
          px-4 sm:px-6 md:px-8
          ${isRTL ? 'rtl:text-right' : 'ltr:text-left'}
        `}>
          
          {/* Responsive grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-10">
            
            {stats.map((stat) => (
              <div 
                key={stat.label} 
                className="flex flex-col items-center sm:items-center lg:items-center text-center w-full"
              >
                {/* Numbers - responsive sizing */}
                <div
                  className="text-secondary text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-2 sm:mb-3"
                  style={{ 
                    fontFamily: "'Playfair Display', serif",
                    letterSpacing: isRTL ? 'normal' : '-0.02em'
                  }}
                >
                  {stat.number}
                </div>
                
                {/* Labels - responsive with proper RTL support */}
                <div className={`
                  text-white 
                  text-[8px] xs:text-[10px] sm:text-xs md:text-sm 
                  tracking-[0.15em] sm:tracking-[0.2em] 
                  font-medium 
                  opacity-90 
                  uppercase
                  ${isRTL ? 'tracking-normal font-arabic' : ''}
                  max-w-[150px] sm:max-w-none
                  mx-auto
                `}>
                  {stat.label}
                </div>
              </div>
            ))}
            
          </div>
        </div>
      </div>
    </section>
  );
}