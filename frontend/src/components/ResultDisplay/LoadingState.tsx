import React from 'react';
import { Leaf } from 'lucide-react';
import Card from '../ui/Card';

export default function LoadingState() {
  return (
    <Card className="flex items-center justify-center p-8 bg-white dark:bg-gray-800/50 backdrop-blur-sm border border-gray-100 dark:border-gray-700">
      <div className="relative">
        <div className="w-12 h-12 border-4 border-green-200 dark:border-green-900 rounded-full animate-spin border-t-green-600 dark:border-t-green-400"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <Leaf className="w-6 h-6 text-green-600 dark:text-green-400 animate-pulse" />
        </div>
      </div>
    </Card>
  );
}