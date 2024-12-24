import React from 'react';
import { CheckCircle, AlertTriangle, Leaf, Droplets, Sun } from 'lucide-react';
import Card from './ui/Card';
import { Disease } from '../types';

interface ResultDisplayProps {
  isLoading: boolean;
  result?: Disease;
}

export default function ResultDisplay({ isLoading, result }: ResultDisplayProps) {
  if (isLoading) {
    return (
      <Card className="flex items-center justify-center p-8">
        <div className="relative">
          <div className="w-12 h-12 border-4 border-green-200 rounded-full animate-spin border-t-green-600"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <Leaf className="w-6 h-6 text-green-600 animate-pulse" />
          </div>
        </div>
      </Card>
    );
  }

  if (!result) return null;

  const isHealthy = result.disease === 'Healthy';
  const statusIcon = isHealthy ? CheckCircle : AlertTriangle;
  const statusColor = isHealthy ? 'green' : 'yellow';

  return (
    <Card className="mt-6 transform transition-all duration-300 hover:shadow-lg">
      <div className="flex items-center gap-3 mb-6">
        <div className={`p-2 bg-${statusColor}-100 rounded-full`}>
          {React.createElement(statusIcon, {
            className: `h-6 w-6 text-${statusColor}-600`,
          })}
        </div>
        <div>
          <h3 className="text-xl font-semibold text-gray-900">
            {result.disease}
          </h3>
          <p className="text-sm text-gray-500">
            Analysis Complete
          </p>
        </div>
      </div>

      <div className="space-y-6">
        <div>
          <div className="flex justify-between mb-2">
            <span className="text-sm font-medium text-gray-600">Confidence</span>
            <span className="text-sm font-bold text-gray-900">{result.confidence}%</span>
          </div>
          <div className="relative w-full h-3 bg-gray-100 rounded-full overflow-hidden">
            <div
              className={`absolute top-0 left-0 h-full bg-${statusColor}-500 transition-all duration-1000 ease-out`}
              style={{ 
                width: `${result.confidence}%`,
                animation: 'growWidth 1s ease-out',
              }}
            />
          </div>
        </div>

        <div className="bg-gray-50 rounded-lg p-4">
          <div className="flex items-start gap-3">
            <div className="p-2 bg-blue-100 rounded-full">
              <Droplets className="h-5 w-5 text-blue-600" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-gray-900 mb-1">
                Treatment Recommendation
              </h4>
              <p className="text-sm text-gray-600">
                {result.tip}
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 pt-4 border-t">
          <div className="flex items-center gap-2">
            <Sun className="h-5 w-5 text-orange-500" />
            <span className="text-sm text-gray-600">Optimal Conditions</span>
          </div>
          <div className="flex items-center gap-2">
            <Leaf className="h-5 w-5 text-green-500" />
            <span className="text-sm text-gray-600">Plant Health</span>
          </div>
        </div>
      </div>
    </Card>
  );
}