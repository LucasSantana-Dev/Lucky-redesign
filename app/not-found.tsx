import React from 'react';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-canvas flex flex-col items-center justify-center p-8 text-center">
      <div className="w-16 h-16 rounded-2xl bg-brand-discord/10 flex items-center justify-center mb-6 border border-brand-discord/20">
        <span className="text-2xl font-bold text-brand-discord">404</span>
      </div>
      <h1 className="text-3xl font-sora font-bold text-text-strong mb-2">Page Not Found</h1>
      <p className="text-text-muted mb-8 max-w-md">
        The tactical console you&apos;re looking for doesn&apos;t exist or has been relocated to another shard.
      </p>
      <Link 
        href="/" 
        className="px-6 py-2.5 bg-brand-discord hover:bg-blue-600 text-white font-bold rounded-xl transition-all"
      >
        Return to Home
      </Link>
    </div>
  );
}
