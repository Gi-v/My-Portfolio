"use client";
import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, ArrowRight, Mail, ChevronDown } from "lucide-react";
import { PERSONAL, TERMINAL_LINES } from "@/lib/data";
import { TypeAnimation } from "react-type-animation";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";

// SplitText is Club GSAP — use a manual char split fallback
function splitChars(el: HTMLElement) {
  const text = el.innerText;
  el.innerHTML = "";
  return text.split("").map((ch) => {
    const span = document.createElement("span");
    span.textContent = ch === " " ? "\u00A0" : ch;
    span.style.display = "inline-block";
    span.style.willChange = "transform, opacity";
    el.appendChild(span);
    return span;
  });
}

export default function HeroSection() {
  const [terminalLines, setTerminalLines] = useState<Array<{ text: string; dim?: boolean; color?: string }>>([]);
  const terminalRef = useRef<HTMLDivElement>(null);

  // GSAP refs
  const sectionRef = useRef<HTMLElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const nameRef = useRef<HTMLHeadingElement>(null);
  const typeRef = useRef<HTMLDivElement>(null);
  const bioRef = useRef<HTMLParagraphElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const socialsRef = useRef<HTMLDivElement>(null);
  const terminalCardRef = useRef<HTMLDivElement>(null);
  const badge1Ref = useRef<HTMLDivElement>(null);
  const badge2Ref = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Terminal animation
  useEffect(() => {
    const timeouts: ReturnType<typeof setTimeout>[] = [];
    TERMINAL_LINES.forEach((line, i) => {
      const t = setTimeout(() => {
        setTerminalLines((prev) => [...prev, { text: line.text, dim: line.dim, color: line.color }]);
        if (terminalRef.current) terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
      }, line.delay + i * 50);
      timeouts.push(t);
    });
    return () => timeouts.forEach(clearTimeout);
  }, []);

  // GSAP cinematic entrance
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

      // 1. Section fade in
      tl.fromTo(sectionRef.current, { opacity: 0 }, { opacity: 1, duration: 0.4 });

      // 2. Name — char-by-char stagger
      if (nameRef.current) {
        const chars = splitChars(nameRef.current);
        tl.fromTo(
          chars,
          { y: 80, opacity: 0, rotateX: -60 },
          { y: 0, opacity: 1, rotateX: 0, duration: 1, stagger: 0.03, ease: "power3.out" },
          "-=0.2"
        );
      }

      // 3. Badge slides in from left
      tl.fromTo(badgeRef.current, { x: -40, opacity: 0 }, { x: 0, opacity: 1, duration: 0.6 }, "-=0.6");

      // 4. Type line fades up
      tl.fromTo(typeRef.current, { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5 }, "-=0.3");

      // 5. Bio
      tl.fromTo(bioRef.current, { y: 24, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6 }, "-=0.2");

      // 6. Stats count up feel — slide in
      tl.fromTo(
        statsRef.current?.children ? Array.from(statsRef.current.children) : [],
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, stagger: 0.12 },
        "-=0.3"
      );

      // 7. CTAs scale in
      tl.fromTo(
        ctaRef.current?.children ? Array.from(ctaRef.current.children) : [],
        { scale: 0.88, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.45, stagger: 0.1, ease: "back.out(1.4)" },
        "-=0.2"
      );

      // 8. Socials fade in staggered
      tl.fromTo(
        socialsRef.current?.children ? Array.from(socialsRef.current.children) : [],
        { y: 12, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.4, stagger: 0.08 },
        "-=0.2"
      );

      // 9. Terminal card — dramatic slide + fade from right
      tl.fromTo(
        terminalCardRef.current,
        { x: 80, opacity: 0, rotateY: 8 },
        { x: 0, opacity: 1, rotateY: 0, duration: 1.1, ease: "power3.out" },
        0.3 // start near beginning for parallel feel
      );

      // 10. Floating badges pop in with spring
      tl.fromTo(
        [badge1Ref.current, badge2Ref.current],
        { scale: 0, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.5, stagger: 0.15, ease: "back.out(2)" },
        "-=0.4"
      );

      // 11. Scroll indicator
      tl.fromTo(scrollRef.current, { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: 0.5 }, "-=0.1");
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Continuous float animation for terminal badges
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(badge1Ref.current, {
        y: -8, duration: 3, ease: "sine.inOut", yoyo: true, repeat: -1, delay: 1.5,
      });
      gsap.to(badge2Ref.current, {
        y: 8, duration: 3.5, ease: "sine.inOut", yoyo: true, repeat: -1, delay: 1.7,
      });
      // Subtle scroll indicator bob
      gsap.to(scrollRef.current?.querySelector(".scroll-arrow"), {
        y: 6, duration: 1.2, ease: "sine.inOut", yoyo: true, repeat: -1,
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20 overflow-hidden"
      style={{ opacity: 0 }} // GSAP will reveal
    >
      {/* Subtle background blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] rounded-full bg-blue-100/60 blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-violet-100/50 blur-[100px]" />
      </div>

      <div className="relative max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 lg:gap-16 items-center py-16">
        {/* Left */}
        <div className="space-y-8" style={{ perspective: "1000px" }}>
          {/* Badge */}
          <div ref={badgeRef} style={{ opacity: 0 }}>
            {PERSONAL.available && (
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-mono text-emerald-700 bg-emerald-50 border border-emerald-200">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                Open to new opportunities
              </span>
            )}
          </div>

          {/* Name + type */}
          <div className="space-y-4">
            <h1
              ref={nameRef}
              className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight text-slate-900"
              style={{ perspective: "600px" }}
            >
              {PERSONAL.name}
            </h1>
            <div ref={typeRef} className="font-mono text-lg sm:text-xl text-blue-600 flex items-center gap-2" style={{ opacity: 0 }}>
              <span className="text-slate-400">~/</span>
              <TypeAnimation
                sequence={["DevOps Engineer", 2000, "Cloud Architect", 2000, "Platform Engineer", 2000, "SRE / Infra Lead", 2000]}
                repeat={Infinity}
                speed={50}
              />
              <span className="terminal-cursor" />
            </div>
          </div>

          {/* Bio */}
          <p ref={bioRef} className="text-slate-600 text-lg leading-relaxed max-w-xl" style={{ opacity: 0 }}>
            {PERSONAL.bio}
          </p>

          {/* Stats */}
          <div ref={statsRef} className="flex flex-wrap gap-8">
            {[
              { label: "Years Experience", value: `${PERSONAL.yearsExp}+` },
              { label: "Certs Earned", value: "8" },
              { label: "Services Migrated", value: "200+" },
            ].map((stat) => (
              <div key={stat.label} style={{ opacity: 0 }}>
                <div className="font-display font-bold text-3xl text-slate-900">{stat.value}</div>
                <div className="text-xs text-slate-500 mt-0.5 font-mono">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div ref={ctaRef} className="flex flex-wrap gap-4">
            <a href="#contact" className="group inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-all shadow-md shadow-blue-200" style={{ opacity: 0 }}>
              Get in Touch
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#projects" className="inline-flex items-center gap-2 px-6 py-3 bg-white border border-slate-200 font-semibold rounded-xl text-slate-700 hover:border-blue-200 hover:bg-blue-50 transition-all shadow-sm" style={{ opacity: 0 }}>
              View Projects
            </a>
          </div>

          {/* Socials */}
          <div ref={socialsRef} className="flex items-center gap-3">
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
                style={{ opacity: 0 }}
                className="p-2.5 rounded-lg text-slate-400 hover:text-blue-600 hover:bg-blue-50 border border-transparent hover:border-blue-100 transition-all"
              >
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>

        {/* Right — Terminal */}
        <div ref={terminalCardRef} className="relative" style={{ opacity: 0 }}>
          <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-2xl shadow-slate-200/80">
            <div className="flex items-center gap-2 px-4 py-3 bg-slate-800 border-b border-slate-700">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
              </div>
              <span className="ml-2 text-xs text-slate-400 font-mono">alex@prod-cluster ~ bash</span>
            </div>
            <div
              ref={terminalRef}
              className="bg-slate-900 p-6 font-mono text-sm leading-6 h-[380px] overflow-y-auto"
              style={{ scrollbarWidth: "none" }}
            >
              {terminalLines.map((line, i) => (
                <div key={i} className="whitespace-pre-wrap break-all">
                  {line.text === "" ? <br /> : (
                    <span style={{ color: line.color || (line.dim ? "#6b7280" : "#e2e8f0") }}>
                      {line.text}
                    </span>
                  )}
                </div>
              ))}
              {terminalLines.length > 0 && <span className="terminal-cursor" />}
            </div>
          </div>

          {/* Floating badges — GSAP handles animation */}
          <div ref={badge1Ref} className="absolute -top-4 -right-4 bg-white border border-slate-200 shadow-lg px-3 py-2 rounded-xl" style={{ opacity: 0 }}>
            <span className="text-xs font-mono text-emerald-600">✓ 99.99% uptime</span>
          </div>
          <div ref={badge2Ref} className="absolute -bottom-4 -left-4 bg-white border border-slate-200 shadow-lg px-3 py-2 rounded-xl" style={{ opacity: 0 }}>
            <span className="text-xs font-mono text-blue-600">🚀 Deploy: success</span>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div ref={scrollRef} className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2" style={{ opacity: 0 }}>
        <span className="text-xs text-slate-400 font-mono">scroll</span>
        <ChevronDown className="scroll-arrow w-4 h-4 text-slate-400" />
      </div>
    </section>
  );
}
