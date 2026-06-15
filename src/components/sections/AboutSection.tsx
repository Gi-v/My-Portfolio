"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Server, GitBranch, Shield, TrendingUp, Globe, Zap } from "lucide-react";
import { PERSONAL } from "@/lib/config";

// TODO: Edit highlights to reflect your real strengths
const HIGHLIGHTS = [
  { icon:Server,    color:"#2563eb", label:"Infrastructure at Scale",  desc:"Kubernetes clusters serving billions of requests/day" },
  { icon:GitBranch, color:"#7c3aed", label:"GitOps First",             desc:"ArgoCD, Flux, and progressive delivery at every layer" },
  { icon:Shield,    color:"#059669", label:"Security-Embedded",        desc:"Zero-trust networking, supply chain, and auto-compliance" },
  { icon:Zap,       color:"#d97706", label:"MTTR Obsessed",            desc:"45 min → 8 min via AIOps + runbook automation" },
  { icon:Globe,     color:"#db2777", label:"Multi-Cloud Native",       desc:"Vendor-neutral architecture across AWS, GCP, and Azure" },
  { icon:TrendingUp,color:"#0891b2", label:"FinOps Champion",          desc:"$5M+ cloud savings via rightsizing and spot strategy" },
];

function FadeIn({ children, delay=0 }: { children: React.ReactNode; delay?: number }) {
  const { ref, inView } = useInView({ threshold:0.15, triggerOnce:true });
  return (
    <motion.div ref={ref} initial={{ opacity:0, y:24 }} animate={inView ? { opacity:1, y:0 } : {}}
      transition={{ duration:0.6, delay, ease:[0.22,1,0.36,1] }}>
      {children}
    </motion.div>
  );
}

export default function AboutSection() {
  return (
    <section id="about" className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <div className="text-center mb-16">
            <div className="section-label mb-3">About</div>
            {/* TODO: Update section title */}
            <h2 className="section-title text-4xl sm:text-5xl mb-4">
              Infra that <span className="gradient-text">scales</span>
            </h2>
            {/* TODO: Update summary text */}
            <p className="text-slate-500 text-lg max-w-2xl mx-auto leading-relaxed">
              {PERSONAL.bio}
            </p>
          </div>
        </FadeIn>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {HIGHLIGHTS.map((h, i) => (
            <FadeIn key={h.label} delay={i * 0.07}>
              <div className="card card-hover p-6 h-full cursor-default group">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110"
                  style={{ background:`${h.color}12`, border:`1px solid ${h.color}20` }}>
                  <h.icon className="w-5 h-5" style={{ color:h.color }} />
                </div>
                <div className="font-display font-semibold text-slate-900 mb-1.5 text-sm">{h.label}</div>
                <div className="text-slate-500 text-sm leading-relaxed">{h.desc}</div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
