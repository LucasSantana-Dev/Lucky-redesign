'use client';

import React from 'react';
import { Sidebar } from '@/components/Sidebar';
import { GuildSwitcher } from '@/components/GuildSwitcher';

import Image from 'next/image';

// Mock data for the demonstration
const MOCK_GUILD = {
  id: '123456789',
  name: 'Project Vanguard',
  icon: 'https://picsum.photos/seed/guild/128/128',
};

export default function DashboardLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ guildId: string }>;
}) {
  const { guildId } = React.use(params);

  return (
    <div className="flex min-h-screen bg-canvas text-text-body">
      {/* Sidebar - Persistence Context */}
      <Sidebar guildId={guildId} />

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col min-w-0">
        {/* Top Operational Bar */}
        <header className="h-14 border-b border-panel px-8 flex items-center justify-between bg-canvas/80 backdrop-blur-md sticky top-0 z-30">
          <div className="flex items-center gap-4">
             <GuildSwitcher currentGuild={MOCK_GUILD} />
             <div className="h-6 w-px bg-panel" />
             <div className="flex flex-col">
               <span className="text-[10px] font-mono text-text-muted uppercase tracking-widest leading-none">Access Level</span>
               <span className="text-xs font-bold text-text-strong leading-none mt-1">Full Admin</span>
             </div>
          </div>
          
          <div className="flex items-center gap-6">
            <div className="flex flex-col items-end">
              <span className="text-[10px] font-mono text-text-muted uppercase tracking-widest">Global Status</span>
              <span className="text-xs font-bold text-green-500 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                Operational
              </span>
            </div>
          </div>
        </header>

        {/* Content Container */}
        <div className="flex-1 p-8 overflow-y-auto">
          <div className="max-w-[1400px] mx-auto">
            {children}
          </div>
        </div>
      </main>

      {/* Persistent Music Mini-Player */}
      <div className="fixed bottom-6 right-6 z-50 animate-in slide-in-from-right-8 duration-500 hidden md:block">
         <div className="bg-sidebar/95 backdrop-blur-xl border border-brand-accent/30 rounded-2xl p-4 shadow-2xl flex items-center gap-6 w-96 group hover:border-brand-accent transition-all">
            <div className="w-14 h-14 rounded-xl overflow-hidden border border-panel shrink-0 relative">
               <div className="absolute inset-0 bg-brand-accent/20 animate-pulse pointer-events-none" />
               <Image 
                 src="https://picsum.photos/seed/nowplaying/100/100" 
                 alt="Art" 
                 fill 
                 className="object-cover"
                 referrerPolicy="no-referrer"
               />
            </div>
            <div className="flex-1 min-w-0">
               <div className="flex items-center gap-2 mb-0.5">
                  <div className="flex items-center gap-0.5">
                     {[1, 2, 3].map(i => <div key={i} className="w-0.5 h-2 bg-brand-accent rounded-full animate-bounce" style={{ animationDelay: `${i * 0.1}s` }} />)}
                  </div>
                  <span className="text-[9px] font-mono font-bold text-brand-accent uppercase tracking-widest">General VC</span>
               </div>
               <p className="text-xs font-bold text-text-strong truncate">Midnight City</p>
               <p className="text-[10px] text-text-muted truncate">M83</p>
            </div>
            <div className="flex items-center gap-3 pr-2">
               <button className="p-2.5 bg-text-strong rounded-full text-canvas hover:scale-110 transition-transform">
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><rect x="6" y="4" width="4" height="16" /><rect x="14" y="4" width="4" height="16" /></svg>
               </button>
            </div>
         </div>
      </div>
    </div>
  );
}
