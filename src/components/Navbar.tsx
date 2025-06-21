
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img 
              src="/lovable-uploads/b0509f7c-8c08-4ad5-ba25-528e2a0a88c9.png" 
              alt="CodeFlow ML" 
              className="h-10 w-10"
            />
            <span className="text-2xl font-bold text-gray-900">
              CodeFlow <span className="text-blue-600">ML</span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-600 hover:text-blue-600 transition-colors">
              Features
            </a>
            <a href="#pricing" className="text-gray-600 hover:text-blue-600 transition-colors">
              Pricing
            </a>
            <a href="#docs" className="text-gray-600 hover:text-blue-600 transition-colors">
              Documentation
            </a>
            <a href="#about" className="text-gray-600 hover:text-blue-600 transition-colors">
              About
            </a>
          </div>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" className="text-gray-600 hover:text-blue-600">
              Sign In
            </Button>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">
              Start Free Trial
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-100 py-4 space-y-4">
            <a href="#features" className="block text-gray-600 hover:text-blue-600">
              Features
            </a>
            <a href="#pricing" className="block text-gray-600 hover:text-blue-600">
              Pricing
            </a>
            <a href="#docs" className="block text-gray-600 hover:text-blue-600">
              Documentation
            </a>
            <a href="#about" className="block text-gray-600 hover:text-blue-600">
              About
            </a>
            <div className="pt-4 space-y-2">
              <Button variant="ghost" className="w-full justify-start">
                Sign In
              </Button>
              <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                Start Free Trial
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
