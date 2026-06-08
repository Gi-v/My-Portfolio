"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useScrollAnimation, fadeUp, staggerContainer } from "@/hooks/useScrollAnimation";
import { SKILLS } from "@/lib/data";
import { useInView } from "react-intersection-observer";

const SKILL_ICONS: Record<string, string> = {
  aws: "☁️", azure: "🌐", gcp: "🔵",
  k8s: "⚙️", docker: "🐳", helm: "⛵", argocd: "🔄",
  terraform: "🏗️", ansible: "📋", pulumi: "🔧",
  github: "🐙", jenkins: "🔨", gitlab: "🦊", tekton: "🔗",
  prometheus: "🔥", grafana: "📊", datadog: "🐕", elastic: "🔍",
  python: "🐍", bash: "💻", go: "🐹", ts: "📘",
};

function SkillBar({ name, level, icon, color }: { name: string; level: number; icon: string; color: string }) {
  const { ref, inView } = useInView({ threshold: 0.5, triggerOnce: true });

  return (
    <div ref={ref} className="space-y-1.5">
      <div className="flex items-center justify-between text-sm">
        <span className="flex items-center gap-2 text-foreground/80 font-medium">
          <span>{SKILL_ICONS[icon] || "🔧"}</span>
          {name}
        </span>
        <span className="text-muted-foreground font-mono text-xs">{level}%</span>
      </div>
      <div className="h-1.5 rounded-full bg-white/[0.06] overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: inView ? `${level}%` : 0 }}
          transition={{ duration: 1.2, ease: [0.4, 0, 0.2, 1], delay: 0.2 }}
          className="h-full rounded-full"
          style={{ background: `linear-gradient(90deg, ${color}, ${color}aa)` }}
        />
      </div>
    </div>
  );
}

export default function SkillsSection() {
  const { ref, controls } = useScrollAnimation();
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const displayed = activeCategory
    ? SKILLS.filter((s) => s.category === activeCategory)
    : SKILLS;

  return (
    <section id="skills" className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8">
      {/* Background accent */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-0 w-[500px] h-[400px] rounded-full bg-violet-500/5 blur-[100px]" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={fadeUp}
          className="text-center mb-12 space-y-4"
        >
          <div className="font-mono text-sm text-cyan-400 tracking-widest uppercase">Technical Skills</div>
          <h2 className="font-display font-bold text-4xl sm:text-5xl text-white">
            The DevOps Toolkit
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Proficiency across the full cloud-native stack — from infrastructure provisioning to application observability.
          </p>
        </motion.div>

        {/* Category filters */}
        <motion.div
          initial="hidden"
          animate={controls}
          variants={fadeUp}
          className="flex flex-wrap justify-center gap-2 mb-10"
        >
          <button
            onClick={() => setActiveCategory(null)}
            className={`px-4 py-1.5 rounded-full text-sm font-mono transition-all duration-200 ${
              !activeCategory
                ? "bg-cyan-500/20 border border-cyan-500/40 text-cyan-400"
                : "glass text-muted-foreground hover:text-foreground"
            }`}
          >
            All
          </button>
          {SKILLS.map((s) => (
            <button
              key={s.category}
              onClick={() => setActiveCategory(s.category === activeCategory ? null : s.category)}
              className={`px-4 py-1.5 rounded-full text-sm font-mono transition-all duration-200 ${
                activeCategory === s.category
                  ? "border text-white"
                  : "glass text-muted-foreground hover:text-foreground"
              }`}
              style={activeCategory === s.category ? {
                background: `${s.color}20`,
                borderColor: `${s.color}40`,
                color: s.color,
              } : {}}
            >
              {s.category}
            </button>
          ))}
        </motion.div>

        {/* Skills grid */}
        <motion.div
          initial="hidden"
          animate={controls}
          variants={staggerContainer}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {displayed.map((category) => (
            <motion.div
              key={category.category}
              variants={fadeUp}
              className="glass glass-hover rounded-2xl p-6 space-y-4"
            >
              <div className="flex items-center gap-3">
                <div
                  className="w-2 h-8 rounded-full"
                  style={{ background: category.color }}
                />
                <h3 className="font-display font-semibold text-white">{category.category}</h3>
              </div>
              <div className="space-y-4">
                {category.items.map((skill) => (
                  <SkillBar key={skill.name} {...skill} color={category.color} />
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
