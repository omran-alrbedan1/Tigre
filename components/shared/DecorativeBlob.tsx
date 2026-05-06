"use client";

interface DecorativeBlobProps {
  className?: string;
  color?: string;
  size?: "sm" | "md" | "lg";
  position?: "top-left" | "top-right" | "bottom-left" | "bottom-right" | "center";
}

export default function DecorativeBlob({
  className = "",
  color = "#F5C518",
  size = "md",
  position = "center"
}: DecorativeBlobProps) {
  const sizeClasses = {
    sm: "w-32 h-32",
    md: "w-64 h-64",
    lg: "w-96 h-96"
  };

  const positionClasses = {
    "top-left": "top-0 left-0",
    "top-right": "top-0 right-0",
    "bottom-left": "bottom-0 left-0",
    "bottom-right": "bottom-0 right-0",
    "center": "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
  };

  return (
    <div
      className={`absolute rounded-full opacity-20 blur-xl ${sizeClasses[size]} ${positionClasses[position]} ${className}`}
      style={{ backgroundColor: color }}
    />
  );
}
