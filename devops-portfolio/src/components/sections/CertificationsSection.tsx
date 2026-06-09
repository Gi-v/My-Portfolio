"use client";
import { motion } from "framer-motion";
import { Award, CheckCircle } from "lucide-react";
import { useScrollAnimation, fadeUp, staggerContainer } from "@/hooks/useScrollAnimation";
import { CERTIFICATIONS } from "@/lib/data";

const ISSUER_LOGOS: Record<string, string> = {
  "Amazon Web Services":"AWS","CNCF":"CNCF","HashiCorp":"HCP","Microsoft":"MSFT","Google Cloud":"GCP",
};

export default function CertificationsSection() {
  const { ref, controls } = useScrollAnimation();
  return (
    <section id="certifications" className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-slate-50/60">
      <div className="max-w-7xl mx-auto">
        <motion.div ref={ref} initial="hidden" animate={controls} variants={fadeUp} className="text-center mb-16 space-y-4">
          <div className="font-mono text-sm text-blue-600 tracking-widest uppercase">Credentials</div>
          <h2 className="font-display font-bold text-4xl sm:text-5xl text-slate-900">Certifications</h2>
          <p className="text-slate-500 max-w-xl mx-auto">Industry certifications validating expertise across cloud platforms, Kubernetes, and infrastructure.</p>
        </motion.div>
        <motion.div initial="hidden" animate={controls} variants={staggerContainer} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {CERTIFICATIONS.map((cert) => (
            <motion.div key={cert.name} variants={fadeUp} className="glass glass-hover rounded-2xl p-5 flex flex-col gap-4">
              <div className="flex items-start justify-between">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center font-mono font-bold text-xs"
                  style={{ background: `${cert.color}12`, border: `1px solid ${cert.color}25`, color: cert.color }}>
                  {ISSUER_LOGOS[cert.issuer] || "CERT"}
                </div>
                <CheckCircle className="w-5 h-5 text-emerald-500" />
              </div>
              <div className="flex-1">
                <p className="font-display font-semibold text-slate-900 text-sm leading-tight mb-1.5">{cert.name}</p>
                <p className="text-xs text-slate-500">{cert.issuer}</p>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-3.5 h-3.5" style={{ color: cert.color }} />
                <span className="text-xs font-mono" style={{ color: cert.color }}>Earned {cert.year}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
        <motion.div initial="hidden" animate={controls} variants={fadeUp} className="mt-10 bg-white border border-slate-200 rounded-2xl p-6 flex flex-wrap justify-center gap-8 shadow-sm">
          {[{ label: "AWS Certifications", value: "2", color: "#FF9900" }, { label: "Kubernetes Certs", value: "3", color: "#326CE5" }, { label: "Cloud Platform Certs", value: "2", color: "#4285F4" }, { label: "HashiCorp Certs", value: "1", color: "#7B42BC" }].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-display font-bold text-3xl" style={{ color: stat.color }}>{stat.value}</div>
              <div className="text-xs text-slate-500 mt-1 font-mono">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
