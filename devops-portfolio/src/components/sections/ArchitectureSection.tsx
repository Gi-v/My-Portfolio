"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useScrollAnimation, fadeUp } from "@/hooks/useScrollAnimation";

type Tab = "k8s" | "cicd" | "terraform";
const TABS: { id: Tab; label: string; emoji: string }[] = [
  { id: "k8s", label: "Kubernetes Architecture", emoji: "⚙️" },
  { id: "cicd", label: "CI/CD Pipeline", emoji: "🔄" },
  { id: "terraform", label: "Terraform Workflow", emoji: "🏗️" },
];

function K8sDiagram() {
  return (
    <svg viewBox="0 0 800 420" className="w-full h-auto" aria-label="Kubernetes Architecture">
      <defs>
        <marker id="arrow" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
          <path d="M0,0 L0,6 L9,3 z" fill="#2563eb" opacity="0.6" />
        </marker>
      </defs>
      <rect x="10" y="180" width="100" height="60" rx="8" fill="#f8fafc" stroke="#2563eb" strokeWidth="1" strokeOpacity="0.3" />
      <text x="60" y="210" textAnchor="middle" fill="#64748b" fontSize="11" fontFamily="JetBrains Mono">Users</text>
      <text x="60" y="227" textAnchor="middle" fill="#2563eb" fontSize="18">🌐</text>
      <rect x="155" y="165" width="110" height="90" rx="8" fill="#f8fafc" stroke="#2563eb" strokeWidth="1.5" strokeOpacity="0.5" />
      <text x="210" y="200" textAnchor="middle" fill="#0f172a" fontSize="10" fontFamily="JetBrains Mono">Load Balancer</text>
      <text x="210" y="222" textAnchor="middle" fill="#2563eb" fontSize="18">⚖️</text>
      <text x="210" y="244" textAnchor="middle" fill="#2563eb" fontSize="9" fontFamily="JetBrains Mono">AWS ALB</text>
      <rect x="315" y="155" width="120" height="110" rx="8" fill="#f8fafc" stroke="#7c3aed" strokeWidth="1.5" strokeOpacity="0.5" />
      <text x="375" y="185" textAnchor="middle" fill="#0f172a" fontSize="10" fontFamily="JetBrains Mono">Ingress</text>
      <text x="375" y="200" textAnchor="middle" fill="#0f172a" fontSize="10" fontFamily="JetBrains Mono">Controller</text>
      <text x="375" y="225" textAnchor="middle" fill="#7c3aed" fontSize="18">🔀</text>
      <text x="375" y="250" textAnchor="middle" fill="#7c3aed" fontSize="9" fontFamily="JetBrains Mono">nginx/traefik</text>
      {[0,1,2].map((i) => (
        <g key={i}>
          <rect x={490+i*90} y="80" width="80" height="70" rx="6" fill="#f0fdf4" stroke="#059669" strokeWidth="1" strokeOpacity="0.4" />
          <text x={530+i*90} y="107" textAnchor="middle" fill="#64748b" fontSize="9" fontFamily="JetBrains Mono">Pod</text>
          <text x={530+i*90} y="130" textAnchor="middle" fill="#059669" fontSize="16">📦</text>
          <text x={530+i*90} y="143" textAnchor="middle" fill="#059669" fontSize="8" fontFamily="JetBrains Mono">svc-{i+1}</text>
        </g>
      ))}
      {[0,1,2].map((i) => (
        <g key={i}>
          <rect x={490+i*90} y="270" width="80" height="70" rx="6" fill="#fff7ed" stroke="#d97706" strokeWidth="1" strokeOpacity="0.4" />
          <text x={530+i*90} y="297" textAnchor="middle" fill="#64748b" fontSize="9" fontFamily="JetBrains Mono">Pod</text>
          <text x={530+i*90} y="320" textAnchor="middle" fill="#d97706" fontSize="16">📦</text>
          <text x={530+i*90} y="333" textAnchor="middle" fill="#d97706" fontSize="8" fontFamily="JetBrains Mono">api-{i+1}</text>
        </g>
      ))}
      <rect x="315" y="320" width="120" height="80" rx="8" fill="#fefce8" stroke="#ca8a04" strokeWidth="1.5" strokeOpacity="0.4" />
      <text x="375" y="352" textAnchor="middle" fill="#0f172a" fontSize="10" fontFamily="JetBrains Mono">Control Plane</text>
      <text x="375" y="372" textAnchor="middle" fill="#ca8a04" fontSize="16">🎛️</text>
      <text x="375" y="390" textAnchor="middle" fill="#ca8a04" fontSize="8" fontFamily="JetBrains Mono">API Server</text>
      <line x1="110" y1="210" x2="153" y2="210" stroke="#2563eb" strokeWidth="1.5" strokeOpacity="0.5" markerEnd="url(#arrow)" />
      <line x1="265" y1="210" x2="313" y2="210" stroke="#2563eb" strokeWidth="1.5" strokeOpacity="0.5" markerEnd="url(#arrow)" />
      <line x1="435" y1="185" x2="488" y2="130" stroke="#7c3aed" strokeWidth="1" strokeOpacity="0.4" markerEnd="url(#arrow)" />
      <line x1="435" y1="225" x2="488" y2="300" stroke="#7c3aed" strokeWidth="1" strokeOpacity="0.4" markerEnd="url(#arrow)" />
      <circle r="4" fill="#2563eb" opacity="0.8"><animateMotion dur="2s" repeatCount="indefinite"><mpath href="#f1"/></animateMotion></circle>
      <path id="f1" d="M 110,210 L 310,210" fill="none"/>
      <circle r="3" fill="#7c3aed" opacity="0.7"><animateMotion dur="2.5s" repeatCount="indefinite" begin="0.5s"><mpath href="#f2"/></animateMotion></circle>
      <path id="f2" d="M 435,185 L 488,130" fill="none"/>
      <rect x="10" y="360" width="140" height="50" rx="6" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="1" />
      <text x="25" y="378" fill="#94a3b8" fontSize="9" fontFamily="JetBrains Mono">🟢 Services (svc)</text>
      <text x="25" y="393" fill="#94a3b8" fontSize="9" fontFamily="JetBrains Mono">🟠 APIs  🟡 Control</text>
    </svg>
  );
}

function CICDDiagram() {
  const steps = [
    { label: "Code Push", icon: "💻", color: "#2563eb" },
    { label: "GitHub\nActions", icon: "🐙", color: "#7c3aed" },
    { label: "Build &\nTest", icon: "🔨", color: "#d97706" },
    { label: "Scan &\nSign", icon: "🔒", color: "#db2777" },
    { label: "Push\nImage", icon: "📦", color: "#059669" },
    { label: "ArgoCD\nSync", icon: "🔄", color: "#2563eb" },
    { label: "Deploy\nProd", icon: "🚀", color: "#ca8a04" },
  ];
  return (
    <svg viewBox="0 0 800 200" className="w-full h-auto" aria-label="CI/CD Pipeline">
      <defs><marker id="arr" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><path d="M0,0 L0,6 L7,3 z" fill="#2563eb" opacity="0.5"/></marker></defs>
      {steps.map((step, i) => {
        const x = 50 + i * 104;
        return (
          <g key={step.label}>
            <rect x={x} y="60" width="85" height="80" rx="10" fill="#f8fafc" stroke={step.color} strokeWidth="1.5" strokeOpacity="0.5" />
            <text x={x+42} y="90" textAnchor="middle" fontSize="22">{step.icon}</text>
            {step.label.split("\n").map((l, li) => <text key={li} x={x+42} y={108+li*13} textAnchor="middle" fill="#64748b" fontSize="9" fontFamily="JetBrains Mono">{l}</text>)}
            {i < steps.length - 1 && (
              <>
                <line x1={x+86} y1="100" x2={x+102} y2="100" stroke="#2563eb" strokeWidth="1.5" strokeOpacity="0.4" markerEnd="url(#arr)" strokeDasharray="3 2" />
                <circle r="3" fill={step.color} opacity="0.8"><animateMotion dur={`${1.5+i*0.3}s`} repeatCount="indefinite" begin={`${i*0.4}s`}><mpath href={`#p${i}`}/></animateMotion></circle>
                <path id={`p${i}`} d={`M ${x+86},100 L ${x+102},100`} fill="none"/>
              </>
            )}
          </g>
        );
      })}
      <text x="400" y="165" textAnchor="middle" fill="#059669" fontSize="11" fontFamily="JetBrains Mono">✓ Build: 2m 34s  ✓ Tests: 487 passed  ✓ Scan: 0 CVEs  ✓ Deploy: success</text>
    </svg>
  );
}

function TerraformDiagram() {
  const phases = [
    { label: "Write", sub: ".tf files", icon: "📝", color: "#7B42BC", x: 80, y: 150 },
    { label: "Plan", sub: "terraform plan", icon: "📋", color: "#2563eb", x: 250, y: 150 },
    { label: "Review", sub: "PR + Atlantis", icon: "👀", color: "#d97706", x: 420, y: 150 },
    { label: "Apply", sub: "terraform apply", icon: "⚡", color: "#059669", x: 590, y: 150 },
  ];
  return (
    <svg viewBox="0 0 800 380" className="w-full h-auto" aria-label="Terraform Workflow">
      <defs><marker id="tarr" markerWidth="7" markerHeight="7" refX="6" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3 z" fill="#7B42BC" opacity="0.6"/></marker></defs>
      <ellipse cx="640" cy="290" rx="130" ry="70" fill="#fff7ed" stroke="#f97316" strokeWidth="1" strokeOpacity="0.3" strokeDasharray="6 3" />
      <text x="640" y="240" textAnchor="middle" fill="#f97316" fontSize="10" fontFamily="JetBrains Mono" opacity="0.6">AWS Cloud</text>
      {[{label:"VPC",x:570,y:280},{label:"EKS",x:640,y:305},{label:"RDS",x:705,y:280}].map((r) => (
        <g key={r.label}>
          <rect x={r.x-20} y={r.y-14} width="40" height="24" rx="4" fill="white" stroke="#f97316" strokeWidth="0.8" strokeOpacity="0.5" />
          <text x={r.x} y={r.y+3} textAnchor="middle" fill="#f97316" fontSize="9" fontFamily="JetBrains Mono">{r.label}</text>
        </g>
      ))}
      {phases.map((p, i) => (
        <g key={p.label}>
          <rect x={p.x-55} y={p.y-55} width="110" height="95" rx="10" fill="#f8fafc" stroke={p.color} strokeWidth="1.5" strokeOpacity="0.5" />
          <text x={p.x} y={p.y-22} textAnchor="middle" fontSize="26">{p.icon}</text>
          <text x={p.x} y={p.y+4} textAnchor="middle" fill="#0f172a" fontSize="12" fontFamily="JetBrains Mono" fontWeight="600">{p.label}</text>
          <text x={p.x} y={p.y+20} textAnchor="middle" fill="#94a3b8" fontSize="9" fontFamily="JetBrains Mono">{p.sub}</text>
          {i < 3 && (
            <>
              <line x1={p.x+57} y1={p.y} x2={p.x+112} y2={p.y} stroke={p.color} strokeWidth="1.5" strokeOpacity="0.5" markerEnd="url(#tarr)" />
              <circle r="4" fill={p.color} opacity="0.9"><animateMotion dur="2s" repeatCount="indefinite" begin={`${i*0.5}s`}><mpath href={`#tf${i}`}/></animateMotion></circle>
              <path id={`tf${i}`} d={`M ${p.x+57},${p.y} L ${p.x+112},${p.y}`} fill="none"/>
            </>
          )}
        </g>
      ))}
      <line x1="590" y1="175" x2="640" y2="228" stroke="#059669" strokeWidth="1.5" strokeOpacity="0.5" markerEnd="url(#tarr)" />
      <rect x="615" y="335" width="80" height="35" rx="6" fill="white" stroke="#ca8a04" strokeWidth="1" strokeOpacity="0.5" />
      <text x="655" y="347" textAnchor="middle" fill="#ca8a04" fontSize="9" fontFamily="JetBrains Mono">🗄️ State</text>
      <text x="655" y="361" textAnchor="middle" fill="#94a3b8" fontSize="8" fontFamily="JetBrains Mono">S3+DynamoDB</text>
      <text x="400" y="360" textAnchor="middle" fill="#94a3b8" fontSize="10" fontFamily="JetBrains Mono">SLSA-compliant • Atlantis PR-driven • Remote state locking</text>
    </svg>
  );
}

const DIAGRAM_MAP: Record<Tab, React.ComponentType> = { k8s: K8sDiagram, cicd: CICDDiagram, terraform: TerraformDiagram };

export default function ArchitectureSection() {
  const { ref, controls } = useScrollAnimation();
  const [activeTab, setActiveTab] = useState<Tab>("k8s");
  const Diagram = DIAGRAM_MAP[activeTab];

  return (
    <section id="architecture" className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-slate-50/60">
      <div className="max-w-7xl mx-auto">
        <motion.div ref={ref} initial="hidden" animate={controls} variants={fadeUp} className="text-center mb-12 space-y-4">
          <div className="font-mono text-sm text-blue-600 tracking-widest uppercase">Infrastructure Design</div>
          <h2 className="font-display font-bold text-4xl sm:text-5xl text-slate-900">Cloud Architecture</h2>
          <p className="text-slate-500 max-w-xl mx-auto">Interactive diagrams of real production architectures I&apos;ve designed and operated.</p>
        </motion.div>
        <motion.div initial="hidden" animate={controls} variants={fadeUp} className="flex flex-wrap justify-center gap-2 mb-8">
          {TABS.map((tab) => (
            <button key={tab.id} onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium transition-all ${activeTab === tab.id ? "bg-blue-600 text-white shadow-md shadow-blue-200" : "bg-white border border-slate-200 text-slate-600 hover:border-blue-200 hover:bg-blue-50"}`}>
              <span>{tab.emoji}</span>{tab.label}
            </button>
          ))}
        </motion.div>
        <motion.div initial="hidden" animate={controls} variants={fadeUp} className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div key={activeTab} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.3 }}>
              <Diagram />
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
