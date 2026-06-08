"use client";

import { motion } from "framer-motion";
import { Server, GitBranch, Shield, Zap, Globe, TrendingUp } from "lucide-react";
import { useScrollAnimation, fadeUp, staggerContainer } from "@/hooks/useScrollAnimation";
import { PERSONAL } from "@/lib/data";

const HIGHLIGHTS = [
  { icon: Server, label: "Infrastructure at Scale", desc: "Designed and operated Kubernetes clusters serving billions of requests/day", color: "#22d3ee" },
  { icon: GitBranch, label: "GitOps Champion", desc: "Pioneer of GitOps workflows with ArgoCD, Flux, and progressive delivery", color: "#a78bfa" },
  { icon: Shield, label: "Security-First", desc: "Supply chain security, zero-trust networking, and automated compliance", color: "#34d399" },
  { icon: Zap, label: "Performance Obsessed", desc: "Reduced MTTR by 82% and deployment frequency from weekly to 100+/day", color: "#fb923c" },
  { icon: Globe, label: "Multi-Cloud Native", desc: "Designed vendor-neutral architectures running on AWS, GCP, and Azure", color: "#f472b6" },
  { icon: TrendingUp, label: "Cost Optimizer", desc: "Saved $5M+ in cloud spend through rightsizing and FinOps practices", color: "#facc15" },
];

export default function AboutSection() {
  const { ref, controls } = useScrollAnimation();

  return (
    <section id="about" className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={fadeUp}
          className="text-center mb-16 space-y-4"
        >
          <div className="font-mono text-sm text-cyan-400 tracking-widest uppercase">About me</div>
          <h2 className="font-display font-bold text-4xl sm:text-5xl text-white">
            Building resilient systems
            <br />
            <span className="text-gradient-cyan">at cloud scale</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            {PERSONAL.bio} Based in {PERSONAL.location} with {PERSONAL.yearsExp}+ years turning infrastructure complexity into competitive advantage.
          </p>
        </motion.div>

        {/* Highlights grid */}
        <motion.div
          initial="hidden"
          animate={controls}
          variants={staggerContainer}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {HIGHLIGHTS.map((item) => (
            <motion.div
              key={item.label}
              variants={fadeUp}
              className="glass glass-hover rounded-2xl p-6 group cursor-default"
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110 duration-300"
                style={{ background: `${item.color}15`, border: `1px solid ${item.color}30` }}
              >
                <item.icon className="w-5 h-5" style={{ color: item.color }} />
              </div>
              <h3 className="font-display font-semibold text-white mb-2">{item.label}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Tech philosophy quote */}
        <motion.div
          initial="hidden"
          animate={controls}
          variants={fadeUp}
          className="mt-16 glass rounded-2xl p-8 border-l-4 border-cyan-400"
        >
          <p className="text-xl text-foreground/80 font-body italic leading-relaxed">
            &ldquo;The best infrastructure is invisible — your developers shouldn&apos;t know it exists until they need to ship faster, scale bigger, or sleep better at night.&rdquo;
          </p>
          <div className="mt-4 flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-cyan-400/20 flex items-center justify-center text-cyan-400 font-bold text-sm">AC</div>
            <span className="text-muted-foreground font-mono text-sm">— {PERSONAL.name}, {PERSONAL.title}</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
