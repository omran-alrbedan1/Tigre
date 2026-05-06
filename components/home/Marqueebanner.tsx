import { useTranslations } from 'next-intl';

export default function MarqueeBanner() {
  const t = useTranslations('home');
  
  const marqueeItems = [
    t('marquee.realTimeTracking'),
    t('marquee.tasteThePower'),
    t('marquee.freeDelivery'),
    t('marquee.orderInSeconds'),
    t('marquee.minuteGuarantee'),
    t('marquee.realTimeTracking'),
    t('marquee.tasteThePower'),
    t('marquee.freeDelivery'),
    t('marquee.orderInSeconds'),
    t('marquee.minuteGuarantee'),
  ];

  return (
    <div className="bg-secondary py-6 overflow-hidden marquee-wrapper">
      <div className="flex animate-marquee gap-12 whitespace-nowrap w-max">
        {marqueeItems.map((item, i) => (
          <span
            key={i}
            className="font-body text-sm font-semibold text-black flex items-center gap-2"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-black inline-block" />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}