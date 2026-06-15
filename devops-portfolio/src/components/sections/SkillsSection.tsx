"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { TOOLKIT } from "@/lib/config";

// TODO: EDIT HERE — update TOOLKIT in lib/config.ts to match your real skills

function ToolkitCard({ cat, i }: { cat: typeof TOOLKIT[0]; i: number }) {
  const { ref, inView } = useInView({ threshold:0.1, triggerOnce:true });
  const [hovered, setHovered] = useState(false);
  return (
    <motion.div ref={ref} initial={{ opacity:0, y:30 }} animate={inView?{opacity:1,y:0}:{}}
      transition={{ duration:0.55, delay:i*0.06, ease:[0.22,1,0.36,1] }}
      onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}
      className="card card-hover p-6 cursor-default group overflow-hidden relative">
      {/* Hover accent */}
      <motion.div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl pointer-events-none"
        style={{ background:`radial-gradient(circle at 50% 0%, ${cat.color}08, transparent 70%)` }} />

      {/* Header */}
      <div className="flex items-center gap-3 mb-5">
        <div className="w-10 h-10 rounded-xl flex items-center justify-center text-lg flex-shrink-0 transition-transform group-hover:scale-110 duration-300"
          style={{ background:`${cat.color}12`, border:`1px solid ${cat.color}20` }}>
          {cat.icon}
        </div>
        <div>
          <div className="font-display font-semibold text-slate-900 text-sm">{cat.category}</div>
          <div className="text-xs text-slate-400 font-mono">{cat.tools.length} tools</div>
        </div>
      </div>

      {/* Tool pills */}
      <div className="flex flex-wrap gap-2">
        {cat.tools.map(tool => (
          <motion.span key={tool}
            whileHover={{ scale:1.05 }}
            className="text-xs font-mono px-3 py-1.5 rounded-full transition-all cursor-default"
            style={{ background:`${cat.color}0f`, color: hovered ? cat.color : "#475569", border:`1px solid ${cat.color}18` }}>
            {tool}
          </motion.span>
        ))}
      </div>

      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 h-0.5 transition-all duration-500 rounded-b-2xl"
        style={{ width: hovered ? "100%" : "0%", background:`linear-gradient(90deg, ${cat.color}, transparent)` }} />
    </motion.div>
  );
}

export default function SkillsSection() {
  const { ref, inView } = useInView({ threshold:0.1, triggerOnce:true });
  return (
    <section id="skills" className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div ref={ref} initial={{ opacity:0, y:20 }} animate={inView?{opacity:1,y:0}:{}}
          transition={{ duration:0.6 }} className="text-center mb-16">
          <div className="section-label mb-3">Expertise</div>
          <h2 className="section-title text-4xl sm:text-5xl mb-4">Technical Toolkit</h2>
          <p className="text-slate-500 max-w-xl mx-auto">The full stack of tools and technologies I use to design, build, secure, and operate cloud-native systems.</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {TOOLKIT.map((cat, i) => <ToolkitCard key={cat.category} cat={cat} i={i} />)}
        </div>
      </div>
    </section>
  );
}
