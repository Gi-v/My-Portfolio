"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Twitter, Send, MapPin, Download, CheckCircle } from "lucide-react";
import { useScrollAnimation, fadeUp, staggerContainer } from "@/hooks/useScrollAnimation";
import { PERSONAL } from "@/lib/data";
import { toast } from "sonner";

const CONTACT_LINKS = [
  { icon: Mail, label: "Email", value: PERSONAL.email, href: `mailto:${PERSONAL.email}`, color: "#22d3ee" },
  { icon: Github, label: "GitHub", value: "github.com/alexchen-dev", href: PERSONAL.github, color: "#a78bfa" },
  { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/alexchen-devops", href: PERSONAL.linkedin, color: "#0077b5" },
  { icon: Twitter, label: "Twitter", value: "@alexchen_dev", href: PERSONAL.twitter, color: "#1da1f2" },
];

export default function ContactSection() {
  const { ref, controls } = useScrollAnimation();
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    // Simulate form submission
    await new Promise((r) => setTimeout(r, 1500));
    setSending(false);
    setSent(true);
    toast.success("Message sent! I'll get back to you within 24 hours.");
    setForm({ name: "", email: "", subject: "", message: "" });
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <section id="contact" className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-radial-glow opacity-30" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={fadeUp}
          className="text-center mb-16 space-y-4"
        >
          <div className="font-mono text-sm text-cyan-400 tracking-widest uppercase">Let&apos;s Connect</div>
          <h2 className="font-display font-bold text-4xl sm:text-5xl text-white">Get In Touch</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Open to discussing new opportunities, architecture reviews, or just talking shop about DevOps and cloud infrastructure.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={controls}
          variants={staggerContainer}
          className="grid lg:grid-cols-2 gap-10"
        >
          {/* Left — Info + Links */}
          <motion.div variants={fadeUp} className="space-y-6">
            {/* Availability */}
            <div className="glass rounded-2xl p-6 border border-emerald-400/20">
              <div className="flex items-center gap-3 mb-3">
                <span className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse" />
                <span className="font-display font-semibold text-white">Currently Available</span>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Open to Staff / Principal DevOps, Platform Engineering, and SRE roles. Particularly interested in companies with complex distributed systems and a strong engineering culture.
              </p>
            </div>

            {/* Location */}
            <div className="glass rounded-2xl p-5 flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center">
                <MapPin className="w-5 h-5 text-cyan-400" />
              </div>
              <div>
                <div className="text-sm font-medium text-white">{PERSONAL.location}</div>
                <div className="text-xs text-muted-foreground">Open to remote & hybrid</div>
              </div>
            </div>

            {/* Social Links */}
            <div className="space-y-3">
              {CONTACT_LINKS.map(({ icon: Icon, label, value, href, color }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass glass-hover rounded-xl p-4 flex items-center gap-4 group"
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: `${color}15`, border: `1px solid ${color}25` }}
                  >
                    <Icon className="w-4.5 h-4.5" style={{ color }} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-xs text-muted-foreground">{label}</div>
                    <div className="text-sm text-foreground font-medium truncate group-hover:text-cyan-400 transition-colors">{value}</div>
                  </div>
                </a>
              ))}
            </div>

            {/* Resume Download */}
            <a
              href="/resume.pdf"
              download
              className="flex items-center justify-center gap-2 w-full py-3.5 px-6 rounded-xl border border-cyan-400/20 bg-cyan-400/5 hover:bg-cyan-400/10 text-cyan-400 font-medium text-sm transition-all duration-200 group"
            >
              <Download className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
              Download Resume (PDF)
            </a>
          </motion.div>

          {/* Right — Contact Form */}
          <motion.div variants={fadeUp}>
            <form onSubmit={handleSubmit} className="glass rounded-2xl p-6 sm:p-8 space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-muted-foreground">Name *</label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Jane Smith"
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.08] text-foreground placeholder:text-muted-foreground/50 text-sm focus:outline-none focus:border-cyan-400/40 focus:bg-white/[0.06] transition-all"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-muted-foreground">Email *</label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="jane@company.com"
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.08] text-foreground placeholder:text-muted-foreground/50 text-sm focus:outline-none focus:border-cyan-400/40 focus:bg-white/[0.06] transition-all"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-mono text-muted-foreground">Subject *</label>
                <input
                  type="text"
                  required
                  value={form.subject}
                  onChange={(e) => setForm({ ...form, subject: e.target.value })}
                  placeholder="Staff DevOps Engineer opportunity at Acme Corp"
                  className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.08] text-foreground placeholder:text-muted-foreground/50 text-sm focus:outline-none focus:border-cyan-400/40 focus:bg-white/[0.06] transition-all"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-mono text-muted-foreground">Message *</label>
                <textarea
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Tell me about the role, team, and what you're building..."
                  className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.08] text-foreground placeholder:text-muted-foreground/50 text-sm focus:outline-none focus:border-cyan-400/40 focus:bg-white/[0.06] transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={sending || sent}
                className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-background font-semibold text-sm transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed shadow-lg shadow-cyan-500/25"
              >
                {sent ? (
                  <><CheckCircle className="w-4 h-4" /> Message Sent!</>
                ) : sending ? (
                  <><div className="w-4 h-4 border-2 border-background/30 border-t-background rounded-full animate-spin" /> Sending...</>
                ) : (
                  <><Send className="w-4 h-4" /> Send Message</>
                )}
              </button>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
