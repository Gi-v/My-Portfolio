"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal, Menu, X, Download } from "lucide-react";
import { PERSONAL, SOCIAL, NAV_LINKS } from "@/lib/config";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled ? "bg-white/80 backdrop-blur-xl border-b border-slate-200/60 shadow-sm py-3" : "bg-transparent py-5"}`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Logo */}
        {/* TODO: Update name */}
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center shadow-sm shadow-blue-200">
            <Terminal className="w-4 h-4 text-white" />
          </div>
          <span className="font-display font-bold text-slate-900 text-lg">
            {PERSONAL.firstName}<span className="text-blue-600">.</span>{PERSONAL.lastName}
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map(l => (
            <a key={l.href} href={l.href} className="px-3 py-1.5 text-sm text-slate-500 hover:text-slate-900 hover:bg-slate-50 rounded-lg transition-all font-medium">
              {l.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          {/* TODO: Remove or keep resume button */}
          <a href={SOCIAL.resume} download className="flex items-center gap-1.5 px-4 py-2 text-sm font-semibold text-white bg-blue-600 rounded-xl hover:bg-blue-700 transition-all shadow-sm shadow-blue-200">
            <Download className="w-3.5 h-3.5" />Resume
          </a>
        </div>

        <button className="md:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors" onClick={() => setOpen(!open)}>
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity:0, height:0 }} animate={{ opacity:1, height:"auto" }} exit={{ opacity:0, height:0 }} className="md:hidden bg-white/95 backdrop-blur border-t border-slate-100">
            <div className="px-4 py-3 space-y-1">
              {NAV_LINKS.map(l => (
                <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="block px-3 py-2 text-sm text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded-lg transition-all">
                  {l.label}
                </a>
              ))}
              <a href={SOCIAL.resume} download className="block px-3 py-2 text-sm font-semibold text-blue-600">⬇ Download Resume</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
