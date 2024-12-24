import React from 'react';
import { CheckCircle, AlertTriangle } from 'lucide-react';
import Card from '../ui/Card';
import { Disease } from '../../types';
import LoadingState from './LoadingState';
import ConfidenceBar from './ConfidenceBar';
import TreatmentInfo from './TreatmentInfo';
import StatusIndicators from './StatusIndicators';

interface ResultDisplayProps {
  isLoading: boolean;
  result?: Disease;
}

export default function ResultDisplay({ isLoading, result }: ResultDisplayProps) {
  if (isLoading) {
    return <LoadingState />;
  }

  if (!result) return null;

  const isHealthy = result.disease === 'Healthy';
  const statusIcon = isHealthy ? CheckCircle : AlertTriangle;
  const statusColor = isHealthy ? 'green' : 'yellow';

  return (
    <Card className="mt-6 bg-white dark:bg-gray-800/50 backdrop-blur-sm border border-gray-100 dark:border-gray-700">
      <div className="flex items-center gap-3 mb-6">
        <div className={`p-2 bg-${statusColor}-100 dark:bg-${statusColor}-900/20 rounded-full`}>
          {React.createElement(statusIcon, {
            className: `h-6 w-6 text-${statusColor}-600 dark:text-${statusColor}-400`,
          })}
        </div>
        <div>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
            {result.disease}
          </h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Analysis Complete
          </p>
        </div>
      </div>

      <div className="space-y-6">
        <ConfidenceBar confidence={result.confidence} statusColor={statusColor} />
        <TreatmentInfo tip={result.tip} />
        <StatusIndicators />
      </div>
    </Card>
  );
}