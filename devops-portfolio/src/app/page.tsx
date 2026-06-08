"use client";

import { useEffect, useRef } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import SkillsSection from "@/components/sections/SkillsSection";
import ArchitectureSection from "@/components/sections/ArchitectureSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import CertificationsSection from "@/components/sections/CertificationsSection";
import GitHubSection from "@/components/sections/GitHubSection";
import BlogSection from "@/components/sections/BlogSection";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/Footer";
import ParticleBackground from "@/components/three/ParticleBackground";

export default function Home() {
  const mainRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Smooth scroll for anchor links
    const handleClick = (e: MouseEvent) => {
      const target = (e.target as Element).closest('a[href^="#"]');
      if (!target) return;
      e.preventDefault();
      const id = target.getAttribute("href")!.slice(1);
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    };
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return (
    <div ref={mainRef} className="relative min-h-screen overflow-x-hidden">
      <ParticleBackground />
      <div className="relative z-10">
        <Navbar />
        <main>
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <ArchitectureSection />
          <ExperienceSection />
          <ProjectsSection />
          <CertificationsSection />
          <GitHubSection />
          <BlogSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </div>
  );
}
