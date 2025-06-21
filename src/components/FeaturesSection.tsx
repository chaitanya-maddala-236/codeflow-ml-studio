
import { Code, BarChart3, Database, Users, Cpu, Zap } from "lucide-react";

const features = [
  {
    icon: Code,
    title: "Advanced Code Editor",
    description: "Monaco-based editor with IntelliSense, syntax highlighting, and ML-specific auto-completion for Python, R, and Julia.",
    color: "text-blue-600"
  },
  {
    icon: BarChart3,
    title: "Real-time Visualization",
    description: "Interactive charts and plots that update in real-time during model training. Export-ready visualizations with full customization.",
    color: "text-purple-600"
  },
  {
    icon: Database,
    title: "Smart Data Management",
    description: "Connect to databases, cloud storage, and APIs. Automated data profiling and preprocessing with visual pipeline builder.",
    color: "text-green-600"
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Real-time collaborative editing, sharing, and commenting. Git-like version control for models and datasets.",
    color: "text-orange-600"
  },
  {
    icon: Cpu,
    title: "Cloud Computing",
    description: "Scalable cloud execution with GPU support. No local setup required - run complex ML models directly in your browser.",
    color: "text-red-600"
  },
  {
    icon: Zap,
    title: "AutoML & Deployment",
    description: "Automated machine learning for rapid prototyping. One-click model deployment to cloud platforms and edge devices.",
    color: "text-teal-600"
  }
];

export const FeaturesSection = () => {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl font-bold text-gray-900">
            Everything you need for ML development
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From data preprocessing to model deployment, CodeFlow ML provides a complete 
            toolkit for machine learning practitioners of all levels.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group p-8 rounded-2xl border border-gray-200 hover:border-blue-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="space-y-4">
                <div className={`inline-flex p-3 rounded-xl bg-gray-50 group-hover:bg-blue-50 transition-colors ${feature.color}`}>
                  <feature.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-900 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
                <div className="pt-2">
                  <a 
                    href="#" 
                    className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center group"
                  >
                    Learn more
                    <svg className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Ready to accelerate your ML workflow?
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Join thousands of ML practitioners who have already transformed their development process with CodeFlow ML.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
                Start Free Trial
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                Schedule Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
