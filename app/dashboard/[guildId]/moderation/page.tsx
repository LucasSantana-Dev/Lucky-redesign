import React from 'react';
import { 
  ShieldAlert, 
  Search, 
  Filter, 
  MoreVertical, 
  User, 
  Hash, 
  History,
  FileText,
  AlertOctagon,
  Clock,
  ArrowRight,
  ExternalLink
} from 'lucide-react';
import { cn } from '@/lib/utils';

const CASES = [
  { id: '8291', user: 'LurkMaster#1234', reason: 'Repeated spam in #general', type: 'Warn', mod: 'Lara#0001', time: '4m ago', status: 'Active' },
  { id: '8289', user: 'Ghosting#9912', reason: 'Self-promotion (unauthorized)', type: 'Mute', mod: 'Lara#0001', time: '12m ago', status: 'Expired' },
  { id: '8285', user: 'Botty_01', reason: 'Suspected token login', type: 'Ban', mod: 'System', time: '1h ago', status: 'Permanent' },
  { id: '8280', user: 'DramaKing#4444', reason: 'Harassment in voice chat', type: 'Kick', mod: 'Mod_Alpha', time: '3h ago', status: 'Completed' },
];

export default function ModerationPage() {
  return (
    <div className="space-y-8 animate-in fade-in duration-700 slide-in-from-bottom-4">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-text-muted mb-2">
            <ShieldAlert className="w-4 h-4" />
            <span className="text-[10px] font-mono uppercase tracking-widest">Moderation Security</span>
          </div>
          <h1 className="text-3xl font-sora font-medium">Incident Console</h1>
          <p className="text-text-muted">Live event stream and audit logs for your guild.</p>
        </div>
        
        <div className="flex items-center gap-3">
          <button className="px-5 py-2.5 bg-sidebar hover:bg-highlight border border-panel rounded-xl text-sm font-bold text-text-strong transition-all flex items-center gap-2">
            <History className="w-4 h-4" /> Export History
          </button>
          <button className="px-5 py-2.5 bg-brand-discord hover:bg-blue-600 text-white text-sm font-bold rounded-xl transition-all flex items-center gap-2">
            <ShieldAlert className="w-4 h-4" /> New Case
          </button>
        </div>
      </div>

      {/* Control Strip */}
      <div className="flex flex-col md:flex-row items-center gap-4 bg-sidebar p-2 rounded-2xl border border-panel">
        <div className="relative flex-1 w-full translate-x-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted" />
          <input 
            type="text" 
            placeholder="Search by User ID, Channel, or Case ID..." 
            className="w-full bg-canvas border-none focus:ring-0 text-sm py-2.5 pl-10 pr-4 rounded-xl placeholder:text-text-muted/50"
          />
        </div>
        <div className="flex items-center gap-2 shrink-0 p-1">
          <button className="p-2.5 hover:bg-highlight rounded-xl text-text-muted hover:text-text-strong transition-colors border border-transparent hover:border-panel">
            <Filter className="w-4 h-4" />
          </button>
          <div className="h-6 w-px bg-panel mx-1" />
          <button className="px-4 py-2 bg-elevated border border-panel rounded-xl text-xs font-bold text-text-strong hover:bg-highlight transition-colors flex items-center gap-2">
            Active Filter: <span className="text-brand-accent">All Events</span>
          </button>
        </div>
      </div>

      {/* Split Console Layout */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
        {/* Main Case Stream */}
        <div className="xl:col-span-2 space-y-6">
          <div className="bg-sidebar rounded-2xl border border-panel overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-sidebar/50 border-b border-panel">
                    <th className="px-6 py-4 text-[10px] font-mono text-text-muted uppercase tracking-widest">Case</th>
                    <th className="px-6 py-4 text-[10px] font-mono text-text-muted uppercase tracking-widest">Target User</th>
                    <th className="px-6 py-4 text-[10px] font-mono text-text-muted uppercase tracking-widest">Action</th>
                    <th className="px-6 py-4 text-[10px] font-mono text-text-muted uppercase tracking-widest">Moderator</th>
                    <th className="px-6 py-4 text-[10px] font-mono text-text-muted uppercase tracking-widest">Time</th>
                    <th className="px-6 py-4"></th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-panel">
                  {CASES.map((item) => (
                    <tr key={item.id} className="hover:bg-elevated/30 transition-colors group cursor-pointer">
                      <td className="px-6 py-4 font-mono text-xs text-text-muted font-bold tracking-tight">#{item.id}</td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-elevated border border-panel flex items-center justify-center shrink-0">
                            <User className="w-4 h-4 text-text-muted" />
                          </div>
                          <p className="text-sm font-medium text-text-strong truncate max-w-[120px]">{item.user}</p>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className={cn(
                          "px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider border",
                          item.type === 'Ban' ? "bg-red-500/10 text-red-500 border-red-500/20" :
                          item.type === 'Kick' ? "bg-orange-500/10 text-orange-500 border-orange-500/20" :
                          item.type === 'Mute' ? "bg-yellow-500/10 text-yellow-500 border-yellow-500/20" :
                          "bg-brand-discord/10 text-brand-discord border-brand-discord/20"
                        )}>
                          {item.type}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2 text-xs text-text-muted">
                           <ShieldAlert className="w-3.5 h-3.5" />
                           {item.mod}
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2 text-xs text-text-muted">
                           <Clock className="w-3.5 h-3.5" />
                           {item.time}
                        </div>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <button className="p-2 hover:bg-panel rounded-lg transition-colors text-text-muted">
                          <MoreVertical className="w-4 h-4" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            {/* Footer Pagination */}
            <div className="p-4 border-t border-panel flex items-center justify-between text-xs font-mono text-text-muted bg-sidebar/50">
              <p>SHOWING <span className="text-text-strong">4</span> OF <span className="text-text-strong">1,248</span> ENTRIES</p>
              <div className="flex items-center gap-2">
                <button className="px-3 py-1 bg-elevated border border-panel rounded hover:text-text-strong transition-colors opacity-50 cursor-not-allowed">PREV</button>
                <button className="px-3 py-1 bg-elevated border border-panel rounded hover:text-text-strong transition-colors">NEXT</button>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop Detail Pane */}
        <div className="space-y-6">
          <div className="bg-sidebar rounded-2xl border border-panel overflow-hidden border-brand-discord/30">
            <div className="p-5 border-b border-panel bg-sidebar/50 flex items-center justify-between">
              <h3 className="font-sora text-sm font-medium">Case Details</h3>
              <span className="text-[10px] font-mono px-2 py-1 bg-brand-discord/10 text-brand-discord border border-brand-discord/20 rounded">LIVE PREVIEW</span>
            </div>
            
            <div className="p-6 space-y-6">
              <div className="flex flex-col items-center text-center">
                <div className="w-20 h-20 rounded-3xl bg-elevated border border-panel flex items-center justify-center mb-4 relative">
                    <User className="w-10 h-10 text-text-muted" />
                    <div className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full bg-red-500 border-4 border-sidebar flex items-center justify-center">
                        <AlertOctagon className="w-4 h-4 text-white" />
                    </div>
                </div>
                <h4 className="text-xl font-sora text-text-strong font-medium">LurkMaster#1234</h4>
                <p className="font-mono text-xs text-text-muted mt-1">ID: 489201928374921</p>
              </div>

              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-elevated/50 border border-panel space-y-3">
                  <div>
                    <label className="text-[10px] font-mono text-text-muted uppercase tracking-widest block mb-1">Reason for Action</label>
                    <p className="text-sm text-text-strong">Repeated spam in #general using automated scripts. Triggered keyword filter 3 times in 5 minutes.</p>
                  </div>
                  <div className="pt-3 border-t border-panel grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-[10px] font-mono text-text-muted uppercase tracking-widest block mb-1">Severity</label>
                      <span className="text-xs font-bold text-yellow-500">Tier 2 Warning</span>
                    </div>
                    <div>
                      <label className="text-[10px] font-mono text-text-muted uppercase tracking-widest block mb-1">Duration</label>
                      <span className="text-xs font-bold text-text-strong">Infinite</span>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <button className="flex items-center justify-center gap-2 py-2.5 bg-elevated hover:bg-highlight border border-panel rounded-xl text-xs font-bold transition-all">
                    <Hash className="w-3.5 h-3.5" /> View Channel
                  </button>
                  <button className="flex items-center justify-center gap-2 py-2.5 bg-elevated hover:bg-highlight border border-panel rounded-xl text-xs font-bold transition-all">
                    <ExternalLink className="w-3.5 h-3.5" /> Profiler
                  </button>
                </div>
              </div>

              <button className="w-full py-3 bg-panel hover:bg-highlight border border-white/5 rounded-xl text-xs font-bold text-brand-accent transition-all flex items-center justify-center gap-2">
                 Appeal Case Status <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
          
          <div className="bg-sidebar p-5 rounded-2xl border border-panel">
            <h3 className="font-sora text-sm font-medium mb-4 flex items-center gap-2">
              <History className="w-4 h-4 text-text-muted" />
              User History
            </h3>
            <div className="space-y-4">
              {[1, 2].map((k) => (
                <div key={k} className="flex gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-accent mt-1.5 shrink-0" />
                  <div>
                    <p className="text-xs text-text-strong font-medium">Previous Warn: #7120</p>
                    <p className="text-[10px] text-text-muted uppercase font-mono mt-0.5">3 months ago • Mod Alpha</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
