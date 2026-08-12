// ============================================================
// PORTFOLIO CONFIGURATION
// ============================================================

export const PERSONAL = {
  name: "Hareem Ahmad",
  firstName: "Hareem",
  lastName: "Ahmad",
  title: "Software Engineering Student",
  tagline: "Building intelligent, secure, and cloud-native software.",
  bio: "Software Engineering undergraduate at GIKI with hands-on experience across full-stack development, cloud-native infrastructure, DevOps, and applied machine learning. I enjoy turning ambitious ideas into production-ready systems with security, automation, and strong engineering fundamentals.",
  location: "Islamabad, Pakistan",
  email: "u2024217@giki.edu.pk",
  available: true,
  yearsExp: 2,
};

export const SOCIAL = {
  github: "https://github.com/Gi-v",
  linkedin: "https://www.linkedin.com/in/hareem-ahmad-8a7126371/",
  twitter: "",
  devto: "https://github.com/Gi-v",
  resume: "/resume.docx",
};

export const PROFILE_IMAGE = "/profile.jpg";

export const GITHUB_USERNAME = "Gi-v";
export const GITHUB_API_BASE = "https://api.github.com";

export const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Architecture", href: "#architecture" },
  { label: "Publications", href: "#blog" },
  { label: "Contact", href: "#contact" },
];

export const HERO_STATS = [
  { value: "2+", label: "Years" },
  { value: "10+", label: "Projects" },
  { value: "3", label: "Research Papers" },
  { value: "100%", label: "Curiosity" },
];

export const TERMINAL_LINES = [
  { text: "$ git status", delay: 0 },
  { text: "On branch main  •  5 files changed  •  2 new experiments", delay: 600, dim: true },
  { text: "", delay: 1200 },
  { text: "$ docker compose up", delay: 1400 },
  { text: "Services started successfully  •  API ready  •  Frontend live", delay: 2800, color: "#22c55e", dim: true },
  { text: "", delay: 3000 },
  { text: "$ kubectl get pods", delay: 3200 },
  { text: "✓  app-api   Running   ✓  model-worker   Running", delay: 4200, color: "#22c55e", dim: true },
];

export const EXPERIENCE = [
  {
    company: "The Arzens (Private Limited)",
    role: "Application Security & Secure Software Engineering Intern",
    period: "2026 – Present",
    location: "Islamabad, Pakistan",
    color: "#2563eb",
    highlights: [
      "Contributing to real-world cybersecurity projects spanning threat emulation, defensive configurations, and secure engineering workflows.",
      "Helping automate secure software engineering practices and build stronger DevSecOps pipelines for production systems.",
      "Working alongside security mentors on advanced internal security and automation initiatives.",
    ],
    metrics: [{ v: "2", l: "Security Tracks" }, { v: "100%", l: "Hands-on" }, { v: "24/7", l: "Learning" }],
  },
  {
    company: "HeyJivu",
    role: "Beta Tester, AI Content Platform",
    period: "2026 – Present",
    location: "Remote",
    color: "#7c3aed",
    highlights: [
      "Served as an early beta tester for an AI-powered content generation platform and evaluated core product features from the earliest stages.",
      "Detected bugs, usability gaps, and edge cases across the AI content pipeline to improve product quality before public release.",
      "Worked closely with the founding team to stress-test new AI features and bridge technical quality with user experience.",
    ],
    metrics: [{ v: "AI", l: "Content Workflow" }, { v: "UX", l: "Feedback" }, { v: "QA", l: "Validation" }],
  },
];

export const PROJECTS = [
  {
    title: "PrivaDistill",
    description: "A privacy-preserving ML pipeline combining differential privacy and knowledge distillation with Dockerized deployment and CI/CD automation.",
    tags: ["Python", "Docker", "ONNX", "ML"],
    color: "#2563eb",
    icon: "cluster",
    metrics: ["Privacy", "Distillation", "CI/CD"],
    github: "https://github.com/Gi-v/PrivaDistill",
  },
  {
    title: "PHANTOM — Predictive Kubernetes Autoscaler",
    description: "An open-source predictive autoscaler using distributed traces, GNN+LSTM modeling, confidence gating, and GitOps-based deployment on Kubernetes.",
    tags: ["Python", "Go", "Kubernetes", "Terraform"],
    color: "#7c3aed",
    icon: "shield",
    metrics: ["87ms P99", "65% better", "GitOps"],
    github: "https://github.com/Gi-v/PHANTOM",
  },
  {
    title: "Aegis Mesh / Nexus Control",
    description: "An autonomous SRE daemon that monitors microservices, diagnoses issues with AI heuristics, and executes zero-touch remediation via control-plane telemetry.",
    tags: ["Go", "Next.js", "PostgreSQL", "Consul"],
    color: "#0891b2",
    icon: "monitor",
    metrics: ["Chaos tool", "WebSocket", "Audit ledger"],
    github: "https://github.com/Gi-v/Aegis-Mesh-Nexus-Control",
  },
  {
    title: "Carbon Emission Calculator",
    description: "A Django + JavaScript web platform for logging daily activities and computing associated greenhouse gas emissions, deployed on AWS EC2.",
    tags: ["Django", "JavaScript", "AWS", "Docker"],
    color: "#059669",
    icon: "cost",
    metrics: ["AWS EC2", "Docker", "CI/CD"],
    github: "https://github.com/Gi-v/Carbon-Emission-Calculator",
  },
  {
    title: "GIKI Complaint Management System",
    description: "A centralized digital portal for campus grievances with role-based access control, ticketing workflows, and structured issue resolution.",
    tags: ["Python", "Django", "PostgreSQL", "RBAC"],
    color: "#f97316",
    icon: "terraform",
    metrics: ["RBAC", "Ticketing", "Campus Ops"],
    github: "https://github.com/Gi-v/Carbon-Emission-Calculator",
  },
  {
    title: "Research & Benchmarking Work",
    description: "Research projects on congestion-aware warehouse logistics and heat-stress-aware pedestrian routing using ML, optimization, and simulation.",
    tags: ["Research", "ML", "Optimization", "Logistics"],
    color: "#ec4899",
    icon: "chaos",
    metrics: ["2 papers", "AI + Ops", "Benchmarking"],
    github: "https://github.com/Gi-v",
  },
];

export const CERTIFICATIONS = [
  { name: "DevOps, Cloud, and Agile Foundations", issuer: "IBM", year: "2025", abbr: "IBM", color: "#7c3aed" },
];

export const TOOLKIT = [
  {
    category: "Languages",
    color: "#2563eb",
    icon: "💻",
    tools: ["Python", "C++", "Go", "JavaScript", "TypeScript", "SQL", "HTML", "CSS"],
  },
  {
    category: "Frontend",
    color: "#db2777",
    icon: "🎨",
    tools: ["React.js", "Next.js", "Tailwind CSS", "HTML5", "CSS3", "Responsive Design"],
  },
  {
    category: "Backend",
    color: "#059669",
    icon: "🧩",
    tools: ["Node.js", "Express.js", "Django", "REST APIs", "GraphQL", "JWT", "WebSockets"],
  },
  {
    category: "Cloud & DevOps",
    color: "#f59e0b",
    icon: "☁️",
    tools: ["Docker", "Docker Compose", "Kubernetes", "Git", "GitHub Actions", "CI/CD", "AWS EC2", "Terraform", "ArgoCD"],
  },
  {
    category: "AI / ML",
    color: "#7c3aed",
    icon: "🤖",
    tools: ["Machine Learning", "Deep Learning", "PyTorch", "ONNX", "GNN", "LSTM", "Reinforcement Learning"],
  },
  {
    category: "Security & Observability",
    color: "#ef4444",
    icon: "🔒",
    tools: ["Application Security", "DevSecOps", "Kyverno", "Falco", "Vault", "Prometheus", "OpenTelemetry", "Chaos Engineering"],
  },
  {
    category: "Databases",
    color: "#0891b2",
    icon: "🗄️",
    tools: ["PostgreSQL", "MongoDB", "SQLite", "SQL", "Database Design", "ORM"],
  },
  {
    category: "Methodologies",
    color: "#10b981",
    icon: "⚙️",
    tools: ["Agile", "Scrum", "TDD", "Microservices", "OOP", "MVC"],
  },
];

export const BLOG_POSTS = [
  {
    title: "Vision-Driven Deep Reinforcement Learning for Dynamic Warehouse Task and Robot Allocation",
    excerpt: "A congestion-aware benchmark study exploring how vision-driven RL can improve warehouse logistics performance under dynamic load conditions.",
    date: "2027",
    readTime: "12 min",
    tags: ["Research", "RL", "Logistics"],
    color: "#2563eb",
    url: "https://github.com/Gi-v",
  },
  {
    title: "Heat-Stress-Aware Pedestrian Routing During Hajj Using Crowd Analytics and Thermal Proxies",
    excerpt: "A multi-objective routing framework designed to reduce heat exposure while preserving route efficiency in high-density environments.",
    date: "2027",
    readTime: "10 min",
    tags: ["Research", "Analytics", "Optimization"],
    color: "#7c3aed",
    url: "https://github.com/Gi-v",
  },
  {
    title: "Predictive Kubernetes Autoscaling with Trace Topology Signals",
    excerpt: "A practical exploration of using OpenTelemetry and trace topology to make autoscaling more predictive and resilient under bursty workloads.",
    date: "2026",
    readTime: "9 min",
    tags: ["Kubernetes", "ML", "Observability"],
    color: "#059669",
    url: "https://github.com/Gi-v/PHANTOM",
  },
];
