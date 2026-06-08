"use client";

import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, ArrowRight, Mail, ChevronDown } from "lucide-react";
import { PERSONAL, TERMINAL_LINES } from "@/lib/data";
import { TypeAnimation } from "react-type-animation";

export default function HeroSection() {
  const [terminalLines, setTerminalLines] = useState<Array<{ text: string; dim?: boolean; color?: string }>>([]);
  const terminalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let timeouts: ReturnType<typeof setTimeout>[] = [];
    TERMINAL_LINES.forEach((line, i) => {
      const t = setTimeout(() => {
        setTerminalLines((prev) => {
          const next = [...prev, { text: line.text, dim: line.dim, color: line.color }];
          return next;
        });
        if (terminalRef.current) {
          terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
        }
      }, line.delay + i * 50);
      timeouts.push(t);
    });
    return () => timeouts.forEach(clearTimeout);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-cyan-500/5 blur-[120px]" />
        <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] rounded-full bg-violet-500/5 blur-[100px]" />
      </div>

      <div className="relative max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 lg:gap-16 items-center py-16">
        {/* Left — Text */}
        <div className="space-y-8">
          {/* Availability badge */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            {PERSONAL.available && (
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-mono text-emerald-400 bg-emerald-400/10 border border-emerald-400/20">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Open to new opportunities
              </span>
            )}
          </motion.div>

          {/* Name + title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="space-y-4"
          >
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight">
              <span className="text-white">{PERSONAL.name}</span>
            </h1>
            <div className="font-mono text-lg sm:text-xl text-cyan-400 flex items-center gap-2">
              <span className="text-muted-foreground">~/</span>
              <TypeAnimation
                sequence={[
                  "DevOps Engineer",
                  2000,
                  "Cloud Architect",
                  2000,
                  "Platform Engineer",
                  2000,
                  "SRE / Infra Lead",
                  2000,
                ]}
                repeat={Infinity}
                speed={50}
                className="text-cyan-400"
              />
              <span className="terminal-cursor" />
            </div>
          </motion.div>

          {/* Bio */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-muted-foreground text-lg leading-relaxed max-w-xl"
          >
            {PERSONAL.bio}
          </motion.p>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-wrap gap-6"
          >
            {[
              { label: "Years Experience", value: `${PERSONAL.yearsExp}+` },
              { label: "Certs Earned", value: "8" },
              { label: "Services Migrated", value: "200+" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-display font-bold text-3xl text-white">{stat.value}</div>
                <div className="text-xs text-muted-foreground mt-0.5 font-mono">{stat.label}</div>
              </div>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="flex flex-wrap gap-4"
          >
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 px-6 py-3 bg-cyan-500 text-background font-semibold rounded-xl hover:bg-cyan-400 transition-all duration-200 shadow-lg shadow-cyan-500/25"
            >
              Get in Touch
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3 glass glass-hover font-semibold rounded-xl text-foreground"
            >
              View Projects
            </a>
          </motion.div>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="flex items-center gap-4"
          >
            {[
              { icon: Github, href: PERSONAL.github, label: "GitHub" },
              { icon: Linkedin, href: PERSONAL.linkedin, label: "LinkedIn" },
              { icon: Twitter, href: PERSONAL.twitter, label: "Twitter" },
              { icon: Mail, href: `mailto:${PERSONAL.email}`, label: "Email" },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="p-2.5 rounded-lg text-muted-foreground hover:text-cyan-400 hover:bg-cyan-400/10 transition-all duration-200"
              >
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </motion.div>
        </div>

        {/* Right — Animated Terminal */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative"
        >
          {/* Terminal window */}
          <div className="relative rounded-2xl overflow-hidden border border-white/[0.08] shadow-2xl shadow-black/50">
            {/* Terminal header */}
            <div className="flex items-center gap-2 px-4 py-3 bg-[#1a1a1a] border-b border-white/[0.06]">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
              </div>
              <span className="ml-2 text-xs text-muted-foreground font-mono">alex@prod-cluster ~ </span>
              <div className="ml-auto flex items-center gap-2">
                <span className="text-xs text-muted-foreground font-mono">bash</span>
              </div>
            </div>

            {/* Terminal body */}
            <div
              ref={terminalRef}
              className="bg-[#0d1117] p-6 font-mono text-sm leading-6 h-[380px] overflow-y-auto"
              style={{ scrollbarWidth: "none" }}
            >
              {terminalLines.map((line, i) => (
                <div key={i} className="whitespace-pre-wrap break-all">
                  {line.text === "" ? (
                    <br />
                  ) : (
                    <span
                      style={{
                        color: line.color || (line.dim ? "#6b7280" : "#e2e8f0"),
                      }}
                    >
                      {line.text}
                    </span>
                  )}
                </div>
              ))}
              {terminalLines.length > 0 && <span className="terminal-cursor" />}
            </div>
          </div>

          {/* Floating badges */}
          <motion.div
            animate={{ y: [-5, 5, -5] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className="absolute -top-4 -right-4 glass px-3 py-2 rounded-xl border border-cyan-400/20"
          >
            <span className="text-xs font-mono text-cyan-400">✓ 99.99% uptime</span>
          </motion.div>
          <motion.div
            animate={{ y: [5, -5, 5] }}
            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
            className="absolute -bottom-4 -left-4 glass px-3 py-2 rounded-xl border border-emerald-400/20"
          >
            <span className="text-xs font-mono text-emerald-400">🚀 Deploy: success</span>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-muted-foreground font-mono">scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <ChevronDown className="w-4 h-4 text-muted-foreground" />
        </motion.div>
      </motion.div>
    </section>
  );
}
