'use client';

import React from 'react';
import Image from 'next/image';
import { ChevronDown, RefreshCcw } from 'lucide-react';

interface GuildSwitcherProps {
  currentGuild: {
    id: string;
    name: string;
    icon: string | null;
  };
}

export function GuildSwitcher({ currentGuild }: GuildSwitcherProps) {
  return (
    <div className="flex items-center gap-4 bg-sidebar px-4 py-2 rounded-xl border border-panel shadow-sm">
      <div className="relative w-8 h-8 shrink-0">
        {currentGuild.icon ? (
          <Image 
            src={currentGuild.icon} 
            alt={currentGuild.name}
            fill
            className="rounded-lg object-cover"
            referrerPolicy="no-referrer"
          />
        ) : (
          <div className="w-full h-full rounded-lg bg-elevated flex items-center justify-center border border-panel">
            <span className="font-sora text-sm">{currentGuild.name.charAt(0)}</span>
          </div>
        )}
      </div>
      
      <div className="flex flex-col min-w-0">
        <span className="text-xs text-text-muted font-mono leading-none mb-1">SELECTED GUILD</span>
        <h1 className="text-sm font-bold text-text-strong truncate">{currentGuild.name}</h1>
      </div>

      <div className="h-6 w-px bg-panel mx-2" />

      <button className="p-2 hover:bg-elevated rounded-lg transition-colors text-text-muted hover:text-text-strong group">
        <RefreshCcw className="w-4 h-4 group-hover:rotate-180 transition-transform duration-500" />
      </button>

      <button className="flex items-center gap-2 px-3 py-1.5 bg-elevated hover:bg-highlight transition-colors rounded-lg border border-panel text-xs font-medium text-text-strong">
        Switch
        <ChevronDown className="w-3 h-3" />
      </button>
    </div>
  );
}
