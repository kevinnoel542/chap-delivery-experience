import { Footprints, Bike, Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { Card } from "@/components/ui/card";

type ModeType = "foot" | "bicycle";

interface ModeSelectorProps {
  selectedMode: ModeType | null;
  onModeSelect: (mode: ModeType) => void;
}

interface ModeCardProps {
  mode: ModeType;
  title: string;
  description: string;
  icon: React.ReactNode;
  selected: boolean;
  onClick: () => void;
}

function ModeCard({ mode, title, description, icon, selected, onClick }: ModeCardProps) {
  return (
    <Card
      onClick={onClick}
      className={cn(
        "relative p-6 cursor-pointer transition-all duration-200 border-2",
        selected 
          ? "border-primary bg-primary/10 shadow-lg" 
          : "border-border bg-card hover:border-primary/50"
      )}
    >
      {selected && (
        <div className="absolute top-4 right-4 w-6 h-6 rounded-full bg-primary flex items-center justify-center">
          <Check className="w-4 h-4 text-primary-foreground" />
        </div>
      )}
      <div className={cn(
        "w-14 h-14 rounded-2xl flex items-center justify-center mb-4",
        selected ? "bg-primary" : "bg-secondary"
      )}>
        <div className={selected ? "text-primary-foreground" : "text-secondary-foreground"}>
          {icon}
        </div>
      </div>
      <h3 className="text-lg font-semibold text-foreground mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground">{description}</p>
    </Card>
  );
}

export function ModeSelector({ selectedMode, onModeSelect }: ModeSelectorProps) {
  return (
    <div className="space-y-4">
      <ModeCard
        mode="foot"
        title="Foot Delivery"
        description="Short-distance jobs within walking range. Lower weight limit, perfect for documents and small packages."
        icon={<Footprints className="w-7 h-7" />}
        selected={selectedMode === "foot"}
        onClick={() => onModeSelect("foot")}
      />
      <ModeCard
        mode="bicycle"
        title="Bicycle Delivery"
        description="Medium-distance jobs across neighborhoods. Higher earning potential with faster delivery times."
        icon={<Bike className="w-7 h-7" />}
        selected={selectedMode === "bicycle"}
        onClick={() => onModeSelect("bicycle")}
      />
    </div>
  );
}
