import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ModeSelector } from "@/components/rider/ModeSelector";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function RiderModeSelection() {
  const [selectedMode, setSelectedMode] = useState<"foot" | "bicycle" | null>(null);
  const navigate = useNavigate();

  const handleConfirm = () => {
    if (selectedMode) {
      navigate("/rider", { state: { mode: selectedMode } });
    }
  };

  return (
    <div className="min-h-screen bg-[hsl(220,14%,10%)] flex flex-col">
      <div className="flex-1 px-6 py-8">
        <div className="max-w-md mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-[hsl(0,0%,98%)] mb-2">
              Choose Your Delivery Mode
            </h1>
            <p className="text-[hsl(220,9%,65%)]">
              Select how you want to deliver. You can change this later in settings.
            </p>
          </div>
          
          <div className="space-y-4">
            <ModeCard
              mode="foot"
              title="Foot Delivery"
              description="Short-distance jobs within walking range. Lower weight limit, perfect for documents and small packages."
              selected={selectedMode === "foot"}
              onClick={() => setSelectedMode("foot")}
            />
            <ModeCard
              mode="bicycle"
              title="Bicycle Delivery"
              description="Medium-distance jobs across neighborhoods. Higher earning potential with faster delivery times."
              selected={selectedMode === "bicycle"}
              onClick={() => setSelectedMode("bicycle")}
            />
          </div>
        </div>
      </div>
      
      <div className="p-6 border-t border-[hsl(220,14%,20%)]">
        <Button
          onClick={handleConfirm}
          disabled={!selectedMode}
          className="w-full py-6 text-lg font-semibold bg-primary text-primary-foreground hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Confirm Mode
          <ArrowRight className="w-5 h-5 ml-2" />
        </Button>
      </div>
    </div>
  );
}

import { Footprints, Bike, Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { Card } from "@/components/ui/card";

interface ModeCardProps {
  mode: "foot" | "bicycle";
  title: string;
  description: string;
  selected: boolean;
  onClick: () => void;
}

function ModeCard({ mode, title, description, selected, onClick }: ModeCardProps) {
  const Icon = mode === "foot" ? Footprints : Bike;
  
  return (
    <Card
      onClick={onClick}
      className={cn(
        "relative p-6 cursor-pointer transition-all duration-200 border-2",
        selected 
          ? "border-primary bg-primary/10" 
          : "border-[hsl(220,14%,20%)] bg-[hsl(220,14%,14%)] hover:border-primary/50"
      )}
    >
      {selected && (
        <div className="absolute top-4 right-4 w-6 h-6 rounded-full bg-primary flex items-center justify-center">
          <Check className="w-4 h-4 text-primary-foreground" />
        </div>
      )}
      <div className={cn(
        "w-14 h-14 rounded-2xl flex items-center justify-center mb-4",
        selected ? "bg-primary" : "bg-[hsl(220,14%,20%)]"
      )}>
        <Icon className={cn("w-7 h-7", selected ? "text-primary-foreground" : "text-[hsl(0,0%,98%)]")} />
      </div>
      <h3 className="text-lg font-semibold text-[hsl(0,0%,98%)] mb-2">{title}</h3>
      <p className="text-sm text-[hsl(220,9%,65%)]">{description}</p>
    </Card>
  );
}
