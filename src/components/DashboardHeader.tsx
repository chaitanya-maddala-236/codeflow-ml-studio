
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Search, Bell, Settings, User, Moon, Sun } from "lucide-react";

export const DashboardHeader = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [notifications] = useState(3);

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img 
              src="/lovable-uploads/b0509f7c-8c08-4ad5-ba25-528e2a0a88c9.png" 
              alt="CodeFlow ML" 
              className="h-8 w-8"
            />
            <span className="text-xl font-bold text-gray-900">
              CodeFlow <span className="text-blue-600">ML</span>
            </span>
          </div>

          {/* Search */}
          <div className="flex-1 max-w-2xl mx-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <input
                type="text"
                placeholder="Search projects, files, or functions..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            {/* Theme Toggle */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setDarkMode(!darkMode)}
              className="text-gray-600 hover:text-gray-900"
            >
              {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>

            {/* Notifications */}
            <Button
              variant="ghost"
              size="icon"
              className="text-gray-600 hover:text-gray-900 relative"
            >
              <Bell className="h-5 w-5" />
              {notifications > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {notifications}
                </span>
              )}
            </Button>

            {/* Settings */}
            <Button
              variant="ghost"
              size="icon"
              className="text-gray-600 hover:text-gray-900"
            >
              <Settings className="h-5 w-5" />
            </Button>

            {/* User Menu */}
            <div className="flex items-center space-x-3">
              <div className="text-right">
                <div className="text-sm font-medium text-gray-900">John Doe</div>
                <div className="text-xs text-gray-500">john@example.com</div>
              </div>
              <Button
                variant="ghost"
                size="icon"
                className="text-gray-600 hover:text-gray-900"
              >
                <User className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
