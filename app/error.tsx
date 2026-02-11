'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { Icon } from '@iconify/react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log error to error reporting service
    console.error('Application error:', error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 px-4">
      <div className="text-center max-w-md">
        <div className="w-20 h-20 bg-red-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
          <Icon icon="mdi:alert-circle" className="w-12 h-12 text-red-500" />
        </div>
        
        <h1 className="text-3xl font-bold text-white mb-4">Something went wrong</h1>
        
        <p className="text-gray-400 mb-8">
          We encountered an unexpected error. Please try again or return to the homepage.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={reset}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors inline-flex items-center justify-center space-x-2"
          >
            <Icon icon="mdi:refresh" className="w-5 h-5" />
            <span>Try Again</span>
          </button>
          
          <Link
            href="/"
            className="bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-lg font-medium transition-colors inline-flex items-center justify-center space-x-2"
          >
            <Icon icon="mdi:home" className="w-5 h-5" />
            <span>Go Home</span>
          </Link>
        </div>

        {error.digest && (
          <p className="text-xs text-gray-500 mt-8">
            Error ID: {error.digest}
          </p>
        )}
      </div>
    </div>
  );
}
