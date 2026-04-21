'use client';

import React from 'react';
import { 
  Star, 
  Settings2, 
  Hash, 
  MoreVertical, 
  Filter, 
  Trash2, 
  BarChart3,
  ThumbsUp,
  MessageSquare
} from 'lucide-react';
import { cn } from '@/lib/utils';

const HIGHLIGHTS = [
  { id: '1', user: 'LurkMaster#1234', stars: 12, channel: '#memes', time: '2h ago', content: 'When the shard logic actually works on the first try...' },
  { id: '2', user: 'Ghosting#9912', stars: 8, channel: '#art-showcase', time: '5h ago', content: 'Check out this new branding concept I made for the guild!' },
  { id: '3', user: 'Mod_Alpha', stars: 5, channel: '#general', time: '1d ago', content: 'The new dashboard is live! Check it out at...' },
];

export default function StarboardPage() {
  return (
    <div className="space-y-8 animate-in fade-in duration-700 slide-in-from-bottom-4">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-text-muted mb-2">
            <Star className="w-4 h-4" />
            <span className="text-[10px] font-mono uppercase tracking-widest">Community Hub</span>
          </div>
          <h1 className="text-3xl font-sora font-medium">Starboard</h1>
          <p className="text-text-muted">Highlight the best content from your guild automatically when it receives enough reactions.</p>
        </div>
        
        <div className="flex items-center gap-3">
          <button className="px-5 py-2.5 bg-sidebar hover:bg-highlight border border-panel rounded-xl text-sm font-bold text-text-strong transition-all flex items-center gap-2">
            <Settings2 className="w-4 h-4" /> Config Shards
          </button>
          <button className="px-5 py-2.5 bg-brand-discord hover:bg-blue-600 text-white text-sm font-bold rounded-xl transition-all flex items-center gap-2 shadow-lg shadow-brand-discord/20">
             <Filter className="w-4 h-4" /> Filter Stream
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-4 gap-8">
        {/* Left Column: Starboard Stream */}
        <div className="xl:col-span-3 space-y-6">
           <div className="bg-sidebar rounded-2xl border border-panel overflow-hidden">
              <div className="p-5 border-b border-panel bg-sidebar/50 flex items-center justify-between">
                 <h3 className="font-sora text-sm font-medium">Starred Content Stream</h3>
                 <div className="flex items-center gap-2 text-[10px] font-mono text-text-muted">
                    <span className="text-brand-accent uppercase font-bold">Live Feed</span>
                    <div className="w-1.5 h-1.5 bg-brand-accent rounded-full animate-pulse" />
                 </div>
              </div>
              
              <div className="divide-y divide-panel">
                 {HIGHLIGHTS.map((post) => (
                    <div key={post.id} className="p-6 flex flex-col gap-4 hover:bg-elevated/30 transition-colors group relative overflow-hidden">
                       <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                             <div className="w-10 h-10 rounded-2xl bg-elevated border border-panel flex items-center justify-center shrink-0">
                                <span className="font-sora font-bold text-xs text-text-muted">{post.user[0]}</span>
                             </div>
                             <div>
                                <div className="flex items-center gap-2">
                                   <p className="text-sm font-bold text-text-strong">{post.user}</p>
                                   <p className="text-[10px] text-text-muted font-mono">{post.time}</p>
                                </div>
                                <div className="flex items-center gap-1.5 text-xs text-text-muted">
                                   <Hash className="w-3 h-3" /> {post.channel}
                                </div>
                             </div>
                          </div>
                          <div className="flex items-center gap-4">
                             <div className="flex items-center gap-1.5 px-3 py-1 bg-yellow-500/10 border border-yellow-500/20 rounded-full text-yellow-500 font-bold">
                                <Star className="w-3.5 h-3.5 fill-current" />
                                <span className="text-xs">{post.stars}</span>
                             </div>
                             <button className="p-2 hover:bg-panel rounded-lg transition-colors text-text-muted">
                                <MoreVertical className="w-4 h-4" />
                             </button>
                          </div>
                       </div>

                       <div className="p-4 bg-canvas/30 rounded-xl border border-panel text-sm text-text-body leading-relaxed italic">
                          &quot;{post.content}&quot;
                       </div>

                       <div className="flex items-center gap-6">
                          <div className="flex items-center gap-2 text-xs text-text-muted">
                             <ThumbsUp className="w-3.5 h-3.5" /> 24 Interactions
                          </div>
                          <div className="flex items-center gap-2 text-xs text-text-muted">
                             <MessageSquare className="w-3.5 h-3.5" /> Post Reference Cache
                          </div>
                       </div>
                    </div>
                 ))}
              </div>

              <div className="p-4 bg-sidebar/50 border-t border-panel text-center">
                 <button className="text-[10px] font-mono font-bold text-text-muted hover:text-text-strong uppercase tracking-[0.2em] transition-colors">
                    Load Historical Stars
                 </button>
              </div>
           </div>
        </div>

        {/* Right Column: Settings & Stats */}
        <div className="space-y-6">
           <div className="bg-sidebar rounded-2xl border border-panel p-6 space-y-6">
              <h3 className="font-sora text-sm font-medium flex items-center gap-2">
                 <BarChart3 className="w-4 h-4 text-brand-discord" />
                 Overview
              </h3>
              <div className="space-y-6">
                 <div className="space-y-2">
                    <div className="flex justify-between text-[11px] font-mono text-text-muted uppercase mb-1">
                       <span>Threshold Hit Rate</span>
                       <span>84%</span>
                    </div>
                    <div className="w-full h-1 bg-panel rounded-full overflow-hidden">
                       <div className="h-full bg-brand-discord w-[84%]" />
                    </div>
                 </div>
                 
                 <div className="grid grid-cols-1 gap-4">
                    <div className="p-4 bg-elevated border border-panel rounded-xl">
                       <p className="text-[10px] font-mono text-text-muted uppercase tracking-widest leading-none mb-2">Destination</p>
                       <div className="flex items-center gap-2">
                          <Hash className="w-4 h-4 text-brand-accent" />
                          <p className="text-xs font-bold text-text-strong">#starboard-logs</p>
                       </div>
                    </div>
                    <div className="p-4 bg-elevated border border-panel rounded-xl">
                       <p className="text-[10px] font-mono text-text-muted uppercase tracking-widest leading-none mb-2">Threshold</p>
                       <div className="flex items-center gap-2">
                          <Star className="w-4 h-4 text-yellow-500 fill-current" />
                          <p className="text-xs font-bold text-text-strong">{'>'} 5 Reactions</p>
                       </div>
                    </div>
                 </div>
              </div>
           </div>

           <div className="bg-sidebar p-6 rounded-2xl border border-panel border-brand-accent/30">
              <h3 className="font-sora text-sm font-medium mb-3">Community Spotlight</h3>
              <p className="text-xs text-text-muted mb-4 leading-relaxed">
                 Featured posts from Starboard are automatically eligible for the monthly guild awards.
              </p>
              <button className="w-full py-2.5 bg-brand-accent text-white text-xs font-bold rounded-xl shadow-lg shadow-brand-accent/20 hover:opacity-90 transition-opacity">
                 Nominate Post
              </button>
           </div>

           <div className="bg-red-500/5 border border-red-500/10 p-5 rounded-2xl flex flex-col items-center gap-3 text-center">
              <Trash2 className="w-6 h-6 text-red-500" />
              <p className="text-xs font-bold text-red-500">Purge Starboard Cache</p>
              <p className="text-[10px] text-text-muted leading-relaxed">Clear all starred message references. This will NOT delete the actual messages in Discord.</p>
           </div>
        </div>
      </div>
    </div>
  );
}
