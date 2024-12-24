import React from 'react';
import Header from './components/Header';
import FileUpload from './components/FileUpload';
import ResultDisplay from './components/ResultDisplay';
import Workflow from './components/Workflow';
import Footer from './components/Footer';
import { useImageAnalysis } from './hooks/useImageAnalysis';

export default function App() {
  const { isAnalyzing, error, result, analyzeImage, clearResult } = useImageAnalysis();

  const handleFileSelect = async (file: File) => {
    await analyzeImage(file);
  };

  const handleClearImage = () => {
    clearResult();
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900 transition-colors">
      <Header />
      
      <main className="flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="max-w-3xl mx-auto space-y-8">
            <div className="text-center mb-8">
              <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Detect Plant Diseases Instantly
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-400">
                Upload a photo of your potato plant leaf and get AI-powered disease detection results in seconds
              </p>
            </div>
            
            <FileUpload 
              onFileSelect={handleFileSelect} 
              onClearFile={handleClearImage}
            />
            {error && (
              <div className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg text-red-600 dark:text-red-400 text-sm">
                {error}
              </div>
            )}
            {(isAnalyzing || result) && (
              <ResultDisplay isLoading={isAnalyzing} result={result || undefined} />
            )}
          </div>
        </div>
        
        <Workflow />
      </main>
      
      <Footer />
    </div>
  );
}