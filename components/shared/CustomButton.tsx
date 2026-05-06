'use client'
import React from 'react';
import AnimatedCard from '@/components/shared/AnimatedCard';
import { cn } from '@/lib/utils'; 

export interface CustomButtonProps {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  icon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  showArrow?: boolean;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  fullWidth?: boolean;
  hoverScale?: number;
  hoverColor?: string;
}

const CustomButton = ({
  variant = 'primary',
  size = 'md',
  children,
  icon,
  rightIcon,
  showArrow = true,
  className,
  onClick,
  disabled = false,
  type = 'button',
  fullWidth = false,
  hoverScale = 1.05,
  hoverColor,
}: CustomButtonProps) => {
  
  // Size configurations
  const sizes = {
    sm: {
      padding: 'px-6 py-2.5',
      text: 'text-sm',
      arrowSize: 'w-6 h-6',
      gap: 'gap-3',
    },
    md: {
      padding: 'px-8 py-3.5',
      text: 'text-sm',
      arrowSize: 'w-7 h-7',
      gap: 'gap-4',
    },
    lg: {
      padding: 'px-10 py-4',
      text: 'text-xl',
      arrowSize: 'w-10 h-10',
      gap: 'gap-6',
    },
  };

  // Variant configurations
  const variants = {
    primary: {
      button: 'bg-black text-white border border-white/10',
      arrow: 'bg-yellow-400 text-black',
      hover: 'hover:bg-black/90',
    },
    secondary: {
      button: 'bg-yellow-400 text-black',
      arrow: 'bg-black text-white',
      hover: 'hover:bg-yellow-500',
    },
    outline: {
      button: 'bg-transparent text-black border border-black/20',
      arrow: 'bg-yellow-400 text-black',
      hover: 'hover:bg-black/5',
    },
  };

  const currentSize = sizes[size];
  const currentVariant = variants[variant];

  // Default arrow icon
  const ArrowIcon = () => (
    <span 
      className={cn(
        "rounded-full flex items-center justify-center font-black transition-all",
        currentSize.arrowSize,
        currentVariant.arrow
      )}
    >
      →
    </span>
  );

  const buttonContent = (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={cn(
        "relative rounded-full flex items-center font-bold transition-all duration-300",
        currentSize.padding,
        currentSize.text,
        currentSize.gap,
        currentVariant.button,
        currentVariant.hover,
        fullWidth && "w-full justify-center",
        disabled && "opacity-50 cursor-not-allowed hover:scale-100",
        className
      )}
      style={{
        transform: `scale(${hoverScale})`,
        transition: 'transform 0.3s ease, background-color 0.3s ease',
        ...(hoverColor && { '--hover-bg': hoverColor } as React.CSSProperties)
      }}
      onMouseEnter={(e) => {
        if (hoverColor && !disabled) {
          e.currentTarget.style.backgroundColor = hoverColor;
        }
      }}
      onMouseLeave={(e) => {
        if (hoverColor && !disabled) {
          e.currentTarget.style.backgroundColor = '';
        }
      }}
    >
      {icon && <span className="flex-shrink-0">{icon}</span>}
      <span className="flex-shrink-0">{children}</span>
      {showArrow && (rightIcon || <ArrowIcon />)}
    </button>
  );

  // Wrap with AnimatedCard if hoverScale is provided
  if (hoverScale && hoverScale !== 1) {
    return (
      <AnimatedCard hoverScale={hoverScale} hoverColor={hoverColor}>
        {buttonContent}
      </AnimatedCard>
    );
  }

  return buttonContent;
};

export default CustomButton;