import { cn } from "@/lib/utils";
import React from "react";

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {}

const GlassCard: React.FC<GlassCardProps> = ({ className, children, ...props }) => {
  return (
    <div
      className={cn(
        "rounded-lg border border-border bg-background/60 backdrop-blur-xl",
        "[box-shadow:var(--shadow-elevated)] transition-transform duration-200",
        "hover:scale-[1.01]",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default GlassCard;
