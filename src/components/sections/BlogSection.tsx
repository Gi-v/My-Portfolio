"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Clock, ArrowRight, BookOpen } from "lucide-react";
import { BLOG_POSTS, SOCIAL } from "@/lib/config";

// TODO: EDIT HERE — update BLOG_POSTS in lib/config.ts
// Or connect to Dev.to API: fetch(`https://dev.to/api/articles?username=${YOUR_USERNAME}`)

export default function BlogSection() {
  const { ref, inView } = useInView({ threshold:0.1, triggerOnce:true });
  return (
    <section id="blog" className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-slate-50/50">
      <div className="max-w-6xl mx-auto">
        <motion.div ref={ref} initial={{ opacity:0, y:20 }} animate={inView?{opacity:1,y:0}:{}} transition={{ duration:0.6 }} className="text-center mb-16">
          <div className="section-label mb-3">Writing</div>
          <h2 className="section-title text-4xl sm:text-5xl mb-4">Articles & Insights</h2>
          <p className="text-slate-500 max-w-xl mx-auto">Deep dives into DevOps patterns, cloud architecture, and production lessons.</p>
        </motion.div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {BLOG_POSTS.map((p, i) => {
            const { ref:pr, inView:pv } = useInView({ threshold:0.1, triggerOnce:true });
            return (
              <motion.a key={p.title} ref={pr} href={p.url} target="_blank" rel="noopener noreferrer"
                initial={{ opacity:0, y:24 }} animate={pv?{opacity:1,y:0}:{}} transition={{ duration:0.5, delay:i*0.08 }}
                className="card card-hover flex flex-col overflow-hidden group">
                <div className="h-1" style={{ background:`linear-gradient(90deg, ${p.color}, transparent)` }} />
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {p.tags.map(t => <span key={t} className="text-xs font-mono px-2.5 py-0.5 rounded-full" style={{ background:`${p.color}10`, color:p.color, border:`1px solid ${p.color}18` }}>{t}</span>)}
                  </div>
                  <h3 className="font-display font-bold text-slate-900 text-base leading-snug mb-3 group-hover:text-blue-600 transition-colors">{p.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed flex-1 mb-5">{p.excerpt}</p>
                  <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                    <div className="flex items-center gap-3 text-xs text-slate-400 font-mono">
                      <span>{p.date}</span>
                      <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{p.readTime}</span>
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-blue-600 group-hover:translate-x-0.5 transition-all" />
                  </div>
                </div>
              </motion.a>
            );
          })}
        </div>
        <div className="text-center mt-10">
          {/* TODO: Update Dev.to URL */}
          <a href={SOCIAL.devto} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-white border border-slate-200 rounded-xl text-sm font-medium text-slate-600 hover:border-blue-200 hover:text-blue-600 transition-all shadow-sm">
            <BookOpen className="w-4 h-4" />All articles on Dev.to<ArrowRight className="w-3.5 h-3.5 opacity-50" />
          </a>
        </div>
      </div>
    </section>
  );
}
