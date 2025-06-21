
import { useState } from "react";
import { DashboardSidebar } from "@/components/DashboardSidebar";
import { DashboardHeader } from "@/components/DashboardHeader";
import { ProjectGrid } from "@/components/ProjectGrid";
import { ActivityFeed } from "@/components/ActivityFeed";
import { QuickStats } from "@/components/QuickStats";
import { WelcomeSection } from "@/components/WelcomeSection";

export const Dashboard = () => {
  const [isFirstTime] = useState(false); // This would come from user data
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardHeader />
      <div className="flex">
        <DashboardSidebar 
          collapsed={sidebarCollapsed} 
          onToggle={() => setSidebarCollapsed(!sidebarCollapsed)}
        />
        <main className={`flex-1 transition-all duration-300 ${sidebarCollapsed ? 'ml-16' : 'ml-80'}`}>
          <div className="p-8">
            {isFirstTime ? (
              <WelcomeSection />
            ) : (
              <div className="space-y-8">
                <QuickStats />
                <div className="grid lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-2">
                    <ProjectGrid />
                  </div>
                  <div className="lg:col-span-1">
                    <ActivityFeed />
                  </div>
                </div>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
