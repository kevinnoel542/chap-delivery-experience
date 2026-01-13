import { cn } from "@/lib/utils";

type StatusType = "online" | "offline" | "busy" | "active" | "pending" | "completed" | "cancelled";

interface StatusBadgeProps {
  status: StatusType;
  className?: string;
}

const statusStyles: Record<StatusType, string> = {
  online: "bg-success/20 text-success border-success/30",
  offline: "bg-muted text-muted-foreground border-border",
  busy: "bg-warning/20 text-warning border-warning/30",
  active: "bg-success/20 text-success border-success/30",
  pending: "bg-primary/20 text-primary border-primary/30",
  completed: "bg-success/20 text-success border-success/30",
  cancelled: "bg-destructive/20 text-destructive border-destructive/30",
};

const statusLabels: Record<StatusType, string> = {
  online: "Online",
  offline: "Offline",
  busy: "Busy",
  active: "Active",
  pending: "Pending",
  completed: "Completed",
  cancelled: "Cancelled",
};

export function StatusBadge({ status, className }: StatusBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium rounded-full border",
        statusStyles[status],
        className
      )}
    >
      <span className={cn(
        "w-1.5 h-1.5 rounded-full",
        status === "online" || status === "active" || status === "completed" ? "bg-success" :
        status === "busy" || status === "pending" ? "bg-warning" :
        status === "cancelled" ? "bg-destructive" : "bg-muted-foreground"
      )} />
      {statusLabels[status]}
    </span>
  );
}
