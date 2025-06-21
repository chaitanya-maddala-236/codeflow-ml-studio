
import { Button } from "@/components/ui/button";
import { Play, ArrowRight } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-gray-50 to-blue-50 py-20 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200 rounded-full opacity-10 transform translate-x-32 -translate-y-32"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-200 rounded-full opacity-10 transform -translate-x-32 translate-y-32"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Build, Train, and Deploy{" "}
                <span className="text-blue-600">ML Models</span> in Your Browser
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Professional-grade machine learning development environment accessible anywhere. 
                Code, visualize, and collaborate on ML projects with zero setup required.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white group">
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-gray-300 text-gray-700 hover:bg-gray-50 group"
              >
                <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                Watch Demo
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="pt-8">
              <p className="text-sm text-gray-500 mb-4">Trusted by ML teams at</p>
              <div className="flex items-center space-x-8 opacity-60">
                <div className="text-lg font-semibold text-gray-400">TechCorp</div>
                <div className="text-lg font-semibold text-gray-400">DataLabs</div>
                <div className="text-lg font-semibold text-gray-400">MLSystems</div>
                <div className="text-lg font-semibold text-gray-400">AI Institute</div>
              </div>
            </div>
          </div>

          {/* Right content - Hero Image */}
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl p-6 border border-gray-200">
              {/* Code editor mockup */}
              <div className="space-y-4">
                {/* Editor tabs */}
                <div className="flex space-x-2 border-b border-gray-200 pb-2">
                  <div className="bg-blue-100 text-blue-700 px-3 py-1 rounded-t text-sm font-medium">
                    model.py
                  </div>
                  <div className="text-gray-500 px-3 py-1 text-sm">
                    data.csv
                  </div>
                  <div className="text-gray-500 px-3 py-1 text-sm">
                    visualization.ipynb
                  </div>
                </div>

                {/* Code content */}
                <div className="bg-gray-900 rounded-lg p-4 text-sm font-mono text-white space-y-2">
                  <div className="text-gray-400"># Training a neural network model</div>
                  <div>
                    <span className="text-purple-400">import</span>{" "}
                    <span className="text-green-400">tensorflow</span>{" "}
                    <span className="text-purple-400">as</span>{" "}
                    <span className="text-green-400">tf</span>
                  </div>
                  <div>
                    <span className="text-purple-400">from</span>{" "}
                    <span className="text-green-400">sklearn.model_selection</span>{" "}
                    <span className="text-purple-400">import</span>{" "}
                    <span className="text-green-400">train_test_split</span>
                  </div>
                  <div className="pt-2">
                    <span className="text-blue-400">model</span> = tf.keras.Sequential([
                  </div>
                  <div className="pl-4">
                    tf.keras.layers.Dense(<span className="text-yellow-400">64</span>, activation=<span className="text-green-400">'relu'</span>),
                  </div>
                  <div className="pl-4">
                    tf.keras.layers.Dense(<span className="text-yellow-400">32</span>, activation=<span className="text-green-400">'relu'</span>),
                  </div>
                  <div className="pl-4">
                    tf.keras.layers.Dense(<span className="text-yellow-400">1</span>, activation=<span className="text-green-400">'sigmoid'</span>)
                  </div>
                  <div>])

                  </div>
                  <div className="pt-2 text-green-400">
                    # Model compiled successfully ✓
                  </div>
                </div>

                {/* Visualization mockup */}
                <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg p-4 text-white">
                  <div className="text-sm font-medium mb-2">Training Progress</div>
                  <div className="grid grid-cols-2 gap-4 text-xs">
                    <div>
                      <div className="opacity-80">Accuracy</div>
                      <div className="text-xl font-bold">94.2%</div>
                    </div>
                    <div>
                      <div className="opacity-80">Loss</div>
                      <div className="text-xl font-bold">0.158</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium animate-pulse">
              Live Training
            </div>
            <div className="absolute -bottom-4 -left-4 bg-purple-500 text-white px-3 py-1 rounded-full text-sm font-medium">
              Real-time Viz
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
