import React, { useState, useEffect } from 'react';
import { Upload, Search, FileCheck } from 'lucide-react';
import Step from './Step';
import ProgressLine from './ProgressLine';

export default function Workflow() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const threshold = window.innerHeight * 0.3; // Show after 30% of viewport height
      setIsVisible(scrollPosition > threshold);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const steps = [
    {
      icon: Upload,
      title: 'Image Submission',
      description: 'Submit a high-resolution photograph of the potato plant leaf for analysis',
      step: 1
    },
    {
      icon: Search,
      title: 'Advanced Analysis',
      description: 'Our sophisticated AI model performs comprehensive disease pattern recognition',
      step: 2
    },
    {
      icon: FileCheck,
      title: 'Diagnostic Results',
      description: 'Receive detailed diagnostic report with confidence metrics and treatment protocols',
      step: 3
    }
  ];

  return (
    <div className="py-16 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800/50 dark:to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`transition-all duration-700 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-emerald-500 dark:from-green-400 dark:to-emerald-300 mb-4">
              Diagnostic Process
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
              Experience our streamlined diagnostic workflow, powered by state-of-the-art artificial intelligence
            </p>
          </div>
          
          <div className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 border border-gray-200 dark:border-gray-700">
            <ProgressLine />
            <div className="grid md:grid-cols-3 gap-12 relative z-10">
              {steps.map((step, index) => (
                <Step 
                  key={index} 
                  {...step} 
                  isLast={index === steps.length - 1}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}