'use client';

import React from 'react';
import { 
  ShieldCheck, 
  Zap, 
  AlertTriangle, 
  Plus, 
  Settings2, 
  ChevronRight,
  MoreVertical,
  Activity,
  UserX,
  MessageSquareOff,
  Link2
} from 'lucide-react';
import { cn } from '@/lib/utils';

const RULES = [
  { id: '1', title: 'Anti-Spam Filter', type: 'Velocity', action: 'Timeout', status: 'Active', color: 'text-green-500' },
  { id: '2', title: 'Profanity Filter', type: 'Wordlist', action: 'Delete', status: 'Active', color: 'text-green-500' },
  { id: '3', title: 'Link Protection', type: 'Domain Blacklist', action: 'Log Only', status: 'Testing', color: 'text-blue-500' },
  { id: '4', title: 'Mass Mention', type: 'Threshold', action: 'Ban', status: 'Paused', color: 'text-text-muted' },
];

export default function AutomodPage() {
  return (
    <div className="space-y-8 animate-in fade-in duration-700 slide-in-from-bottom-4">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-text-muted mb-2">
            <ShieldCheck className="w-4 h-4" />
            <span className="text-[10px] font-mono uppercase tracking-widest">Active Security</span>
          </div>
          <h1 className="text-3xl font-sora font-medium">Automod Console</h1>
          <p className="text-text-muted">Configure autonomous defense layers and algorithmic moderation rules.</p>
        </div>
        
        <div className="flex items-center gap-3">
          <button className="px-5 py-2.5 bg-sidebar hover:bg-highlight border border-panel rounded-xl text-sm font-bold text-text-strong transition-all flex items-center gap-2 text-red-500">
             <AlertTriangle className="w-4 h-4" /> Panic Button
          </button>
          <button className="px-5 py-2.5 bg-brand-discord hover:bg-blue-600 text-white text-sm font-bold rounded-xl transition-all flex items-center gap-2 shadow-lg shadow-brand-discord/20">
             <Plus className="w-4 h-4" /> New Rule
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-12 gap-8">
        {/* Left Column: Rule Grid */}
        <div className="xl:col-span-8 space-y-6">
           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {RULES.map((rule) => (
                <div key={rule.id} className="bg-sidebar p-5 rounded-2xl border border-panel hover:border-brand-discord/50 transition-all group flex flex-col justify-between h-48 relative overflow-hidden">
                   <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                      <Zap className="w-16 h-16 text-brand-discord" />
                   </div>
                   
                   <div>
                      <div className="flex items-center justify-between mb-2">
                         <span className="text-[10px] font-mono text-text-subtle uppercase tracking-widest font-bold">Rule #{rule.id}</span>
                         <span className={cn("text-[10px] font-mono uppercase font-bold", rule.color)}>{rule.status}</span>
                      </div>
                      <h3 className="text-lg font-sora font-medium text-text-strong group-hover:text-brand-discord transition-colors">{rule.title}</h3>
                      <p className="text-xs text-text-muted mt-1">{rule.type} based enforcement</p>
                   </div>

                   <div className="flex items-center justify-between mt-auto">
                      <div className="px-3 py-1 bg-elevated border border-panel rounded-lg text-[10px] font-bold text-text-strong uppercase tracking-wider">
                         Action: {rule.action}
                      </div>
                      <div className="flex items-center gap-2">
                         <button className="p-2 hover:bg-panel rounded-lg text-text-muted transition-colors"><Settings2 className="w-4 h-4" /></button>
                         <button className="p-2 hover:bg-panel rounded-lg text-text-muted transition-colors"><MoreVertical className="w-4 h-4" /></button>
                      </div>
                   </div>
                </div>
              ))}
              <button className="bg-canvas border-2 border-dashed border-panel rounded-2xl p-5 flex flex-col items-center justify-center gap-3 hover:border-brand-discord hover:bg-sidebar/30 transition-all group h-48">
                 <div className="p-3 bg-panel rounded-full group-hover:bg-brand-discord/20 transition-colors">
                    <Plus className="w-6 h-6 text-text-muted group-hover:text-brand-discord" />
                 </div>
                 <span className="text-sm font-bold text-text-muted group-hover:text-text-strong">Create Dynamic Rule</span>
              </button>
           </div>
        </div>

        {/* Right Column: Global Stats & Health */}
        <div className="xl:col-span-4 space-y-6">
           <div className="bg-sidebar rounded-2xl border border-panel p-6 space-y-8">
              <div className="flex items-center justify-between">
                 <h3 className="text-sm font-bold text-text-strong font-sora">Security Health</h3>
                 <span className="text-[10px] font-mono text-green-500 font-bold flex items-center gap-1">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                    Optimal
                 </span>
              </div>

              <div className="space-y-4">
                 {[
                   { label: 'Blocked Attacks (24h)', value: '142', icon: MessageSquareOff },
                   { label: 'Spam Burst Detected', value: '3', icon: Activity },
                   { label: 'Suspicious Links', value: '28', icon: Link2 },
                   { label: 'Auto Bans', value: '1', icon: UserX },
                 ].map((stat) => (
                   <div key={stat.label} className="flex items-center justify-between group">
                      <div className="flex items-center gap-3">
                         <div className="p-2 bg-elevated border border-panel rounded-lg group-hover:bg-highlight transition-colors">
                            <stat.icon className="w-4 h-4 text-text-muted group-hover:text-brand-discord transition-colors" />
                         </div>
                         <span className="text-xs font-semibold text-text-body">{stat.label}</span>
                      </div>
                      <span className="text-sm font-mono font-bold text-text-strong">{stat.value}</span>
                   </div>
                 ))}
              </div>

              <div className="pt-4 border-t border-panel">
                 <button className="w-full flex items-center justify-between text-xs font-bold text-brand-discord hover:text-blue-400 transition-colors group">
                    View Complete Audit Log
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                 </button>
              </div>
           </div>

           <div className="bg-elevated p-6 rounded-2xl border border-panel relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-5">
                 <ShieldCheck className="w-16 h-16 text-brand-accent" />
              </div>
              <h3 className="font-sora text-sm font-medium mb-2">Shard Protection</h3>
              <p className="text-xs text-text-muted mb-4 leading-relaxed">
                Automod rules are currently sharded across 4 clusters to ensure zero-latency message filtering during high traffic events.
              </p>
              <div className="flex gap-1.5">
                 {[1, 2, 3, 4].map(i => (
                    <div key={i} className="h-1 flex-1 bg-green-500/30 rounded-full overflow-hidden">
                       <div className="h-full bg-green-500 w-full" />
                    </div>
                 ))}
              </div>
           </div>
        </div>
      </div>
    </div>
  );
}
