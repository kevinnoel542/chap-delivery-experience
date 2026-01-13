import { cn } from "@/lib/utils";

interface OnlineToggleProps {
  isOnline: boolean;
  onToggle: () => void;
}

export function OnlineToggle({ isOnline, onToggle }: OnlineToggleProps) {
  return (
    <button
      onClick={onToggle}
      className={cn(
        "relative w-full py-4 rounded-2xl font-semibold text-lg transition-all duration-300",
        isOnline 
          ? "bg-success text-success-foreground shadow-lg shadow-success/25" 
          : "bg-secondary text-secondary-foreground"
      )}
    >
      <span className="flex items-center justify-center gap-2">
        <span className={cn(
          "w-3 h-3 rounded-full animate-pulse",
          isOnline ? "bg-success-foreground" : "bg-muted-foreground"
        )} />
        {isOnline ? "You're Online" : "Go Online"}
      </span>
    </button>
  );
}
