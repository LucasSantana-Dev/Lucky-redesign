import React from 'react';
import Link from 'next/link';
import { 
  Plus, 
  ArrowRight, 
  Server, 
  ShieldCheck, 
  Search,
  LayoutGrid,
  List
} from 'lucide-react';
import Image from 'next/image';

const MOCK_SERVERS = [
  { id: '1', name: 'Project Vanguard', icon: 'https://picsum.photos/seed/vanguard/128/128', members: 1482, status: 'ready' },
  { id: '2', name: 'Midnight Radio', icon: 'https://picsum.photos/seed/radio/128/128', members: 842, status: 'ready' },
  { id: '3', name: 'Dev Ops Community', icon: 'https://picsum.photos/seed/dev/128/128', members: 320, status: 'setup' },
  { id: '4', name: 'Chill Hub', icon: null, members: 120, status: 'uninstalled' },
];

export default function ServersPage() {
  return (
    <div className="min-h-screen bg-canvas p-6 md:p-12">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-2">
            <h1 className="text-4xl font-sora font-medium">Select a Guild</h1>
            <p className="text-text-muted">Choose a server to manage its operations and automation.</p>
          </div>
          
          <div className="flex items-center gap-3">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted" />
              <input 
                type="text" 
                placeholder="Search guilds..." 
                className="bg-sidebar border border-panel rounded-xl pl-10 pr-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-discord/50 transition-all w-64"
              />
            </div>
            <button className="p-2 bg-sidebar border border-panel rounded-xl hover:bg-highlight transition-colors text-text-muted">
              <LayoutGrid className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Guild Roster */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {MOCK_SERVERS.map((server) => (
            <div 
              key={server.id} 
              className="bg-sidebar rounded-2xl border border-panel p-6 flex flex-col justify-between hover:border-highlight transition-all group overflow-hidden relative"
            >
              <div className="absolute top-0 left-0 w-full h-[60px] bg-gradient-to-b from-brand-discord/5 to-transparent pointer-events-none" />
              
              <div className="relative">
                <div className="flex items-start justify-between mb-6">
                  <div className="relative w-16 h-16 rounded-2xl overflow-hidden border-2 border-panel group-hover:border-brand-discord transition-colors">
                    {server.icon ? (
                      <Image 
                        src={server.icon} 
                        alt={server.name} 
                        fill 
                        className="object-cover"
                        referrerPolicy="no-referrer"
                      />
                    ) : (
                      <div className="w-full h-full bg-elevated flex items-center justify-center">
                        <Server className="w-8 h-8 text-text-muted" />
                      </div>
                    )}
                  </div>
                  
                  <div className="text-right">
                    <span className="text-[10px] font-mono text-text-muted uppercase tracking-widest block mb-1">Status</span>
                    {server.status === 'ready' && (
                        <div className="flex items-center gap-1.5 justify-end text-green-500 font-bold text-xs uppercase tracking-tight">
                            <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                            Bot Ready
                        </div>
                    )}
                    {server.status === 'setup' && (
                        <div className="flex items-center gap-1.5 justify-end text-yellow-500 font-bold text-xs uppercase tracking-tight">
                            Needs Setup
                        </div>
                    )}
                    {server.status === 'uninstalled' && (
                        <div className="flex items-center gap-1.5 justify-end text-text-muted font-bold text-xs uppercase tracking-tight">
                            Not Linked
                        </div>
                    )}
                  </div>
                </div>

                <h3 className="text-xl font-sora font-medium text-text-strong group-hover:text-brand-discord transition-colors truncate">
                  {server.name}
                </h3>
                
                <div className="flex items-center gap-4 mt-2">
                  <div className="flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-text-muted" />
                    <span className="text-xs text-text-muted font-mono">{server.members} members</span>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                {server.status === 'uninstalled' ? (
                  <button className="w-full flex items-center justify-center gap-2 py-3 bg-brand-discord rounded-xl text-sm font-bold text-white hover:bg-blue-600 transition-colors">
                    <Plus className="w-4 h-4" /> Add Lucky
                  </button>
                ) : (
                  <Link 
                    href={`/dashboard/${server.id}`}
                    className="w-full flex items-center justify-center gap-2 py-3 bg-elevated border border-panel rounded-xl text-sm font-bold text-text-strong hover:bg-highlight hover:border-text-muted transition-all"
                  >
                    Enter Guild <ArrowRight className="w-4 h-4" />
                  </Link>
                )}
              </div>
            </div>
          ))}

          {/* Add New Guild Card */}
          <button className="bg-canvas border-2 border-dashed border-panel rounded-2xl p-6 flex flex-col items-center justify-center gap-3 hover:border-brand-discord/50 hover:bg-sidebar transition-all group">
            <div className="w-12 h-12 rounded-full bg-sidebar border border-panel flex items-center justify-center group-hover:scale-110 transition-transform">
              <Plus className="w-6 h-6 text-text-muted group-hover:text-brand-discord" />
            </div>
            <div className="text-center">
              <p className="text-sm font-bold text-text-strong">Add New Server</p>
              <p className="text-xs text-text-muted">Invite Lucky to your guild</p>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
