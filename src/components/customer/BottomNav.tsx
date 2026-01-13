import { Home, Package, Clock, User } from "lucide-react";
import { cn } from "@/lib/utils";

interface NavItemProps {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
  onClick?: () => void;
}

function NavItem({ icon, label, active, onClick }: NavItemProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "flex flex-col items-center gap-1 py-2 px-4 transition-colors",
        active ? "text-primary" : "text-muted-foreground hover:text-foreground"
      )}
    >
      {icon}
      <span className="text-xs font-medium">{label}</span>
    </button>
  );
}

interface BottomNavProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export function BottomNav({ activeTab, onTabChange }: BottomNavProps) {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-card border-t border-border px-4 pb-safe">
      <div className="flex justify-around max-w-md mx-auto">
        <NavItem
          icon={<Home className="w-5 h-5" />}
          label="Home"
          active={activeTab === "home"}
          onClick={() => onTabChange("home")}
        />
        <NavItem
          icon={<Package className="w-5 h-5" />}
          label="Deliveries"
          active={activeTab === "deliveries"}
          onClick={() => onTabChange("deliveries")}
        />
        <NavItem
          icon={<Clock className="w-5 h-5" />}
          label="History"
          active={activeTab === "history"}
          onClick={() => onTabChange("history")}
        />
        <NavItem
          icon={<User className="w-5 h-5" />}
          label="Profile"
          active={activeTab === "profile"}
          onClick={() => onTabChange("profile")}
        />
      </div>
    </nav>
  );
}
