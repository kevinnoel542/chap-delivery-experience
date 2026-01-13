import { useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { Settings, User, Star, TrendingUp, MapPin, Package, Navigation } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Footprints, Bike } from "lucide-react";

// Rider-specific dark theme colors
const dark = {
  bg: "hsl(220, 14%, 10%)",
  card: "hsl(220, 14%, 14%)",
  border: "hsl(220, 14%, 20%)",
  text: "hsl(0, 0%, 98%)",
  muted: "hsl(220, 9%, 65%)",
  primary: "hsl(45, 100%, 51%)",
  success: "hsl(142, 76%, 36%)",
};

function ModeBadge({ mode }: { mode: "foot" | "bicycle" }) {
  const Icon = mode === "foot" ? Footprints : Bike;
  const label = mode === "foot" ? "Foot Rider" : "Bicycle Rider";
  
  return (
    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium rounded-full bg-primary/20 text-primary">
      <Icon className="w-3.5 h-3.5" />
      {label}
    </span>
  );
}

function OnlineToggle({ isOnline, onToggle }: { isOnline: boolean; onToggle: () => void }) {
  return (
    <button
      onClick={onToggle}
      className={cn(
        "relative w-full py-4 rounded-2xl font-semibold text-lg transition-all duration-300",
        isOnline 
          ? "bg-success text-success-foreground shadow-lg" 
          : `bg-[${dark.border}] text-[${dark.text}]`
      )}
      style={!isOnline ? { backgroundColor: dark.border, color: dark.text } : {}}
    >
      <span className="flex items-center justify-center gap-2">
        <span className={cn(
          "w-3 h-3 rounded-full",
          isOnline ? "bg-success-foreground animate-pulse" : "bg-[hsl(220,9%,65%)]"
        )} />
        {isOnline ? "You're Online" : "Go Online"}
      </span>
    </button>
  );
}

function EarningsCard({ earnings, jobsCompleted, rating }: { earnings: number; jobsCompleted: number; rating: number }) {
  return (
    <Card className="p-6" style={{ backgroundColor: dark.card, borderColor: dark.border }}>
      <div className="text-center mb-6">
        <p className="text-sm mb-1" style={{ color: dark.muted }}>Today's Earnings</p>
        <p className="text-4xl font-bold" style={{ color: dark.text }}>
          <span className="text-2xl">TZS</span> {earnings.toLocaleString()}
        </p>
      </div>
      <div className="flex items-center justify-around">
        <div className="text-center">
          <div className="flex items-center justify-center gap-1 text-primary mb-1">
            <TrendingUp className="w-4 h-4" />
          </div>
          <p className="text-2xl font-bold" style={{ color: dark.text }}>{jobsCompleted}</p>
          <p className="text-xs" style={{ color: dark.muted }}>Jobs Done</p>
        </div>
        <div className="w-px h-12" style={{ backgroundColor: dark.border }} />
        <div className="text-center">
          <div className="flex items-center justify-center gap-1 text-primary mb-1">
            <Star className="w-4 h-4 fill-current" />
          </div>
          <p className="text-2xl font-bold" style={{ color: dark.text }}>{rating.toFixed(1)}</p>
          <p className="text-xs" style={{ color: dark.muted }}>Rating</p>
        </div>
      </div>
    </Card>
  );
}

function JobCard({ job, onAccept }: { job: typeof availableJobs[0]; onAccept: () => void }) {
  const ModeIcon = job.mode === "foot" ? Footprints : Bike;
  
  return (
    <Card className="p-4 overflow-hidden" style={{ backgroundColor: dark.card, borderColor: dark.border }}>
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Package className="w-5 h-5 text-primary" />
          <span className="font-medium" style={{ color: dark.text }}>{job.packageType}</span>
        </div>
        <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-primary/20">
          <ModeIcon className="w-4 h-4 text-primary" />
        </span>
      </div>
      
      <div className="space-y-3 mb-4">
        <div className="flex items-start gap-3">
          <div className="mt-1">
            <div className="w-2 h-2 rounded-full bg-success" />
          </div>
          <div>
            <p className="text-xs" style={{ color: dark.muted }}>Pickup</p>
            <p className="text-sm font-medium" style={{ color: dark.text }}>{job.pickup}</p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <div className="mt-1">
            <div className="w-2 h-2 rounded-full bg-destructive" />
          </div>
          <div>
            <p className="text-xs" style={{ color: dark.muted }}>Drop-off</p>
            <p className="text-sm font-medium" style={{ color: dark.text }}>{job.dropoff}</p>
          </div>
        </div>
      </div>
      
      <div className="flex items-center justify-between pt-4" style={{ borderTop: `1px solid ${dark.border}` }}>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1" style={{ color: dark.muted }}>
            <Navigation className="w-4 h-4" />
            <span className="text-sm">{job.distance}</span>
          </div>
          <div className="text-lg font-bold" style={{ color: dark.text }}>
            TZS {job.price.toLocaleString()}
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

const availableJobs = [
  { id: "JB001", packageType: "Documents", distance: "0.8 km", price: 3500, pickup: "CRDB Bank, Samora Ave", dropoff: "NMB Tower, Ohio St", mode: "foot" as const },
  { id: "JB002", packageType: "Small Package", distance: "2.5 km", price: 6500, pickup: "Kariakoo Market", dropoff: "Mlimani City Mall", mode: "bicycle" as const },
  { id: "JB003", packageType: "Food Delivery", distance: "1.2 km", price: 4000, pickup: "Slipway Restaurant", dropoff: "Masaki Apartments", mode: "foot" as const },
  { id: "JB004", packageType: "Electronics", distance: "3.8 km", price: 8500, pickup: "City Centre, Posta", dropoff: "Mikocheni B", mode: "bicycle" as const },
];

function getGreeting() {
  const hour = new Date().getHours();
  if (hour < 12) return "Good Morning";
  if (hour < 17) return "Good Afternoon";
  return "Good Evening";
}

export default function RiderApp() {
  const location = useLocation();
  const [isOnline, setIsOnline] = useState(false);
  const [riderMode] = useState<"foot" | "bicycle">(location.state?.mode || "foot");
  const riderName = "Hamisi";

  const filteredJobs = availableJobs.filter((job) => job.mode === riderMode);

  return (
    <div className="min-h-screen" style={{ backgroundColor: dark.bg }}>
      {/* Header */}
      <header className="px-4 py-4 flex items-center justify-between" style={{ borderBottom: `1px solid ${dark.border}` }}>
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
            <User className="w-5 h-5 text-primary-foreground" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <p className="font-semibold" style={{ color: dark.text }}>{getGreeting()}, {riderName}</p>
            </div>
            <ModeBadge mode={riderMode} />
          </div>
        </div>
        <Link to="/rider/mode">
          <Button variant="ghost" size="icon" className="hover:bg-[hsl(220,14%,20%)]" style={{ color: dark.muted }}>
            <Settings className="w-5 h-5" />
          </Button>
        </Link>
      </header>

      <main className="px-4 py-6 space-y-6 max-w-md mx-auto pb-8">
        <OnlineToggle isOnline={isOnline} onToggle={() => setIsOnline(!isOnline)} />
        
        <EarningsCard earnings={45500} jobsCompleted={8} rating={4.9} />
        
        <section>
          <h2 className="text-lg font-semibold mb-4" style={{ color: dark.text }}>
            Available Requests
            <span className="text-sm font-normal ml-2" style={{ color: dark.muted }}>
              ({filteredJobs.length} jobs)
            </span>
          </h2>
          <div className="space-y-4">
            {filteredJobs.length > 0 ? (
              filteredJobs.map((job) => (
                <JobCard
                  key={job.id}
                  job={job}
                  onAccept={() => console.log("Accepted job:", job.id)}
                />
              ))
            ) : (
              <div className="text-center py-8" style={{ color: dark.muted }}>
                <p>No jobs available for {riderMode} delivery right now.</p>
                <p className="text-sm mt-1">Check back soon!</p>
              </div>
            )}
          </div>
        </section>
      </main>
    </div>
  );
}
