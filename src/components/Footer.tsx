"use client";
import { Terminal, Heart } from "lucide-react";
import { PERSONAL, SOCIAL, NAV_LINKS } from "@/lib/config";

// TODO: Update name and links
export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white/80 backdrop-blur-xl py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-8">
          <a href="#" className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center shadow-sm">
              <Terminal className="w-4 h-4 text-white" />
            </div>
            <span className="font-display font-bold text-slate-900">
              {PERSONAL.firstName}<span className="text-blue-600">.</span>{PERSONAL.lastName}
            </span>
          </a>
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {NAV_LINKS.map(l => (
              <a key={l.href} href={l.href} className="text-xs text-slate-400 hover:text-slate-700 transition-colors font-mono">{l.label}</a>
            ))}
          </nav>
        </div>
        <div className="border-t border-slate-100 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400 font-mono">
          <p>© {new Date().getFullYear()} {PERSONAL.name}. Built with Next.js 15.</p>
          <p className="flex items-center gap-1.5">Made with <Heart className="w-3 h-3 text-red-400" /> and too much ☕</p>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-emerald-600">All systems operational</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
