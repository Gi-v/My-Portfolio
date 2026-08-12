"use client";
import { useState, useEffect } from "react";
import { GITHUB_USERNAME, GITHUB_API_BASE } from "@/lib/config";

export interface GitHubStats { repos: number; stars: number; followers: number; contributions: number; }
export interface GitHubRepo { name: string; description: string; stars: number; forks: number; language: string; url: string; }

const FB_STATS: GitHubStats = { repos: 42, stars: 2900, followers: 738, contributions: 1847 };
const FB_REPOS: GitHubRepo[] = [
  { name: "k8s-gitops-platform", description: "Production multi-cluster GitOps platform", stars: 847, forks: 124, language: "HCL", url: "#" },
  { name: "aws-landing-zone", description: "Enterprise AWS multi-account setup", stars: 623, forks: 98, language: "HCL", url: "#" },
  { name: "zero-trust-cicd", description: "SLSA L3 compliant CI/CD pipeline", stars: 512, forks: 76, language: "YAML", url: "#" },
  { name: "otel-observability", description: "Full-stack OpenTelemetry platform", stars: 389, forks: 55, language: "Python", url: "#" },
  { name: "k8s-cost-optimizer", description: "Kubernetes cost optimization tool", stars: 298, forks: 43, language: "Python", url: "#" },
  { name: "chaos-framework", description: "Chaos engineering framework", stars: 231, forks: 38, language: "Go", url: "#" },
];
export const LANG_COLORS: Record<string,string> = { HCL:"#7B42BC", Python:"#3776AB", Go:"#00ADD8", YAML:"#2563eb", TypeScript:"#3178C6" };

export function useGitHubStats() {
  const [data, setData] = useState<GitHubStats>(FB_STATS);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const token = process.env.NEXT_PUBLIC_GITHUB_TOKEN;
    const h: Record<string,string> = { Accept:"application/vnd.github.v3+json" };
    if (token) h["Authorization"] = `Bearer ${token}`;
    fetch(`${GITHUB_API_BASE}/users/${GITHUB_USERNAME}`, { headers: h })
      .then(r => r.json()).then(u => setData({ ...FB_STATS, repos: u.public_repos || FB_STATS.repos, followers: u.followers || FB_STATS.followers }))
      .catch(() => {}).finally(() => setLoading(false));
  }, []);
  return { data, loading };
}

export function useGitHubRepos() {
  const [data, setData] = useState<GitHubRepo[]>(FB_REPOS);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const token = process.env.NEXT_PUBLIC_GITHUB_TOKEN;
    const h: Record<string,string> = { Accept:"application/vnd.github.v3+json" };
    if (token) h["Authorization"] = `Bearer ${token}`;
    fetch(`${GITHUB_API_BASE}/users/${GITHUB_USERNAME}/repos?sort=stars&per_page=6`, { headers: h })
      .then(r => r.json())
      .then((repos: Array<Record<string,unknown>>) => {
        if (!Array.isArray(repos)) return;
        setData(repos.slice(0,6).map(r => ({ name:r.name as string, description:(r.description as string)||"", stars:(r.stargazers_count as number)||0, forks:(r.forks_count as number)||0, language:(r.language as string)||"Other", url:(r.html_url as string)||"#" })));
      }).catch(() => {}).finally(() => setLoading(false));
  }, []);
  return { data, loading };
}
