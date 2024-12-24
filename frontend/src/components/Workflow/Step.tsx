import React from 'react';
import { LucideIcon } from 'lucide-react';

interface StepProps {
  icon: LucideIcon;
  title: string;
  description: string;
  step: number;
}

export default function Step({ icon: Icon, title, description, step }: StepProps) {
  return (
    <div className="relative flex flex-col items-center p-6 group">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-gradient-to-r from-green-600 to-emerald-500 dark:from-green-500 dark:to-emerald-400 text-white flex items-center justify-center text-sm font-bold shadow-lg">
        {step}
      </div>
      
      <div className="relative w-20 h-20 bg-white dark:bg-gray-800 rounded-2xl flex items-center justify-center mb-6 transform transition-transform group-hover:scale-110 duration-300 shadow-md z-10">
        <div className="w-full h-full rounded-2xl bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/30 dark:to-emerald-900/30 flex items-center justify-center">
          <Icon className="w-10 h-10 text-green-600 dark:text-green-400" />
        </div>
      </div>
      
      <div className="text-center space-y-3">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">
          {title}
        </h3>
        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}