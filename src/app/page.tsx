"use client";

import Lottie from "lottie-react";
import { Button } from "@/components/ui/button";
import { GithubIcon, LinkedinIcon, ChevronDown } from "lucide-react";
import developerAnimation from "@/animations/developer-animation.json";
import backgroundAnimation from "@/animations/background-animation.json";
import Link from "next/link";
import { AboutSection } from "@/components/sections/AboutSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { HobbiesSection } from "@/components/sections/HobbiesSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { ThemeToggle } from "@/components/theme-toggle";
import { BackToTop } from "@/components/back-to-top";
import { LoadingScreen } from "@/components/loading-screen";
import { StickyCursor } from "@/components/sticky-cursor";
import { motion } from "framer-motion";
import { useRef } from "react";

export default function Home() {
  const contactRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement | null>) => {
    if (ref.current) {
      window.scrollTo({
        top: ref.current.offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <LoadingScreen />
      <StickyCursor />
      <div className="relative min-h-screen w-full overflow-hidden">
        <style jsx global>{`
          body {
            background: linear-gradient(
              135deg,
              #eef2ff 0%,
              #ffffff 50%,
              #eff6ff 100%
            );
          }
          .dark body {
            background: linear-gradient(
              135deg,
              #111827 0%,
              #1f2937 50%,
              #111827 100%
            );
          }
        `}</style>

        <div className="fixed top-4 right-4 z-50">
          <ThemeToggle />
        </div>

        <BackToTop />

        <div className="fixed z-0 flex items-center justify-center w-full h-full opacity-15 dark:opacity-50 pointer-events-none">
          <Lottie animationData={backgroundAnimation} loop={true} />
        </div>

        <div className="relative z-10 grid">
          <section className="relative flex flex-col items-center justify-center min-h-screen px-4 md:px-6 py-12 md:py-24 lg:py-32 dark:bg-gray-900/80">
            <div className="container grid gap-6 md:grid-cols-2 items-center justify-items-center">
              <div className="flex flex-col space-y-4">
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="text-4xl md:text-6xl font-bold tracking-tight text-gray-900 dark:text-white"
                >
                  Mahmoud Khalil
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="text-xl md:text-2xl text-gray-600 dark:text-gray-400"
                >
                  Front-end Developer
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="text-lg text-gray-600 dark:text-gray-400 max-w-md"
                >
                  Creating engaging and interactive web and mobile applications
                  with React, Next.js, and more.
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  className="flex flex-wrap gap-3 pt-4"
                >
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    <Button
                      onClick={() => scrollToSection(contactRef)}
                      variant="default"
                      className="cursor-pointer"
                    >
                      Contact Me
                    </Button>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    <Button
                      onClick={() => scrollToSection(projectsRef)}
                      variant="outline"
                      className="cursor-pointer"
                    >
                      View Projects
                    </Button>
                  </motion.div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                  className="flex space-x-4 pt-6"
                >
                  <Link
                    href="https://github.com/midokhalil1987"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100 transition-colors duration-300"
                  >
                    <GithubIcon size={24} />
                  </Link>
                  <Link
                    href="https://www.linkedin.com/in/mahmoud-khalil-489294111"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100 transition-colors duration-300"
                  >
                    <LinkedinIcon size={24} />
                  </Link>
                </motion.div>
              </div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex justify-center"
              >
                <div className="w-full">
                  <Lottie animationData={developerAnimation} loop={true} />
                </div>
              </motion.div>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1 }}
            >
              <span className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
                <span className="text-sm font-bold text-gray-500 dark:text-gray-400 mb-2">
                  Scroll Down
                </span>
                <ChevronDown
                  size={25}
                  className="text-gray-500 dark:text-gray-400"
                />
              </span>
            </motion.div>
          </section>

          <AboutSection />
          <SkillsSection />
          <div ref={projectsRef}>
            <ProjectsSection />
          </div>
          <HobbiesSection />
          <div ref={contactRef}>
            <ContactSection />
          </div>

          <footer className="py-8 bg-gray-900 text-white border-t border-gray-800 dark:bg-gray-900 dark:text-white dark:border-gray-800">
            <div className="container mx-auto flex items-center justify-center">
              <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
                <div className="flex flex-col items-center md:items-start space-y-2">
                  <p className="text-center text-sm md:text-left">
                    © {new Date().getFullYear()} Mahmoud Khalil. All rights
                    reserved.
                  </p>
                  <p className="text-xs text-gray-400 dark:text-gray-400">
                    Built with Next.js, Tailwind CSS, and ❤️
                  </p>
                </div>
                <div className="flex items-center gap-6">
                  <Link
                    href="https://github.com/midokhalil1987"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-gray-100 transition-colors duration-300"
                    aria-label="GitHub"
                  >
                    <GithubIcon size={20} />
                  </Link>
                  <Link
                    href="https://www.linkedin.com/in/mahmoud-khalil-489294111"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-gray-100 transition-colors duration-300"
                    aria-label="LinkedIn"
                  >
                    <LinkedinIcon size={20} />
                  </Link>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
}
