"use client";
import { motion } from "framer-motion";
import { Github, ExternalLink, Server, Shield, Activity, DollarSign, Zap, Box } from "lucide-react";
import { useScrollAnimation, fadeUp, staggerContainer } from "@/hooks/useScrollAnimation";
import { PROJECTS } from "@/lib/data";

const ICON_MAP: Record<string, React.ElementType> = {
  cluster: Server, terraform: Box, shield: Shield, monitor: Activity, cost: DollarSign, chaos: Zap,
};

export default function ProjectsSection() {
  const { ref, controls } = useScrollAnimation();
  return (
    <section id="projects" className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div ref={ref} initial="hidden" animate={controls} variants={fadeUp} className="text-center mb-16 space-y-4">
          <div className="font-mono text-sm text-blue-600 tracking-widest uppercase">Work</div>
          <h2 className="font-display font-bold text-4xl sm:text-5xl text-slate-900">Featured Projects</h2>
          <p className="text-slate-500 max-w-xl mx-auto">Open-source infrastructure projects, templates, and tools I&apos;ve built and shipped.</p>
        </motion.div>
        <motion.div initial="hidden" animate={controls} variants={staggerContainer} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {PROJECTS.map((project) => {
            const Icon = ICON_MAP[project.icon] || Server;
            return (
              <motion.div key={project.title} variants={fadeUp} className="glass glass-hover rounded-2xl p-6 flex flex-col group relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-0.5" style={{ background: `linear-gradient(90deg, ${project.color}, transparent)` }} />
                <div className="flex items-start justify-between mb-4">
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center" style={{ background: `${project.color}12`, border: `1px solid ${project.color}20` }}>
                    <Icon className="w-5 h-5" style={{ color: project.color }} />
                  </div>
                  <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg hover:bg-slate-100 transition-colors text-slate-400 hover:text-slate-700"><Github className="w-4 h-4" /></a>
                    <a href={project.demo} target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg hover:bg-slate-100 transition-colors text-slate-400 hover:text-slate-700"><ExternalLink className="w-4 h-4" /></a>
                  </div>
                </div>
                <h3 className="font-display font-bold text-slate-900 mb-2 leading-tight">{project.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed flex-1 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.metrics.map((m) => (
                    <span key={m} className="text-xs font-mono px-2.5 py-1 rounded-full" style={{ background: `${project.color}10`, color: project.color, border: `1px solid ${project.color}20` }}>{m}</span>
                  ))}
                </div>
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-100">
                  {project.tags.map((tag) => <span key={tag} className="text-xs font-mono px-2 py-0.5 rounded bg-slate-100 text-slate-500">{tag}</span>)}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
        <motion.div initial="hidden" animate={controls} variants={fadeUp} className="text-center mt-12">
          <a href="https://github.com/alexchen-dev" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white border border-slate-200 rounded-xl text-sm font-medium text-slate-700 hover:border-blue-200 hover:bg-blue-50 transition-all shadow-sm">
            <Github className="w-4 h-4" />See all projects on GitHub<ExternalLink className="w-3.5 h-3.5 text-slate-400" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
