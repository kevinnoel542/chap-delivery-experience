import { LayoutDashboard, Users, Package, Wallet, Settings, LogOut } from "lucide-react";
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
        "w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-colors",
        active 
          ? "bg-primary text-primary-foreground" 
          : "text-muted-foreground hover:bg-muted hover:text-foreground"
      )}
    >
      {icon}
      <span>{label}</span>
    </button>
  );
}

interface AdminSidebarProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

export function AdminSidebar({ activeSection, onSectionChange }: AdminSidebarProps) {
  const mainNav = [
    { id: "dashboard", icon: <LayoutDashboard className="w-5 h-5" />, label: "Dashboard" },
    { id: "riders", icon: <Users className="w-5 h-5" />, label: "Riders" },
    { id: "deliveries", icon: <Package className="w-5 h-5" />, label: "Deliveries" },
    { id: "finances", icon: <Wallet className="w-5 h-5" />, label: "Finances" },
  ];

  return (
    <aside className="w-64 bg-card border-r border-border h-screen flex flex-col">
      <div className="p-6 border-b border-border">
        <h1 className="text-2xl font-bold text-foreground">
          CHAP<span className="text-primary">.</span>
        </h1>
        <p className="text-sm text-muted-foreground mt-1">Operations Center</p>
      </div>
      
      <nav className="flex-1 p-4 space-y-1">
        {mainNav.map((item) => (
          <NavItem
            key={item.id}
            icon={item.icon}
            label={item.label}
            active={activeSection === item.id}
            onClick={() => onSectionChange(item.id)}
          />
        ))}
      </nav>
      
      <div className="p-4 border-t border-border space-y-1">
        <NavItem
          icon={<Settings className="w-5 h-5" />}
          label="Settings"
        />
        <NavItem
          icon={<LogOut className="w-5 h-5" />}
          label="Logout"
        />
      </div>
    </aside>
  );
}
