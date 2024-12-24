import { useState } from 'react';
import { Disease } from '../types';
import { analyzePlantImage } from '../services/api';

export function useImageAnalysis() {
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<Disease | null>(null);

  const analyzeImage = async (file: File) => {
    setIsAnalyzing(true);
    setError(null);
    
    try {
      const analysisResult = await analyzePlantImage(file);
      setResult(analysisResult);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Analysis failed');
      setResult(null);
    } finally {
      setIsAnalyzing(false);
    }
  };

  const clearResult = () => {
    setResult(null);
    setError(null);
    setIsAnalyzing(false);
  };

  return {
    isAnalyzing,
    error,
    result,
    analyzeImage,
    clearResult,
  };
}