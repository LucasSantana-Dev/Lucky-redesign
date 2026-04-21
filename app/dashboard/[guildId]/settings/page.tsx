'use client';

import React from 'react';
import { 
  Settings2, 
  Box, 
  Shield, 
  Activity, 
  Globe, 
  Bell, 
  Lock,
  ChevronRight,
  ArrowRight,
  Info
} from 'lucide-react';
import { cn } from '@/lib/utils';

const SECTIONS = [
  { id: 'general', label: 'General Configuration', icon: Globe },
  { id: 'security', label: 'Security & Access', icon: Shield },
  { id: 'notifications', label: 'System Notifications', icon: Bell },
  { id: 'sharding', label: 'Shard Orchestration', icon: Activity },
  { id: 'branding', label: 'Bot Visibility', icon: Box },
  { id: 'permissions', label: 'RBAC & Overrides', icon: Lock },
];

export default function SettingsPage() {
  return (
    <div className="space-y-8 animate-in fade-in duration-700 slide-in-from-bottom-4">
      {/* Page Header */}
      <div className="space-y-2">
        <div className="flex items-center gap-2 text-text-muted mb-2">
          <Settings2 className="w-4 h-4" />
          <span className="text-[10px] font-mono uppercase tracking-widest">Protocol Panel</span>
        </div>
        <h1 className="text-3xl font-sora font-medium">Server Settings</h1>
        <p className="text-text-muted">Master control for guild-wide bot behavior and identity.</p>
      </div>

      <div className="flex flex-col lg:flex-row gap-12 items-start relative">
        {/* Sticky Local Nav */}
        <aside className="w-full lg:w-64 lg:sticky lg:top-28 space-y-1">
           <p className="text-[10px] font-mono text-text-subtle uppercase tracking-[0.2em] mb-4 font-bold px-4">Navigation</p>
           {SECTIONS.map((section) => (
             <button 
               key={section.id}
               className={cn(
                 "w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-semibold transition-all group",
                 section.id === 'general' 
                   ? "bg-brand-discord text-white shadow-lg shadow-brand-discord/20" 
                   : "text-text-muted hover:bg-sidebar hover:text-text-strong"
               )}
             >
               <div className="flex items-center gap-3">
                  <section.icon className="w-4 h-4" />
                  <span>{section.label}</span>
               </div>
               <ChevronRight className={cn("w-4 h-4 transition-transform", section.id === 'general' ? "opacity-100" : "opacity-0 group-hover:opacity-100 group-hover:translate-x-1")} />
             </button>
           ))}
        </aside>

        {/* Main Settings Content */}
        <div className="flex-1 space-y-12 max-w-3xl">
           <section id="general" className="space-y-6">
              <div className="pb-4 border-b border-panel">
                 <h2 className="text-xl font-sora text-text-strong font-medium">General Configuration</h2>
                 <p className="text-sm text-text-muted mt-1">Core identity settings for Lucky on this guild.</p>
              </div>

              <div className="space-y-8">
                 <div className="space-y-4">
                    <label className="text-xs font-bold text-text-strong flex items-center gap-2">
                       Bot Prefix
                       <Info className="w-3.5 h-3.5 text-text-subtle" />
                    </label>
                    <div className="grid grid-cols-2 gap-4">
                       <input 
                         type="text" 
                         defaultValue="!" 
                         className="bg-sidebar border border-panel rounded-xl px-4 py-2.5 text-sm font-mono text-brand-discord focus:ring-2 focus:ring-brand-discord/50 outline-none"
                       />
                       <p className="text-xs text-text-muted flex items-center">Change the prefix for all custom and system commands.</p>
                    </div>
                 </div>

                 <div className="space-y-4">
                    <label className="text-xs font-bold text-text-strong flex items-center gap-2">
                       Guild Language
                    </label>
                    <div className="relative group">
                       <select className="w-full bg-sidebar border border-panel rounded-xl px-4 py-2.5 text-sm appearance-none focus:ring-2 focus:ring-brand-discord/50 outline-none">
                          <option>English (United States)</option>
                          <option>English (United Kingdom)</option>
                          <option>Spanish (ES)</option>
                          <option>German (DE)</option>
                       </select>
                       <ChevronRight className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted rotate-90" />
                    </div>
                 </div>

                 <div className="p-6 bg-brand-discord/5 border border-brand-discord/20 rounded-2xl flex items-center justify-between">
                    <div>
                       <p className="text-sm font-bold text-text-strong">Slash Commands Only</p>
                       <p className="text-xs text-text-muted mt-1">Force users to use Discord&apos;s native command menu.</p>
                    </div>
                    <div className="w-12 h-6 bg-brand-discord rounded-full p-1 relative cursor-pointer shadow-inner">
                       <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full shadow-lg" />
                    </div>
                 </div>
              </div>
           </section>

           <section id="security" className="space-y-6 pt-12 border-t border-panel">
              <div className="pb-4 border-b border-panel">
                 <h2 className="text-xl font-sora text-text-strong font-medium">Security & Access</h2>
                 <p className="text-sm text-text-muted mt-1">Define who can interact with the bot shards.</p>
              </div>

              <div className="space-y-6">
                 <div className="flex items-center justify-between group">
                    <div className="space-y-1">
                       <p className="text-sm font-bold text-text-strong group-hover:text-brand-accent transition-colors">Strict Mod Validation</p>
                       <p className="text-xs text-text-muted">Enforce 2FA checks on all dashboard moderators.</p>
                    </div>
                    <div className="w-12 h-6 bg-panel rounded-full p-1 relative cursor-pointer">
                       <div className="absolute left-1 top-1 w-4 h-4 bg-text-subtle rounded-full" />
                    </div>
                 </div>

                 <div className="bg-sidebar p-5 rounded-2xl border border-panel flex flex-col gap-4">
                    <p className="text-xs font-bold text-text-strong">Management Roles</p>
                    <div className="flex flex-wrap gap-2">
                       {['@Admin', '@Moderator', '@Bot Dev'].map(role => (
                         <span key={role} className="px-3 py-1 bg-elevated border border-panel rounded-lg text-xs font-mono text-text-muted flex items-center gap-2">
                            {role}
                            <button className="hover:text-red-500">×</button>
                         </span>
                       ))}
                       <button className="px-3 py-1 border border-dashed border-panel rounded-lg text-xs font-bold text-text-subtle hover:text-text-strong transition-colors">+ Add Role</button>
                    </div>
                 </div>
              </div>
           </section>

           {/* Sticky Footer Save Bar */}
           <div className="sticky bottom-8 py-4 px-6 bg-sidebar/80 backdrop-blur-md border border-panel rounded-2xl shadow-2xl flex items-center justify-between z-50 animate-in slide-in-from-bottom-8">
              <div className="flex items-center gap-3">
                 <div className="w-2 h-2 rounded-full bg-brand-accent animate-pulse" />
                 <p className="text-sm font-bold text-text-strong">Unsaved Changes detected</p>
              </div>
              <div className="flex items-center gap-3">
                 <button className="text-xs font-bold text-text-muted hover:text-text-strong transition-colors">Discard</button>
                 <button className="px-6 py-2.5 bg-brand-discord text-white font-bold rounded-xl text-xs hover:bg-blue-600 transition-all flex items-center gap-2 shadow-lg shadow-brand-discord/20">
                    Commit Changes <ArrowRight className="w-4 h-4" />
                 </button>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
}
