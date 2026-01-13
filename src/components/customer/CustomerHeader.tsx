import { Bell, User } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CustomerHeader() {
  return (
    <header className="bg-primary px-4 py-4 flex items-center justify-between">
      <h1 className="text-2xl font-bold text-primary-foreground tracking-tight">
        CHAP<span className="text-primary-foreground/70">.</span>
      </h1>
      <div className="flex items-center gap-2">
        <Button 
          variant="ghost" 
          size="icon" 
          className="text-primary-foreground hover:bg-primary-foreground/10"
        >
          <Bell className="w-5 h-5" />
        </Button>
        <Button 
          variant="ghost" 
          size="icon" 
          className="text-primary-foreground hover:bg-primary-foreground/10"
        >
          <User className="w-5 h-5" />
        </Button>
      </div>
    </header>
  );
}
