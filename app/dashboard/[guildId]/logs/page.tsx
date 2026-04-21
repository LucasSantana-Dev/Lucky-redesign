'use client';

import React from 'react';
import { 
  LayoutDashboard, 
  Search, 
  Filter, 
  MoreVertical, 
  Calendar, 
  Terminal,
  Hash,
  Download,
  Shield,
  Activity,
  Trash2
} from 'lucide-react';
import { cn } from '@/lib/utils';

const LOG_ENTRIES = [
  { id: '1', event: 'Message Deleted', user: 'LurkMaster#1234', channel: '#general', time: '14:28:01', type: 'Moderation' },
  { id: '2', event: 'Role Updated', user: 'System', channel: 'N/A', time: '14:27:45', type: 'Administrative' },
  { id: '3', event: 'Voice Join', user: 'Ghosting#9912', channel: 'Lobby', time: '14:26:12', type: 'Community' },
  { id: '4', event: 'Invite Created', user: 'Mod_Alpha', channel: '#info', time: '14:25:00', type: 'Administrative' },
  { id: '5', event: 'Command Used: !rank', user: 'Botty_01', channel: '#commands', time: '14:24:32', type: 'Automation' },
];

export default function LogsPage() {
  return (
    <div className="space-y-8 animate-in fade-in duration-700 slide-in-from-bottom-4">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-text-muted mb-2">
            <LayoutDashboard className="w-4 h-4" />
            <span className="text-[10px] font-mono uppercase tracking-widest">Protocol Panel</span>
          </div>
          <h1 className="text-3xl font-sora font-medium">Server Logs</h1>
          <p className="text-text-muted">A comprehensive ledger of all operational events within your guild shards.</p>
        </div>
        
        <div className="flex items-center gap-3">
          <button className="px-5 py-2.5 bg-sidebar hover:bg-highlight border border-panel rounded-xl text-sm font-bold text-text-strong transition-all flex items-center gap-2">
            <Download className="w-4 h-4" /> Export JSON
          </button>
          <button className="px-5 py-2.5 bg-brand-discord hover:bg-blue-600 text-white text-sm font-bold rounded-xl transition-all flex items-center gap-2 shadow-lg shadow-brand-discord/20">
             <Filter className="w-4 h-4" /> Filter Stream
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-4 gap-8">
        {/* Left Column: Filter Panel */}
        <div className="xl:col-span-1 space-y-6">
           <div className="bg-sidebar p-6 rounded-2xl border border-panel space-y-6">
              <h3 className="text-[10px] font-mono text-text-muted uppercase tracking-widest font-bold">Event Categories</h3>
              <div className="space-y-2">
                 {[
                   { label: 'Moderation', icon: Shield, active: true },
                   { label: 'Administrative', icon: Terminal, active: true },
                   { label: 'Automation', icon: Activity, active: false },
                   { label: 'Community', icon: LayoutDashboard, active: false },
                 ].map((cat) => (
                   <button key={cat.label} className={cn(
                     "w-full flex items-center justify-between px-3 py-2 rounded-lg text-xs font-semibold transition-all",
                     cat.active ? "bg-brand-discord/10 text-brand-discord border border-brand-discord/20" : "text-text-muted hover:bg-canvas hover:text-text-strong border border-transparent"
                   )}>
                      <div className="flex items-center gap-3">
                         <cat.icon className="w-3.5 h-3.5" />
                         <span>{cat.label}</span>
                      </div>
                      <div className={cn("w-1.5 h-1.5 rounded-full", cat.active ? "bg-brand-discord" : "bg-text-subtle")} />
                   </button>
                 ))}
              </div>
              
              <div className="pt-4 border-t border-panel space-y-4">
                 <div className="space-y-1.5">
                    <label className="text-[10px] font-mono text-text-muted uppercase tracking-widest">Timeframe</label>
                    <button className="w-full flex items-center justify-between px-3 py-2 bg-canvas border border-panel rounded-lg text-xs font-semibold text-text-strong">
                       <span className="flex items-center gap-2"><Calendar className="w-3.5 h-3.5" /> Last 24 Hours</span>
                    </button>
                 </div>
              </div>
           </div>

           <div className="p-4 bg-red-500/5 border border-red-500/10 rounded-2xl flex items-center justify-center gap-2 group cursor-pointer">
              <Trash2 className="w-4 h-4 text-red-500 group-hover:scale-110 transition-transform" />
              <span className="text-xs font-bold text-red-500">Purge Operational Logs</span>
           </div>
        </div>

        {/* Right Column: Log Feed */}
        <div className="xl:col-span-3 space-y-6">
           <div className="bg-sidebar rounded-2xl border border-panel overflow-hidden">
             <div className="p-4 border-b border-panel bg-sidebar/50 flex items-center gap-4">
                <div className="relative flex-1">
                   <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted" />
                   <input 
                     type="text" 
                     placeholder="Search log entries..." 
                     className="w-full bg-elevated border border-panel rounded-lg py-2 pl-10 pr-4 text-xs focus:ring-1 focus:ring-brand-discord outline-none" 
                   />
                </div>
                <div className="flex items-center gap-2">
                   <span className="text-[10px] font-mono text-text-muted uppercase font-bold tracking-widest whitespace-nowrap">Auto Refresh</span>
                   <div className="w-8 h-4 bg-brand-discord rounded-full p-0.5 relative cursor-pointer">
                      <div className="absolute right-0.5 top-0.5 w-3 h-3 bg-white rounded-full shadow-sm" />
                   </div>
                </div>
             </div>

             <div className="overflow-x-auto">
                <table className="w-full text-left">
                   <thead>
                      <tr className="bg-sidebar/30 border-b border-panel">
                         <th className="px-6 py-4 text-[10px] font-mono text-text-muted uppercase tracking-widest">Event</th>
                         <th className="px-6 py-4 text-[10px] font-mono text-text-muted uppercase tracking-widest">User / Shard</th>
                         <th className="px-6 py-4 text-[10px] font-mono text-text-muted uppercase tracking-widest">Destination</th>
                         <th className="px-6 py-4 text-[10px] font-mono text-text-muted uppercase tracking-widest">Status</th>
                         <th className="px-6 py-4 text-[10px] font-mono text-text-muted uppercase tracking-widest">Time</th>
                         <th className="px-6 py-4"></th>
                      </tr>
                   </thead>
                   <tbody className="divide-y divide-panel">
                      {LOG_ENTRIES.map((log) => (
                         <tr key={log.id} className="hover:bg-elevated/30 transition-colors group cursor-pointer">
                            <td className="px-6 py-4">
                               <div className="space-y-0.5">
                                  <p className="text-sm font-bold text-text-strong">{log.event}</p>
                                  <p className="text-[10px] font-mono text-text-muted uppercase tracking-tight">{log.type}</p>
                               </div>
                            </td>
                            <td className="px-6 py-4">
                               <p className="text-xs font-semibold text-text-body">{log.user}</p>
                            </td>
                            <td className="px-6 py-4">
                               <div className="flex items-center gap-1.5 text-xs text-text-muted italic">
                                  {log.channel !== 'N/A' && <Hash className="w-3 h-3" />} {log.channel}
                               </div>
                            </td>
                            <td className="px-6 py-4">
                               <span className="text-[10px] font-mono px-2 py-0.5 bg-green-500/10 text-green-500 border border-green-500/20 rounded-full uppercase font-bold">Logged</span>
                            </td>
                            <td className="px-6 py-4">
                               <p className="font-mono text-xs text-text-muted">{log.time}</p>
                            </td>
                            <td className="px-6 py-4 text-right">
                               <button className="p-2 hover:bg-panel rounded-lg transition-colors text-text-muted opacity-0 group-hover:opacity-100">
                                  <MoreVertical className="w-4 h-4" />
                                </button>
                            </td>
                         </tr>
                      ))}
                   </tbody>
                </table>
             </div>

             <div className="p-4 border-t border-panel bg-sidebar/50 text-center">
                <button className="text-[10px] font-mono uppercase font-bold text-text-subtle hover:text-text-strong transition-colors">
                  Load Older Operational Logs
                </button>
             </div>
           </div>
        </div>
      </div>
    </div>
  );
}
