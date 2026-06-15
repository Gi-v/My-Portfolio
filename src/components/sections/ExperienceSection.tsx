"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { MapPin, CalendarDays } from "lucide-react";
import { EXPERIENCE } from "@/lib/config";

function Entry({ job, i }: { job: typeof EXPERIENCE[0]; i: number }) {
  const { ref, inView } = useInView({ threshold:0.1, triggerOnce:true });
  return (
    <motion.div ref={ref} initial={{ opacity:0, x: i%2===0 ? -30 : 30 }}
      animate={inView ? { opacity:1, x:0 } : {}} transition={{ duration:0.65, ease:[0.22,1,0.36,1], delay:0.05 }}
      className="relative grid sm:grid-cols-[1fr,auto,1fr] gap-x-8 gap-y-4 items-start">
      {/* Left content */}
      {i%2===0 ? (
        <div className="card card-hover p-6 group">
          <CardContent job={job} />
        </div>
      ) : <div className="hidden sm:block" />}

      {/* Center dot + line (hidden on mobile) */}
      <div className="hidden sm:flex flex-col items-center gap-0 self-stretch">
        <div className="w-px flex-1 bg-slate-100" />
        <div className="w-4 h-4 rounded-full border-2 bg-white shadow-sm flex-shrink-0"
          style={{ borderColor: job.color, boxShadow:`0 0 0 3px ${job.color}18` }} />
        <div className="w-px flex-1 bg-slate-100" />
      </div>

      {/* Right content */}
      {i%2!==0 ? (
        <div className="card card-hover p-6 sm:col-start-3 group">
          <CardContent job={job} />
        </div>
      ) : <div className="hidden sm:block sm:col-start-3" />}

      {/* Mobile (always full width) */}
      <div className="sm:hidden card card-hover p-6">
        <CardContent job={job} />
      </div>
    </motion.div>
  );
}

function CardContent({ job }: { job: typeof EXPERIENCE[0] }) {
  return (
    <>
      <div className="absolute top-0 left-0 right-0 h-0.5 rounded-t-2xl" style={{ background:`linear-gradient(90deg, ${job.color}, transparent)` }} />
      <div className="flex items-start justify-between mb-3">
        <div>
          <div className="font-display font-bold text-slate-900 text-base">{job.role}</div>
          <div className="font-semibold text-sm mt-0.5" style={{ color:job.color }}>{job.company}</div>
        </div>
        <div className="w-9 h-9 rounded-xl text-xs font-mono font-bold flex items-center justify-center flex-shrink-0"
          style={{ background:`${job.color}12`, color:job.color, border:`1px solid ${job.color}20` }}>
          {job.company.slice(0,2).toUpperCase()}
        </div>
      </div>
      <div className="flex gap-4 text-xs text-slate-400 mb-4 font-mono">
        <span className="flex items-center gap-1"><CalendarDays className="w-3 h-3" />{job.period}</span>
        <span className="flex items-center gap-1"><MapPin className="w-3 h-3" />{job.location}</span>
      </div>
      <ul className="space-y-1.5 mb-4">
        {job.highlights.map((h, i) => (
          <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
            <span className="mt-2 w-1 h-1 rounded-full flex-shrink-0" style={{ background:job.color }} />{h}
          </li>
        ))}
      </ul>
      <div className="flex flex-wrap gap-2 pt-3 border-t border-slate-100">
        {job.metrics.map(m => (
          <span key={m.l} className="text-xs font-mono px-2.5 py-1 rounded-lg" style={{ background:`${job.color}0f`, color:job.color, border:`1px solid ${job.color}18` }}>
            <strong>{m.v}</strong> {m.l}
          </span>
        ))}
      </div>
    </>
  );
}

export default function ExperienceSection() {
  const { ref, inView } = useInView({ threshold:0.1, triggerOnce:true });
  return (
    <section id="experience" className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-slate-50/50">
      <div className="max-w-5xl mx-auto">
        <motion.div ref={ref} initial={{ opacity:0, y:20 }} animate={inView?{opacity:1,y:0}:{}}
          transition={{ duration:0.6, ease:[0.22,1,0.36,1] }} className="text-center mb-16">
          <div className="section-label mb-3">Career</div>
          {/* TODO: Update years of experience */}
          <h2 className="section-title text-4xl sm:text-5xl mb-4">Experience</h2>
          <p className="text-slate-500 max-w-lg mx-auto">8+ years shipping production infrastructure at high-growth tech companies.</p>
        </motion.div>

        <div className="space-y-8">
          {/* TODO: EDIT HERE — add/remove jobs in lib/config.ts EXPERIENCE array */}
          {EXPERIENCE.map((job, i) => <Entry key={job.company} job={job} i={i} />)}
        </div>
      </div>
    </section>
  );
}
