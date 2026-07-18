import React from "react";

interface RevealProps {
  children: React.ReactNode;
  width?: "fit-content" | "100%";
  delay?: number;
  yOffset?: number; // Kept for interface compatibility
}

export default function Reveal({
  children,
  width = "100%",
  delay = 0,
}: RevealProps) {
  return (
    <div
      className="animate-fade-up opacity-0"
      style={{
        width,
        animationDelay: `${delay}s`,
      }}
    >
      {children}
    </div>
  );
}
