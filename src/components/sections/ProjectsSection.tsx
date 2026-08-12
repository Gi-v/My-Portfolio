"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Github, ExternalLink, Server, Box, Shield, Activity, DollarSign, Zap } from "lucide-react";
import { PROJECTS, SOCIAL } from "@/lib/config";

const ICONS: Record<string,React.ElementType> = { cluster:Server, terraform:Box, shield:Shield, monitor:Activity, cost:DollarSign, chaos:Zap };

function ProjectCard({ p, i }: { p: typeof PROJECTS[0]; i: number }) {
  const { ref, inView } = useInView({ threshold:0.1, triggerOnce:true });
  const Icon = ICONS[p.icon] || Server;
  return (
    <motion.div ref={ref} initial={{ opacity:0, y:30 }} animate={inView?{opacity:1,y:0}:{}}
      transition={{ duration:0.55, delay:i*0.07, ease:[0.22,1,0.36,1] }}
      className="card card-hover p-6 flex flex-col group relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-0.5" style={{ background:`linear-gradient(90deg, ${p.color}, transparent)` }} />
      <div className="flex items-start justify-between mb-4">
        <div className="w-11 h-11 rounded-xl flex items-center justify-center" style={{ background:`${p.color}12`, border:`1px solid ${p.color}18` }}>
          <Icon className="w-5 h-5" style={{ color:p.color }} />
        </div>
        <a href={p.github} target="_blank" rel="noopener noreferrer"
          className="p-2 rounded-lg opacity-0 group-hover:opacity-100 hover:bg-slate-100 transition-all text-slate-400 hover:text-slate-700">
          <Github className="w-4 h-4" />
        </a>
      </div>
      <h3 className="font-display font-bold text-slate-900 text-base mb-2 leading-snug">{p.title}</h3>
      <p className="text-slate-500 text-sm leading-relaxed flex-1 mb-4">{p.description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {p.metrics.map(m => (
          <span key={m} className="text-xs font-mono px-2.5 py-1 rounded-full" style={{ background:`${p.color}0f`, color:p.color, border:`1px solid ${p.color}18` }}>{m}</span>
        ))}
      </div>
      <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-100">
        {p.tags.map(t => <span key={t} className="text-xs font-mono px-2 py-0.5 rounded-md bg-slate-100 text-slate-500">{t}</span>)}
      </div>
    </motion.div>
  );
}

export default function ProjectsSection() {
  const { ref, inView } = useInView({ threshold:0.1, triggerOnce:true });
  return (
    <section id="projects" className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div ref={ref} initial={{ opacity:0, y:20 }} animate={inView?{opacity:1,y:0}:{}} transition={{ duration:0.6 }} className="text-center mb-16">
          <div className="section-label mb-3">Work</div>
          <h2 className="section-title text-4xl sm:text-5xl mb-4">Featured Projects</h2>
          <p className="text-slate-500 max-w-xl mx-auto">A selection of engineering projects spanning AI, cloud-native systems, security-aware software, and applied research.</p>
        </motion.div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {PROJECTS.map((p, i) => <ProjectCard key={p.title} p={p} i={i} />)}
        </div>
        <div className="text-center mt-10">
          <a href={SOCIAL.github} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-white border border-slate-200 rounded-xl text-sm font-medium text-slate-600 hover:border-blue-200 hover:text-blue-600 transition-all shadow-sm">
            <Github className="w-4 h-4" />View all on GitHub<ExternalLink className="w-3.5 h-3.5 opacity-50" />
          </a>
        </div>
      </div>
    </section>
  );
}
