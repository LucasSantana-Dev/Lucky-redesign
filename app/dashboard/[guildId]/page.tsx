import React from 'react';
import Link from 'next/link';
import { 
  Activity, 
  ShieldCheck, 
  MessageCircle, 
  Music, 
  ArrowRight,
  TrendingUp,
  AlertTriangle,
  Server,
  Zap
} from 'lucide-react';
import { cn } from '@/lib/utils';

const STATS = [
  { label: 'Total Members', value: '1,482', change: '+12%', icon: Server },
  { label: 'Active Today', value: '439', change: '+5%', icon: Activity },
  { label: 'Auto Actions', value: '12', change: '84%', icon: ShieldCheck },
  { label: 'Music Time', value: '14h', change: '-2h', icon: Music },
];

export default function OverviewPage() {
  return (
    <div className="space-y-8 animate-in fade-in duration-700 slide-in-from-bottom-4">
      {/* Hero / Operational Summary Header */}
      <div className="flex flex-col gap-6">
        <div>
           <div className="flex items-center gap-2 mb-2">
              <span className="text-[10px] font-mono text-brand-discord font-bold uppercase tracking-widest">Shard #34</span>
              <div className="h-4 w-px bg-panel" />
              <span className="text-[10px] font-mono text-green-500 font-bold uppercase tracking-widest">Active System</span>
           </div>
           <h1 className="text-4xl font-sora font-medium mb-2 tracking-tight">Guild Summary</h1>
           <p className="text-text-muted max-w-2xl leading-relaxed">
             Project Vanguard is currently running optimally. All automation shards are synchronized and no critical security incidents have been detected in the last 24 hours.
           </p>
        </div>

        {/* Operational Summary Band */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-2 bg-sidebar p-1 rounded-2xl border border-panel">
           {[
             { label: 'Moderation', status: 'Healthy', icon: ShieldCheck, color: 'text-green-500' },
             { label: 'Automation', status: '3 Active', icon: Zap, color: 'text-brand-discord' },
             { label: 'Music Bridge', status: 'Standby', icon: Music, color: 'text-text-muted' },
             { label: 'Integrations', status: 'Sync Ready', icon: Server, color: 'text-brand-accent' },
           ].map((item) => (
             <div key={item.label} className="p-4 bg-canvas/30 rounded-xl border border-transparent hover:border-panel transition-all flex items-center gap-4 group">
                <div className="p-2 bg-elevated border border-panel rounded-lg group-hover:bg-highlight transition-colors">
                   <item.icon className={cn("w-4 h-4", item.color)} />
                </div>
                <div>
                   <p className="text-[10px] font-mono text-text-muted uppercase tracking-widest leading-none">{item.label}</p>
                   <p className={cn("text-xs font-bold mt-1 leading-none", item.color)}>{item.status}</p>
                </div>
             </div>
           ))}
        </div>
      </div>

      {/* Grid of Actionable Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {STATS.map((stat) => (
          <div key={stat.label} className="bg-sidebar p-5 rounded-2xl border border-panel hover:border-highlight transition-colors group relative overflow-hidden">
            <div className="flex items-center justify-between mb-4">
              <div className="p-2.5 rounded-xl bg-elevated border border-panel group-hover:bg-highlight transition-colors">
                <stat.icon className="w-5 h-5 text-brand-discord" />
              </div>
              <div className="flex flex-col items-end">
                <span className={cn("text-[10px] font-mono leading-none mb-1 font-bold", stat.change.startsWith('+') ? "text-green-500" : "text-text-muted")}>
                  {stat.change}
                </span>
                <span className="text-[10px] font-mono text-text-subtle uppercase tracking-tighter leading-none">vs prev</span>
              </div>
            </div>
            <p className="text-text-muted text-[11px] font-mono uppercase tracking-wider mb-1 font-bold">{stat.label}</p>
            <p className="text-2xl font-sora font-medium text-text-strong">{stat.value}</p>
          </div>
        ))}
      </div>

      {/* Main Dashboard Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left/Main Column */}
        <div className="lg:col-span-2 space-y-8">
          {/* Urgent Notices Panel */}
          <div className="bg-sidebar rounded-2xl border border-panel overflow-hidden">
            <div className="p-5 border-b border-panel flex items-center justify-between bg-sidebar/50">
              <h3 className="font-sora text-sm font-medium">Recent Activity</h3>
              <button className="text-[10px] uppercase font-mono text-brand-accent hover:underline flex items-center gap-1">
                View All Logs <ArrowRight className="w-3 h-3" />
              </button>
            </div>
            <div className="divide-y divide-panel">
              {[1, 2, 3].map((i) => (
                <div key={i} className="p-4 flex items-center gap-4 hover:bg-elevated/30 transition-colors">
                  <div className="w-10 h-10 rounded-full bg-elevated border border-panel flex items-center justify-center">
                    <ShieldCheck className="w-5 h-5 text-green-500" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-text-strong truncate font-medium">User Banned</p>
                    <p className="text-xs text-text-muted truncate">Violated keyword policy: <code className="bg-elevated px-1 rounded">SPAM_FILTER_02</code></p>
                  </div>
                  <div className="text-right whitespace-nowrap">
                    <p className="text-[10px] font-mono text-text-muted">#CASE-8291</p>
                    <p className="text-[10px] font-mono text-text-muted">4m ago</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-sidebar p-6 rounded-2xl border border-panel">
              <h3 className="font-sora text-sm font-medium mb-4 flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-brand-discord" />
                Automation Health
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center text-xs">
                  <span className="text-text-muted">Auto Messages</span>
                  <span className="text-green-500">3/3 Active</span>
                </div>
                <div className="w-full h-1.5 bg-elevated rounded-full overflow-hidden">
                  <div className="w-full h-full bg-brand-discord" />
                </div>
                <div className="flex justify-between items-center text-xs">
                  <span className="text-text-muted">Starboard Reach</span>
                  <span className="text-text-strong">128 reactions</span>
                </div>
                <div className="w-full h-1.5 bg-elevated rounded-full overflow-hidden">
                  <div className="w-[60%] h-full bg-brand-accent" />
                </div>
              </div>
            </div>

            <div className="bg-sidebar p-6 rounded-2xl border border-panel">
              <h3 className="font-sora text-sm font-medium mb-4 flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-brand-accent" />
                Member Growth
              </h3>
              <div className="h-24 flex items-end gap-1.5">
                {[40, 70, 45, 90, 65, 80, 55, 95].map((h, i) => (
                  <div 
                    key={i} 
                    className="flex-1 bg-brand-accent/20 rounded-t-sm hover:bg-brand-accent transition-colors cursor-help"
                    style={{ height: `${h}%` }}
                  />
                ))}
              </div>
              <div className="flex justify-between mt-2 text-[10px] font-mono text-text-muted uppercase">
                <span>Mon</span>
                <span>Sun</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Sidebar Column */}
        <div className="space-y-6">
          <div className="bg-elevated p-6 rounded-2xl border border-panel relative overflow-hidden group">
            <div className="absolute inset-0 discord-gradient opacity-5 group-hover:opacity-10 transition-opacity" />
            <h3 className="font-sora text-sm font-medium mb-2">Setup Progress</h3>
            <p className="text-xs text-text-muted mb-4">Complete these steps to optimize your server integration.</p>
            <div className="space-y-3 relative">
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center">
                  <ShieldCheck className="w-3 h-3 text-white" />
                </div>
                <span className="text-xs text-text-strong line-through opacity-50">Bot Auth</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full border border-panel flex items-center justify-center bg-sidebar">
                  <div className="w-2 h-2 rounded-full bg-brand-discord" />
                </div>
                <span className="text-xs text-text-strong">Moderation Setup</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full border border-panel flex items-center justify-center bg-sidebar" />
                <span className="text-xs text-text-muted">Log Webhooks</span>
              </div>
            </div>
            <button className="w-full mt-6 py-2 bg-brand-discord rounded-xl text-xs font-bold text-white hover:bg-blue-600 transition-colors">
              Continue Setup
            </button>
          </div>

          <div className="bg-sidebar p-5 rounded-2xl border border-panel">
            <h3 className="font-sora text-sm font-medium mb-4">Live Status</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="mt-1 w-2 h-2 rounded-full bg-green-500 shrink-0" />
                <div>
                  <p className="text-xs text-text-strong font-medium">Moderation System</p>
                  <p className="text-[10px] text-text-muted uppercase font-mono mt-0.5">Sync-Ready</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-1 w-2 h-2 rounded-full bg-yellow-500 shrink-0" />
                <div>
                  <p className="text-xs text-text-strong font-medium">Shard #12</p>
                  <p className="text-[10px] text-text-muted uppercase font-mono mt-0.5">High Load - 42ms</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
