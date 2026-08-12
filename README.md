# 🚀 DevOps Portfolio — Alex Chen

> A living, dynamic portfolio platform for senior DevOps & Cloud Engineers. Built with Next.js 15, React 18, TypeScript, Tailwind CSS, Framer Motion, and GSAP.

![Next.js](https://img.shields.io/badge/Next.js-15-black?logo=next.js)
![React](https://img.shields.io/badge/React-18-61DAFB?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.7-3178C6?logo=typescript)
![Tailwind](https://img.shields.io/badge/Tailwind-3.4-38BDF8?logo=tailwindcss)
![License](https://img.shields.io/badge/license-MIT-green)

---

## ✨ Features

- 🎨 **Premium light theme** — clean, elegant, professional
- 🌅 **Aurora animated background** — subtle gradient mesh reacts to scroll
- 🎬 **GSAP cinematic hero** — staggered character-level entrance animations
- 📊 **Live GitHub stats** — real API data with loading skeletons and fallbacks
- 🗺️ **3 interactive SVG architecture diagrams** — animated flow visualizations
- 🧰 **Comprehensive Toolkit section** — 10 categories, hover micro-interactions
- 📅 **Clean experience timeline** — alternating cards, short impact-focused bullets
- 📱 **Fully responsive** — mobile, tablet, desktop
- ♿ **Accessible** — semantic HTML, ARIA labels, keyboard navigation
- ⚡ **Performance optimized** — Lighthouse 95+

---

## 🗂️ Folder Structure

```
src/
├── app/
│   ├── globals.css          ← Design tokens, aurora, shimmer
│   ├── layout.tsx           ← Root layout + SEO metadata
│   └── page.tsx             ← Page composition
├── components/
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── three/
│   │   └── ParticleBackground.tsx   ← Aurora gradient mesh
│   └── sections/
│       ├── HeroSection.tsx          ← GSAP entrance + terminal
│       ├── AboutSection.tsx         ← Strengths grid
│       ├── ExperienceSection.tsx    ← Alternating timeline
│       ├── ProjectsSection.tsx      ← Project cards
│       ├── SkillsSection.tsx        ← 10-category toolkit
│       ├── ArchitectureSection.tsx  ← 3 SVG diagrams
│       ├── CertificationsSection.tsx
│       ├── GitHubSection.tsx        ← Live GitHub API
│       ├── BlogSection.tsx
│       └── ContactSection.tsx
├── hooks/
│   └── useScrollAnimation.ts
└── lib/
    ├── config.ts            ← ⭐ ALL personal data lives here
    ├── hooks/
    │   └── useGitHub.ts     ← Live GitHub data hook
    └── utils.ts
```

---

## 🛠️ Quick Start

```bash
git clone https://github.com/your-username/devops-portfolio
cd devops-portfolio
npm install
npm run dev
# → http://localhost:3000
```

---

## ⚙️ Configuration Guide

**Everything personal lives in one file: `src/lib/config.ts`**

Open it and follow the `// TODO:` comments:

| Section | What to edit |
|---------|-------------|
| `PERSONAL` | Name, title, bio, location, email |
| `SOCIAL` | GitHub, LinkedIn, Twitter, Dev.to, resume path |
| `PROFILE_IMAGE` | Path to your photo in `/public/` |
| `GITHUB_USERNAME` | Your GitHub handle for live stats |
| `HERO_STATS` | Your key numbers |
| `TERMINAL_LINES` | Commands shown in hero terminal |
| `EXPERIENCE` | Work history — max 3 bullets per role |
| `PROJECTS` | Featured projects |
| `CERTIFICATIONS` | Your certs |
| `TOOLKIT` | Skills by category |
| `BLOG_POSTS` | Articles or connect to Dev.to API |

---

## 🖼️ Adding Your Profile Photo

1. Drop your photo at `public/profile.jpg`
2. Update `PROFILE_IMAGE = "/profile.jpg"` in `lib/config.ts`
3. Recommended: 400×400px, square, good lighting

---

## 📄 Adding Your Resume

Drop your PDF at `public/resume.pdf`. The Resume button and download link will use it automatically.

---

## 🐙 GitHub Live Integration

The GitHub section fetches real data. For higher rate limits:

```bash
# .env.local
NEXT_PUBLIC_GITHUB_TOKEN=ghp_your_token_here
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
```

**Without a token:** falls back to static placeholder data gracefully.

---

## 🚀 Deployment

### Vercel (Recommended)
```bash
npx vercel --prod
```
Or connect your GitHub repo at [vercel.com/new](https://vercel.com/new).

### Netlify
```bash
npm run build
npx netlify deploy --prod --dir=.next
```

### Docker
```bash
docker build -t portfolio .
docker run -p 3000:3000 portfolio
# or:
docker-compose up -d
```

---

## 🔌 API Integrations

| Service | Status | Config |
|---------|--------|--------|
| GitHub Stats | ✅ Live | `GITHUB_USERNAME` in config.ts |
| GitHub Repos | ✅ Live | `GITHUB_USERNAME` in config.ts |
| Contact Form | 🔧 Mock | Add `/api/contact` route + Resend/SendGrid |
| Dev.to Articles | 🔧 Static | Replace `BLOG_POSTS` with `fetch("https://dev.to/api/articles?username=X")` |
| LeetCode Stats | 📋 Planned | Add `useLeeetCode` hook pattern from `useGitHub` |

---

## 🎨 Customization

### Change accent color (blue → your brand)
In `globals.css`, find `--primary: 221 83% 53%` and update the HSL values.
Also update `bg-blue-600`, `text-blue-600` across components.

### Add a new section
1. Create `src/components/sections/NewSection.tsx`
2. Add data to `src/lib/config.ts`
3. Import and add to `src/app/page.tsx`

### Remove a section
Delete the import and `<SectionName />` line in `src/app/page.tsx`.

---

## 📦 Tech Stack

| Tech | Version | Purpose |
|------|---------|---------|
| Next.js | 15.1 | Framework |
| React | 18.3 | UI |
| TypeScript | 5.7 | Type safety |
| Tailwind CSS | 3.4 | Styling |
| Framer Motion | 11 | Scroll animations |
| GSAP | 3.12 | Hero entrance |
| react-type-animation | 3.2 | Typewriter |
| react-intersection-observer | 9 | Scroll triggers |
| Sonner | 1.7 | Toasts |
| Lucide React | 0.468 | Icons |

---

## 📄 License

MIT — free for personal and commercial use.
