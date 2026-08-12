# Hareem Ahmad | Software Engineer & Researcher

A modern portfolio built with Next.js to showcase software engineering, cloud-native systems, AI-driven experimentation, and applied research work.

![Next.js](https://img.shields.io/badge/Next.js-15-black?logo=next.js)
![React](https://img.shields.io/badge/React-18-61DAFB?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.7-3178C6?logo=typescript)
![Tailwind](https://img.shields.io/badge/Tailwind-3.4-38BDF8?logo=tailwindcss)
![License](https://img.shields.io/badge/license-MIT-green)

---

## About This Project

This portfolio was designed to reflect my work across:

- full-stack development
- software engineering and backend systems
- cloud-native tooling and DevOps workflows
- applied machine learning and AI-driven systems
- research-driven product thinking

The site is intentionally sleek, fast, and easy to customize through one central configuration file.

---

## Live Portfolio

- GitHub: https://github.com/Gi-v
- LinkedIn: https://www.linkedin.com/in/hareem-ahmad-8a7126371/
- Resume: available in the project at `public/resume.docx`

---

## Highlights

- polished single-page portfolio layout
- animated hero and motion-driven UI
- responsive design for mobile, tablet, and desktop
- GitHub stats section powered by the GitHub API
- project showcase tailored to current work
- research/publication and experience sections
- easy data editing from a single config file

---

## Tech Stack

- Next.js 15
- React 18
- TypeScript
- Tailwind CSS
- Framer Motion
- GSAP
- Lucide React
- Sonner

---

## Project Structure

```bash
My-Portfolio/
├── public/
│   ├── resume.docx
│   └── ...
├── src/
│   ├── app/
│   ├── components/
│   ├── hooks/
│   └── lib/
├── .env.example
├── docker-compose.yml
├── Dockerfile
├── next.config.ts
├── package.json
├── README.md
├── tailwind.config.ts
├── tsconfig.json
└── vercel.json
```

---

## Local Setup

```bash
git clone https://github.com/Gi-v/My-Portfolio.git
cd My-Portfolio
npm install
npm run dev
```

Then open:

```bash
http://localhost:3000
```

---

## Configuration

Main personal content lives in:

```bash
src/lib/config.ts
```

This file contains:

- personal details
- social links
- GitHub username
- skill categories
- experience entries
- project list
- publications/blog entries
- certifications

You can edit all of it in one place to keep the portfolio current.

---

## Build

```bash
npm run build
```

---

## Deployment

This app is ready for deployment on:

- Vercel
- Netlify
- Docker

Example:

```bash
npm run build
npx vercel --prod
```

---

## Notes

This repository is personalized to reflect my current engineering identity, research interests, and project work. It is structured as a clean portfolio template, but tuned for a real software engineer profile rather than a generic starter project.

---

## License

MIT
