"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface AnimatedCardProps {
  children: ReactNode;
  className?: string;
  hoverScale?: number;
  hoverColor?: string;
  delay?: number;
  index?: number;
}

export default function AnimatedCard({
  children,
  className = "",
  hoverScale = 1.05,
  hoverColor = "",
  delay = 0,
  index = 0
}: AnimatedCardProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.5,
        delay: delay + index * 0.15,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
      whileHover={{
        scale: hoverScale,
        borderColor: hoverColor || "#F5C518",
        boxShadow: hoverColor ? `0 20px 40px -12px ${hoverColor}40` : "0 20px 40px -12px rgba(245, 197, 24, 0.4)",
        transition: { duration: 0.3 }
      }}
    >
      {children}
    </motion.div>
  );
}
