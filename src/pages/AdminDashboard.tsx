import { useState } from "react";
import { Users, Package, Wallet, TrendingUp } from "lucide-react";
import { AdminSidebar } from "@/components/admin/AdminSidebar";
import { StatsCard } from "@/components/admin/StatsCard";
import { RidersTable } from "@/components/admin/RidersTable";
import { JobsTable } from "@/components/admin/JobsTable";

const mockRiders = [
  { id: "R001", name: "Hamisi Juma", mode: "foot" as const, status: "online" as const, rating: 4.9, todaysEarnings: 45500 },
  { id: "R002", name: "Grace Mwangi", mode: "bicycle" as const, status: "busy" as const, rating: 4.8, todaysEarnings: 62000 },
  { id: "R003", name: "John Makori", mode: "foot" as const, status: "online" as const, rating: 4.7, todaysEarnings: 38000 },
  { id: "R004", name: "Sarah Kimani", mode: "bicycle" as const, status: "offline" as const, rating: 4.9, todaysEarnings: 0 },
  { id: "R005", name: "Peter Omondi", mode: "foot" as const, status: "busy" as const, rating: 4.6, todaysEarnings: 52000 },
  { id: "R006", name: "Faith Wambui", mode: "bicycle" as const, status: "online" as const, rating: 4.8, todaysEarnings: 71500 },
];

const mockJobs = [
  { id: "CHP2851", pickup: "CRDB Bank, Samora", dropoff: "NMB Tower", rider: "Hamisi Juma", riderMode: "foot" as const, status: "active" as const },
  { id: "CHP2850", pickup: "Kariakoo Market", dropoff: "Mlimani City", rider: "Grace Mwangi", riderMode: "bicycle" as const, status: "active" as const },
  { id: "CHP2849", pickup: "Slipway", dropoff: "Masaki", rider: null, riderMode: null, status: "pending" as const },
  { id: "CHP2848", pickup: "City Centre", dropoff: "Mikocheni B", rider: "Faith Wambui", riderMode: "bicycle" as const, status: "completed" as const },
  { id: "CHP2847", pickup: "Posta", dropoff: "Upanga", rider: "John Makori", riderMode: "foot" as const, status: "completed" as const },
];

export default function AdminDashboard() {
  const [activeSection, setActiveSection] = useState("dashboard");
  const [modeFilter, setModeFilter] = useState<"all" | "foot" | "bicycle">("all");

  return (
    <div className="flex min-h-screen bg-background">
      <AdminSidebar activeSection={activeSection} onSectionChange={setActiveSection} />
      
      <main className="flex-1 p-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-foreground">Dashboard</h1>
            <p className="text-muted-foreground">Welcome to CHAP Operations Center</p>
          </div>
          
          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <StatsCard
              title="Active Riders"
              value={mockRiders.filter(r => r.status !== "offline").length}
              change="+12% from yesterday"
              changeType="positive"
              icon={<Users className="w-6 h-6" />}
            />
            <StatsCard
              title="Today's Deliveries"
              value={147}
              change="+8% from yesterday"
              changeType="positive"
              icon={<Package className="w-6 h-6" />}
            />
            <StatsCard
              title="Today's Revenue"
              value="TZS 2.4M"
              change="+15% from yesterday"
              changeType="positive"
              icon={<Wallet className="w-6 h-6" />}
            />
            <StatsCard
              title="Avg. Delivery Time"
              value="18 min"
              change="-3 min from yesterday"
              changeType="positive"
              icon={<TrendingUp className="w-6 h-6" />}
            />
          </div>
          
          {/* Tables */}
          <div className="space-y-6">
            <RidersTable 
              riders={mockRiders} 
              modeFilter={modeFilter}
              onModeFilterChange={setModeFilter}
            />
            <JobsTable jobs={mockJobs} />
          </div>
        </div>
      </main>
    </div>
  );
}
