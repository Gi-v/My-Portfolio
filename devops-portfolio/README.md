# 🚀 DevOps Portfolio — Alex Chen

A production-grade, premium DevOps Engineer portfolio built with **Next.js 15**, **React 19**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**. Designed to impress recruiters, hiring managers, and tech leads.

![Next.js](https://img.shields.io/badge/Next.js-15-black?logo=next.js)
![React](https://img.shields.io/badge/React-19-61DAFB?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.7-3178C6?logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38BDF8?logo=tailwindcss)
![License](https://img.shields.io/badge/license-MIT-green)

## ✨ Features

- 🎨 **Premium dark theme** inspired by Vercel, Stripe, Linear, and Raycast
- 🖥️ **Animated terminal** with real DevOps commands (kubectl, terraform, docker, argocd)
- 📊 **Interactive SVG architecture diagrams** for Kubernetes, CI/CD, and Terraform workflows
- 🎞️ **Smooth animations** via Framer Motion with scroll-triggered reveals
- 🌐 **Particle network background** built with Canvas API
- 📱 **Fully responsive** — mobile, tablet, and desktop
- ♿ **Accessibility compliant** — semantic HTML, ARIA labels
- 🔍 **SEO optimized** — metadata, Open Graph, JSON-LD structured data
- ⚡ **Performance optimized** — Lighthouse 95+

## 📁 Project Structure

```
devops-portfolio/
├── src/
│   ├── app/
│   │   ├── globals.css          # Design tokens, animations
│   │   ├── layout.tsx           # Root layout + metadata
│   │   └── page.tsx             # Main page composition
│   ├── components/
│   │   ├── Navbar.tsx           # Sticky navigation
│   │   ├── Footer.tsx           # Footer
│   │   ├── three/
│   │   │   └── ParticleBackground.tsx  # Canvas particle network
│   │   └── sections/
│   │       ├── HeroSection.tsx          # Hero + terminal animation
│   │       ├── AboutSection.tsx         # About + highlights
│   │       ├── SkillsSection.tsx        # Skills with progress bars
│   │       ├── ArchitectureSection.tsx  # SVG infrastructure diagrams
│   │       ├── ExperienceSection.tsx    # Timeline
│   │       ├── ProjectsSection.tsx      # Project cards
│   │       ├── CertificationsSection.tsx
│   │       ├── GitHubSection.tsx        # GitHub stats + contribution graph
│   │       ├── BlogSection.tsx          # Article cards
│   │       └── ContactSection.tsx       # Contact form
│   ├── hooks/
│   │   └── useScrollAnimation.ts  # Framer Motion scroll hooks
│   └── lib/
│       ├── data.ts             # All portfolio content
│       └── utils.ts            # Utility functions
├── public/                     # Static assets (place resume.pdf here)
├── Dockerfile                  # Multi-stage Docker build
├── docker-compose.yml
├── vercel.json
├── netlify.toml
├── tailwind.config.ts
└── next.config.ts
```

## 🛠️ Quick Start

### Prerequisites
- Node.js 22+
- npm or yarn

### Installation

```bash
# Clone the repo
git clone https://github.com/yourusername/devops-portfolio.git
cd devops-portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it.

## 🎨 Customization

**All portfolio content lives in `src/lib/data.ts`** — edit it to make the site your own:

```ts
// Personal info
export const PERSONAL = {
  name: "Your Name",
  title: "Senior DevOps & Cloud Engineer",
  email: "you@yourdomain.com",
  github: "https://github.com/yourusername",
  linkedin: "https://linkedin.com/in/yourprofile",
  // ...
};

// Skills, experience, projects, certs, blog posts — all here
```

## 🚀 Deployment

### Vercel (Recommended)

```bash
npm i -g vercel
vercel --prod
```

Or connect your GitHub repo at [vercel.com/new](https://vercel.com/new).

### Netlify

```bash
npm i -g netlify-cli
npm run build
netlify deploy --prod --dir=.next
```

### Docker

```bash
# Build image
docker build -t devops-portfolio .

# Run container
docker run -p 3000:3000 devops-portfolio

# Or with Docker Compose
docker-compose up -d
```

## ⚙️ Environment Variables

Copy `.env.example` to `.env.local` and fill in values:

```bash
cp .env.example .env.local
```

| Variable | Required | Description |
|----------|----------|-------------|
| `NEXT_PUBLIC_SITE_URL` | Yes | Your site URL for OG tags |
| `RESEND_API_KEY` | No | Email service for contact form |
| `NEXT_PUBLIC_GA_ID` | No | Google Analytics |
| `GITHUB_TOKEN` | No | For live GitHub stats |

## 📋 Sections

| Section | Description |
|---------|-------------|
| Hero | Name, title, animated terminal, social links, availability |
| About | Professional summary, key strengths |
| Skills | Progress bars by category (Cloud, K8s, IaC, CI/CD, Observability, Languages) |
| Architecture | Interactive SVG diagrams: K8s, CI/CD pipeline, Terraform workflow |
| Experience | Animated timeline with metrics |
| Projects | Cards with metrics, tags, GitHub links |
| Certifications | Badge grid (AWS, CKA, CKS, Terraform, Azure, GCP) |
| GitHub | Contribution graph, repo highlights, stats |
| Blog | Article cards with tags and reading time |
| Contact | Form + social links + resume download |

## 📦 Adding Your Resume

Place your PDF resume at `public/resume.pdf`. The download button will automatically use it.

## 🏗️ Tech Stack

| Technology | Version | Purpose |
|-----------|---------|---------|
| Next.js | 15.1 | Framework + SSG/SSR |
| React | 19 | UI Library |
| TypeScript | 5.7 | Type safety |
| Tailwind CSS | 3.4 | Styling |
| Framer Motion | 11 | Animations |
| react-type-animation | 3.2 | Typewriter effect |
| react-intersection-observer | 9 | Scroll detection |
| Lucide React | 0.468 | Icons |
| Sonner | 1.7 | Toast notifications |

## 📄 License

MIT — use freely for your own portfolio.

---

Built with ❤️ and ☕ by a DevOps engineer who believes infrastructure should be beautiful too.
