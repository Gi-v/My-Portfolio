"use client";
import { Terminal, Heart } from "lucide-react";
import { PERSONAL } from "@/lib/data";

const NAV = ["About","Skills","Architecture","Experience","Projects","Certifications","GitHub","Blog","Contact"];

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-8">
          <a href="#" className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center">
              <Terminal className="w-4 h-4 text-blue-600" />
            </div>
            <span className="font-display font-bold text-slate-900">
              {PERSONAL.name.split(" ")[0]}<span className="text-blue-600">.</span>{PERSONAL.name.split(" ")[1]}
            </span>
          </a>
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {NAV.map((label) => (
              <a key={label} href={`#${label.toLowerCase()}`} className="text-xs text-slate-400 hover:text-slate-700 transition-colors font-mono">{label}</a>
            ))}
          </nav>
        </div>
        <div className="border-t border-slate-100 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-400 font-mono">© {new Date().getFullYear()} {PERSONAL.name}. Built with Next.js 15 & Tailwind CSS.</p>
          <p className="text-xs text-slate-400 flex items-center gap-1.5 font-mono">Made with <Heart className="w-3 h-3 text-red-400" /> and too much ☕</p>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-xs font-mono text-emerald-600">All systems operational</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
