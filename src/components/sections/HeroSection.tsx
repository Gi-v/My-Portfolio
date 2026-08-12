"use client";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Mail, ArrowRight, ChevronDown } from "lucide-react";
import { PERSONAL, SOCIAL, HERO_STATS, TERMINAL_LINES, PROFILE_IMAGE } from "@/lib/config";
import { TypeAnimation } from "react-type-animation";
import gsap from "gsap";
import Image from "next/image";

export default function HeroSection() {
  const [termLines, setTermLines] = useState<Array<{text:string;dim?:boolean;color?:string}>>([]);
  const termRef = useRef<HTMLDivElement>(null);

  // ── Terminal typewriter ──────────────────────────────────────
  useEffect(() => {
    const ts: ReturnType<typeof setTimeout>[] = [];
    TERMINAL_LINES.forEach((l, i) => {
      ts.push(setTimeout(() => {
        setTermLines(p => [...p, { text:l.text, dim:l.dim, color:l.color }]);
        if (termRef.current) termRef.current.scrollTop = termRef.current.scrollHeight;
      }, l.delay + i * 40));
    });
    return () => ts.forEach(clearTimeout);
  }, []);

  // ── GSAP entrance ───────────────────────────────────────────
  const rootRef = useRef<HTMLElement>(null);
  const imgRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const termCardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease:"power3.out" } });
      tl.fromTo(rootRef.current, { opacity:0 }, { opacity:1, duration:0.3 })
        .fromTo(imgRef.current, { x:-50, opacity:0, scale:0.92 }, { x:0, opacity:1, scale:1, duration:0.9 }, 0.1)
        .fromTo(textRef.current?.children ? Array.from(textRef.current.children) : [], { y:30, opacity:0 }, { y:0, opacity:1, duration:0.7, stagger:0.1 }, 0.2)
        .fromTo(termCardRef.current, { x:60, opacity:0 }, { x:0, opacity:1, duration:0.9, ease:"power2.out" }, 0.3);
    }, rootRef);
    return () => ctx.revert();
  }, []);

  const socials = [
    { icon:Github, href:SOCIAL.github, label:"GitHub" },
    { icon:Linkedin, href:SOCIAL.linkedin, label:"LinkedIn" },
    { icon:Mail, href:`mailto:${PERSONAL.email}`, label:"Email" },
  ];

  return (
    <section ref={rootRef} className="relative min-h-screen flex items-center px-4 sm:px-6 lg:px-8 pt-24 pb-16 overflow-hidden" style={{opacity:0}}>
      <div className="relative z-10 max-w-6xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* ── LEFT: Profile + Text ── */}
          <div className="space-y-8">
            {/* Profile image + name block */}
            <div ref={imgRef} className="flex items-center gap-5" style={{opacity:0}}>
              <div className="relative flex-shrink-0">
                <div className="w-20 h-20 rounded-2xl overflow-hidden ring-4 ring-white shadow-xl shadow-blue-100/60">
                  <Image
                    src={PROFILE_IMAGE}
                    alt={PERSONAL.name}
                    width={80}
                    height={80}
                    className="object-cover w-full h-full"
                    onError={(e) => {
                      // Fallback initials if image missing
                      (e.target as HTMLImageElement).style.display = "none";
                    }}
                  />
                  {/* Fallback initials shown behind image */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-violet-600 flex items-center justify-center -z-10">
                    <span className="text-white font-display font-bold text-2xl">
                      {PERSONAL.firstName[0]}{PERSONAL.lastName[0]}
                    </span>
                  </div>
                </div>
                {/* Online indicator — remove if not desired */}
                <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-emerald-500 border-2 border-white shadow-sm" />
              </div>

              <div>
                <div className="text-xs font-mono text-slate-400 mb-1">{PERSONAL.location}</div>
                <h1 className="font-display font-bold text-2xl text-slate-900">{PERSONAL.name}</h1>
              </div>
            </div>

            {/* Text content */}
            <div ref={textRef} className="space-y-6">
              {/* Title typewriter */}
              <div style={{opacity:0}}>
                <div className="font-mono text-sm text-blue-600 mb-3 tracking-widest uppercase">
                  {PERSONAL.title}
                </div>
                <h2 className="font-display font-bold text-5xl sm:text-6xl leading-[1.04] tracking-tight text-slate-900">
                  <TypeAnimation
                    sequence={["Software\nEngineer", 3000, "Full-Stack\nDeveloper", 3000, "Cloud &\nML Builder", 3000]}
                    repeat={Infinity}
                    speed={40}
                    style={{ whiteSpace:"pre-line" }}
                  />
                </h2>
              </div>

              <p style={{opacity:0}} className="text-slate-500 text-lg leading-relaxed max-w-md">
                {PERSONAL.bio}
              </p>

              {/* Stats row */}
              <div style={{opacity:0}} className="grid grid-cols-4 gap-4 py-4 border-y border-slate-100">
                {HERO_STATS.map(s => (
                  <div key={s.label}>
                    <div className="font-display font-bold text-2xl text-slate-900">{s.value}</div>
                    <div className="text-xs text-slate-400 font-mono mt-0.5">{s.label}</div>
                  </div>
                ))}
              </div>

              {/* CTAs */}
              <div style={{opacity:0}} className="flex flex-wrap gap-3">
                <a href="#contact" className="group inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-semibold text-sm rounded-xl hover:bg-blue-700 transition-all shadow-md shadow-blue-200/60">
                  Get in Touch <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </a>
                <a href="#projects" className="inline-flex items-center gap-2 px-6 py-3 bg-white border border-slate-200 text-slate-700 font-semibold text-sm rounded-xl hover:border-blue-200 hover:bg-blue-50/50 transition-all shadow-sm">
                  View Projects
                </a>
              </div>

              {/* Socials */}
              <div style={{opacity:0}} className="flex items-center gap-2">
                {socials.map(({ icon:Icon, href, label }) => (
                  <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                    className="p-2.5 rounded-xl text-slate-400 hover:text-blue-600 hover:bg-blue-50 transition-all border border-transparent hover:border-blue-100">
                    <Icon className="w-4.5 h-4.5" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* ── RIGHT: Terminal ── */}
          <div ref={termCardRef} className="relative" style={{opacity:0}}>
            <div className="rounded-2xl overflow-hidden border border-slate-200/80 shadow-2xl shadow-slate-300/30">
              {/* Terminal header */}
              <div className="flex items-center justify-between px-4 py-3 bg-slate-800">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                  <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                  <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
                </div>
                <span className="font-mono text-xs text-slate-500">hareem@portfolio ~ zsh</span>
                <div className="w-16" />
              </div>
              {/* Terminal body */}
              <div ref={termRef} className="bg-[#0d1117] p-5 font-mono text-xs sm:text-sm leading-6 h-[340px] overflow-y-auto" style={{scrollbarWidth:"none"}}>
                {termLines.map((l, i) => (
                  <div key={i}>{l.text === "" ? <br /> : <span style={{ color: l.color || (l.dim ? "#4b5563" : "#e2e8f0") }}>{l.text}</span>}</div>
                ))}
                {termLines.length > 0 && <span className="cursor" />}
              </div>
            </div>

            {/* Floating stat badges */}
            <motion.div animate={{ y:[-4,4,-4] }} transition={{ repeat:Infinity, duration:4, ease:"easeInOut" }}
              className="absolute -top-5 -right-4 bg-white border border-slate-200 shadow-lg px-3 py-2 rounded-xl">
              <span className="text-xs font-mono text-emerald-600 font-medium">✓ 99.99% uptime</span>
            </motion.div>
            <motion.div animate={{ y:[4,-4,4] }} transition={{ repeat:Infinity, duration:5, ease:"easeInOut", delay:1 }}
              className="absolute -bottom-5 -left-4 bg-white border border-slate-200 shadow-lg px-3 py-2 rounded-xl">
              <span className="text-xs font-mono text-blue-600 font-medium">🚀 Deploy: success</span>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-slate-400">
        <span className="text-xs font-mono">scroll</span>
        <motion.div animate={{ y:[0,5,0] }} transition={{ repeat:Infinity, duration:1.6 }}>
          <ChevronDown className="w-4 h-4" />
        </motion.div>
      </div>
    </section>
  );
}
