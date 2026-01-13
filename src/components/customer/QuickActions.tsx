import { Package, Calendar } from "lucide-react";
import { cn } from "@/lib/utils";

interface QuickActionProps {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
  disabled?: boolean;
  onClick?: () => void;
}

function QuickAction({ icon, label, active, disabled, onClick }: QuickActionProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={cn(
        "flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-medium transition-all",
        active 
          ? "bg-primary text-primary-foreground shadow-md" 
          : disabled 
            ? "bg-muted text-muted-foreground cursor-not-allowed opacity-60" 
            : "bg-card text-foreground border border-border hover:border-primary/50"
      )}
    >
      {icon}
      <span>{label}</span>
    </button>
  );
}

export function QuickActions() {
  return (
    <div className="flex gap-3">
      <QuickAction
        icon={<Package className="w-5 h-5" />}
        label="Send Item"
        active
      />
      <QuickAction
        icon={<Calendar className="w-5 h-5" />}
        label="Scheduled"
        disabled
      />
    </div>
  );
}
