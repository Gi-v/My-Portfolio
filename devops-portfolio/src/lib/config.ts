// ============================================================
// PORTFOLIO CONFIGURATION — EDIT ALL VALUES IN THIS FILE
// This is the single source of truth for all personal data.
// ============================================================

// ─── PERSONAL INFO ──────────────────────────────────────────
// TODO: Replace with your real name, title, bio, and location
export const PERSONAL = {
  name: "Alex Chen",
  firstName: "Alex",
  lastName: "Chen",
  title: "Senior DevOps & Cloud Engineer",
  tagline: "Architecting infrastructure that scales to billions.",
  bio: "I build cloud-native platforms, automate everything, and turn infrastructure complexity into developer superpowers. 8+ years across AWS, GCP, Azure, Kubernetes, and beyond.",
  location: "San Francisco, CA",
  email: "alex@alexchen.dev",        // TODO: Your email
  available: false,                   // TODO: Set true if open to work — controls badge visibility
  yearsExp: 8,
};

// ─── SOCIAL LINKS ───────────────────────────────────────────
// TODO: Replace all URLs with your real profiles
export const SOCIAL = {
  github: "https://github.com/alexchen-dev",       // TODO: Your GitHub
  linkedin: "https://linkedin.com/in/alexchen-devops", // TODO: Your LinkedIn
  twitter: "https://twitter.com/alexchen_dev",    // TODO: Your Twitter/X
  devto: "https://dev.to/alexchen-dev",            // TODO: Your Dev.to
  resume: "/resume.pdf",                           // TODO: Drop resume.pdf in /public
};

// ─── PROFILE IMAGE ──────────────────────────────────────────
// TODO: Drop your photo at /public/profile.jpg and update this path
export const PROFILE_IMAGE = "/profile.jpg";

// ─── GITHUB INTEGRATION ─────────────────────────────────────
// TODO: Add your GitHub username (used for live stats API)
export const GITHUB_USERNAME = "alexchen-dev";
// TODO: (Optional) Add a GitHub token in .env.local as NEXT_PUBLIC_GITHUB_TOKEN
// for higher API rate limits. Never commit the token directly here.
export const GITHUB_API_BASE = "https://api.github.com";

// ─── NAVIGATION ─────────────────────────────────────────────
export const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Architecture", href: "#architecture" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
];

// ─── HERO STATS ─────────────────────────────────────────────
// TODO: Update with your real numbers
export const HERO_STATS = [
  { value: "8+", label: "Years" },
  { value: "200+", label: "Services" },
  { value: "5M+", label: "Cost Saved" },
  { value: "99.99%", label: "Uptime SLA" },
];

// ─── HERO TERMINAL LINES ────────────────────────────────────
// TODO: Customize these commands to reflect your work
export const TERMINAL_LINES = [
  { text: "$ kubectl get nodes -o wide", delay: 0 },
  { text: "node-prod-1a   Ready   master   42d   v1.29.0", delay: 600, dim: true },
  { text: "node-prod-1b   Ready   worker   42d   v1.29.0", delay: 900, dim: true },
  { text: "", delay: 1200 },
  { text: "$ terraform apply --auto-approve", delay: 1400 },
  { text: "Apply complete! 12 added, 3 changed, 0 destroyed.", delay: 2800, color: "#22c55e", dim: true },
  { text: "", delay: 3000 },
  { text: "$ argocd app sync production --prune", delay: 3200 },
  { text: "✓  deployment/api   Synced   Healthy", delay: 4200, color: "#22c55e", dim: true },
];

// ─── EXPERIENCE ─────────────────────────────────────────────
// TODO: Replace with your real work history
// Keep descriptions to 1–2 lines max — brevity = professionalism
export const EXPERIENCE = [
  {
    company: "Stripe",
    role: "Staff DevOps Engineer",
    period: "2022 – Present",
    location: "San Francisco, CA",
    color: "#635BFF",
    highlights: [
      "Led Kubernetes migration of 200+ microservices, cutting infra costs 40%",
      "Built zero-downtime blue-green pipeline processing $1B+/day in transactions",
      "Reduced MTTR 45 min → 8 min via AIOps alerting & runbook automation",
    ],
    metrics: [{ v: "40%", l: "Cost Down" }, { v: "200+", l: "Services" }, { v: "99.99%", l: "Uptime" }],
  },
  {
    company: "Databricks",
    role: "Senior Platform Engineer",
    period: "2020 – 2022",
    location: "San Francisco, CA",
    color: "#FF3621",
    highlights: [
      "Architected multi-cloud Terraform modules across 50+ engineering teams",
      "GitOps with ArgoCD for 150+ K8s apps across 5 clusters",
      "Observability platform ingesting 2TB/day of metrics, logs, traces",
    ],
    metrics: [{ v: "50+", l: "Teams" }, { v: "150+", l: "K8s Apps" }, { v: "2TB", l: "Daily" }],
  },
  {
    company: "Cloudflare",
    role: "DevOps Engineer",
    period: "2018 – 2020",
    location: "San Francisco, CA",
    color: "#F38020",
    highlights: [
      "Managed global edge infra across 200+ PoPs worldwide",
      "Built chaos engineering framework, reducing prod incidents 60%",
      "Automated cert provisioning for 1M+ customer domains",
    ],
    metrics: [{ v: "200+", l: "PoPs" }, { v: "60%", l: "Fewer Incidents" }, { v: "1M+", l: "Domains" }],
  },
  {
    company: "Rackspace",
    role: "Cloud Infrastructure Engineer",
    period: "2016 – 2018",
    location: "Austin, TX",
    color: "#DC3545",
    highlights: [
      "AWS landing zones for Fortune 500 enterprise clients",
      "Ansible playbooks automating OS hardening across 5,000+ servers",
      "Saved clients $2M+ annually through AWS cost optimization",
    ],
    metrics: [{ v: "20+", l: "Clients" }, { v: "5K+", l: "Servers" }, { v: "$2M+", l: "Saved" }],
  },
];

// ─── PROJECTS ───────────────────────────────────────────────
// TODO: Replace with your real projects
export const PROJECTS = [
  {
    title: "K8s Multi-Cluster GitOps",
    description: "Production multi-cluster platform with ArgoCD, Crossplane, and automated policy enforcement across AWS, GCP, and Azure.",
    tags: ["Kubernetes", "ArgoCD", "Terraform", "OPA"],
    color: "#2563eb",
    icon: "cluster",
    metrics: ["5 clusters", "150+ apps", "99.99% uptime"],
    github: "https://github.com/alexchen-dev/k8s-gitops-platform",  // TODO
  },
  {
    title: "AWS Landing Zone",
    description: "Enterprise multi-account AWS setup with Organizations, SSO, GuardDuty, Security Hub, and automated compliance.",
    tags: ["Terraform", "AWS", "GuardDuty", "Config"],
    color: "#7c3aed",
    icon: "terraform",
    metrics: ["50+ accounts", "SOC2", "CIS benchmarked"],
    github: "https://github.com/alexchen-dev/aws-landing-zone",      // TODO
  },
  {
    title: "Zero-Trust CI/CD Pipeline",
    description: "SLSA Level 3 compliant pipeline with SAST, SCA, container scanning, signed artifacts via Sigstore/Cosign.",
    tags: ["GitHub Actions", "Sigstore", "Trivy", "SLSA"],
    color: "#059669",
    icon: "shield",
    metrics: ["SLSA L3", "100% signed", "0 CVE escapes"],
    github: "https://github.com/alexchen-dev/zero-trust-cicd",       // TODO
  },
  {
    title: "Observability Platform",
    description: "Full-stack OpenTelemetry stack with Prometheus, Loki, Tempo, Grafana and automated SLO dashboards.",
    tags: ["OpenTelemetry", "Prometheus", "Grafana", "Loki"],
    color: "#d97706",
    icon: "monitor",
    metrics: ["2TB/day", "P99<100ms", "Auto-SLO"],
    github: "https://github.com/alexchen-dev/otel-observability",    // TODO
  },
  {
    title: "K8s Cost Optimizer",
    description: "Python tool using VPA/HPA recommendations with Spot instance management to cut cluster costs by 35%.",
    tags: ["Python", "Kubernetes", "VPA", "HPA"],
    color: "#db2777",
    icon: "cost",
    metrics: ["35% saved", "Auto-rightsizing", "Spot 80%"],
    github: "https://github.com/alexchen-dev/k8s-cost-optimizer",    // TODO
  },
  {
    title: "Chaos Engineering Framework",
    description: "LitmusChaos-based framework with automated game days, resilience scoring, and Slack incident reporting.",
    tags: ["LitmusChaos", "Python", "Go", "Prometheus"],
    color: "#0891b2",
    icon: "chaos",
    metrics: ["60% fewer incidents", "30+ scenarios", "Auto gamedays"],
    github: "https://github.com/alexchen-dev/chaos-framework",       // TODO
  },
];

// ─── CERTIFICATIONS ─────────────────────────────────────────
// TODO: Add/remove your real certifications
export const CERTIFICATIONS = [
  { name: "AWS Solutions Architect Professional", issuer: "Amazon Web Services", year: "2023", abbr: "AWS", color: "#FF9900" },
  { name: "AWS DevOps Engineer Professional",     issuer: "Amazon Web Services", year: "2022", abbr: "AWS", color: "#FF9900" },
  { name: "Certified Kubernetes Administrator",   issuer: "CNCF",               year: "2023", abbr: "CKA", color: "#326CE5" },
  { name: "CKS — Kubernetes Security Specialist", issuer: "CNCF",               year: "2023", abbr: "CKS", color: "#326CE5" },
  { name: "HashiCorp Terraform Associate",        issuer: "HashiCorp",           year: "2022", abbr: "HCP", color: "#7B42BC" },
  { name: "Azure DevOps Expert",                  issuer: "Microsoft",           year: "2023", abbr: "AZ",  color: "#0078D4" },
  { name: "GCP Professional DevOps Engineer",     issuer: "Google Cloud",        year: "2022", abbr: "GCP", color: "#4285F4" },
  { name: "Certified K8s App Developer (CKAD)",   issuer: "CNCF",               year: "2021", abbr: "CKAD",color: "#326CE5" },
];

// ─── SKILLS / TOOLKIT ───────────────────────────────────────
// TODO: Edit categories and tools to match your actual skill set
export const TOOLKIT = [
  {
    category: "Cloud Platforms",
    color: "#FF9900",
    icon: "☁️",
    tools: ["AWS", "Google Cloud", "Azure", "Cloudflare", "DigitalOcean"],
  },
  {
    category: "Containers & Orchestration",
    color: "#326CE5",
    icon: "⚙️",
    tools: ["Kubernetes", "Docker", "Helm", "ArgoCD", "Flux", "Kustomize"],
  },
  {
    category: "Infrastructure as Code",
    color: "#7B42BC",
    icon: "🏗️",
    tools: ["Terraform", "Pulumi", "Ansible", "CloudFormation", "Crossplane"],
  },
  {
    category: "CI/CD & DevOps",
    color: "#2563eb",
    icon: "🔄",
    tools: ["GitHub Actions", "Jenkins", "GitLab CI", "Tekton", "Atlantis", "ArgoRollouts"],
  },
  {
    category: "Observability",
    color: "#E6522C",
    icon: "📊",
    tools: ["Prometheus", "Grafana", "Datadog", "OpenTelemetry", "Loki", "Jaeger"],
  },
  {
    category: "Security",
    color: "#dc2626",
    icon: "🔒",
    tools: ["Falco", "OPA/Gatekeeper", "Trivy", "Sigstore", "Vault", "SOPS"],
  },
  {
    category: "Backend & Languages",
    color: "#059669",
    icon: "💻",
    tools: ["Python", "Go", "Bash", "TypeScript", "Rust", "Node.js"],
  },
  {
    category: "Databases",
    color: "#0891b2",
    icon: "🗄️",
    tools: ["PostgreSQL", "Redis", "MongoDB", "DynamoDB", "CockroachDB", "Elasticsearch"],
  },
  {
    category: "AI / ML Infra",
    color: "#7c3aed",
    icon: "🤖",
    tools: ["Kubeflow", "MLflow", "Ray", "NVIDIA GPU Operator", "Feast", "Seldon"],
  },
  {
    category: "Automation",
    color: "#d97706",
    icon: "⚡",
    tools: ["Ansible", "Terraform CDK", "Python Boto3", "AWS CDK", "Pulumi Automation"],
  },
];

// ─── BLOG POSTS ─────────────────────────────────────────────
// TODO: Replace with real articles or connect to Dev.to/Medium API
// See GitHubSection for live API integration pattern
export const BLOG_POSTS = [
  {
    title: "Building a Production-Grade GitOps Platform with ArgoCD and Crossplane",
    excerpt: "How we replaced 10,000 lines of Helm charts with a declarative, self-healing platform.",
    date: "Dec 10, 2024",
    readTime: "12 min",
    tags: ["GitOps", "ArgoCD", "Crossplane"],
    color: "#2563eb",
    url: "#",  // TODO: Real article URL
  },
  {
    title: "Zero-Trust Kubernetes: Security from the Container Runtime Up",
    excerpt: "Deep dive into zero-trust for K8s using Cilium, OPA Gatekeeper, Falco, and Sigstore.",
    date: "Nov 22, 2024",
    readTime: "15 min",
    tags: ["Security", "Kubernetes", "Zero-Trust"],
    color: "#7c3aed",
    url: "#",  // TODO
  },
  {
    title: "Terraform at Scale: Managing 50+ AWS Accounts Without Going Insane",
    excerpt: "Lessons from managing a Terraform monorepo for 50+ AWS accounts with Atlantis.",
    date: "Oct 15, 2024",
    readTime: "10 min",
    tags: ["Terraform", "AWS", "IaC"],
    color: "#059669",
    url: "#",  // TODO
  },
];
