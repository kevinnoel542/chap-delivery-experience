import { cn } from "@/lib/utils";
import { Footprints, Bike } from "lucide-react";

type ModeType = "foot" | "bicycle";

interface ModeBadgeProps {
  mode: ModeType;
  className?: string;
  showLabel?: boolean;
}

export function ModeBadge({ mode, className, showLabel = true }: ModeBadgeProps) {
  const Icon = mode === "foot" ? Footprints : Bike;
  const label = mode === "foot" ? "Foot Rider" : "Bicycle Rider";
  
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium rounded-full",
        mode === "foot" 
          ? "bg-accent text-accent-foreground" 
          : "bg-primary/20 text-primary",
        className
      )}
    >
      <Icon className="w-3.5 h-3.5" />
      {showLabel && label}
    </span>
  );
}
