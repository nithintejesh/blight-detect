import React from 'react';

export default function ProgressLine() {
  return (
    <div className="absolute top-[88px] left-[15%] right-[15%] hidden md:block">
      <div className="h-0.5 w-full bg-gradient-to-r from-green-200 via-emerald-200 to-green-200 dark:from-green-900/50 dark:via-emerald-900/50 dark:to-green-900/50" />
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-green-400 dark:bg-green-500" />
      <div className="absolute left-1/2 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-green-400 dark:bg-green-500" />
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-green-400 dark:bg-green-500" />
    </div>
  );
}