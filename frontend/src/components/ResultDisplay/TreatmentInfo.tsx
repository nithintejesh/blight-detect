import React from 'react';
import { Droplets } from 'lucide-react';

interface TreatmentInfoProps {
  tip: string;
}

export default function TreatmentInfo({ tip }: TreatmentInfoProps) {
  return (
    <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
      <div className="flex items-start gap-3">
        <div className="p-2 bg-blue-100 dark:bg-blue-900/20 rounded-full">
          <Droplets className="h-5 w-5 text-blue-600 dark:text-blue-400" />
        </div>
        <div>
          <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-1">
            Treatment Recommendation
          </h4>
          <p className="text-sm text-gray-600 dark:text-gray-400">{tip}</p>
        </div>
      </div>
    </div>
  );
}