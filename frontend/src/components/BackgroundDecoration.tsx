import React from 'react';

export default function BackgroundDecoration() {
  return (
    <div className="absolute inset-y-0 right-0 hidden sm:block">
      <svg
        className="h-full w-48 text-green-50 transform translate-x-1/2"
        fill="currentColor"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <polygon points="50,0 100,0 50,100 0,100" />
      </svg>
    </div>
  );
}