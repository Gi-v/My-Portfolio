"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Mail, Github, Linkedin, Twitter, Send, MapPin, Download, CheckCircle } from "lucide-react";
import { PERSONAL, SOCIAL } from "@/lib/config";
import { toast } from "sonner";

// TODO: EDIT HERE — wire up a real email service (Resend, SendGrid, etc.)
// Add your API route at src/app/api/contact/route.ts and POST to it from handleSubmit

export default function ContactSection() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    // TODO: Replace with real API call:
    // await fetch("/api/contact", { method:"POST", body: JSON.stringify(form) })
    await new Promise(r => setTimeout(r, 1400));
    setSending(false); setSent(true);
    toast.success("Message sent! I'll reply within 24 hours.");
    setForm({ name: "", email: "", subject: "", message: "" });
    setTimeout(() => setSent(false), 4000);
  };

  const links = [
    { icon: Mail,     label: "Email",    value: PERSONAL.email,                  href: `mailto:${PERSONAL.email}`,  color: "#2563eb" },
    { icon: Github,   label: "GitHub",   value: "github.com/Gi-v",               href: SOCIAL.github,               color: "#0f172a" },
    { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/hareem-ahmad-8a7126371", href: SOCIAL.linkedin,           color: "#0077b5" },
  ];

  const field = "w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder:text-slate-400 text-sm focus:outline-none focus:border-blue-400 focus:bg-white transition-all";

  return (
    <section id="contact" className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div ref={ref} initial={{ opacity:0, y:20 }} animate={inView?{opacity:1,y:0}:{}}
          transition={{ duration:0.6 }} className="text-center mb-16">
          <div className="section-label mb-3">Let&apos;s Connect</div>
          <h2 className="section-title text-4xl sm:text-5xl mb-4">Get In Touch</h2>
          <p className="text-slate-500 max-w-xl mx-auto">
            Open to collaboration, internship opportunities, product engineering work, and research-driven software projects.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Left — links */}
          <motion.div initial={{ opacity:0, x:-30 }} animate={inView?{opacity:1,x:0}:{}}
            transition={{ duration:0.65, ease:[0.22,1,0.36,1] }} className="space-y-4">

            {/* Location */}
            <div className="card p-5 flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <div className="text-sm font-semibold text-slate-900">{PERSONAL.location}</div>
                <div className="text-xs text-slate-400">Open to remote, hybrid, and collaborative opportunities</div>
              </div>
            </div>

            {links.map(({ icon: Icon, label, value, href, color }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                className="card card-hover p-4 flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background:`${color}0f`, border:`1px solid ${color}18` }}>
                  <Icon className="w-4 h-4" style={{ color }} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-xs text-slate-400">{label}</div>
                  <div className="text-sm font-medium text-slate-700 truncate group-hover:text-blue-600 transition-colors">{value}</div>
                </div>
              </a>
            ))}

            {/* Resume download */}
            {/* TODO: Place resume at /public/resume.pdf */}
            <a href={SOCIAL.resume} download
              className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl border border-blue-200 bg-blue-50 hover:bg-blue-100 text-blue-700 font-semibold text-sm transition-all group">
              <Download className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
              Download Resume (PDF)
            </a>
          </motion.div>

          {/* Right — form */}
          <motion.div initial={{ opacity:0, x:30 }} animate={inView?{opacity:1,x:0}:{}}
            transition={{ duration:0.65, ease:[0.22,1,0.36,1] }}>
            <form onSubmit={handleSubmit} className="card p-6 sm:p-8 space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-slate-400">Name *</label>
                  <input type="text" required placeholder="Jane Smith" value={form.name}
                    onChange={e => setForm({...form, name:e.target.value})} className={field} />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-slate-400">Email *</label>
                  <input type="email" required placeholder="jane@company.com" value={form.email}
                    onChange={e => setForm({...form, email:e.target.value})} className={field} />
                </div>
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-mono text-slate-400">Subject *</label>
                <input type="text" required placeholder="Staff DevOps Engineer opportunity" value={form.subject}
                  onChange={e => setForm({...form, subject:e.target.value})} className={field} />
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-mono text-slate-400">Message *</label>
                <textarea required rows={5} placeholder="Tell me about the role and team..." value={form.message}
                  onChange={e => setForm({...form, message:e.target.value})} className={`${field} resize-none`} />
              </div>
              <button type="submit" disabled={sending || sent}
                className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm transition-all shadow-md shadow-blue-200/60 disabled:opacity-60">
                {sent
                  ? <><CheckCircle className="w-4 h-4" />Message Sent!</>
                  : sending
                  ? <><div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />Sending...</>
                  : <><Send className="w-4 h-4" />Send Message</>}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
