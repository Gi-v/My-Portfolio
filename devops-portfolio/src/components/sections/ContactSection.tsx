"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Twitter, Send, MapPin, Download, CheckCircle } from "lucide-react";
import { useScrollAnimation, fadeUp, staggerContainer } from "@/hooks/useScrollAnimation";
import { PERSONAL } from "@/lib/data";
import { toast } from "sonner";

const CONTACT_LINKS = [
  { icon: Mail, label: "Email", value: PERSONAL.email, href: `mailto:${PERSONAL.email}`, color: "#2563eb" },
  { icon: Github, label: "GitHub", value: "github.com/alexchen-dev", href: PERSONAL.github, color: "#0f172a" },
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
    await new Promise((r) => setTimeout(r, 1500));
    setSending(false); setSent(true);
    toast.success("Message sent! I'll get back to you within 24 hours.");
    setForm({ name: "", email: "", subject: "", message: "" });
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <section id="contact" className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div ref={ref} initial="hidden" animate={controls} variants={fadeUp} className="text-center mb-16 space-y-4">
          <div className="font-mono text-sm text-blue-600 tracking-widest uppercase">Let&apos;s Connect</div>
          <h2 className="font-display font-bold text-4xl sm:text-5xl text-slate-900">Get In Touch</h2>
          <p className="text-slate-500 max-w-xl mx-auto">Open to discussing new opportunities, architecture reviews, or just talking shop about DevOps and cloud infrastructure.</p>
        </motion.div>

        <motion.div initial="hidden" animate={controls} variants={staggerContainer} className="grid lg:grid-cols-2 gap-10">
          <motion.div variants={fadeUp} className="space-y-4">
            <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <span className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
                <span className="font-display font-semibold text-slate-900">Currently Available</span>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed">Open to Staff / Principal DevOps, Platform Engineering, and SRE roles. Particularly interested in companies with complex distributed systems and a strong engineering culture.</p>
            </div>

            <div className="glass rounded-2xl p-5 flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center">
                <MapPin className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <div className="text-sm font-medium text-slate-900">{PERSONAL.location}</div>
                <div className="text-xs text-slate-500">Open to remote & hybrid</div>
              </div>
            </div>

            {CONTACT_LINKS.map(({ icon: Icon, label, value, href, color }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer" className="glass glass-hover rounded-xl p-4 flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: `${color}10`, border: `1px solid ${color}20` }}>
                  <Icon className="w-4 h-4" style={{ color }} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-xs text-slate-400">{label}</div>
                  <div className="text-sm text-slate-700 font-medium truncate group-hover:text-blue-600 transition-colors">{value}</div>
                </div>
              </a>
            ))}

            <a href="/resume.pdf" download className="flex items-center justify-center gap-2 w-full py-3.5 px-6 rounded-xl border border-blue-200 bg-blue-50 hover:bg-blue-100 text-blue-700 font-medium text-sm transition-all group">
              <Download className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />Download Resume (PDF)
            </a>
          </motion.div>

          <motion.div variants={fadeUp}>
            <form onSubmit={handleSubmit} className="glass rounded-2xl p-6 sm:p-8 space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                {[{ key: "name", label: "Name", placeholder: "Jane Smith", type: "text" }, { key: "email", label: "Email", placeholder: "jane@company.com", type: "email" }].map((f) => (
                  <div key={f.key} className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-500">{f.label} *</label>
                    <input type={f.type} required value={form[f.key as keyof typeof form]} onChange={(e) => setForm({ ...form, [f.key]: e.target.value })} placeholder={f.placeholder}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder:text-slate-400 text-sm focus:outline-none focus:border-blue-400 focus:bg-white transition-all" />
                  </div>
                ))}
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-mono text-slate-500">Subject *</label>
                <input type="text" required value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })} placeholder="Staff DevOps Engineer opportunity at Acme Corp"
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder:text-slate-400 text-sm focus:outline-none focus:border-blue-400 focus:bg-white transition-all" />
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-mono text-slate-500">Message *</label>
                <textarea required rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="Tell me about the role, team, and what you're building..."
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder:text-slate-400 text-sm focus:outline-none focus:border-blue-400 focus:bg-white transition-all resize-none" />
              </div>
              <button type="submit" disabled={sending || sent}
                className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm transition-all shadow-md shadow-blue-200 disabled:opacity-70">
                {sent ? <><CheckCircle className="w-4 h-4" />Message Sent!</> : sending ? <><div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />Sending...</> : <><Send className="w-4 h-4" />Send Message</>}
              </button>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
