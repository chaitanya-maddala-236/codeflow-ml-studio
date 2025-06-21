
import { Button } from "@/components/ui/button";
import { Plus, Upload, Template, BookOpen } from "lucide-react";

export const WelcomeSection = () => {
  return (
    <div className="max-w-4xl mx-auto text-center space-y-8">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold text-gray-900">Welcome to CodeFlow ML</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Your journey into machine learning starts here. Create your first project, explore templates, 
          or import existing data to get started.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
        <div className="bg-white rounded-lg border border-gray-200 p-6 text-center hover:shadow-lg transition-shadow">
          <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
            <Plus className="h-6 w-6 text-blue-600" />
          </div>
          <h3 className="font-semibold text-gray-900 mb-2">Create Project</h3>
          <p className="text-gray-600 text-sm mb-4">Start a new ML project from scratch</p>
          <Button className="w-full">Create New Project</Button>
        </div>

        <div className="bg-white rounded-lg border border-gray-200 p-6 text-center hover:shadow-lg transition-shadow">
          <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
            <Upload className="h-6 w-6 text-green-600" />
          </div>
          <h3 className="font-semibold text-gray-900 mb-2">Import Data</h3>
          <p className="text-gray-600 text-sm mb-4">Upload your dataset to begin analysis</p>
          <Button variant="outline" className="w-full">Upload Dataset</Button>
        </div>

        <div className="bg-white rounded-lg border border-gray-200 p-6 text-center hover:shadow-lg transition-shadow">
          <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
            <Template className="h-6 w-6 text-purple-600" />
          </div>
          <h3 className="font-semibold text-gray-900 mb-2">Browse Templates</h3>
          <p className="text-gray-600 text-sm mb-4">Explore pre-built ML project templates</p>
          <Button variant="outline" className="w-full">View Templates</Button>
        </div>
      </div>

      <div className="bg-blue-50 rounded-lg p-6">
        <div className="flex items-center justify-center space-x-3 mb-4">
          <BookOpen className="h-6 w-6 text-blue-600" />
          <h3 className="text-lg font-semibold text-gray-900">Get Started with Our Tutorial</h3>
        </div>
        <p className="text-gray-600 mb-4 max-w-2xl mx-auto">
          New to machine learning or CodeFlow ML? Take our interactive tutorial to learn the basics 
          and get familiar with the platform.
        </p>
        <Button className="bg-blue-600 hover:bg-blue-700">
          Start Interactive Tutorial
        </Button>
      </div>
    </div>
  );
};
