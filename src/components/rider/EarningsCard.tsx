import { Star, TrendingUp } from "lucide-react";
import { Card } from "@/components/ui/card";

interface EarningsCardProps {
  earnings: number;
  jobsCompleted: number;
  rating: number;
}

export function EarningsCard({ earnings, jobsCompleted, rating }: EarningsCardProps) {
  return (
    <Card className="p-6 bg-card border-border">
      <div className="text-center mb-6">
        <p className="text-sm text-muted-foreground mb-1">Today's Earnings</p>
        <p className="text-4xl font-bold text-foreground">
          <span className="text-2xl">TZS</span> {earnings.toLocaleString()}
        </p>
      </div>
      <div className="flex items-center justify-around">
        <div className="text-center">
          <div className="flex items-center justify-center gap-1 text-primary mb-1">
            <TrendingUp className="w-4 h-4" />
          </div>
          <p className="text-2xl font-bold text-foreground">{jobsCompleted}</p>
          <p className="text-xs text-muted-foreground">Jobs Done</p>
        </div>
        <div className="w-px h-12 bg-border" />
        <div className="text-center">
          <div className="flex items-center justify-center gap-1 text-primary mb-1">
            <Star className="w-4 h-4 fill-current" />
          </div>
          <p className="text-2xl font-bold text-foreground">{rating.toFixed(1)}</p>
          <p className="text-xs text-muted-foreground">Rating</p>
        </div>
      </div>
    </Card>
  );
}
