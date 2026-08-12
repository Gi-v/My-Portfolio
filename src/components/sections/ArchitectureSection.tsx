"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";

type Tab = "platform" | "cicd" | "gitops";
const TABS: { id:Tab; label:string; desc:string }[] = [
  { id:"platform", label:"Cloud Platform",   desc:"Full-stack and ML workloads running in containerized, production-ready environments" },
  { id:"cicd",     label:"CI/CD Pipeline",   desc:"Automated build, test, and deployment patterns for modern application delivery" },
  { id:"gitops",   label:"GitOps Flow",      desc:"Declarative delivery, traceability, and operational consistency across software environments" },
];

/* ── Platform Diagram ───────────────────────────────────── */
function PlatformDiagram() {
  const nodes = [
    { id:"user",  x:60,  y:200, w:90,  h:56, label:"Developers", sub:"kubectl / UI",  color:"#2563eb", emoji:"👩‍💻" },
    { id:"lb",    x:210, y:200, w:90,  h:56, label:"Ingress",     sub:"AWS ALB",       color:"#7c3aed", emoji:"⚖️" },
    { id:"mesh",  x:360, y:200, w:90,  h:56, label:"Service Mesh",sub:"Istio/Cilium",  color:"#0891b2", emoji:"🔀" },
    { id:"svc1",  x:510, y:100, w:80,  h:50, label:"API Pods",    sub:"3 replicas",    color:"#059669", emoji:"📦" },
    { id:"svc2",  x:510, y:200, w:80,  h:50, label:"Worker Pods", sub:"autoscaled",    color:"#059669", emoji:"📦" },
    { id:"svc3",  x:510, y:300, w:80,  h:50, label:"DB Proxy",    sub:"PGBouncer",     color:"#d97706", emoji:"🗄️" },
    { id:"obs",   x:650, y:200, w:90,  h:56, label:"Observability",sub:"Prom/Grafana", color:"#E6522C", emoji:"📊" },
  ];
  const edges = [
    { from:{x:152,y:228}, to:{x:208,y:228} },
    { from:{x:302,y:228}, to:{x:358,y:228} },
    { from:{x:452,y:200}, to:{x:508,y:130} },
    { from:{x:452,y:228}, to:{x:508,y:228} },
    { from:{x:452,y:248}, to:{x:508,y:320} },
    { from:{x:592,y:228}, to:{x:648,y:228} },
  ];
  return (
    <svg viewBox="0 0 800 430" className="w-full h-auto">
      <defs>
        <marker id="a" markerWidth="7" markerHeight="7" refX="6" refY="3" orient="auto">
          <path d="M0,0 L0,6 L8,3 z" fill="#94a3b8" />
        </marker>
      </defs>
      {edges.map((e,i) => (
        <g key={i}>
          <line x1={e.from.x} y1={e.from.y} x2={e.to.x} y2={e.to.y} stroke="#cbd5e1" strokeWidth="1.5" strokeDasharray="4 3" markerEnd="url(#a)" />
          <circle r="3.5" fill="#2563eb" opacity="0.75">
            <animateMotion dur={`${1.8+i*0.35}s`} repeatCount="indefinite" begin={`${i*0.5}s`}>
              <mpath href={`#ep${i}`} />
            </animateMotion>
          </circle>
          <path id={`ep${i}`} d={`M ${e.from.x},${e.from.y} L ${e.to.x},${e.to.y}`} fill="none" />
        </g>
      ))}
      {nodes.map(n => (
        <g key={n.id}>
          <rect x={n.x} y={n.y-28} width={n.w} height={n.h} rx="10" fill="white" stroke={n.color} strokeWidth="1.5" strokeOpacity="0.4"
            style={{ filter:"drop-shadow(0 2px 8px rgba(0,0,0,0.06))" }} />
          <text x={n.x+n.w/2} y={n.y-6} textAnchor="middle" fontSize="18">{n.emoji}</text>
          <text x={n.x+n.w/2} y={n.y+13} textAnchor="middle" fill="#0f172a" fontSize="10" fontFamily="Syne,sans-serif" fontWeight="600">{n.label}</text>
          <text x={n.x+n.w/2} y={n.y+24} textAnchor="middle" fill={n.color} fontSize="8.5" fontFamily="JetBrains Mono,monospace">{n.sub}</text>
        </g>
      ))}
      {/* Legend */}
      <rect x="20" y="380" width="180" height="36" rx="6" fill="white" stroke="#e2e8f0" strokeWidth="1" />
      <text x="35" y="396" fill="#64748b" fontSize="9" fontFamily="JetBrains Mono,monospace">🟢 Services   🟠 Storage   🔵 Control</text>
      <text x="35" y="408" fill="#94a3b8" fontSize="8" fontFamily="JetBrains Mono,monospace">Animated flow indicates live traffic</text>
    </svg>
  );
}

/* ── CI/CD Diagram ──────────────────────────────────────── */
function CICDDiagram() {
  const steps = [
    { label:"Code",    icon:"💻", color:"#2563eb",  sub:"Push" },
    { label:"Build",   icon:"🔨", color:"#7c3aed",  sub:"Actions" },
    { label:"Test",    icon:"🧪", color:"#0891b2",  sub:"487 tests" },
    { label:"Scan",    icon:"🔒", color:"#dc2626",  sub:"Trivy/SAST" },
    { label:"Sign",    icon:"🔏", color:"#059669",  sub:"Cosign" },
    { label:"Publish", icon:"📦", color:"#d97706",  sub:"GHCR" },
    { label:"Deploy",  icon:"🚀", color:"#2563eb",  sub:"ArgoCD" },
  ];
  return (
    <svg viewBox="0 0 820 220" className="w-full h-auto">
      <defs>
        <marker id="ca" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
          <path d="M0,0 L0,6 L7,3 z" fill="#2563eb" opacity="0.5" />
        </marker>
      </defs>
      {steps.map((s, i) => {
        const x = 30 + i * 110;
        return (
          <g key={s.label}>
            <rect x={x} y="60" width="90" height="84" rx="12" fill="white" stroke={s.color} strokeWidth="1.5" strokeOpacity="0.4"
              style={{ filter:"drop-shadow(0 2px 8px rgba(0,0,0,0.05))" }} />
            <text x={x+45} y="93" textAnchor="middle" fontSize="24">{s.icon}</text>
            <text x={x+45} y="116" textAnchor="middle" fill="#0f172a" fontSize="11" fontFamily="Syne,sans-serif" fontWeight="600">{s.label}</text>
            <text x={x+45} y="130" textAnchor="middle" fill={s.color} fontSize="8.5" fontFamily="JetBrains Mono,monospace">{s.sub}</text>
            {i < steps.length-1 && (
              <>
                <line x1={x+91} y1="102" x2={x+108} y2="102" stroke="#cbd5e1" strokeWidth="1.5" strokeDasharray="3 2" markerEnd="url(#ca)" />
                <circle r="3.5" fill={s.color} opacity="0.8">
                  <animateMotion dur={`${1.5+i*0.2}s`} repeatCount="indefinite" begin={`${i*0.35}s`}>
                    <mpath href={`#cp${i}`} />
                  </animateMotion>
                </circle>
                <path id={`cp${i}`} d={`M ${x+91},102 L ${x+108},102`} fill="none" />
              </>
            )}
          </g>
        );
      })}
      <text x="410" y="175" textAnchor="middle" fill="#059669" fontSize="11" fontFamily="JetBrains Mono,monospace">
        ✓ SLSA Level 3 compliant  ·  ✓ Signed artifacts  ·  ✓ Zero CVE escapes
      </text>
    </svg>
  );
}

/* ── GitOps Diagram ─────────────────────────────────────── */
function GitOpsDiagram() {
  return (
    <svg viewBox="0 0 800 360" className="w-full h-auto">
      <defs>
        <marker id="ga" markerWidth="7" markerHeight="7" refX="6" refY="3" orient="auto">
          <path d="M0,0 L0,6 L8,3 z" fill="#7c3aed" opacity="0.6" />
        </marker>
      </defs>
      {/* Git repo */}
      <rect x="30"  y="140" width="110" height="80" rx="12" fill="white" stroke="#0f172a" strokeWidth="1.5" strokeOpacity="0.15" style={{filter:"drop-shadow(0 2px 8px rgba(0,0,0,0.06))"}} />
      <text x="85"  y="172" textAnchor="middle" fontSize="26">🐙</text>
      <text x="85"  y="196" textAnchor="middle" fill="#0f172a" fontSize="11" fontFamily="Syne,sans-serif" fontWeight="600">Git Repo</text>
      <text x="85"  y="210" textAnchor="middle" fill="#64748b" fontSize="8.5" fontFamily="JetBrains Mono,monospace">infra-configs</text>

      {/* ArgoCD */}
      <rect x="220" y="140" width="110" height="80" rx="12" fill="white" stroke="#7c3aed" strokeWidth="1.5" strokeOpacity="0.4" style={{filter:"drop-shadow(0 2px 8px rgba(124,58,237,0.1))"}} />
      <text x="275" y="172" textAnchor="middle" fontSize="26">🔄</text>
      <text x="275" y="196" textAnchor="middle" fill="#0f172a" fontSize="11" fontFamily="Syne,sans-serif" fontWeight="600">ArgoCD</text>
      <text x="275" y="210" textAnchor="middle" fill="#7c3aed" fontSize="8.5" fontFamily="JetBrains Mono,monospace">continuous sync</text>

      {/* Clusters */}
      {[
        { label:"Prod Cluster",  sub:"us-east-1",  color:"#059669", x:440, y:80  },
        { label:"Stage Cluster", sub:"us-west-2",  color:"#2563eb", x:440, y:180 },
        { label:"Dev Cluster",   sub:"eu-west-1",  color:"#d97706", x:440, y:280 },
      ].map(c => (
        <g key={c.label}>
          <rect x={c.x} y={c.y} width="120" height="70" rx="10" fill="white" stroke={c.color} strokeWidth="1.5" strokeOpacity="0.4" style={{filter:"drop-shadow(0 2px 6px rgba(0,0,0,0.05))"}} />
          <text x={c.x+60} y={c.y+28} textAnchor="middle" fontSize="20">⚙️</text>
          <text x={c.x+60} y={c.y+47} textAnchor="middle" fill="#0f172a" fontSize="10" fontFamily="Syne,sans-serif" fontWeight="600">{c.label}</text>
          <text x={c.x+60} y={c.y+59} textAnchor="middle" fill={c.color} fontSize="8.5" fontFamily="JetBrains Mono,monospace">{c.sub}</text>
          {/* ArgoCD → cluster arrows */}
          <line x1="332" y1="180" x2={c.x} y2={c.y+35} stroke="#cbd5e1" strokeWidth="1.5" strokeDasharray="4 3" markerEnd="url(#ga)" />
          <circle r="3.5" fill={c.color} opacity="0.75">
            <animateMotion dur="2.2s" repeatCount="indefinite" begin={`${c.y*0.003}s`}>
              <mpath href={`#gp${c.label}`} />
            </animateMotion>
          </circle>
          <path id={`gp${c.label}`} d={`M 332,180 L ${c.x},${c.y+35}`} fill="none" />
        </g>
      ))}

      {/* Git → ArgoCD */}
      <line x1="142" y1="180" x2="218" y2="180" stroke="#cbd5e1" strokeWidth="1.5" strokeDasharray="4 3" markerEnd="url(#ga)" />
      <circle r="3.5" fill="#7c3aed" opacity="0.8"><animateMotion dur="1.5s" repeatCount="indefinite"><mpath href="#gpgit"/></animateMotion></circle>
      <path id="gpgit" d="M 142,180 L 218,180" fill="none" />

      {/* Drift detection loop */}
      <path d="M 440,115 C 380,115 380,245 440,245" fill="none" stroke="#059669" strokeWidth="1" strokeDasharray="3 3" strokeOpacity="0.4" />
      <text x="365" y="185" fill="#059669" fontSize="8" fontFamily="JetBrains Mono,monospace" textAnchor="middle">drift</text>
      <text x="365" y="196" fill="#059669" fontSize="8" fontFamily="JetBrains Mono,monospace" textAnchor="middle">detect</text>

      {/* Policy engine */}
      <rect x="630" y="145" width="110" height="70" rx="10" fill="white" stroke="#dc2626" strokeWidth="1.5" strokeOpacity="0.35" style={{filter:"drop-shadow(0 2px 6px rgba(0,0,0,0.05))"}} />
      <text x="685" y="173" textAnchor="middle" fontSize="20">🛡️</text>
      <text x="685" y="192" textAnchor="middle" fill="#0f172a" fontSize="10" fontFamily="Syne,sans-serif" fontWeight="600">OPA/Gatekeeper</text>
      <text x="685" y="204" textAnchor="middle" fill="#dc2626" fontSize="8.5" fontFamily="JetBrains Mono,monospace">policy enforcement</text>
      <line x1="562" y1="180" x2="628" y2="180" stroke="#cbd5e1" strokeWidth="1.5" strokeDasharray="4 3" markerEnd="url(#ga)" />
    </svg>
  );
}

const DIAGRAMS: Record<Tab, React.ComponentType> = { platform:PlatformDiagram, cicd:CICDDiagram, gitops:GitOpsDiagram };

export default function ArchitectureSection() {
  const [tab, setTab] = useState<Tab>("platform");
  const { ref, inView } = useInView({ threshold:0.1, triggerOnce:true });
  const Diagram = DIAGRAMS[tab];

  return (
    <section id="architecture" className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-slate-50/50">
      <div className="max-w-6xl mx-auto">
        <motion.div ref={ref} initial={{ opacity:0, y:20 }} animate={inView?{opacity:1,y:0}:{}} transition={{ duration:0.6 }} className="text-center mb-12">
          <div className="section-label mb-3">Architecture</div>
          <h2 className="section-title text-4xl sm:text-5xl mb-4">Cloud Architecture</h2>
          <p className="text-slate-500 max-w-xl mx-auto">Interactive visualizations of production infrastructure I&apos;ve designed and operated.</p>
        </motion.div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {TABS.map(t => (
            <button key={t.id} onClick={() => setTab(t.id)}
              className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 ${tab===t.id ? "bg-blue-600 text-white shadow-md shadow-blue-200/50" : "bg-white border border-slate-200 text-slate-600 hover:border-blue-200 hover:bg-blue-50/50"}`}>
              {t.label}
            </button>
          ))}
        </div>

        {/* Tab desc */}
        <AnimatePresence mode="wait">
          <motion.p key={tab} initial={{ opacity:0 }} animate={{ opacity:1 }} exit={{ opacity:0 }} transition={{ duration:0.3 }}
            className="text-center text-sm text-slate-400 font-mono mb-6">{TABS.find(t=>t.id===tab)?.desc}</motion.p>
        </AnimatePresence>

        {/* Diagram */}
        <div className="bg-white border border-slate-200/80 rounded-2xl p-6 sm:p-8 shadow-sm overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div key={tab} initial={{ opacity:0, y:8 }} animate={{ opacity:1, y:0 }} exit={{ opacity:0, y:-8 }} transition={{ duration:0.35 }}>
              <Diagram />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
