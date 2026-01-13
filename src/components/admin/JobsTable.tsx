import { ArrowRight } from "lucide-react";
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

interface Job {
  id: string;
  pickup: string;
  dropoff: string;
  rider: string | null;
  riderMode: "foot" | "bicycle" | null;
  status: "pending" | "active" | "completed" | "cancelled";
}

interface JobsTableProps {
  jobs: Job[];
}

export function JobsTable({ jobs }: JobsTableProps) {
  return (
    <Card className="bg-card">
      <div className="p-4 border-b border-border">
        <h3 className="font-semibold text-foreground">Real-Time Jobs</h3>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Job ID</TableHead>
            <TableHead>Route</TableHead>
            <TableHead>Assigned Rider</TableHead>
            <TableHead>Mode</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {jobs.map((job) => (
            <TableRow key={job.id}>
              <TableCell className="font-mono text-sm">{job.id}</TableCell>
              <TableCell>
                <div className="flex items-center gap-2 text-sm">
                  <span className="truncate max-w-[120px]">{job.pickup}</span>
                  <ArrowRight className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                  <span className="truncate max-w-[120px]">{job.dropoff}</span>
                </div>
              </TableCell>
              <TableCell>
                {job.rider || <span className="text-muted-foreground">Unassigned</span>}
              </TableCell>
              <TableCell>
                {job.riderMode ? (
                  <ModeBadge mode={job.riderMode} showLabel={false} />
                ) : (
                  <span className="text-muted-foreground">—</span>
                )}
              </TableCell>
              <TableCell>
                <StatusBadge status={job.status} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  );
}
