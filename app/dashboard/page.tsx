'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Plus, 
  ShieldCheck, 
  Users, 
  Settings2, 
  ChevronRight, 
  Search,
  Activity,
  AlertCircle
} from 'lucide-react';
import { cn } from '@/lib/utils';

const SERVERS = [
  {
    id: '123456789',
    name: 'Project Vanguard',
    icon: 'https://picsum.photos/seed/vanguard/128/128',
    members: '1,482',
    status: 'Ready',
    health: 100,
    needsSetup: false,
    permissions: 'Healthy'
  },
  {
    id: '987654321',
    name: 'The Citadel',
    icon: 'https://picsum.photos/seed/citadel/128/128',
    members: '842',
    status: 'Syncing',
    health: 92,
    needsSetup: false,
    permissions: 'Healthy'
  },
  {
    id: '456789123',
    name: 'Echo Station',
    icon: null,
    members: '12',
    status: 'Needs Setup',
    health: 20,
    needsSetup: true,
    permissions: 'Restricted'
  }
];

export default function ServersPage() {
  const [search, setSearch] = React.useState('');

  const filteredServers = SERVERS.filter(s => 
    s.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-canvas text-text-body p-8 lg:p-12">
      <div className="max-w-6xl mx-auto space-y-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-2">
            <h1 className="text-3xl font-sora font-medium">Guild Roster</h1>
            <p className="text-text-muted">Manage operational clusters and deployment status across your Discord network.</p>
          </div>
          
          <button className="flex items-center gap-2 px-6 py-3 bg-brand-discord hover:bg-blue-600 text-white font-bold rounded-xl transition-all shadow-lg shadow-brand-discord/20">
            <Plus className="w-5 h-5" />
            Connect New Guild
          </button>
        </div>

        {/* Global Stats Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4 bg-sidebar rounded-2xl border border-panel">
          <div className="space-y-1 px-4">
            <p className="text-[10px] font-mono text-text-muted uppercase tracking-widest leading-none">Total Clusters</p>
            <p className="text-xl font-sora font-medium text-text-strong">3</p>
          </div>
          <div className="h-full w-px bg-panel hidden md:block" />
          <div className="space-y-1 px-4">
            <p className="text-[10px] font-mono text-text-muted uppercase tracking-widest leading-none">Total Reach</p>
            <p className="text-xl font-sora font-medium text-text-strong">2,336</p>
          </div>
          <div className="h-full w-px bg-panel hidden md:block" />
          <div className="space-y-1 px-4">
            <p className="text-[10px] font-mono text-text-muted uppercase tracking-widest leading-none">System Load</p>
            <p className="text-xl font-sora font-medium text-green-500">Normal</p>
          </div>
        </div>

        {/* Search & Filters */}
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-text-muted" />
          <input 
            type="text" 
            placeholder="Search by guild name or ID..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-sidebar border border-panel focus:ring-2 focus:ring-brand-discord/20 rounded-2xl py-4 pl-12 pr-6 text-sm placeholder:text-text-muted/50 transition-all shadow-sm"
          />
        </div>

        {/* Guild Roster Board */}
        <div className="bg-sidebar rounded-2xl border border-panel overflow-hidden shadow-panel">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-sidebar/50 border-b border-panel">
                  <th className="px-6 py-4 text-[10px] font-mono text-text-muted uppercase tracking-widest">Guild Deployment</th>
                  <th className="px-6 py-4 text-[10px] font-mono text-text-muted uppercase tracking-widest">Status / Health</th>
                  <th className="px-6 py-4 text-[10px] font-mono text-text-muted uppercase tracking-widest hidden md:table-cell">Integrity</th>
                  <th className="px-6 py-4 text-[10px] font-mono text-text-muted uppercase tracking-widest hidden lg:table-cell">Members</th>
                  <th className="px-6 py-4"></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-panel">
                {filteredServers.map((guild) => (
                  <tr key={guild.id} className="group hover:bg-elevated/30 transition-colors">
                    <td className="px-6 py-5">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-xl bg-panel border border-panel flex items-center justify-center shrink-0 relative overflow-hidden">
                          {guild.icon ? (
                            <Image src={guild.icon} alt="" fill className="object-cover" referrerPolicy="no-referrer" />
                          ) : (
                            <span className="font-sora font-bold text-text-muted">{guild.name.charAt(0)}</span>
                          )}
                          {!guild.needsSetup && <div className="absolute inset-0 bg-brand-discord/10 opacity-0 group-hover:opacity-100 transition-opacity" />}
                        </div>
                        <div>
                          <p className="text-sm font-bold text-text-strong">{guild.name}</p>
                          <p className="text-[10px] font-mono text-text-muted mt-0.5">ID: {guild.id}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-5">
                      <div className="flex flex-col gap-2">
                        <div className="flex items-center gap-2">
                          <div className={cn(
                            "w-1.5 h-1.5 rounded-full animate-pulse",
                            guild.status === 'Ready' ? "bg-green-500" : 
                            guild.status === 'Syncing' ? "bg-brand-discord" : "bg-text-subtle"
                          )} />
                          <span className={cn(
                            "text-xs font-bold",
                            guild.status === 'Ready' ? "text-green-500" :
                            guild.status === 'Syncing' ? "text-brand-discord" : "text-text-muted"
                          )}>{guild.status}</span>
                        </div>
                        <div className="w-24 h-1 bg-panel rounded-full overflow-hidden">
                          <div 
                            className={cn(
                              "h-full transition-all duration-1000",
                              guild.health > 80 ? "bg-green-500" : 
                              guild.health > 40 ? "bg-brand-discord" : "bg-red-500"
                            )} 
                            style={{ width: `${guild.health}%` }}
                          />
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-5 hidden md:table-cell">
                      <div className="flex items-center gap-2">
                        {guild.permissions === 'Healthy' ? (
                          <ShieldCheck className="w-4 h-4 text-green-500" />
                        ) : (
                          <AlertCircle className="w-4 h-4 text-brand-accent" />
                        )}
                        <span className="text-xs text-text-body">{guild.permissions}</span>
                      </div>
                    </td>
                    <td className="px-6 py-5 hidden lg:table-cell">
                      <div className="flex items-center gap-2 text-text-muted">
                        <Users className="w-3.5 h-3.5" />
                        <span className="text-xs font-mono">{guild.members}</span>
                      </div>
                    </td>
                    <td className="px-6 py-5 text-right">
                      {guild.needsSetup ? (
                        <Link 
                          href={`/dashboard/${guild.id}/settings`}
                          className="px-4 py-2 bg-elevated hover:bg-highlight border border-panel rounded-lg text-xs font-bold text-text-strong transition-all flex items-center justify-center gap-2 w-fit ml-auto"
                        >
                          <Settings2 className="w-3.5 h-3.5" />
                          Setup
                        </Link>
                      ) : (
                        <Link 
                          href={`/dashboard/${guild.id}`}
                          className="px-4 py-2 bg-brand-discord/10 hover:bg-brand-discord text-brand-discord hover:text-white border border-brand-discord/20 rounded-lg text-xs font-bold transition-all inline-flex items-center gap-2"
                        >
                          Enter Guild
                          <ChevronRight className="w-3.5 h-3.5" />
                        </Link>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Footer Support Info */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 opacity-50 hover:opacity-100 transition-opacity">
          <p className="text-[10px] font-mono uppercase tracking-[0.2em]">Connected Shards: 34 Active / 0 Offline</p>
          <div className="flex items-center gap-6 text-[10px] font-mono uppercase tracking-widest underline-offset-4">
             <Link href="#" className="hover:underline">Documentation</Link>
             <Link href="#" className="hover:underline">Support Cluster</Link>
             <Link href="#" className="hover:underline">Legal</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
