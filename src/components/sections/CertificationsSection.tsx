"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { CheckCircle, Award } from "lucide-react";
import { CERTIFICATIONS } from "@/lib/config";

export default function CertificationsSection() {
  const { ref, inView } = useInView({ threshold:0.1, triggerOnce:true });
  return (
    <section id="certifications" className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-slate-50/50">
      <div className="max-w-6xl mx-auto">
        <motion.div ref={ref} initial={{ opacity:0, y:20 }} animate={inView?{opacity:1,y:0}:{}} transition={{ duration:0.6 }} className="text-center mb-16">
          <div className="section-label mb-3">Credentials</div>
          <h2 className="section-title text-4xl sm:text-5xl mb-4">Certifications</h2>
          <p className="text-slate-500 max-w-xl mx-auto">Foundational cloud and agile training that supports my engineering and systems work.</p>
        </motion.div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {CERTIFICATIONS.map((c, i) => {
            const { ref:cr, inView:cv } = useInView({ threshold:0.1, triggerOnce:true });
            return (
              <motion.div key={c.name} ref={cr} initial={{ opacity:0, y:24 }} animate={cv?{opacity:1,y:0}:{}}
                transition={{ duration:0.5, delay:i*0.06 }} className="card card-hover p-5 flex flex-col gap-4 relative overflow-hidden group">
                <div className="absolute top-0 left-0 right-0 h-0.5" style={{ background:c.color }} />
                <div className="flex items-start justify-between">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center font-mono font-bold text-xs"
                    style={{ background:`${c.color}12`, border:`1px solid ${c.color}20`, color:c.color }}>
                    {c.abbr}
                  </div>
                  <CheckCircle className="w-5 h-5 text-emerald-500" />
                </div>
                <div className="flex-1">
                  <div className="font-display font-semibold text-slate-900 text-sm leading-snug mb-1">{c.name}</div>
                  <div className="text-xs text-slate-400">{c.issuer}</div>
                </div>
                <div className="flex items-center gap-1.5 pt-2 border-t border-slate-100">
                  <Award className="w-3.5 h-3.5" style={{ color:c.color }} />
                  <span className="text-xs font-mono" style={{ color:c.color }}>Earned {c.year}</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
