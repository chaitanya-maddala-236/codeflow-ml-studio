
import { Github, Twitter, Linkedin, Mail } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main footer content */}
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img 
                src="/lovable-uploads/b0509f7c-8c08-4ad5-ba25-528e2a0a88c9.png" 
                alt="CodeFlow ML" 
                className="h-8 w-8"
              />
              <span className="text-xl font-bold">
                CodeFlow <span className="text-blue-400">ML</span>
              </span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              The most intuitive and powerful web-based ML development environment 
              for data scientists and ML engineers.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Product links */}
          <div>
            <h4 className="font-semibold mb-4">Product</h4>
            <div className="space-y-2">
              <a href="#" className="block text-gray-400 hover:text-white transition-colors">
                Features
              </a>
              <a href="#" className="block text-gray-400 hover:text-white transition-colors">
                Pricing
              </a>
              <a href="#" className="block text-gray-400 hover:text-white transition-colors">
                Integrations
              </a>
              <a href="#" className="block text-gray-400 hover:text-white transition-colors">
                API
              </a>
              <a href="#" className="block text-gray-400 hover:text-white transition-colors">
                Changelog
              </a>
            </div>
          </div>

          {/* Resources links */}
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <div className="space-y-2">
              <a href="#" className="block text-gray-400 hover:text-white transition-colors">
                Documentation
              </a>
              <a href="#" className="block text-gray-400 hover:text-white transition-colors">
                Tutorials
              </a>
              <a href="#" className="block text-gray-400 hover:text-white transition-colors">
                Blog
              </a>
              <a href="#" className="block text-gray-400 hover:text-white transition-colors">
                Community
              </a>
              <a href="#" className="block text-gray-400 hover:text-white transition-colors">
                Templates
              </a>
            </div>
          </div>

          {/* Company links */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <div className="space-y-2">
              <a href="#" className="block text-gray-400 hover:text-white transition-colors">
                About
              </a>
              <a href="#" className="block text-gray-400 hover:text-white transition-colors">
                Careers
              </a>
              <a href="#" className="block text-gray-400 hover:text-white transition-colors">
                Contact
              </a>
              <a href="#" className="block text-gray-400 hover:text-white transition-colors">
                Support
              </a>
              <a href="#" className="block text-gray-400 hover:text-white transition-colors">
                Security
              </a>
            </div>
          </div>
        </div>

        {/* Bottom footer */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 CodeFlow ML. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
