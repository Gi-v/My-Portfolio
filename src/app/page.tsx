"use client";
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import SkillsSection from "@/components/sections/SkillsSection";
import ArchitectureSection from "@/components/sections/ArchitectureSection";
import CertificationsSection from "@/components/sections/CertificationsSection";
import GitHubSection from "@/components/sections/GitHubSection";
import BlogSection from "@/components/sections/BlogSection";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/Footer";
import AuroraBackground from "@/components/three/ParticleBackground";

export default function Home() {
  // Smooth anchor scroll
  useEffect(() => {
    const fn = (e: MouseEvent) => {
      const a = (e.target as Element).closest('a[href^="#"]');
      if (!a) return;
      e.preventDefault();
      document.getElementById(a.getAttribute("href")!.slice(1))?.scrollIntoView({ behavior: "smooth" });
    };
    document.addEventListener("click", fn);
    return () => document.removeEventListener("click", fn);
  }, []);

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <AuroraBackground />
      <div className="relative z-10">
        <Navbar />
        <main>
          <HeroSection />
          <AboutSection />
          <ExperienceSection />
          <ProjectsSection />
          <SkillsSection />
          <ArchitectureSection />
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
