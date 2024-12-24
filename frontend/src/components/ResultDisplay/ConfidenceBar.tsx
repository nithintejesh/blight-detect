import React from 'react';

interface ConfidenceBarProps {
  confidence: number;
  statusColor: string;
}

export default function ConfidenceBar({ confidence, statusColor }: ConfidenceBarProps) {
  return (
    <div>
      <div className="flex justify-between mb-2">
        <span className="text-sm font-medium text-gray-600 dark:text-gray-300">Confidence</span>
        <span className="text-sm font-bold text-gray-900 dark:text-white">{confidence}%</span>
      </div>
      <div className="relative w-full h-3 bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
        <div
          className={`absolute top-0 left-0 h-full bg-${statusColor}-500 dark:bg-${statusColor}-400 transition-all duration-1000 ease-out`}
          style={{ 
            width: `${confidence}%`,
            animation: 'growWidth 1s ease-out',
          }}
        />
      </div>
    </div>
  );
}