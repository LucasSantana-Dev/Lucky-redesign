'use client';

import React from 'react';
import { 
  MessageSquare, 
  Clock, 
  Calendar, 
  Plus, 
  MoreVertical, 
  Send,
  Eye,
  Hash,
  Activity,
  AlertCircle
} from 'lucide-react';
import { cn } from '@/lib/utils';

const SCHEDULED_MESSAGES = [
  { id: '1', title: 'Daily Welcome', channel: '#general', cadence: 'Every 24h', nextSend: '2h 14m', status: 'Active', color: 'text-green-500' },
  { id: '2', title: 'Nightly Clean', channel: '#admin-logs', cadence: 'Daily at 00:00', nextSend: '6h 42m', status: 'Active', color: 'text-green-500' },
  { id: '3', title: 'Weekly Promo', channel: '#partners', cadence: 'Every Monday', nextSend: '3 days', status: 'Paused', color: 'text-text-muted' },
];

export default function AutoMessagesPage() {
  return (
    <div className="space-y-8 animate-in fade-in duration-700 slide-in-from-bottom-4">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-text-muted mb-2">
            <MessageSquare className="w-4 h-4" />
            <span className="text-[10px] font-mono uppercase tracking-widest">Automation Scheduler</span>
          </div>
          <h1 className="text-3xl font-sora font-medium">Auto Messages</h1>
          <p className="text-text-muted">Broadcast recurring announcements and system messages to your channels.</p>
        </div>
        
        <button className="px-5 py-2.5 bg-brand-discord hover:bg-blue-600 text-white text-sm font-bold rounded-xl transition-all flex items-center gap-2">
           <Plus className="w-4 h-4" /> Create Schedule
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column: List */}
        <div className="lg:col-span-2 space-y-6">
           <div className="bg-sidebar rounded-2xl border border-panel overflow-hidden">
             <div className="p-5 border-b border-panel flex items-center justify-between bg-sidebar/50">
               <h3 className="font-sora text-sm font-medium">Active Schedules</h3>
               <div className="flex items-center gap-2 text-[10px] font-mono text-text-muted">
                 <span className="text-green-500 uppercase">2 Running</span>
                 <span>/</span>
                 <span className="uppercase">1 Paused</span>
               </div>
             </div>
             
             <div className="divide-y divide-panel">
                {SCHEDULED_MESSAGES.map((msg) => (
                  <div key={msg.id} className="p-5 flex items-center gap-6 hover:bg-elevated/30 transition-colors group cursor-pointer">
                    <div className="w-12 h-12 rounded-2xl bg-elevated border border-panel flex items-center justify-center shrink-0 group-hover:border-brand-discord transition-colors">
                      <Clock className="w-6 h-6 text-text-muted group-hover:text-brand-discord" />
                    </div>
                    
                    <div className="flex-1 min-w-0">
                       <div className="flex items-center gap-2 mb-1">
                          <p className="text-sm font-bold text-text-strong truncate">{msg.title}</p>
                          <span className={cn("text-[10px] font-mono uppercase font-bold", msg.color)}>{msg.status}</span>
                       </div>
                       <div className="flex items-center gap-4">
                          <div className="flex items-center gap-1.5 text-xs text-text-muted">
                             <Hash className="w-3.5 h-3.5" /> {msg.channel}
                          </div>
                          <div className="flex items-center gap-1.5 text-xs text-text-muted">
                             <Calendar className="w-3.5 h-3.5" /> {msg.cadence}
                          </div>
                       </div>
                    </div>

                    <div className="text-right">
                       <p className="text-[10px] font-mono text-text-subtle uppercase tracking-wider mb-1">Next Run</p>
                       <p className="text-xs font-bold text-text-strong">{msg.nextSend}</p>
                    </div>

                    <button className="p-2 hover:bg-panel rounded-lg transition-colors text-text-muted">
                       <MoreVertical className="w-4 h-4" />
                    </button>
                  </div>
                ))}
             </div>
           </div>

           {/* Automation Health Snippet */}
           <div className="bg-sidebar p-6 rounded-3xl border border-panel relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4">
                 <Activity className="w-12 h-12 text-brand-discord opacity-5" />
              </div>
              <h3 className="font-sora text-sm font-medium mb-4 flex items-center gap-2">
                <Send className="w-4 h-4 text-brand-discord" />
                Scheduler Health
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                 <div className="space-y-1">
                    <p className="text-[10px] font-mono text-text-muted uppercase tracking-widest">Delivery Rate</p>
                    <p className="text-xl font-sora font-medium text-text-strong">99.98%</p>
                 </div>
                 <div className="space-y-1">
                    <p className="text-[10px] font-mono text-text-muted uppercase tracking-widest">Average Delay</p>
                    <p className="text-xl font-sora font-medium text-text-strong">12ms</p>
                 </div>
                 <div className="space-y-1">
                    <p className="text-[10px] font-mono text-text-muted uppercase tracking-widest">Shard Sync</p>
                    <p className="text-xl font-sora font-medium text-green-500 line-clamp-1 flex items-center gap-2">
                       Ready
                       <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    </p>
                 </div>
              </div>
           </div>
        </div>

        {/* Right Column: Quick View / Stats */}
        <div className="space-y-6">
           <div className="bg-sidebar rounded-2xl border border-panel overflow-hidden border-brand-accent/30">
              <div className="p-5 bg-brand-accent/5 border-b border-panel flex items-center justify-between">
                 <h3 className="font-sora text-sm font-medium">Coming Up Next</h3>
                 <span className="text-[10px] font-mono text-brand-accent uppercase font-bold">Priority Shard</span>
              </div>
              <div className="p-6 space-y-6">
                 <div className="flex gap-4">
                    <div className="text-center shrink-0">
                       <p className="text-xl font-sora font-bold text-text-strong">14</p>
                       <p className="text-[10px] font-mono text-brand-accent uppercase">Min</p>
                    </div>
                    <div className="flex-1 min-w-0 flex flex-col justify-center">
                       <p className="text-sm font-bold text-text-strong truncate">Daily Welcome</p>
                       <p className="text-xs text-text-muted truncate">#general</p>
                    </div>
                 </div>

                 <div className="p-4 bg-elevated/50 border border-panel rounded-xl">
                    <div className="flex items-center gap-2 mb-2 text-text-strong">
                       <Eye className="w-3.5 h-3.5" />
                       <span className="text-[10px] font-mono uppercase font-bold">Content Preview</span>
                    </div>
                    <p className="text-xs text-text-muted italic line-clamp-3">
                       &quot;Welcome to Project Vanguard! Be sure to check <Hash className="inline w-2.5 h-2.5" /> rules before...&quot;
                    </p>
                 </div>

                 <button className="w-full py-3 bg-brand-accent rounded-xl text-xs font-bold text-white hover:bg-pink-600 transition-colors shadow-lg shadow-brand-accent/20">
                    Send Force Run
                 </button>
              </div>
           </div>

           <div className="bg-elevated p-6 rounded-2xl border border-panel">
              <h3 className="font-sora text-sm font-medium mb-3 flex items-center gap-2">
                 <AlertCircle className="w-4 h-4 text-yellow-500" />
                 Rate Limits
              </h3>
              <p className="text-xs text-text-muted leading-relaxed">
                 You are currently using 15% of your global message rate limit. High-frequency messaging may experience jitter on large guilds.
              </p>
              <div className="mt-4 w-full h-1.5 bg-panel rounded-full overflow-hidden">
                 <div className="w-[15%] h-full bg-yellow-500" />
              </div>
           </div>
        </div>
      </div>
    </div>
  );
}
