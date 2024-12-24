import React from 'react';
import { Sun, Leaf } from 'lucide-react';

export default function StatusIndicators() {
  return (
    <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-200 dark:border-gray-700">
      <div className="flex items-center gap-2">
        <Sun className="h-5 w-5 text-orange-500 dark:text-orange-400" />
        <span className="text-sm text-gray-600 dark:text-gray-400">Optimal Conditions</span>
      </div>
      <div className="flex items-center gap-2">
        <Leaf className="h-5 w-5 text-green-500 dark:text-green-400" />
        <span className="text-sm text-gray-600 dark:text-gray-400">Plant Health</span>
      </div>
    </div>
  );
}