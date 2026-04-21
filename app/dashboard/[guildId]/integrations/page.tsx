'use client';

import React from 'react';
import { 
  Zap, 
  ExternalLink, 
  Plus, 
  Settings2, 
  CheckCircle2, 
  AlertCircle,
  Database,
  Cloud,
  Globe,
  Lock,
  ChevronRight
} from 'lucide-react';
import { cn } from '@/lib/utils';

const INTEGRATIONS = [
  { id: '1', name: 'Spotify Legacy', type: 'Music Sync', status: 'Connected', icon: Database, color: 'text-green-500' },
  { id: '2', name: 'Twitch Alerts', type: 'Streaming', status: 'Disconnected', icon: Cloud, color: 'text-red-500' },
  { id: '3', name: 'Last.fm Profiler', type: 'Metadata', status: 'Connected', icon: Globe, color: 'text-green-500' },
  { id: '4', name: 'Custom Webhook', type: 'Developer API', status: 'Awaiting Auth', icon: Lock, color: 'text-yellow-500' },
];

export default function IntegrationsPage() {
  return (
    <div className="space-y-8 animate-in fade-in duration-700 slide-in-from-bottom-4">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-text-muted mb-2">
            <Zap className="w-4 h-4" />
            <span className="text-[10px] font-mono uppercase tracking-widest">Protocol Extension</span>
          </div>
          <h1 className="text-3xl font-sora font-medium">Integrations</h1>
          <p className="text-text-muted">Bridge Lucky with third-party platforms to extend shard capabilities.</p>
        </div>
        
        <button className="px-5 py-2.5 bg-brand-discord hover:bg-blue-600 text-white text-sm font-bold rounded-xl transition-all flex items-center gap-2 shadow-lg shadow-brand-discord/20">
           <Plus className="w-4 h-4" /> Connect Service
        </button>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-4 gap-8">
        {/* Left Column: Active Connections */}
        <div className="xl:col-span-3 space-y-6">
           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {INTEGRATIONS.map((service) => (
                <div key={service.id} className="bg-sidebar p-6 rounded-2xl border border-panel hover:border-brand-discord/50 transition-all group flex flex-col justify-between h-56 relative overflow-hidden">
                   <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                      <service.icon className="w-16 h-16 text-brand-discord" />
                   </div>
                   
                   <div>
                      <div className="flex items-center justify-between mb-3 text-[10px] font-mono font-bold uppercase tracking-widest">
                         <span className="text-text-subtle">{service.type}</span>
                         <div className="flex items-center gap-1.5">
                            {service.status === 'Connected' ? <CheckCircle2 className="w-3 h-3 text-green-500" /> : <AlertCircle className="w-3 h-3 text-yellow-500" />}
                            <span className={service.color}>{service.status}</span>
                         </div>
                      </div>
                      <h3 className="text-xl font-sora font-medium text-text-strong group-hover:text-brand-discord transition-colors">{service.name}</h3>
                      <p className="text-xs text-text-muted mt-2 leading-relaxed">
                        Secure connection established via protocol shard #04. Permissions verified for metadata read-only.
                      </p>
                   </div>

                   <div className="flex items-center justify-between mt-auto pt-4 border-t border-panel">
                      <button className="flex items-center gap-2 text-xs font-bold text-text-muted hover:text-text-strong transition-colors">
                         <ExternalLink className="w-3.5 h-3.5" /> Documentation
                      </button>
                      <button className="p-2 hover:bg-panel rounded-lg text-text-muted transition-colors"><Settings2 className="w-4 h-4" /></button>
                   </div>
                </div>
              ))}
              <div className="bg-canvas border-2 border-dashed border-panel rounded-2xl p-6 flex flex-col items-center justify-center text-center gap-3 hover:border-brand-discord hover:bg-sidebar/30 transition-all group h-56">
                 <div className="p-4 bg-panel rounded-full group-hover:bg-brand-discord/20 transition-colors">
                    <Plus className="w-8 h-8 text-text-muted group-hover:text-brand-discord" />
                 </div>
                 <div>
                    <span className="text-sm font-bold text-text-muted group-hover:text-text-strong block">Request Integration</span>
                    <span className="text-[10px] text-text-subtle uppercase font-mono mt-1">Community Voted Features</span>
                 </div>
              </div>
           </div>
        </div>

        {/* Right Column: Health & API */}
        <div className="space-y-6">
           <div className="bg-sidebar rounded-2xl border border-panel p-6 space-y-6">
              <h3 className="font-sora text-sm font-medium">Integration Health</h3>
              <div className="space-y-4">
                 {[
                   { label: 'Uptime', value: '99.98%', icon: CheckCircle2, color: 'text-green-500' },
                   { label: 'Avg Latency', value: '45ms', icon: Database, color: 'text-brand-discord' },
                   { label: 'API Queries', value: '1.2M/mo', icon: Globe, color: 'text-brand-accent' },
                 ].map((stat) => (
                   <div key={stat.label} className="flex flex-col gap-2">
                      <div className="flex items-center justify-between text-[10px] font-mono text-text-muted uppercase tracking-widest font-bold">
                         <span className="flex items-center gap-2"><stat.icon className={cn("w-3 h-3", stat.color)} /> {stat.label}</span>
                         <span className="text-text-strong">{stat.value}</span>
                      </div>
                      <div className="h-1 w-full bg-panel rounded-full overflow-hidden">
                         <div className={cn("h-full", stat.color === 'text-green-500' ? 'bg-green-500' : stat.color === 'text-brand-discord' ? 'bg-brand-discord' : 'bg-brand-accent')} style={{ width: '85%' }} />
                      </div>
                   </div>
                 ))}
              </div>
           </div>

           <div className="bg-elevated p-6 rounded-2xl border border-panel relative overflow-hidden group hover:border-brand-discord transition-colors">
              <div className="absolute top-0 right-0 p-4 opacity-5">
                 <Lock className="w-16 h-16 text-brand-discord" />
              </div>
              <h3 className="font-sora text-sm font-medium mb-2">Protocol Tokens</h3>
              <p className="text-xs text-text-muted mb-4 leading-relaxed">
                 Manage your guild&apos;s ephemeral tokens for secure cross-shard authentication.
              </p>
              <button className="w-full flex items-center justify-center gap-2 py-2.5 bg-sidebar hover:bg-highlight border border-panel rounded-xl text-xs font-bold text-text-strong transition-all">
                 Generate Shard Token <ChevronRight className="w-4 h-4" />
              </button>
           </div>
        </div>
      </div>
    </div>
  );
}
