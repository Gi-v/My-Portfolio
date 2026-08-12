"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Server, GitBranch, Shield, TrendingUp, Globe, Zap } from "lucide-react";
import { PERSONAL } from "@/lib/config";

const HIGHLIGHTS = [
  { icon:Server,    color:"#2563eb", label:"Full-Stack Builder",  desc:"Designing and shipping end-to-end web and backend systems with strong product thinking." },
  { icon:GitBranch, color:"#7c3aed", label:"Cloud-Native Mindset", desc:"Working with Docker, Kubernetes, CI/CD, and deployment workflows from code to production." },
  { icon:Shield,    color:"#059669", label:"Security-Aware",      desc:"Applying secure engineering practices, DevSecOps thinking, and real security tooling." },
  { icon:Zap,       color:"#d97706", label:"Fast Learner",        desc:"Exploring modern engineering practices across AI, cloud, and scalable software systems." },
  { icon:Globe,     color:"#db2777", label:"Research Driven",     desc:"Combining software engineering with applied ML and intelligent systems research." },
  { icon:TrendingUp,color:"#0891b2", label:"Systems Thinking",    desc:"Designing tools that balance performance, security, reliability, and usability." },
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
            <h2 className="section-title text-4xl sm:text-5xl mb-4">
              Building <span className="gradient-text">systems</span> that matter
            </h2>
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
