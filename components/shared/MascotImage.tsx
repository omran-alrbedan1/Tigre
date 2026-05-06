"use client";

import Image from "next/image";
import { useLocale } from "next-intl";

interface MascotImageProps {
  imageSrc: string;
  height?: string;
  width?: string;
  decorativeHeight?: string;
  decorativeWidth?: string;
  borderRadius?: string;
  scale?: string;
  backgroundColor?: string;
  borderColor?: string;
  alt?: string;
}

export default function MascotImage({
  imageSrc,
  height = "h-[250px] sm:h-[350px] md:h-[450px] lg:h-[550px] xl:h-[600px]",
  width = "w-full",
  decorativeHeight = "h-[40%] sm:h-[58%] md:h-[75%] lg:h-[80%]",
  decorativeWidth = "w-[50%] sm:w-[72%] md:w-[85%] lg:w-[80%]",
  borderRadius = "100px 20px 150px 20px",
  scale = "scale-10 md:scale-110",
  backgroundColor = "bg-[#F5C518]",
  borderColor = "border-2 sm:border-[3px] border-[#63214A]",
  alt = ""
}: MascotImageProps) {
  const locale = useLocale();
  const isRTL = locale === 'ar';

  const getBorderRadius = () => {
    if (isRTL) {
      return borderRadius.split(" ").reverse().join(" ");
    }
    return borderRadius;
  };

  return (
    <div className={`relative flex justify-center items-center ${height} ${width}`}>
      
      {/* Decorative Background */}
      <div
        className={`absolute z-0 ${backgroundColor} ${borderColor}`}
        style={{
          borderRadius: getBorderRadius(),
          width: decorativeWidth,
          height: decorativeHeight,
          bottom: "4%",
          left: "50%",
          transform: "translateX(-50%)",
        }}
      />

      {/* Mascot Image */}
      <Image
        src={imageSrc}
        alt={alt}
        fill
        className={`object-contain absolute ${scale}`}
        priority
        sizes="(max-width: 640px) 550px, (max-width: 768px) 650px, (max-width: 1024px) 750px, (max-width: 1280px) 650px, 700px"
      />
    </div>
  );
}