"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { useScrollAnimation, fadeUp, staggerContainer } from "@/hooks/useScrollAnimation";
import { SKILLS } from "@/lib/data";
import { useInView } from "react-intersection-observer";

const SKILL_ICONS: Record<string, string> = {
  aws:"☁️",azure:"🌐",gcp:"🔵",k8s:"⚙️",docker:"🐳",helm:"⛵",argocd:"🔄",
  terraform:"🏗️",ansible:"📋",pulumi:"🔧",github:"🐙",jenkins:"🔨",gitlab:"🦊",
  tekton:"🔗",prometheus:"🔥",grafana:"📊",datadog:"🐕",elastic:"🔍",
  python:"🐍",bash:"💻",go:"🐹",ts:"📘",
};

function SkillBar({ name, level, icon, color }: { name: string; level: number; icon: string; color: string }) {
  const { ref, inView } = useInView({ threshold: 0.5, triggerOnce: true });
  return (
    <div ref={ref} className="space-y-1.5">
      <div className="flex items-center justify-between text-sm">
        <span className="flex items-center gap-2 text-slate-700 font-medium">
          <span>{SKILL_ICONS[icon] || "🔧"}</span>{name}
        </span>
        <span className="text-slate-400 font-mono text-xs">{level}%</span>
      </div>
      <div className="h-1.5 rounded-full bg-slate-100 overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: inView ? `${level}%` : 0 }}
          transition={{ duration: 1.2, ease: [0.4, 0, 0.2, 1], delay: 0.2 }}
          className="h-full rounded-full"
          style={{ background: `linear-gradient(90deg, ${color}, ${color}99)` }}
        />
      </div>
    </div>
  );
}

export default function SkillsSection() {
  const { ref, controls } = useScrollAnimation();
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const displayed = activeCategory ? SKILLS.filter((s) => s.category === activeCategory) : SKILLS;

  return (
    <section id="skills" className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div ref={ref} initial="hidden" animate={controls} variants={fadeUp} className="text-center mb-12 space-y-4">
          <div className="font-mono text-sm text-blue-600 tracking-widest uppercase">Technical Skills</div>
          <h2 className="font-display font-bold text-4xl sm:text-5xl text-slate-900">The DevOps Toolkit</h2>
          <p className="text-slate-500 max-w-xl mx-auto">Proficiency across the full cloud-native stack — from infrastructure provisioning to application observability.</p>
        </motion.div>

        <motion.div initial="hidden" animate={controls} variants={fadeUp} className="flex flex-wrap justify-center gap-2 mb-10">
          <button onClick={() => setActiveCategory(null)} className={`px-4 py-1.5 rounded-full text-sm font-mono transition-all ${!activeCategory ? "bg-blue-600 text-white shadow-sm" : "bg-slate-100 text-slate-600 hover:bg-slate-200"}`}>All</button>
          {SKILLS.map((s) => (
            <button key={s.category} onClick={() => setActiveCategory(s.category === activeCategory ? null : s.category)}
              className={`px-4 py-1.5 rounded-full text-sm font-mono transition-all ${activeCategory === s.category ? "text-white shadow-sm" : "bg-slate-100 text-slate-600 hover:bg-slate-200"}`}
              style={activeCategory === s.category ? { background: s.color } : {}}>
              {s.category}
            </button>
          ))}
        </motion.div>

        <motion.div initial="hidden" animate={controls} variants={staggerContainer} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {displayed.map((category) => (
            <motion.div key={category.category} variants={fadeUp} className="glass glass-hover rounded-2xl p-6 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-2 h-8 rounded-full" style={{ background: category.color }} />
                <h3 className="font-display font-semibold text-slate-900">{category.category}</h3>
              </div>
              <div className="space-y-4">
                {category.items.map((skill) => <SkillBar key={skill.name} {...skill} color={category.color} />)}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
