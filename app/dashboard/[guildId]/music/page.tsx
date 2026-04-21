import React from 'react';
import { 
  Play, 
  Pause, 
  SkipBack, 
  SkipForward, 
  Repeat, 
  Shuffle, 
  Volume2, 
  Search, 
  Music2, 
  ListMusic, 
  Share2,
  MoreHorizontal,
  Clock,
  Waves
} from 'lucide-react';
import Image from 'next/image';

const QUEUE = [
  { id: '1', title: 'Midnight City', artist: 'M83', duration: '4:03', guild: 'Project Vanguard', art: 'https://picsum.photos/seed/m83/64/64' },
  { id: '2', title: 'After Dark', artist: 'Mr.Kitty', duration: '4:17', guild: 'Project Vanguard', art: 'https://picsum.photos/seed/mrkitty/64/64' },
  { id: '3', title: 'Starboy', artist: 'The Weeknd', duration: '3:50', guild: 'Project Vanguard', art: 'https://picsum.photos/seed/theweeknd/64/64' },
  { id: '4', title: 'Blinding Lights', artist: 'The Weeknd', duration: '3:20', guild: 'Project Vanguard', art: 'https://picsum.photos/seed/lights/64/64' },
];

export default function MusicPage() {
  return (
    <div className="space-y-8 animate-in fade-in duration-700 slide-in-from-bottom-4">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-text-muted mb-2">
            <Music2 className="w-4 h-4" />
            <span className="text-[10px] font-mono uppercase tracking-widest">Media Operations</span>
          </div>
          <h1 className="text-3xl font-sora font-medium">Music Deck</h1>
          <p className="text-text-muted">Broadcast-grade audio delivery across your guild shards.</p>
        </div>
        
        <div className="flex items-center gap-3">
          <div className="flex flex-col items-end mr-4">
            <span className="text-[10px] font-mono text-text-muted uppercase tracking-widest leading-none mb-1">Live Connection</span>
            <span className="text-xs font-bold text-brand-accent flex items-center gap-1.5 leading-none">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-accent animate-ping" />
              General VC
            </span>
          </div>
          <button className="px-5 py-2.5 bg-sidebar hover:bg-highlight border border-panel rounded-xl text-sm font-bold text-text-strong transition-all flex items-center gap-2">
            <Share2 className="w-4 h-4" /> Share Session
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column: Now Playing & Controls */}
        <div className="lg:col-span-2 space-y-8">
          {/* Main Deck */}
          <div className="bg-sidebar rounded-3xl border border-panel overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-br from-brand-accent/10 to-transparent pointer-events-none" />
            
            <div className="p-8 flex flex-col md:flex-row gap-8 relative z-10">
              {/* Album Art */}
              <div className="w-full md:w-64 aspect-square rounded-2xl overflow-hidden border border-panel shadow-2xl relative group">
                <Image 
                  src="https://picsum.photos/seed/nowplaying/400/400" 
                  alt="Now Playing" 
                  fill 
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <Waves className="w-12 h-12 text-white animate-pulse" />
                </div>
              </div>

              {/* Player Info */}
              <div className="flex-1 flex flex-col justify-center gap-6">
                <div>
                  <div className="flex items-center gap-2 text-brand-accent mb-2">
                    <div className="flex items-center gap-1">
                      {[1, 2, 3, 4].map(i => <div key={i} className="w-0.5 h-3 bg-brand-accent rounded-full animate-bounce" style={{ animationDelay: `${i * 0.1}s` }} />)}
                    </div>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-widest">Now Broadcasting</span>
                  </div>
                  <h2 className="text-4xl font-sora font-medium text-text-strong mb-1">Midnight City</h2>
                  <p className="text-lg text-text-muted">M83 • Hurry Up, We&apos;re Dreaming</p>
                </div>

                {/* Progress Bar */}
                <div className="space-y-2">
                  <div className="w-full h-1.5 bg-panel rounded-full overflow-hidden relative">
                    <div className="absolute left-0 top-0 h-full w-[45%] bg-brand-accent relative">
                        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow-lg border-2 border-brand-accent" />
                    </div>
                  </div>
                  <div className="flex justify-between font-mono text-[10px] text-text-muted">
                    <span>1:42</span>
                    <span>4:03</span>
                  </div>
                </div>

                {/* Main Controls */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-6">
                    <button className="text-text-muted hover:text-text-strong transition-colors"><Shuffle className="w-5 h-5" /></button>
                    <button className="text-text-muted hover:text-text-strong transition-colors"><SkipBack className="w-6 h-6 fill-current" /></button>
                    <button className="w-14 h-14 bg-text-strong rounded-full flex items-center justify-center text-canvas hover:scale-105 transition-transform shadow-xl">
                      <Pause className="w-6 h-6 fill-current" />
                    </button>
                    <button className="text-text-muted hover:text-text-strong transition-colors"><SkipForward className="w-6 h-6 fill-current" /></button>
                    <button className="text-brand-accent"><Repeat className="w-5 h-5" /></button>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Volume2 className="w-5 h-5 text-text-muted" />
                    <div className="w-24 h-1 bg-panel rounded-full relative">
                      <div className="absolute left-0 top-0 h-full w-[80%] bg-text-body rounded-full" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Search & Integration */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-sidebar p-6 rounded-2xl border border-panel flex flex-col gap-4">
              <h3 className="font-sora text-sm font-medium flex items-center gap-2">
                <Search className="w-4 h-4 text-brand-discord" />
                Quick Search
              </h3>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted" />
                <input 
                  type="text" 
                  placeholder="Songs, artists, or playlists..." 
                  className="w-full bg-elevated border border-panel rounded-xl py-2 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-brand-discord/50 transition-all"
                />
              </div>
              <div className="flex flex-wrap gap-2 pt-2">
                {['Spotify', 'YouTube', 'SoundCloud', 'Last.fm'].map(s => (
                  <button key={s} className="px-3 py-1 bg-elevated border border-panel rounded-lg text-[10px] font-bold text-text-muted hover:text-text-strong transition-colors">
                    {s}
                  </button>
                ))}
              </div>
            </div>

            <div className="bg-sidebar p-6 rounded-2xl border border-panel">
               <h3 className="font-sora text-sm font-medium flex items-center gap-2 mb-4">
                <Waves className="w-4 h-4 text-brand-accent" />
                Audio Profile
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between text-xs font-mono">
                    <span className="text-text-muted">Format</span>
                    <span className="text-text-strong">FLAC (Lossless)</span>
                </div>
                <div className="flex justify-between text-xs font-mono">
                    <span className="text-text-muted">Bitrate</span>
                    <span className="text-text-strong">912kbps</span>
                </div>
                <div className="flex justify-between text-xs font-mono">
                    <span className="text-text-muted">Latency</span>
                    <span className="text-green-500">22ms</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Queue */}
        <div className="space-y-6">
          <div className="bg-sidebar rounded-2xl border border-panel overflow-hidden sticky top-28">
            <div className="p-5 border-b border-panel bg-sidebar/50 flex items-center justify-between">
               <h3 className="font-sora text-sm font-medium flex items-center gap-2">
                <ListMusic className="w-4 h-4" />
                Up Next
              </h3>
              <span className="text-[10px] font-mono text-text-muted">4 SONGS</span>
            </div>
            
            <div className="divide-y divide-panel">
               {QUEUE.map((item) => (
                 <div key={item.id} className="p-4 flex items-center gap-3 hover:bg-elevated/30 transition-colors group">
                   <div className="w-10 h-10 rounded-lg overflow-hidden border border-panel shrink-0 relative">
                     <Image 
                       src={item.art} 
                       alt={item.title} 
                       fill 
                       className="object-cover"
                       referrerPolicy="no-referrer"
                     />
                   </div>
                   <div className="flex-1 min-w-0">
                     <p className="text-xs font-bold text-text-strong truncate">{item.title}</p>
                     <p className="text-[10px] text-text-muted truncate">{item.artist}</p>
                   </div>
                   <div className="flex items-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity">
                      <span className="text-[10px] font-mono text-text-muted">{item.duration}</span>
                      <button className="text-text-muted hover:text-text-strong"><MoreHorizontal className="w-4 h-4" /></button>
                   </div>
                 </div>
               ))}
            </div>

            <div className="p-4 border-t border-panel">
               <button className="w-full py-2.5 bg-elevated hover:bg-highlight border border-panel rounded-xl text-xs font-bold text-text-strong transition-all">
                 Manage Queue Console
               </button>
            </div>
          </div>

          <div className="bg-elevated p-6 rounded-2xl border border-panel">
            <h3 className="font-sora text-sm font-medium mb-2">Auto-Play Console</h3>
            <p className="text-xs text-text-muted mb-4">Lucky will automatically append similar songs when the queue is exhausted.</p>
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-text-strong">Continuous Playback</span>
              <div className="w-10 h-5 bg-brand-discord rounded-full p-1 relative">
                <div className="absolute right-1 top-1 w-3 h-3 bg-white rounded-full" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
