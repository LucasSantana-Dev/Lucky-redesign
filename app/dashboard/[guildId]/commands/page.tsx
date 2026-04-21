'use client';

import React from 'react';
import { 
  MessageSquare, 
  Plus, 
  Search, 
  Filter, 
  MoreVertical, 
  Code, 
  Terminal,
  Zap,
  ChevronRight,
  Settings2
} from 'lucide-react';
import { cn } from '@/lib/utils';

const INITIAL_COMMANDS = [
  { id: '1', name: '!rules', type: 'Text', category: 'Utility', usage: { '7d': 142, '30d': 620, 'allTime': 1248 }, status: 'Active', response: 'Please read our community rules in #info.' },
  { id: '2', name: '!rank', type: 'Dynamic', category: 'Fun', usage: { '7d': 5210, '30d': 22100, 'allTime': 45092 }, status: 'Active', response: 'Your current level is {level}.' },
  { id: '3', name: '!socials', type: 'Embed', category: 'Utility', usage: { '7d': 92, '30d': 410, 'allTime': 842 }, status: 'Active', response: 'Check out our Twitter and Discord links!' },
  { id: '4', name: '!ban', type: 'Action', category: 'Admin', usage: { '7d': 2, '30d': 5, 'allTime': 12 }, status: 'Restricted', response: 'Banning user for harassment.' },
  { id: '5', name: '!promo', type: 'Text', category: 'Marketing', usage: { '7d': 420, '30d': 1850, 'allTime': 3102 }, status: 'Active', response: 'Get 20% off with code LUCKY20.' },
];

export default function CustomCommandsPage() {
  const [commands, setCommands] = React.useState(INITIAL_COMMANDS);
  const [searchQuery, setSearchQuery] = React.useState('');
  const [timeframe, setTimeframe] = React.useState<'7d' | '30d' | 'allTime'>('allTime');

  const toggleCommand = (id: string) => {
    setCommands(prev => prev.map(cmd => {
      if (cmd.id === id) {
        return {
          ...cmd,
          status: cmd.status === 'Active' ? 'Disabled' : 'Active'
        };
      }
      return cmd;
    }));
  };

  const filteredCommands = React.useMemo(() => {
    return commands
      .filter(cmd => 
        cmd.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
        cmd.response.toLowerCase().includes(searchQuery.toLowerCase())
      )
      .sort((a, b) => b.usage[timeframe] - a.usage[timeframe]);
  }, [commands, searchQuery, timeframe]);
  return (
    <div className="space-y-8 animate-in fade-in duration-700 slide-in-from-bottom-4">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-text-muted mb-2">
            <MessageSquare className="w-4 h-4" />
            <span className="text-[10px] font-mono uppercase tracking-widest">Automation Studio</span>
          </div>
          <h1 className="text-3xl font-sora font-medium">Custom Commands</h1>
          <p className="text-text-muted">Build a tailored lexicon of triggers and responses for your guild.</p>
        </div>
        
        <div className="flex items-center gap-3">
          <button className="px-5 py-2.5 bg-sidebar hover:bg-highlight border border-panel rounded-xl text-sm font-bold text-text-strong transition-all flex items-center gap-2">
            <Filter className="w-4 h-4" /> Filters
          </button>
          <button className="px-5 py-2.5 bg-brand-discord hover:bg-blue-600 text-white text-sm font-bold rounded-xl transition-all flex items-center gap-2">
             <Plus className="w-4 h-4" /> New Command
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-4 gap-8">
        {/* Left Column: List Console */}
        <div className="xl:col-span-3 space-y-6">
           <div className="bg-sidebar rounded-2xl border border-panel overflow-hidden">
             <div className="p-4 border-b border-panel flex flex-col md:flex-row items-start md:items-center gap-4 bg-sidebar/50">
                <div className="relative flex-1 w-full">
                   <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-text-muted" />
                   <input 
                     type="text" 
                     placeholder="Search by trigger or response content..." 
                     value={searchQuery}
                     onChange={(e) => setSearchQuery(e.target.value)}
                     className="w-full bg-elevated border border-panel rounded-lg py-1.5 pl-9 pr-3 text-xs focus:ring-1 focus:ring-brand-discord" 
                   />
                </div>
                <div className="flex items-center bg-elevated border border-panel rounded-lg p-0.5">
                   {(['7d', '30d', 'allTime'] as const).map((t) => (
                      <button
                        key={t}
                        onClick={() => setTimeframe(t)}
                        className={cn(
                          "px-3 py-1 text-[10px] font-bold uppercase tracking-wider rounded-md transition-all",
                          timeframe === t ? "bg-highlight text-text-strong shadow-sm" : "text-text-muted hover:text-text-body"
                        )}
                      >
                        {t === 'allTime' ? 'All-Time' : t}
                      </button>
                   ))}
                </div>
                <div className="hidden md:block h-6 w-px bg-panel" />
                <button className="p-1.5 hover:bg-panel rounded text-text-muted shrink-0 flex items-center gap-2">
                   <Settings2 className="w-4 h-4" />
                   <span className="text-xs font-bold md:hidden">Settings</span>
                </button>
             </div>

             <div className="overflow-x-auto">
                <table className="w-full text-left">
                   <thead>
                      <tr className="bg-sidebar/30 border-b border-panel">
                         <th className="px-6 py-4 text-[10px] font-mono text-text-muted uppercase tracking-widest">Trigger</th>
                         <th className="px-6 py-4 text-[10px] font-mono text-text-muted uppercase tracking-widest">Type</th>
                         <th className="px-6 py-4 text-[10px] font-mono text-text-muted uppercase tracking-widest">Category</th>
                         <th className="px-6 py-4 text-[10px] font-mono text-text-muted uppercase tracking-widest">Usage Count</th>
                         <th className="px-6 py-4 text-[10px] font-mono text-text-muted uppercase tracking-widest">Status</th>
                         <th className="px-6 py-4"></th>
                      </tr>
                   </thead>
                   <tbody className="divide-y divide-panel">
                      {filteredCommands.map((cmd) => (
                         <tr key={cmd.id} className="hover:bg-elevated/30 transition-colors group cursor-pointer">
                            <td className="px-6 py-4">
                               <div className="flex items-center gap-2">
                                  <Terminal className="w-3.5 h-3.5 text-brand-discord" />
                                  <span className="text-sm font-bold text-text-strong">{cmd.name}</span>
                               </div>
                            </td>
                            <td className="px-6 py-4">
                               <p className="text-xs text-text-muted">{cmd.type}</p>
                            </td>
                            <td className="px-6 py-4">
                               <span className="text-[10px] font-mono bg-elevated border border-panel px-2 py-0.5 rounded uppercase">{cmd.category}</span>
                            </td>
                            <td className="px-6 py-4">
                               <p className="font-mono text-xs text-text-strong">{cmd.usage[timeframe].toLocaleString()}</p>
                            </td>
                            <td className="px-6 py-4">
                               <div className="flex items-center justify-between gap-4">
                                  <div className="flex items-center gap-2">
                                     <div className={cn("w-1.5 h-1.5 rounded-full transition-colors", cmd.status === 'Active' ? "bg-green-500" : "bg-text-subtle")} />
                                     <span className="text-xs text-text-muted transition-colors">{cmd.status}</span>
                                  </div>
                                  <button 
                                    onClick={(e) => { e.stopPropagation(); toggleCommand(cmd.id); }}
                                    className={cn(
                                      "w-8 h-4 rounded-full p-0.5 transition-all relative shrink-0",
                                      cmd.status === 'Active' ? "bg-brand-discord" : "bg-panel border border-panel"
                                    )}
                                  >
                                     <div className={cn(
                                       "w-3 h-3 bg-white rounded-full shadow-sm transition-transform",
                                       cmd.status === 'Active' ? "translate-x-4" : "translate-x-0"
                                     )} />
                                  </button>
                               </div>
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

             <div className="p-4 border-t border-panel bg-sidebar/50 flex items-center justify-center">
                <button className="text-[10px] font-mono uppercase font-bold text-text-subtle hover:text-text-strong transition-colors">
                  Load extra 12 commands
                </button>
             </div>
           </div>
        </div>

        {/* Right Column: Quick Stats / Meta */}
        <div className="space-y-6">
           <div className="bg-sidebar rounded-2xl border border-panel p-6 space-y-6">
              <div className="space-y-1">
                 <p className="text-[10px] font-mono text-text-muted uppercase tracking-widest leading-none">Global Trigger Rate</p>
                 <div className="flex items-baseline gap-2">
                    <p className="text-2xl font-sora font-medium text-text-strong">42.8/m</p>
                    <span className="text-[10px] text-green-500 font-bold">+12%</span>
                 </div>
              </div>

              <div className="h-px bg-panel" />

              <div className="space-y-4">
                 <h3 className="text-[10px] font-mono text-text-muted uppercase tracking-widest font-bold">Top Trigger Channels</h3>
                 <div className="space-y-3">
                    {[
                      { name: '#general', percent: 65 },
                      { name: '#commands', percent: 28 },
                      { name: '#lounge', percent: 7 },
                    ].map((ch) => (
                      <div key={ch.name} className="space-y-1.5">
                         <div className="flex justify-between text-xs">
                            <span className="text-text-body font-medium">{ch.name}</span>
                            <span className="text-text-muted">{ch.percent}%</span>
                         </div>
                         <div className="w-full h-1 bg-panel rounded-full overflow-hidden">
                            <div className="h-full bg-brand-discord" style={{ width: `${ch.percent}%` }} />
                         </div>
                      </div>
                    ))}
                 </div>
              </div>
           </div>

           <div className="bg-elevated p-6 rounded-2xl border border-panel relative group">
              <div className="absolute top-0 right-0 p-4">
                 <Zap className="w-12 h-12 text-brand-discord opacity-5" />
              </div>
              <h3 className="font-sora text-sm font-medium mb-3">Vanguard AI Trigger</h3>
              <p className="text-xs text-text-muted mb-4 leading-relaxed">
                Allow Lucky to automatically respond to context-aware queries without standard prefixes.
              </p>
              <button className="w-full py-2.5 bg-brand-discord/10 border border-brand-discord/30 rounded-xl text-xs font-bold text-brand-discord hover:bg-brand-discord hover:text-white transition-all flex items-center justify-center gap-2">
                 Enable Studio AI <ChevronRight className="w-4 h-4" />
              </button>
           </div>

           <div className="bg-sidebar p-6 rounded-2xl border border-panel border-dashed text-center">
              <Code className="w-8 h-8 text-text-muted mx-auto mb-3" />
              <p className="text-xs font-bold text-text-strong mb-1">Developer Mode</p>
              <p className="text-[10px] text-text-muted">Bridge your commands to custom webhooks and external APIs.</p>
           </div>
        </div>
      </div>
    </div>
  );
}
