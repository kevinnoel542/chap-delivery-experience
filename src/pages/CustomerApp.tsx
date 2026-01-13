import { useState } from "react";
import { CustomerHeader } from "@/components/customer/CustomerHeader";
import { SearchBar } from "@/components/customer/SearchBar";
import { QuickActions } from "@/components/customer/QuickActions";
import { DeliveryCard } from "@/components/customer/DeliveryCard";
import { BottomNav } from "@/components/customer/BottomNav";

const recentDeliveries = [
  { id: "CHP2847", destination: "Kariakoo Market, DSM", status: "completed" as const, date: "Today, 2:30 PM" },
  { id: "CHP2845", destination: "Mlimani City Mall", status: "completed" as const, date: "Yesterday" },
  { id: "CHP2839", destination: "Posta, CBD", status: "completed" as const, date: "Jan 10" },
  { id: "CHP2831", destination: "Mikocheni B", status: "completed" as const, date: "Jan 8" },
];

export default function CustomerApp() {
  const [activeTab, setActiveTab] = useState("home");

  return (
    <div className="min-h-screen bg-background">
      <CustomerHeader />
      
      <main className="px-4 py-6 pb-24 space-y-6 max-w-md mx-auto">
        <SearchBar />
        
        <QuickActions />
        
        <section>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-foreground">Recent Deliveries</h2>
            <button className="text-sm text-primary font-medium hover:underline">
              View all
            </button>
          </div>
          <div className="space-y-3">
            {recentDeliveries.map((delivery) => (
              <DeliveryCard key={delivery.id} {...delivery} />
            ))}
          </div>
        </section>
      </main>
      
      <BottomNav activeTab={activeTab} onTabChange={setActiveTab} />
    </div>
  );
}
