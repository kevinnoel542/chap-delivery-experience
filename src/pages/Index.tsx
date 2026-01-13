import { Link } from "react-router-dom";
import { Smartphone, Bike, LayoutDashboard, ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface AppCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  href: string;
  variant: "customer" | "rider" | "admin";
}

function AppCard({ title, description, icon, href, variant }: AppCardProps) {
  const variantStyles = {
    customer: "hover:border-primary/50 hover:shadow-primary/10",
    rider: "hover:border-secondary/50 hover:shadow-secondary/10",
    admin: "hover:border-muted-foreground/50 hover:shadow-muted/10",
  };

  return (
    <Link to={href}>
      <Card className={`p-6 bg-card border-2 border-transparent transition-all duration-300 hover:shadow-xl ${variantStyles[variant]}`}>
        <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-4 text-primary">
          {icon}
        </div>
        <h3 className="text-xl font-semibold text-foreground mb-2">{title}</h3>
        <p className="text-muted-foreground mb-4">{description}</p>
        <div className="flex items-center text-primary font-medium">
          <span>Open App</span>
          <ArrowRight className="w-4 h-4 ml-2" />
        </div>
      </Card>
    </Link>
  );
}

export default function Index() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="bg-primary px-6 py-16 text-center">
        <h1 className="text-5xl font-bold text-primary-foreground mb-4 tracking-tight">
          CHAP<span className="opacity-70">.</span>
        </h1>
        <p className="text-xl text-primary-foreground/80 max-w-md mx-auto">
          Dar es Salaam's fastest on-demand delivery platform
        </p>
      </div>

      {/* App Selection */}
      <main className="max-w-4xl mx-auto px-6 py-12">
        <div className="text-center mb-10">
          <h2 className="text-2xl font-semibold text-foreground mb-2">
            Choose Your Interface
          </h2>
          <p className="text-muted-foreground">
            Select the app that matches your role
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <AppCard
            title="Customer App"
            description="Request deliveries, track packages, and manage your shipments."
            icon={<Smartphone className="w-7 h-7" />}
            href="/customer"
            variant="customer"
          />
          <AppCard
            title="Rider App"
            description="Accept jobs, manage deliveries, and track your earnings."
            icon={<Bike className="w-7 h-7" />}
            href="/rider/mode"
            variant="rider"
          />
          <AppCard
            title="Admin Dashboard"
            description="Monitor operations, manage riders, and view analytics."
            icon={<LayoutDashboard className="w-7 h-7" />}
            href="/admin"
            variant="admin"
          />
        </div>

        {/* Quick Stats */}
        <div className="mt-16 grid grid-cols-3 gap-6 text-center">
          <div>
            <p className="text-3xl font-bold text-foreground">500+</p>
            <p className="text-sm text-muted-foreground">Active Riders</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-foreground">10K+</p>
            <p className="text-sm text-muted-foreground">Daily Deliveries</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-foreground">18 min</p>
            <p className="text-sm text-muted-foreground">Avg. Delivery</p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border py-8 text-center">
        <p className="text-sm text-muted-foreground">
          © 2026 CHAP Delivery. Made for Dar es Salaam 🇹🇿
        </p>
      </footer>
    </div>
  );
}
