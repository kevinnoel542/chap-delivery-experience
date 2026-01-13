import { MapPin, Package, Navigation } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ModeBadge } from "@/components/ui/mode-badge";

interface JobCardProps {
  id: string;
  packageType: string;
  distance: string;
  price: number;
  pickup: string;
  dropoff: string;
  mode: "foot" | "bicycle";
  onAccept: () => void;
}

export function JobCard({ id, packageType, distance, price, pickup, dropoff, mode, onAccept }: JobCardProps) {
  return (
    <Card className="p-4 bg-card border-border overflow-hidden">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Package className="w-5 h-5 text-primary" />
          <span className="font-medium text-foreground">{packageType}</span>
        </div>
        <ModeBadge mode={mode} showLabel={false} />
      </div>
      
      <div className="space-y-3 mb-4">
        <div className="flex items-start gap-3">
          <div className="mt-1">
            <div className="w-2 h-2 rounded-full bg-success" />
          </div>
          <div>
            <p className="text-xs text-muted-foreground">Pickup</p>
            <p className="text-sm font-medium text-foreground">{pickup}</p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <div className="mt-1">
            <div className="w-2 h-2 rounded-full bg-destructive" />
          </div>
          <div>
            <p className="text-xs text-muted-foreground">Drop-off</p>
            <p className="text-sm font-medium text-foreground">{dropoff}</p>
          </div>
        </div>
      </div>
      
      <div className="flex items-center justify-between pt-4 border-t border-border">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1 text-muted-foreground">
            <Navigation className="w-4 h-4" />
            <span className="text-sm">{distance}</span>
          </div>
          <div className="text-lg font-bold text-foreground">
            TZS {price.toLocaleString()}
          </div>
        </div>
        <Button 
          onClick={onAccept}
          className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold px-6"
        >
          ACCEPT
        </Button>
      </div>
    </Card>
  );
}
