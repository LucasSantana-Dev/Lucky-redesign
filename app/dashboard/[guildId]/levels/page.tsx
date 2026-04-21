'use client';

import React from 'react';
import { 
  Users, 
  Trophy, 
  Star, 
  TrendingUp, 
  Settings2, 
  ArrowRight, 
  MoreVertical,
  ChevronRight,
  Zap,
  Plus
} from 'lucide-react';
import { cn } from '@/lib/utils';

const LEADERBOARD = [
  { rank: 1, user: 'LurkMaster#1234', level: 42, xp: '154,209', progress: 85 },
  { rank: 2, user: 'GamingKing#4444', level: 38, xp: '122,840', progress: 40 },
  { rank: 3, user: 'Mod_Alpha', level: 35, xp: '98,203', progress: 92 },
  { rank: 4, user: 'Chill_Vibes', level: 31, xp: '82,100', progress: 15 },
  { rank: 5, user: 'Botty_01', level: 28, xp: '75,402', progress: 55 },
];

export default function LevelsPage() {
  return (
    <div className="space-y-8 animate-in fade-in duration-700 slide-in-from-bottom-4">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-text-muted mb-2">
            <Users className="w-4 h-4" />
            <span className="text-[10px] font-mono uppercase tracking-widest">Community Hub</span>
          </div>
          <h1 className="text-3xl font-sora font-medium">Levels & XP</h1>
          <p className="text-text-muted">Configure engagement rewards and track your most active members.</p>
        </div>
        
        <div className="flex items-center gap-3">
          <button className="px-5 py-2.5 bg-sidebar hover:bg-highlight border border-panel rounded-xl text-sm font-bold text-text-strong transition-all flex items-center gap-2">
             Leaderboard Public URL
          </button>
          <button className="px-5 py-2.5 bg-brand-discord hover:bg-blue-600 text-white text-sm font-bold rounded-xl transition-all flex items-center gap-2">
             <Settings2 className="w-4 h-4" /> Config Levels
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Engagement Stats High-Level */}
        <div className="lg:col-span-1 space-y-6">
           <div className="bg-sidebar p-6 rounded-2xl border border-panel">
              <h3 className="text-xs font-bold text-text-muted uppercase tracking-widest font-mono mb-6">Guild Engagement</h3>
              <div className="space-y-6">
                 <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                       <div className="p-2 bg-brand-discord/10 rounded-lg">
                          <Zap className="w-4 h-4 text-brand-discord" />
                       </div>
                       <span className="text-xs font-semibold text-text-body">Total XP Issued</span>
                    </div>
                    <span className="text-xs font-bold text-text-strong">4.2M</span>
                 </div>
                 <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                       <div className="p-2 bg-brand-accent/10 rounded-lg">
                          <Trophy className="w-4 h-4 text-brand-accent" />
                       </div>
                       <span className="text-xs font-semibold text-text-body">Leveled Up (24h)</span>
                    </div>
                    <span className="text-xs font-bold text-text-strong">128</span>
                 </div>
                 <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                       <div className="p-2 bg-yellow-500/10 rounded-lg">
                          <Star className="w-4 h-4 text-yellow-500" />
                       </div>
                       <span className="text-xs font-semibold text-text-body">Role Rewards</span>
                    </div>
                    <span className="text-xs font-bold text-text-strong">12 Active</span>
                 </div>
              </div>
              <div className="mt-8 pt-6 border-t border-panel">
                 <p className="text-[10px] font-mono text-text-subtle uppercase tracking-widest mb-4">Trending Growth</p>
                 <div className="h-16 flex items-end gap-1">
                    {[30, 45, 25, 60, 55, 80, 50].map((h, i) => (
                      <div key={i} className="flex-1 bg-brand-discord/20 rounded-t-sm" style={{ height: `${h}%` }} />
                    ))}
                 </div>
              </div>
           </div>

           <div className="bg-elevated p-6 rounded-2xl border border-panel relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4">
                 <TrendingUp className="w-12 h-12 text-brand-accent opacity-5" />
              </div>
              <h3 className="font-sora text-sm font-medium mb-2">XP Multipliers</h3>
              <p className="text-xs text-text-muted mb-4">You have a weekend 2.0x multiplier active on all text channels.</p>
              <button className="w-full py-2 bg-brand-accent/10 border border-brand-accent/30 rounded-xl text-xs font-bold text-brand-accent hover:bg-brand-accent hover:text-white transition-all">
                 Manage Multipliers
              </button>
           </div>
        </div>

        {/* Main Leaderboard View */}
        <div className="lg:col-span-3 space-y-6">
           <div className="bg-sidebar rounded-2xl border border-panel overflow-hidden">
              <div className="p-5 border-b border-panel bg-sidebar/50 flex items-center justify-between">
                 <h3 className="font-sora text-sm font-medium">Guild Leaderboard</h3>
                 <div className="flex items-center gap-4">
                    <input 
                      type="text" 
                      placeholder="Search user..." 
                      className="bg-elevated border border-panel rounded-lg px-3 py-1 text-xs focus:outline-none focus:ring-1 focus:ring-brand-discord" 
                    />
                    <div className="h-6 w-px bg-panel" />
                    <button className="p-1 hover:bg-panel rounded text-text-muted"><Settings2 className="w-4 h-4" /></button>
                 </div>
              </div>
              
              <div className="divide-y divide-panel">
                 {LEADERBOARD.map((item) => (
                    <div key={item.rank} className="p-4 flex items-center gap-6 hover:bg-elevated/30 transition-colors group">
                       <div className="w-8 shrink-0 text-center">
                          <span className={cn(
                            "text-sm font-mono font-bold",
                            item.rank <= 3 ? "text-brand-accent" : "text-text-muted"
                          )}>
                             {item.rank.toString().padStart(2, '0')}
                          </span>
                       </div>
                       
                       <div className="flex items-center gap-3 flex-1 min-w-0">
                          <div className="w-10 h-10 rounded-2xl bg-elevated border border-panel flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                             <Users className="w-5 h-5 text-text-muted" />
                          </div>
                          <div className="min-w-0">
                             <p className="text-sm font-bold text-text-strong truncate">{item.user}</p>
                             <p className="text-[10px] font-mono text-text-muted uppercase tracking-widest">{item.xp} Total XP</p>
                          </div>
                       </div>

                       <div className="hidden md:flex flex-col items-center gap-1 w-32">
                          <div className="w-full h-1 bg-panel rounded-full overflow-hidden">
                             <div className="h-full bg-brand-discord" style={{ width: `${item.progress}%` }} />
                          </div>
                          <span className="text-[10px] font-mono text-text-subtle uppercase">Next Level: {item.progress}%</span>
                       </div>

                       <div className="w-20 text-right">
                          <p className="text-[10px] font-mono text-text-muted uppercase truncate leading-none">Level</p>
                          <p className="text-xl font-sora font-medium text-text-strong leading-none mt-1">{item.level}</p>
                       </div>

                       <button className="p-2 hover:bg-panel rounded-xl text-text-muted opacity-0 group-hover:opacity-100 transition-opacity">
                          <ChevronRight className="w-4 h-4" />
                       </button>
                    </div>
                 ))}
              </div>

              <div className="p-4 bg-sidebar/50 border-t border-panel flex items-center justify-center">
                 <button className="text-[11px] font-mono uppercase font-bold text-text-muted hover:text-text-strong transition-colors flex items-center gap-2">
                    Show full leaderboard <ArrowRight className="w-3.5 h-3.5" />
                 </button>
              </div>
           </div>

           {/* Role Rewards Grid */}
           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { level: 10, role: 'Active Member', color: 'bg-green-500' },
                { level: 25, role: 'Veteran', color: 'bg-brand-discord' },
              ].map((reward) => (
                <div key={reward.level} className="bg-sidebar p-5 rounded-2xl border border-panel flex items-center justify-between group">
                   <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-2xl bg-canvas flex flex-col items-center justify-center border border-panel group-hover:border-brand-accent transition-colors">
                         <p className="text-sm font-sora font-medium text-text-strong leading-none">{reward.level}</p>
                         <p className="text-[8px] font-mono text-text-muted uppercase">LVL</p>
                      </div>
                      <div>
                         <p className="text-xs font-bold text-text-strong">{reward.role}</p>
                         <p className="text-[10px] text-text-muted">Automatic reward on level up</p>
                      </div>
                   </div>
                   <div className={cn("w-2 h-2 rounded-full", reward.color)} />
                </div>
              ))}
              <button className="bg-canvas border-2 border-dashed border-panel rounded-2xl p-5 flex items-center justify-center gap-2 hover:border-brand-discord transition-all group">
                 <Plus className="w-4 h-4 text-text-muted group-hover:text-brand-discord" />
                 <span className="text-xs font-bold text-text-muted group-hover:text-text-strong">Add Role Reward</span>
              </button>
           </div>
        </div>
      </div>
    </div>
  );
}
