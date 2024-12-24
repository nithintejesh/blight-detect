import React from 'react';
import { Leaf, Sprout, Cloud } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-green-50 via-white to-transparent py-16 sm:py-24">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 animate-float opacity-20">
          <Leaf className="h-12 w-12 text-green-400" />
        </div>
        <div className="absolute top-1/3 right-1/4 animate-float opacity-20" style={{ animationDelay: '1s' }}>
          <Sprout className="h-16 w-16 text-green-300" />
        </div>
        <div className="absolute bottom-1/4 left-1/3 animate-float opacity-10" style={{ animationDelay: '2s' }}>
          <Cloud className="h-20 w-20 text-green-200" />
        </div>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="relative inline-block mb-6">
            <div className="absolute inset-0 animate-pulse-ring rounded-full bg-green-400 opacity-25"></div>
            <div className="relative">
              <Leaf className="mx-auto h-16 w-16 text-green-600 transform transition-transform hover:scale-110" />
            </div>
          </div>
          
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-emerald-500">
              Detect Plant Diseases
            </span>
            <span className="block mt-2 text-green-600">
              Protect Your Crops
            </span>
          </h1>
          
          <p className="mx-auto mt-3 max-w-md text-base text-gray-500 sm:text-lg md:mt-5 md:max-w-3xl md:text-xl backdrop-blur-sm bg-white/50 p-4 rounded-lg">
            Upload an image of your potato plant leaves and get instant disease detection results using advanced AI technology.
          </p>
        </div>
      </div>
    </div>
  );
}