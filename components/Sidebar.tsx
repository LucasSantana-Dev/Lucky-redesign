'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  BarChart3, 
  ShieldAlert, 
  Zap, 
  Users, 
  Music2, 
  Settings2, 
  LayoutDashboard,
  MessageSquare,
  Menu,
  ChevronRight
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion } from 'motion/react';

const NAV_GROUPS = [
  {
    label: 'Overview',
    items: [
      { label: 'Stats', icon: BarChart3, href: '/dashboard/[guildId]' },
    ]
  },
  {
    label: 'Moderation',
    items: [
      { label: 'Incident Console', icon: ShieldAlert, href: '/dashboard/[guildId]/moderation' },
      { label: 'Automod', icon: Zap, href: '/dashboard/[guildId]/automod' },
      { label: 'Server Logs', icon: LayoutDashboard, href: '/dashboard/[guildId]/logs' },
    ]
  },
  {
    label: 'Automation',
    items: [
      { label: 'Custom Commands', icon: MessageSquare, href: '/dashboard/[guildId]/commands' },
      { label: 'Auto Messages', icon: MessageSquare, href: '/dashboard/[guildId]/auto-messages' },
      { label: 'Embed Builder', icon: LayoutDashboard, href: '/dashboard/[guildId]/embeds' },
      { label: 'Reaction Roles', icon: Users, href: '/dashboard/[guildId]/roles' },
    ]
  },
  {
    label: 'Community',
    items: [
      { label: 'Levels', icon: Users, href: '/dashboard/[guildId]/levels' },
      { label: 'Starboard', icon: LayoutDashboard, href: '/dashboard/[guildId]/starboard' },
    ]
  },
  {
    label: 'Media',
    items: [
      { label: 'Music Deck', icon: Music2, href: '/dashboard/[guildId]/music' },
      { label: 'History', icon: MessageSquare, href: '/dashboard/[guildId]/music/history' },
    ]
  },
  {
    label: 'Advanced',
    items: [
      { label: 'Integrations', icon: Zap, href: '/dashboard/[guildId]/integrations' },
      { label: 'Settings', icon: Settings2, href: '/dashboard/[guildId]/settings' },
    ]
  }
];

interface SidebarProps {
  guildId: string;
}

export function Sidebar({ guildId }: SidebarProps) {
  const pathname = usePathname();

  return (
    <div className="w-64 bg-sidebar border-r border-panel flex flex-col h-screen sticky top-0 shrink-0 overflow-y-auto">
      {/* Guild Branding */}
      <div className="p-5 border-b border-panel flex items-center gap-3 bg-sidebar/50">
        <div className="w-10 h-10 rounded-lg bg-brand-discord flex items-center justify-center shrink-0">
          <span className="font-sora font-bold text-white">L</span>
        </div>
        <div className="overflow-hidden">
          <h2 className="font-sora text-sm font-medium text-text-strong truncate">Lucky Console</h2>
          <div className="flex items-center gap-1.5 mt-0.5">
            <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
            <span className="text-[10px] font-mono text-text-muted uppercase tracking-wider">Bot Ready</span>
          </div>
        </div>
      </div>

      {/* Nav Groups */}
      <nav className="flex-1 p-3 space-y-6">
        {NAV_GROUPS.map((group) => (
          <div key={group.label} className="space-y-1">
            <h3 className="px-3 text-[10px] font-bold text-text-muted uppercase tracking-widest mb-2 font-mono">
              {group.label}
            </h3>
            {group.items.map((item) => {
              const href = item.href.replace('[guildId]', guildId);
              const isActive = pathname === href;

              return (
                <Link
                  key={item.label}
                  href={href}
                  className={cn(
                    "flex items-center justify-between px-3 py-2 rounded-md transition-all group relative",
                    isActive 
                      ? "bg-highlight text-text-strong" 
                      : "text-text-body hover:bg-highlight/50 hover:text-text-strong"
                  )}
                >
                  <div className="flex items-center gap-3">
                    <item.icon className={cn("w-4 h-4", isActive ? "text-brand-discord" : "text-text-muted group-hover:text-text-body")} />
                    <span className="text-sm font-medium leading-none">{item.label}</span>
                  </div>
                  {isActive && (
                    <motion.div 
                      layoutId="active-nav"
                      className="absolute left-0 top-1/2 -translate-y-1/2 w-[3px] h-2/3 bg-brand-discord rounded-r-full"
                    />
                  )}
                </Link>
              );
            })}
          </div>
        ))}
      </nav>

      {/* Footer / User */}
      <div className="p-3 mt-auto border-t border-panel bg-sidebar/30">
        <button className="w-full flex items-center justify-between px-3 py-2 rounded-md hover:bg-highlight transition-colors text-text-body">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-elevated border border-panel flex items-center justify-center">
              <Users className="w-4 h-4 text-text-muted" />
            </div>
            <div className="text-left">
              <p className="text-xs font-semibold text-text-strong truncate">Server Admin</p>
              <p className="text-[10px] text-text-muted truncate">#0001</p>
            </div>
          </div>
          <ChevronRight className="w-4 h-4 text-text-muted" />
        </button>
      </div>
    </div>
  );
}
