
import { Button } from "@/components/ui/button";
import { Check, Zap, Star, Building } from "lucide-react";

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    description: "Perfect for students and individual learners",
    icon: Zap,
    features: [
      "5 projects",
      "Basic code editor",
      "Community support",
      "Basic visualizations",
      "1GB storage",
      "Public projects only"
    ],
    cta: "Get Started",
    popular: false,
    color: "border-gray-200"
  },
  {
    name: "Pro",
    price: "$29",
    period: "per month",
    description: "Ideal for professional data scientists",
    icon: Star,
    features: [
      "Unlimited projects",
      "Advanced code editor",
      "Priority support",
      "Advanced visualizations",
      "100GB storage",
      "Private projects",
      "GPU acceleration",
      "Team collaboration (5 members)"
    ],
    cta: "Start Free Trial",
    popular: true,
    color: "border-blue-500"
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "contact us",
    description: "For large teams and organizations",
    icon: Building,
    features: [
      "Everything in Pro",
      "Unlimited team members",
      "Advanced security & compliance",
      "Dedicated support",
      "Custom integrations",
      "On-premise deployment",
      "SLA guarantee",
      "Custom training"
    ],
    cta: "Contact Sales",
    popular: false,
    color: "border-gray-200"
  }
];

export const PricingSection = () => {
  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl font-bold text-gray-900">
            Choose the perfect plan for your needs
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Start free and scale as you grow. All plans include our core ML development features.
          </p>
        </div>

        {/* Pricing cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`relative rounded-2xl border-2 ${plan.color} p-8 ${
                plan.popular ? 'shadow-2xl scale-105' : 'shadow-lg'
              } transition-all duration-300 hover:shadow-xl`}
            >
              {/* Popular badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                    Most Popular
                  </div>
                </div>
              )}

              <div className="space-y-6">
                {/* Plan header */}
                <div className="text-center space-y-2">
                  <div className={`inline-flex p-3 rounded-xl ${
                    plan.popular ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-600'
                  }`}>
                    <plan.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">{plan.name}</h3>
                  <p className="text-gray-600">{plan.description}</p>
                </div>

                {/* Pricing */}
                <div className="text-center">
                  <div className="flex items-baseline justify-center">
                    <span className="text-5xl font-bold text-gray-900">{plan.price}</span>
                    {plan.period !== "contact us" && (
                      <span className="text-gray-600 ml-2">/{plan.period}</span>
                    )}
                  </div>
                  {plan.period === "contact us" && (
                    <div className="text-gray-600 mt-2">{plan.period}</div>
                  )}
                </div>

                {/* Features */}
                <div className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <Button 
                  className={`w-full ${
                    plan.popular 
                      ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                      : 'bg-gray-900 hover:bg-gray-800 text-white'
                  }`}
                  size="lg"
                >
                  {plan.cta}
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* FAQ section */}
        <div className="mt-20 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h3>
          <p className="text-gray-600 mb-8">
            Have questions? We're here to help.
          </p>
          <Button variant="outline" size="lg">
            View All FAQs
          </Button>
        </div>
      </div>
    </section>
  );
};
