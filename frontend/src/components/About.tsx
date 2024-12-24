import React from 'react';
import { Leaf, Shield, Brain, Zap } from 'lucide-react';
import Card from './ui/Card';

export default function About() {
  const features = [
    {
      icon: Plant,
      title: 'Advanced Plant Analysis',
      description: 'Using state-of-the-art computer vision to identify various potato plant diseases with high accuracy.'
    },
    {
      icon: Shield,
      title: 'Early Detection',
      description: 'Catch diseases in their early stages to prevent crop loss and optimize treatment effectiveness.'
    },
    {
      icon: Brain,
      title: 'AI-Powered',
      description: 'Leveraging machine learning models trained on thousands of plant disease images.'
    },
    {
      icon: Zap,
      title: 'Instant Results',
      description: 'Get immediate analysis results and treatment recommendations for your crops.'
    }
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <Card>
        <h2 className="text-3xl font-bold text-gray-900 mb-8">About Our Technology</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="p-3 bg-green-100 rounded-lg">
                  {React.createElement(feature.icon, {
                    className: "w-6 h-6 text-green-600"
                  })}
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 p-6 bg-gray-50 rounded-lg">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            Our Mission
          </h3>
          <p className="text-gray-600 leading-relaxed">
            We're committed to helping farmers and agricultural professionals protect their potato crops
            through early disease detection and prevention. Our AI-powered solution makes it easier than
            ever to identify and treat plant diseases before they become a serious problem.
          </p>
        </div>
      </Card>
    </div>
  );
}