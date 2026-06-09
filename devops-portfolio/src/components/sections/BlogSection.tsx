"use client";
import { motion } from "framer-motion";
import { Clock, ArrowRight, BookOpen } from "lucide-react";
import { useScrollAnimation, fadeUp, staggerContainer } from "@/hooks/useScrollAnimation";
import { BLOG_POSTS } from "@/lib/data";

export default function BlogSection() {
  const { ref, controls } = useScrollAnimation();
  return (
    <section id="blog" className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-slate-50/60">
      <div className="max-w-7xl mx-auto">
        <motion.div ref={ref} initial="hidden" animate={controls} variants={fadeUp} className="text-center mb-16 space-y-4">
          <div className="font-mono text-sm text-blue-600 tracking-widest uppercase">Writing</div>
          <h2 className="font-display font-bold text-4xl sm:text-5xl text-slate-900">Articles & Insights</h2>
          <p className="text-slate-500 max-w-xl mx-auto">Deep dives into DevOps patterns, cloud architecture decisions, and lessons from production.</p>
        </motion.div>
        <motion.div initial="hidden" animate={controls} variants={staggerContainer} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {BLOG_POSTS.map((post) => (
            <motion.article key={post.title} variants={fadeUp} className="glass glass-hover rounded-2xl overflow-hidden group cursor-pointer flex flex-col">
              <div className="h-1.5" style={{ background: `linear-gradient(90deg, ${post.color}, ${post.color}40)` }} />
              <div className="p-6 flex flex-col flex-1">
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag) => (
                    <span key={tag} className="text-xs font-mono px-2.5 py-0.5 rounded-full" style={{ background: `${post.color}12`, color: post.color, border: `1px solid ${post.color}20` }}>{tag}</span>
                  ))}
                </div>
                <h3 className="font-display font-bold text-slate-900 leading-tight mb-3 group-hover:text-blue-600 transition-colors">{post.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed flex-1 mb-5">{post.excerpt}</p>
                <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                  <div className="flex items-center gap-3 text-xs text-slate-400">
                    <span>{post.date}</span>
                    <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{post.readTime} read</span>
                  </div>
                  <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
        <motion.div initial="hidden" animate={controls} variants={fadeUp} className="text-center mt-12">
          <a href="https://dev.to/alexchen-dev" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white border border-slate-200 rounded-xl text-sm font-medium text-slate-700 hover:border-blue-200 hover:bg-blue-50 transition-all shadow-sm">
            <BookOpen className="w-4 h-4" />Read all articles on Dev.to<ArrowRight className="w-3.5 h-3.5 text-slate-400" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
