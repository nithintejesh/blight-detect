import React from 'react';
import { Sprout, Github } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

export default function Header() {
  return (
    <header className="bg-white dark:bg-gray-900 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Sprout className="h-8 w-8 text-green-600 dark:text-green-500" />
            <h1 className="ml-3 text-xl font-semibold text-gray-900 dark:text-white">
              Blight Detect
            </h1>
          </div>
          <div className="flex items-center space-x-4">
            <a
              href="https://github.com/nithintejesh/blight-detect"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              <Github className="w-5 h-5 text-gray-600 dark:text-gray-300" />
            </a>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
}