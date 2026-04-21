'use client';

import React from 'react';
import Link from 'next/link';
import { 
  BarChart3, 
  ShieldAlert, 
  Zap, 
  Users, 
  Music2, 
  Settings2, 
  ArrowRight,
  MessageSquare,
  Waves
} from 'lucide-react';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-canvas text-text-body overflow-x-hidden">
      {/* Navbar */}
      <nav className="h-20 px-8 flex items-center justify-between max-w-7xl mx-auto w-full sticky top-0 bg-canvas/80 backdrop-blur-md z-50">
        <div className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-lg discord-gradient flex items-center justify-center shrink-0">
            <span className="font-sora font-bold text-white">L</span>
          </div>
          <span className="font-sora text-xl font-bold text-text-strong tracking-tighter">Lucky</span>
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-text-muted">
          <Link href="#" className="hover:text-text-strong transition-colors underline-offset-4 hover:underline">Features</Link>
          <Link href="#" className="hover:text-text-strong transition-colors underline-offset-4 hover:underline">Commands</Link>
          <Link href="#" className="hover:text-text-strong transition-colors underline-offset-4 hover:underline">Support</Link>
          <Link href="#" className="hover:text-text-strong transition-colors underline-offset-4 hover:underline">Pricing</Link>
        </div>

        <Link 
          href="/dashboard" 
          className="px-6 py-2 bg-brand-discord hover:bg-blue-600 text-white text-sm font-bold rounded-xl transition-all shadow-lg shadow-brand-discord/20"
        >
          Open Dashboard
        </Link>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-24 pb-32 px-8 overflow-hidden">
        {/* Ambient background effects */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-accent/10 blur-[150px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand-discord/10 blur-[120px] translate-y-1/3 -translate-x-1/3 pointer-events-none" />

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sidebar border border-panel text-[11px] font-mono font-bold uppercase tracking-widest text-brand-accent mb-8">
            <span className="w-2 h-2 rounded-full bg-brand-accent animate-pulse" />
            Redesign 2.0 Live
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-sora font-bold leading-[1.1] tracking-tighter mb-8 max-w-5xl mx-auto">
            <span className="text-text-strong block">Precision control for</span>
            <span className="discord-gradient inline mt-2">
              modern Discord guilds.
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-text-muted max-w-2xl mx-auto leading-relaxed mb-12">
            Lucky is an all-in-one mission console designed for server operators who demand speed, security, and elite automation.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              href="/dashboard" 
              className="w-full sm:w-auto px-10 py-4 bg-brand-discord hover:bg-blue-600 text-white font-bold rounded-2xl transition-all shadow-xl shadow-brand-discord/20 flex items-center justify-center gap-3 group"
            >
              Enter Console
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <button className="w-full sm:w-auto px-10 py-4 bg-sidebar hover:bg-highlight border border-panel text-text-strong font-bold rounded-2xl transition-all flex items-center justify-center gap-3">
              View Commands
            </button>
          </div>

          {/* Floating UI Elements / Visuals */}
          <div className="mt-20 relative px-4">
            <div className="bg-sidebar border border-panel rounded-3xl p-4 shadow-2xl relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent pointer-events-none" />
              <div className="aspect-[16/9] w-full rounded-2xl bg-canvas border border-panel overflow-hidden relative">
                {/* Mock dashboard content */}
                <div className="absolute inset-0 p-8 grid grid-cols-4 gap-6 opacity-40">
                  <div className="col-span-1 h-full border-r border-panel flex flex-col gap-4">
                    <div className="h-8 w-full bg-elevated rounded-lg" />
                    <div className="h-24 w-full bg-panel rounded-lg" />
                    <div className="h-24 w-full bg-panel rounded-lg" />
                  </div>
                  <div className="col-span-3 flex flex-col gap-6">
                    <div className="h-16 w-full bg-elevated rounded-xl" />
                    <div className="grid grid-cols-3 gap-6">
                        <div className="h-32 bg-panel rounded-xl" />
                        <div className="h-32 bg-panel rounded-xl" />
                        <div className="h-32 bg-panel rounded-xl" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Small decorations */}
            <div className="absolute -top-10 -left-10 w-24 h-24 bg-brand-discord rounded-2xl blur-3xl opacity-20" />
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-brand-accent rounded-full blur-3xl opacity-20" />
          </div>
        </div>
      </section>

      {/* Feature Section */}
      <section className="py-24 px-8 border-y border-panel bg-sidebar/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="space-y-4">
              <div className="p-3 bg-brand-discord/10 border border-brand-discord/20 w-fit rounded-2xl">
                <ShieldAlert className="w-6 h-6 text-brand-discord" />
              </div>
              <h3 className="font-sora text-xl font-medium">Incident Command</h3>
              <p className="text-text-muted leading-relaxed">
                A high-density moderation console for managing cases, bans, and automod triggers with sub-millisecond latency.
              </p>
            </div>
            <div className="space-y-4">
              <div className="p-3 bg-brand-accent/10 border border-brand-accent/20 w-fit rounded-2xl">
                <Music2 className="w-6 h-6 text-brand-accent" />
              </div>
              <h3 className="font-sora text-xl font-medium">Media Operations</h3>
              <p className="text-text-muted leading-relaxed">
                Broadcast-grade music delivery with synchronized queues, lossless headers, and deep Spotify/Last.fm integration.
              </p>
            </div>
            <div className="space-y-4">
              <div className="p-3 bg-green-500/10 border border-green-500/20 w-fit rounded-2xl">
                <Zap className="w-6 h-6 text-green-500" />
              </div>
              <h3 className="font-sora text-xl font-medium">Zero-Lag Automation</h3>
              <p className="text-text-muted leading-relaxed">
                Event-driven recurring messages, reaction roles, and embed builders that fire instantly across any guild size.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof / Numbers */}
      <section className="py-32 px-8">
        <div className="max-w-7xl mx-auto text-center">
            <p className="text-text-muted font-mono uppercase tracking-[0.3em] text-xs mb-12">Trusted by 50,000+ server owners</p>
            <div className="flex flex-wrap justify-center items-center gap-16 opacity-30 grayscale hover:grayscale-0 transition-all">
                <div className="h-8 w-24 bg-text-muted rounded-full" />
                <div className="h-8 w-32 bg-text-muted rounded-full" />
                <div className="h-8 w-20 bg-text-muted rounded-full" />
                <div className="h-8 w-28 bg-text-muted rounded-full" />
            </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 px-8 border-t border-panel bg-sidebar">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="col-span-1 md:col-span-2 space-y-6">
                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg discord-gradient flex items-center justify-center shrink-0">
                        <span className="font-sora font-bold text-white text-xs">L</span>
                    </div>
                    <span className="font-sora text-lg font-bold text-text-strong tracking-tighter">Lucky</span>
                </div>
                <p className="text-sm text-text-muted max-w-xs leading-relaxed">
                    Designed for the next generation of Discord server administration. Fast, secure, and precise.
                </p>
            </div>
            <div className="space-y-4">
                <h4 className="text-sm font-bold text-text-strong uppercase tracking-widest font-mono">Product</h4>
                <ul className="space-y-2 text-sm text-text-muted">
                    <li><Link href="#" className="hover:text-brand-accent transition-colors">Features</Link></li>
                    <li><Link href="#" className="hover:text-brand-accent transition-colors">Premium</Link></li>
                    <li><Link href="#" className="hover:text-brand-accent transition-colors">Commands</Link></li>
                    <li><Link href="#" className="hover:text-brand-accent transition-colors">API Docs</Link></li>
                </ul>
            </div>
            <div className="space-y-4">
                <h4 className="text-sm font-bold text-text-strong uppercase tracking-widest font-mono">Support</h4>
                <ul className="space-y-2 text-sm text-text-muted">
                    <li><Link href="#" className="hover:text-brand-accent transition-colors">Documentation</Link></li>
                    <li><Link href="#" className="hover:text-brand-accent transition-colors">Tutorials</Link></li>
                    <li><Link href="#" className="hover:text-brand-accent transition-colors">Terms of Service</Link></li>
                    <li><Link href="#" className="hover:text-brand-accent transition-colors">Privacy Policy</Link></li>
                </ul>
            </div>
        </div>
        <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-panel flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-[10px] font-mono text-text-muted uppercase tracking-widest">© 2026 Lucky Operations INC. All rights reserved.</p>
            <div className="flex items-center gap-6">
                <Link href="#" className="text-text-muted hover:text-text-strong transition-colors"><MessageSquare className="w-5 h-5" /></Link>
                <Link href="#" className="text-text-muted hover:text-text-strong transition-colors"><Waves className="w-5 h-5" /></Link>
            </div>
        </div>
      </footer>
    </div>
  );
}
