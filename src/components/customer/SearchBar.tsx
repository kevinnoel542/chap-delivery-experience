import { Search, MapPin } from "lucide-react";

export function SearchBar() {
  return (
    <div className="relative">
      <div className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground">
        <MapPin className="w-5 h-5" />
      </div>
      <input
        type="text"
        placeholder="Where are we delivering today?"
        className="w-full pl-12 pr-12 py-4 bg-card rounded-2xl border border-border shadow-md text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
      />
      <div className="absolute right-4 top-1/2 -translate-y-1/2">
        <Search className="w-5 h-5 text-muted-foreground" />
      </div>
    </div>
  );
}
