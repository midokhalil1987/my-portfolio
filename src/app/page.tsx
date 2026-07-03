"use client";

import dynamic from "next/dynamic";
import { GithubIcon, LinkedinIcon, Briefcase } from "lucide-react";
import Link from "next/link";
import { AboutSection } from "@/components/sections/AboutSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { HobbiesSection } from "@/components/sections/HobbiesSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { Navbar } from "@/components/navbar";
import { BackToTop } from "@/components/back-to-top";
import { personalInfo } from "@/data/portfolio";
import { useState, useEffect } from "react";

const LoadingScreen = dynamic(
  () =>
    import("@/components/loading-screen").then((mod) => ({
      default: mod.LoadingScreen,
    })),
  { ssr: false }
);

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <>
      <LoadingScreen />
      <Navbar />
      <BackToTop />

      <main className="relative">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <HobbiesSection />
        <ContactSection />

        <footer className="border-t border-border py-10 px-6">
          <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
            <p>
              © {new Date().getFullYear()} {personalInfo.name}
            </p>
            <div className="flex items-center gap-5">
              <Link
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                <GithubIcon size={16} />
              </Link>
              <Link
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                <LinkedinIcon size={16} />
              </Link>
              <Link
                href={personalInfo.upwork}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                <Briefcase size={16} />
              </Link>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
