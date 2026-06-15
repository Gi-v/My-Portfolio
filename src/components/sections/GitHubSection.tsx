"use client";
import { useMemo } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Github, Star, GitFork, Code2, Activity, Users } from "lucide-react";
import { useGitHubStats, useGitHubRepos, LANG_COLORS } from "@/lib/hooks/useGitHub";
import { SOCIAL } from "@/lib/config";

// TODO: EDIT HERE — update GITHUB_USERNAME in lib/config.ts for live data

function ContributionGraph() {
  const cells = useMemo(() => {
    let seed = 42;
    const rand = () => { seed = (seed*16807)%2147483647; return (seed-1)/2147483646; };
    return Array.from({length:52}, () => Array.from({length:7}, (_,d) => {
      const w = d<5?1.5:0.4; return Math.floor(rand()*w*(rand()>0.85?3:1)*7);
    }));
  }, []);
  const color = (v:number) => v===0?"#f1f5f9":v<3?"#bfdbfe":v<6?"#60a5fa":v<9?"#2563eb":"#1d4ed8";
  return (
    <div className="overflow-x-auto pb-2">
      <div className="flex gap-[3px] min-w-max">
        {cells.map((wk,wi) => (
          <div key={wi} className="flex flex-col gap-[3px]">
            {wk.map((v,di) => <div key={di} className="w-3 h-3 rounded-sm hover:scale-125 transition-transform cursor-default" style={{ background:color(v) }} title={`${v} contributions`} />)}
          </div>
        ))}
      </div>
    </div>
  );
}

function Skeleton({ className="" }: { className?: string }) {
  return <div className={`shimmer rounded-lg ${className}`} />;
}

export default function GitHubSection() {
  const { ref, inView } = useInView({ threshold:0.1, triggerOnce:true });
  const { data:stats, loading:sl } = useGitHubStats();
  const { data:repos, loading:rl } = useGitHubRepos();

  const statCards = [
    { label:"Public Repos",    value:stats.repos,            icon:Code2,   color:"#2563eb" },
    { label:"Total Stars",     value:`${(stats.stars/1000).toFixed(1)}K+`, icon:Star, color:"#d97706" },
    { label:"Contributions",   value:stats.contributions.toLocaleString(), icon:Activity, color:"#059669" },
    { label:"Followers",       value:stats.followers,        icon:Users,   color:"#7c3aed" },
  ];

  return (
    <section id="github" className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div ref={ref} initial={{ opacity:0, y:20 }} animate={inView?{opacity:1,y:0}:{}} transition={{ duration:0.6 }} className="text-center mb-16">
          <div className="section-label mb-3">Open Source</div>
          <h2 className="section-title text-4xl sm:text-5xl mb-4">GitHub Activity</h2>
          <p className="text-slate-500 max-w-xl mx-auto">Live stats pulled from the GitHub API. Building in public for the DevOps community.</p>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {statCards.map((s,i) => (
            <motion.div key={s.label} initial={{ opacity:0, y:20 }} animate={inView?{opacity:1,y:0}:{}} transition={{ delay:i*0.07, duration:0.5 }} className="card card-hover p-5 text-center">
              <s.icon className="w-5 h-5 mx-auto mb-2" style={{ color:s.color }} />
              {sl ? <Skeleton className="h-7 w-16 mx-auto mb-1" /> : <div className="font-display font-bold text-2xl text-slate-900">{s.value}</div>}
              <div className="text-xs text-slate-400 font-mono mt-1">{s.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Contribution graph */}
        <div className="card p-6 mb-8">
          <div className="flex items-center justify-between mb-5">
            <div className="flex items-center gap-2 font-display font-semibold text-slate-900">
              <Activity className="w-4 h-4 text-blue-600" />Contribution Activity
            </div>
            <span className="text-xs font-mono text-slate-400">{stats.contributions.toLocaleString()} contributions this year</span>
          </div>
          <ContributionGraph />
          <div className="flex items-center gap-2 mt-3 justify-end">
            <span className="text-xs text-slate-400">Less</span>
            {["#f1f5f9","#bfdbfe","#60a5fa","#2563eb","#1d4ed8"].map((c,i) => <div key={i} className="w-3 h-3 rounded-sm" style={{ background:c }} />)}
            <span className="text-xs text-slate-400">More</span>
          </div>
        </div>

        {/* Repos */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {(rl ? Array(6).fill(null) : repos).map((r, i) => (
            <motion.div key={i} initial={{ opacity:0, y:20 }} animate={inView?{opacity:1,y:0}:{}} transition={{ delay:0.3+i*0.06, duration:0.5 }}>
              {rl ? (
                <div className="card p-5 space-y-3"><Skeleton className="h-4 w-32" /><Skeleton className="h-3 w-full" /><Skeleton className="h-3 w-24" /></div>
              ) : (
                <a href={r!.url} target="_blank" rel="noopener noreferrer" className="card card-hover p-5 flex flex-col gap-3 group block">
                  <div className="flex items-start gap-3">
                    <Github className="w-4 h-4 text-slate-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-mono text-sm text-blue-600 group-hover:text-blue-700 font-medium">{r!.name}</div>
                      <div className="text-xs text-slate-500 mt-1 line-clamp-2 leading-relaxed">{r!.description}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 text-xs text-slate-400">
                    <span className="flex items-center gap-1">
                      <span className="w-2.5 h-2.5 rounded-full" style={{ background: LANG_COLORS[r!.language]||"#94a3b8" }} />{r!.language}
                    </span>
                    <span className="flex items-center gap-1"><Star className="w-3 h-3" />{r!.stars}</span>
                    <span className="flex items-center gap-1"><GitFork className="w-3 h-3" />{r!.forks}</span>
                  </div>
                </a>
              )}
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-8">
          {/* TODO: Update GitHub URL */}
          <a href={SOCIAL.github} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-white border border-slate-200 rounded-xl text-sm font-medium text-slate-600 hover:border-blue-200 hover:text-blue-600 transition-all shadow-sm">
            <Github className="w-4 h-4" />View GitHub Profile
          </a>
        </div>
      </div>
    </section>
  );
}
