"use client";

import { motion } from "framer-motion";
import { Github, Star, GitFork, Code2, Activity } from "lucide-react";
import { useScrollAnimation, fadeUp, staggerContainer } from "@/hooks/useScrollAnimation";

const GITHUB_USER = "alexchen-dev";

const REPOS = [
  { name: "k8s-gitops-platform", desc: "Production multi-cluster GitOps platform", stars: 847, forks: 124, lang: "HCL", langColor: "#7B42BC" },
  { name: "aws-landing-zone", desc: "Enterprise AWS multi-account setup with Terraform", stars: 623, forks: 98, lang: "HCL", langColor: "#7B42BC" },
  { name: "zero-trust-cicd", desc: "SLSA L3 compliant CI/CD with supply chain security", stars: 512, forks: 76, lang: "YAML", langColor: "#22d3ee" },
  { name: "otel-observability", desc: "Full-stack OpenTelemetry observability platform", stars: 389, forks: 55, lang: "Python", langColor: "#3776AB" },
  { name: "k8s-cost-optimizer", desc: "Kubernetes cost optimization and rightsizing tool", stars: 298, forks: 43, lang: "Python", langColor: "#3776AB" },
  { name: "chaos-framework", desc: "Custom chaos engineering and game days framework", stars: 231, forks: 38, lang: "Go", langColor: "#00ADD8" },
];

const STATS = [
  { label: "Public Repos", value: "42", icon: Code2, color: "#22d3ee" },
  { label: "Total Stars", value: "2.9K+", icon: Star, color: "#facc15" },
  { label: "Contributions", value: "1,847", icon: Activity, color: "#34d399" },
  { label: "Followers", value: "738", icon: Github, color: "#a78bfa" },
];

// Fake contribution graph
function ContributionGraph() {
  const weeks = 52;
  const days = 7;

  const getColor = (v: number) => {
    if (v === 0) return "rgba(255,255,255,0.04)";
    if (v < 3) return "rgba(34,211,238,0.25)";
    if (v < 6) return "rgba(34,211,238,0.5)";
    if (v < 9) return "rgba(34,211,238,0.75)";
    return "rgba(34,211,238,1)";
  };

  const cells = Array.from({ length: weeks }, (_, w) =>
    Array.from({ length: days }, (_, d) => {
      // Simulate realistic activity with spikes
      const base = Math.random();
      const workday = d < 5 ? 1.5 : 0.4;
      const spike = Math.random() > 0.85 ? 3 : 1;
      return Math.floor(base * workday * spike * 7);
    })
  );

  return (
    <div className="overflow-x-auto">
      <div className="flex gap-[3px] min-w-max">
        {cells.map((week, wi) => (
          <div key={wi} className="flex flex-col gap-[3px]">
            {week.map((val, di) => (
              <div
                key={di}
                className="w-3 h-3 rounded-sm transition-all duration-200 hover:scale-125 cursor-default"
                style={{ background: getColor(val) }}
                title={`${val} contributions`}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function GitHubSection() {
  const { ref, controls } = useScrollAnimation();

  return (
    <section id="github" className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-0 w-[400px] h-[400px] rounded-full bg-violet-500/5 blur-[100px]" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={fadeUp}
          className="text-center mb-16 space-y-4"
        >
          <div className="font-mono text-sm text-cyan-400 tracking-widest uppercase">Open Source</div>
          <h2 className="font-display font-bold text-4xl sm:text-5xl text-white">GitHub Activity</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Active open-source contributor building tools for the DevOps community.
          </p>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial="hidden"
          animate={controls}
          variants={staggerContainer}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8"
        >
          {STATS.map((stat) => (
            <motion.div
              key={stat.label}
              variants={fadeUp}
              className="glass glass-hover rounded-2xl p-5 text-center"
            >
              <stat.icon className="w-5 h-5 mx-auto mb-2" style={{ color: stat.color }} />
              <div className="font-display font-bold text-2xl text-white">{stat.value}</div>
              <div className="text-xs text-muted-foreground mt-1 font-mono">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Contribution graph */}
        <motion.div
          initial="hidden"
          animate={controls}
          variants={fadeUp}
          className="glass rounded-2xl p-6 mb-8"
        >
          <div className="flex items-center justify-between mb-5">
            <h3 className="font-display font-semibold text-white flex items-center gap-2">
              <Activity className="w-4 h-4 text-cyan-400" />
              Contribution Activity
            </h3>
            <span className="text-xs font-mono text-muted-foreground">1,847 contributions in the last year</span>
          </div>
          <ContributionGraph />
          <div className="flex items-center gap-2 mt-3 justify-end">
            <span className="text-xs text-muted-foreground">Less</span>
            {["rgba(255,255,255,0.04)", "rgba(34,211,238,0.25)", "rgba(34,211,238,0.5)", "rgba(34,211,238,0.75)", "rgba(34,211,238,1)"].map((c, i) => (
              <div key={i} className="w-3 h-3 rounded-sm" style={{ background: c }} />
            ))}
            <span className="text-xs text-muted-foreground">More</span>
          </div>
        </motion.div>

        {/* Repo grid */}
        <motion.div
          initial="hidden"
          animate={controls}
          variants={staggerContainer}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {REPOS.map((repo) => (
            <motion.a
              key={repo.name}
              variants={fadeUp}
              href={`https://github.com/${GITHUB_USER}/${repo.name}`}
              target="_blank"
              rel="noopener noreferrer"
              className="glass glass-hover rounded-xl p-5 flex flex-col gap-3 group"
            >
              <div className="flex items-start gap-3">
                <Github className="w-4 h-4 text-muted-foreground mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-mono text-sm text-cyan-400 group-hover:text-cyan-300 transition-colors font-medium">{repo.name}</p>
                  <p className="text-xs text-muted-foreground mt-1 leading-relaxed">{repo.desc}</p>
                </div>
              </div>
              <div className="flex items-center gap-4 text-xs text-muted-foreground">
                <span className="flex items-center gap-1">
                  <span className="w-2.5 h-2.5 rounded-full" style={{ background: repo.langColor }} />
                  {repo.lang}
                </span>
                <span className="flex items-center gap-1"><Star className="w-3 h-3" />{repo.stars}</span>
                <span className="flex items-center gap-1"><GitFork className="w-3 h-3" />{repo.forks}</span>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
