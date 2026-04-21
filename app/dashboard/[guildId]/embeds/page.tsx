'use client';

import React from 'react';
import { 
  LayoutDashboard, 
  Settings2, 
  Type, 
  Image as ImageIcon, 
  AlignLeft, 
  Palette, 
  Plus, 
  Trash2, 
  ChevronDown,
  Eye,
  Hash,
  Users
} from 'lucide-react';

export default function EmbedBuilderPage() {
  return (
    <div className="space-y-8 animate-in fade-in duration-700 slide-in-from-bottom-4">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-text-muted mb-2">
            <LayoutDashboard className="w-4 h-4" />
            <span className="text-[10px] font-mono uppercase tracking-widest">Automation Studio</span>
          </div>
          <h1 className="text-3xl font-sora font-medium">Embed Builder</h1>
          <p className="text-text-muted">Create rich, interactive Discord messages with our visual workspace.</p>
        </div>
        
        <div className="flex items-center gap-3">
          <button className="px-5 py-2.5 bg-sidebar hover:bg-highlight border border-panel rounded-xl text-sm font-bold text-text-strong transition-all flex items-center gap-2">
             Templates
          </button>
          <button className="px-5 py-2.5 bg-brand-discord hover:bg-blue-600 text-white text-sm font-bold rounded-xl transition-all flex items-center gap-2">
             Post to Channel
          </button>
        </div>
      </div>

      {/* Main Workspace */}
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 h-[calc(100vh-250px)]">
        {/* Toolbox / Left Rail */}
        <div className="xl:col-span-3 space-y-6 overflow-y-auto pr-2">
           <div className="bg-sidebar rounded-2xl border border-panel p-4 space-y-4">
              <h3 className="text-xs font-bold text-text-muted uppercase tracking-widest font-mono">Structure</h3>
              <div className="space-y-2">
                {[
                  { label: 'Author', icon: Users },
                  { label: 'Title', icon: Type },
                  { label: 'Description', icon: AlignLeft },
                  { label: 'Image', icon: ImageIcon },
                  { label: 'Fields', icon: LayoutDashboard },
                  { label: 'Footer', icon: Settings2 },
                ].map((item) => (
                  <button key={item.label} className="w-full flex items-center justify-between px-3 py-2.5 bg-elevated border border-panel rounded-xl hover:bg-highlight transition-all group">
                    <div className="flex items-center gap-3">
                      <item.icon className="w-4 h-4 text-text-muted group-hover:text-brand-discord" />
                      <span className="text-xs font-semibold text-text-body group-hover:text-text-strong">{item.label}</span>
                    </div>
                    <Plus className="w-3.5 h-3.5 text-text-subtle" />
                  </button>
                ))}
              </div>
           </div>

           <div className="bg-sidebar rounded-2xl border border-panel p-4 space-y-4">
              <h3 className="text-xs font-bold text-text-muted uppercase tracking-widest font-mono">Visual Styling</h3>
              <div className="space-y-4">
                <div>
                   <label className="text-[10px] font-mono text-text-muted uppercase tracking-widest block mb-2">Accent Color</label>
                   <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-lg bg-brand-discord border border-panel cursor-pointer" />
                      <input type="text" value="#5865f2" className="flex-1 bg-elevated border border-panel rounded-lg px-2 py-1 text-xs font-mono text-text-strong" readOnly />
                   </div>
                </div>
                <div className="flex items-center justify-between">
                   <label className="text-xs font-semibold text-text-body">Inline Fields</label>
                   <div className="w-10 h-5 bg-panel rounded-full p-1 relative cursor-pointer">
                      <div className="absolute left-1 top-1 w-3 h-3 bg-text-muted rounded-full" />
                   </div>
                </div>
              </div>
           </div>
        </div>

        {/* Editor / Center */}
        <div className="xl:col-span-5 bg-sidebar rounded-3xl border border-panel overflow-hidden flex flex-col">
           <div className="p-4 border-b border-panel bg-sidebar/50 flex items-center justify-between">
              <span className="text-[10px] font-mono font-bold text-text-muted uppercase tracking-widest">Active Editor</span>
              <div className="flex items-center gap-2">
                 <button className="p-1.5 hover:bg-panel rounded-md text-text-muted"><Trash2 className="w-4 h-4" /></button>
              </div>
           </div>
           <div className="flex-1 p-6 space-y-6 overflow-y-auto">
              <div className="space-y-2">
                 <label className="text-xs font-bold text-text-strong">Embed Title</label>
                 <input 
                   type="text" 
                   defaultValue="Welcome to Vanguard"
                   className="w-full bg-elevated border border-panel rounded-xl p-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-discord/50 transition-all"
                 />
              </div>
              <div className="space-y-2">
                 <label className="text-xs font-bold text-text-strong">Description</label>
                 <textarea 
                   rows={6}
                   defaultValue="We are thrilled to have you here. Please make sure to read #rules before introducing yourself in #general."
                   className="w-full bg-elevated border border-panel rounded-xl p-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-discord/50 transition-all resize-none"
                 />
              </div>
              <div className="space-y-4">
                 <div className="flex items-center justify-between">
                   <label className="text-xs font-bold text-text-strong">Fields</label>
                   <button className="text-[10px] uppercase font-mono text-brand-discord font-bold">+ Add Field</button>
                 </div>
                 <div className="p-4 bg-elevated border border-panel rounded-2xl relative group">
                    <button className="absolute -top-2 -right-2 p-1 bg-red-500 rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity"><Trash2 className="w-3 h-3" /></button>
                    <div className="grid grid-cols-2 gap-4">
                       <div className="space-y-1.5">
                          <label className="text-[10px] font-mono text-text-muted uppercase">Name</label>
                          <input type="text" value="Getting Started" className="w-full bg-panel border-none p-2 rounded-lg text-xs" readOnly />
                       </div>
                       <div className="space-y-1.5">
                          <label className="text-[10px] font-mono text-text-muted uppercase">Value</label>
                          <input type="text" value="Check #roles-info" className="w-full bg-panel border-none p-2 rounded-lg text-xs" readOnly />
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </div>

        {/* Live Preview / Right */}
        <div className="xl:col-span-4 space-y-6 flex flex-col h-full">
           <div className="bg-canvas border border-panel rounded-3xl p-6 flex flex-col gap-4 overflow-hidden relative group h-full">
              <div className="absolute top-4 right-4 text-[10px] font-mono text-text-subtle group-hover:text-text-muted transition-colors uppercase tracking-[0.2em] font-bold">PREVIEW_SHARD</div>
              
              {/* Fake Discord Content */}
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-brand-discord flex items-center justify-center shrink-0">
                  <span className="font-sora font-bold text-white text-xs">L</span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-sm font-bold text-text-strong">Lucky</span>
                    <span className="bg-brand-discord text-white text-[10px] px-1 rounded font-medium uppercase leading-none py-0.5">BOT</span>
                    <span className="text-[10px] text-text-muted">Today at 9:42 PM</span>
                  </div>
                  
                  {/* The Actual Embed */}
                  <div className="border-l-4 border-brand-discord rounded bg-[#2b2d31] p-4 max-w-[432px]">
                    <h4 className="text-base font-bold text-white mb-2">Welcome to Vanguard</h4>
                    <p className="text-sm text-[#dbdee1] leading-relaxed mb-4">
                      We are thrilled to have you here. Please make sure to read #rules before introducing yourself in #general.
                    </p>
                    <div className="grid grid-cols-1 gap-2">
                       <div>
                         <h5 className="text-xs font-bold text-white">Getting Started</h5>
                         <p className="text-sm text-[#dbdee1]">Check #roles-info</p>
                       </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-auto pt-6 border-t border-panel/50 flex items-center justify-between">
                <div className="flex items-center gap-2">
                   <Eye className="w-4 h-4 text-text-muted" />
                   <span className="text-xs text-text-muted">Desktop View</span>
                </div>
                <div className="flex items-center gap-2">
                   <Hash className="w-4 h-4 text-text-muted" />
                   <span className="text-xs text-text-muted font-mono">#landing</span>
                </div>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
}
