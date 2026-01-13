import { Star } from "lucide-react";
import { Card } from "@/components/ui/card";
import { StatusBadge } from "@/components/ui/status-badge";
import { ModeBadge } from "@/components/ui/mode-badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface Rider {
  id: string;
  name: string;
  mode: "foot" | "bicycle";
  status: "online" | "offline" | "busy";
  rating: number;
  todaysEarnings: number;
}

interface RidersTableProps {
  riders: Rider[];
  modeFilter: "all" | "foot" | "bicycle";
  onModeFilterChange: (mode: "all" | "foot" | "bicycle") => void;
}

export function RidersTable({ riders, modeFilter, onModeFilterChange }: RidersTableProps) {
  const filteredRiders = modeFilter === "all" 
    ? riders 
    : riders.filter((rider) => rider.mode === modeFilter);

  return (
    <Card className="bg-card">
      <div className="p-4 border-b border-border flex items-center justify-between">
        <h3 className="font-semibold text-foreground">Rider Management</h3>
        <div className="flex items-center gap-2">
          <button
            onClick={() => onModeFilterChange("all")}
            className={`px-3 py-1.5 text-sm rounded-lg transition-colors ${
              modeFilter === "all" 
                ? "bg-primary text-primary-foreground" 
                : "bg-muted text-muted-foreground hover:text-foreground"
            }`}
          >
            All
          </button>
          <button
            onClick={() => onModeFilterChange("foot")}
            className={`px-3 py-1.5 text-sm rounded-lg transition-colors ${
              modeFilter === "foot" 
                ? "bg-primary text-primary-foreground" 
                : "bg-muted text-muted-foreground hover:text-foreground"
            }`}
          >
            Foot
          </button>
          <button
            onClick={() => onModeFilterChange("bicycle")}
            className={`px-3 py-1.5 text-sm rounded-lg transition-colors ${
              modeFilter === "bicycle" 
                ? "bg-primary text-primary-foreground" 
                : "bg-muted text-muted-foreground hover:text-foreground"
            }`}
          >
            Bicycle
          </button>
        </div>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Rider</TableHead>
            <TableHead>Mode</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Rating</TableHead>
            <TableHead className="text-right">Today's Earnings</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredRiders.map((rider) => (
            <TableRow key={rider.id}>
              <TableCell className="font-medium">{rider.name}</TableCell>
              <TableCell>
                <ModeBadge mode={rider.mode} />
              </TableCell>
              <TableCell>
                <StatusBadge status={rider.status} />
              </TableCell>
              <TableCell>
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 text-primary fill-current" />
                  <span>{rider.rating.toFixed(1)}</span>
                </div>
              </TableCell>
              <TableCell className="text-right font-medium">
                TZS {rider.todaysEarnings.toLocaleString()}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  );
}
