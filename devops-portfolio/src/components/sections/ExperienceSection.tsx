"use client";
import { motion } from "framer-motion";
import { MapPin, Calendar, TrendingUp } from "lucide-react";
import { useScrollAnimation, fadeUp, staggerContainer } from "@/hooks/useScrollAnimation";
import { EXPERIENCE } from "@/lib/data";

export default function ExperienceSection() {
  const { ref, controls } = useScrollAnimation();
  return (
    <section id="experience" className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-slate-50/60">
      <div className="max-w-5xl mx-auto">
        <motion.div ref={ref} initial="hidden" animate={controls} variants={fadeUp} className="text-center mb-16 space-y-4">
          <div className="font-mono text-sm text-blue-600 tracking-widest uppercase">Career</div>
          <h2 className="font-display font-bold text-4xl sm:text-5xl text-slate-900">Experience</h2>
          <p className="text-slate-500 max-w-xl mx-auto">8+ years building and operating production infrastructure at high-growth companies.</p>
        </motion.div>

        <motion.div initial="hidden" animate={controls} variants={staggerContainer} className="relative">
          <div className="absolute left-0 sm:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-blue-300 via-violet-200 to-transparent -translate-x-1/2 hidden sm:block" />
          <div className="space-y-12">
            {EXPERIENCE.map((job, i) => (
              <motion.div key={job.company} variants={fadeUp} className={`relative flex flex-col sm:flex-row gap-8 ${i % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"}`}>
                <div className="absolute left-0 sm:left-1/2 top-6 -translate-x-1/2 hidden sm:flex w-4 h-4 rounded-full border-2 items-center justify-center z-10 bg-white"
                  style={{ borderColor: job.color, boxShadow: `0 0 0 4px ${job.color}20` }} />
                <div className={`sm:w-1/2 ${i % 2 === 0 ? "sm:pr-12" : "sm:pl-12"}`}>
                  <div className="glass glass-hover rounded-2xl p-6 group relative overflow-hidden">
                    <div className="absolute top-0 left-0 right-0 h-0.5" style={{ background: `linear-gradient(90deg, ${job.color}, transparent)` }} />
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="font-display font-bold text-xl text-slate-900">{job.role}</h3>
                        <span className="font-semibold text-sm" style={{ color: job.color }}>{job.company}</span>
                      </div>
                      <div className="w-10 h-10 rounded-xl flex items-center justify-center font-display font-bold text-xs"
                        style={{ background: `${job.color}12`, border: `1px solid ${job.color}25`, color: job.color }}>
                        {job.company.slice(0, 2).toUpperCase()}
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-3 mb-5 text-xs text-slate-500">
                      <span className="flex items-center gap-1.5"><Calendar className="w-3 h-3" />{job.period}</span>
                      <span className="flex items-center gap-1.5"><MapPin className="w-3 h-3" />{job.location}</span>
                    </div>
                    <ul className="space-y-2 mb-5">
                      {job.achievements.map((a, ai) => (
                        <li key={ai} className="flex items-start gap-2 text-sm text-slate-600">
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: job.color }} />{a}
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-3 pt-4 border-t border-slate-100">
                      {job.metrics.map((m) => (
                        <div key={m.label} className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs bg-slate-50 border border-slate-200">
                          <TrendingUp className="w-3 h-3" style={{ color: job.color }} />
                          <span className="font-mono font-bold" style={{ color: job.color }}>{m.value}</span>
                          <span className="text-slate-500">{m.label}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="hidden sm:block sm:w-1/2" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
