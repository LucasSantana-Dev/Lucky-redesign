'use client';

import React from 'react';
import { 
  Users, 
  Smile, 
  Plus, 
  MessageSquare, 
  Hash, 
  MoreVertical,
  ChevronRight,
  Settings2,
  Trash2,
  Zap
} from 'lucide-react';
import { cn } from '@/lib/utils';

const REACTION_ROLES = [
  { id: '1', title: 'Color Selection', channel: '#roles-info', reactions: 8, active: 428, status: 'Active' },
  { id: '2', title: 'Access Request', channel: '#verify-here', reactions: 1, active: 1502, status: 'Active' },
  { id: '3', title: 'Game Tags', channel: '#roles-info', reactions: 12, active: 92, status: 'Paused' },
];

export default function ReactionRolesPage() {
  return (
    <div className="space-y-8 animate-in fade-in duration-700 slide-in-from-bottom-4">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-text-muted mb-2">
            <Users className="w-4 h-4" />
            <span className="text-[10px] font-mono uppercase tracking-widest">Automation Studio</span>
          </div>
          <h1 className="text-3xl font-sora font-medium">Reaction Roles</h1>
          <p className="text-text-muted">Empower your members to self-assign identifies and access permissions via emoji reactions.</p>
        </div>
        
        <button className="px-5 py-2.5 bg-brand-discord hover:bg-blue-600 text-white text-sm font-bold rounded-xl transition-all flex items-center gap-2 shadow-lg shadow-brand-discord/20">
           <Plus className="w-4 h-4" /> Add Reaction Menu
        </button>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
        {/* Left Column: List of Menus */}
        <div className="xl:col-span-2 space-y-6">
           <div className="bg-sidebar rounded-2xl border border-panel overflow-hidden">
              <div className="p-5 border-b border-panel bg-sidebar/50 flex items-center justify-between">
                 <h3 className="font-sora text-sm font-medium">Active Reaction Menus</h3>
                 <span className="text-[10px] font-mono text-text-muted uppercase tracking-widest">{REACTION_ROLES.length} Menus Configured</span>
              </div>
              
              <div className="divide-y divide-panel">
                 {REACTION_ROLES.map((group) => (
                    <div key={group.id} className="p-5 flex items-center gap-6 hover:bg-elevated/30 transition-colors group cursor-pointer">
                       <div className="w-12 h-12 rounded-2xl bg-elevated border border-panel flex items-center justify-center shrink-0 group-hover:border-brand-discord transition-colors">
                          <Smile className="w-6 h-6 text-text-muted group-hover:text-brand-discord" />
                       </div>
                       
                       <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-3 mb-1">
                             <p className="text-sm font-bold text-text-strong truncate">{group.title}</p>
                             <span className={cn(
                               "text-[10px] font-mono uppercase font-bold px-2 py-0.5 rounded border",
                               group.status === 'Active' ? "bg-green-500/10 text-green-500 border-green-500/20" : "bg-text-muted/10 text-text-muted border-panel"
                             )}>
                               {group.status}
                             </span>
                          </div>
                          <div className="flex items-center gap-4">
                             <div className="flex items-center gap-1.5 text-xs text-text-muted">
                                <Hash className="w-3.5 h-3.5" /> {group.channel}
                             </div>
                             <div className="flex items-center gap-1.5 text-xs text-text-muted">
                                <Zap className="w-3.5 h-3.5" /> {group.reactions} Options
                             </div>
                          </div>
                       </div>

                       <div className="text-right hidden md:block">
                          <p className="text-[10px] font-mono text-text-subtle uppercase tracking-wider mb-1">Total Assigned</p>
                          <p className="text-sm font-bold text-text-strong">{group.active.toLocaleString()}</p>
                       </div>

                       <div className="flex items-center gap-1">
                          <button className="p-2 hover:bg-panel rounded-lg transition-colors text-text-muted">
                             <Settings2 className="w-4 h-4" />
                          </button>
                          <button className="p-2 hover:bg-panel rounded-lg transition-colors text-text-muted">
                             <MoreVertical className="w-4 h-4" />
                          </button>
                       </div>
                    </div>
                 ))}
              </div>
           </div>

           {/* Setup Tip Card */}
           <div className="bg-brand-discord/5 border border-brand-discord/20 p-6 rounded-3xl flex flex-col md:flex-row gap-6 items-center">
              <div className="w-16 h-16 rounded-full bg-brand-discord/20 flex items-center justify-center shrink-0">
                 <Zap className="w-8 h-8 text-brand-discord" />
              </div>
              <div className="flex-1 text-center md:text-left">
                 <h4 className="text-sm font-bold text-text-strong mb-1">Pro Tip: Use Sharded Menus</h4>
                 <p className="text-xs text-text-muted leading-relaxed">
                   On guilds with over 10,000 members, split your reaction roles into multiple messages to reduce reaction latency.
                 </p>
              </div>
              <button className="px-5 py-2 bg-brand-discord text-white text-xs font-bold rounded-xl whitespace-nowrap shadow-lg shadow-brand-discord/10">
                 Learn More
              </button>
           </div>
        </div>

        {/* Right Column: Mini Editor / Summary */}
        <div className="space-y-6">
           <div className="bg-sidebar rounded-2xl border border-panel overflow-hidden">
              <div className="p-5 border-b border-panel bg-sidebar/50">
                 <h3 className="font-sora text-sm font-medium">Quick Statistics</h3>
              </div>
              <div className="p-6 space-y-6">
                 <div className="space-y-3">
                    <div className="flex items-center justify-between">
                       <span className="text-xs text-text-muted">Self-Assign Velocity</span>
                       <span className="text-xs font-mono text-green-500 font-bold">+128/h</span>
                    </div>
                    <div className="h-1.5 w-full bg-panel rounded-full overflow-hidden">
                       <div className="h-full bg-brand-discord w-[65%]" />
                    </div>
                 </div>
                 
                 <div className="grid grid-cols-2 gap-4 pt-4 border-t border-panel">
                    <div className="space-y-1">
                       <p className="text-[10px] font-mono text-text-muted uppercase">Total Clicks</p>
                       <p className="text-lg font-sora font-medium text-text-strong">18.2K</p>
                    </div>
                    <div className="space-y-1">
                       <p className="text-[10px] font-mono text-text-muted uppercase">Unique Users</p>
                       <p className="text-lg font-sora font-medium text-text-strong">4.1K</p>
                    </div>
                 </div>
              </div>
           </div>

           <div className="bg-elevated p-6 rounded-2xl border border-panel">
              <h3 className="font-sora text-sm font-medium mb-4 flex items-center gap-2">
                 <MessageSquare className="w-4 h-4 text-brand-accent" />
                 Template Library
              </h3>
              <div className="space-y-3">
                 {['Color Roles', 'Game Titles', 'Ping Subscriptions'].map(t => (
                   <div key={t} className="flex items-center justify-between p-3 bg-sidebar rounded-xl border border-panel group hover:border-brand-accent transition-all cursor-pointer">
                      <span className="text-xs font-semibold text-text-body group-hover:text-text-strong">{t}</span>
                      <ChevronRight className="w-3.5 h-3.5 text-text-muted group-hover:text-brand-accent transition-all" />
                   </div>
                 ))}
              </div>
           </div>

           <div className="p-4 bg-red-500/5 border border-red-500/20 rounded-2xl flex items-start gap-4">
              <Trash2 className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
              <div>
                 <p className="text-xs font-bold text-red-500 mb-1">Delete all Menus</p>
                 <p className="text-[10px] text-text-muted leading-relaxed">This action cannot be undone. All active reaction role messages will lose their functionality.</p>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
}
