"use client";

import { useLocale } from 'next-intl';
import { useRouter, usePathname } from 'next/navigation';
import { useTransition } from 'react';
import { Globe, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const locales = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'ar', name: 'العربية', flag: '🇸🇦' }
];

export default function LocaleSwitcher() {
  const [isPending, startTransition] = useTransition();
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const currentLocale = locales.find(l => l.code === locale);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          className={cn(
            "flex items-center gap-2 px-4 py-2 bg-black/10 backdrop-blur-md border border-white/20 rounded-xl text-white text-sm font-medium transition-all duration-200 hover:bg-white/20 hover:border-white/30 focus:outline-none focus:ring-2 focus:ring-white/20",
            isPending && "opacity-50 cursor-not-allowed"
          )}
          disabled={isPending}
        >
          <Globe className="w-4 h-4" />
          <span className="hidden sm:inline">{currentLocale?.flag}</span>
          <span className="hidden md:inline">{currentLocale?.name}</span>
          <span className="sm:hidden md:hidden">{currentLocale?.code.toUpperCase()}</span>
          <ChevronDown className="w-4 h-4" />
        </button>
      </DropdownMenuTrigger>
      
      <DropdownMenuContent 
        className="w-48 bg-color-tigre-purple border border-white/20 rounded-xl shadow-2xl"
        sideOffset={8}
      >
        {locales.map((loc) => (
          <DropdownMenuItem
            key={loc.code}
            onClick={() => {
              const pathnameWithoutLocale = pathname.replace(`/${locale}`, '') || '/';
              startTransition(() => {
                router.replace(`/${loc.code}${pathnameWithoutLocale}`);
              });
            }}
            className={cn(
              "w-full flex items-center gap-3 px-4 py-3 text-left text-sm font-medium transition-colors hover:bg-white/10 focus:outline-none focus:bg-white/10",
              loc.code === locale 
                ? "text-white bg-white/20" 
                : "text-white/80 hover:text-white"
            )}
          >
            <span className="text-lg">{loc.flag}</span>
            <span>{loc.name}</span>
            {loc.code === locale && (
              <div className="ml-auto w-2 h-2 bg-color-tigre-purple rounded-full" />
            )}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
