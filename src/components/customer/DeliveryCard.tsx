import { Bike, ChevronRight, MapPin } from "lucide-react";
import { Card } from "@/components/ui/card";

interface DeliveryCardProps {
  id: string;
  destination: string;
  status: "active" | "completed" | "pending";
  date: string;
}

export function DeliveryCard({ id, destination, status, date }: DeliveryCardProps) {
  return (
    <Card className="p-4 flex items-center gap-4 hover:shadow-lg transition-shadow cursor-pointer bg-card">
      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
        <Bike className="w-6 h-6 text-primary" />
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-1">
          <MapPin className="w-4 h-4 text-muted-foreground flex-shrink-0" />
          <span className="font-medium text-foreground truncate">{destination}</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <span className="font-mono">#{id}</span>
          <span>•</span>
          <span>{date}</span>
        </div>
      </div>
      <ChevronRight className="w-5 h-5 text-muted-foreground flex-shrink-0" />
    </Card>
  );
}
