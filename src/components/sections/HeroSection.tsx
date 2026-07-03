"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  GithubIcon,
  LinkedinIcon,
  ChevronDown,
  Mail,
  Briefcase,
  ArrowRight,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  personalInfo,
  featuredProjects,
} from "@/data/portfolio";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay },
});

const heroTech = [
  "React",
  "Next.js",
  "TypeScript",
  "Java",
  "Spring Boot",
  "PostgreSQL",
  "AngularJS",
  "React Native",
];

const stats = [
  { value: "4+", label: "Years experience" },
  { value: "10+", label: "Projects shipped" },
  { value: "Remote", label: "US & MENA teams" },
];

export function HeroSection() {
  return (
    <section className="relative px-6 pt-28 pb-20 md:pt-32 md:pb-28">
      <div className="max-w-5xl mx-auto w-full">
        <div className="flex flex-col gap-12 md:gap-14">
          <div className="flex flex-col items-center text-center">
            <motion.p {...fadeUp(0)} className="section-label">
              Portfolio · 2026
            </motion.p>

            <motion.h1
              {...fadeUp(0.1)}
              className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.08] mb-5"
            >
              {personalInfo.name.split(" ")[0]}{" "}
              <span className="text-primary">
                {personalInfo.name.split(" ").slice(1).join(" ")}
              </span>
            </motion.h1>

            <motion.p
              {...fadeUp(0.2)}
              className="text-lg md:text-xl text-muted-foreground font-medium mb-3"
            >
              {personalInfo.title}
            </motion.p>

            <motion.p
              {...fadeUp(0.25)}
              className="text-sm md:text-base text-muted-foreground leading-relaxed mb-8 max-w-2xl mx-auto"
            >
              {personalInfo.tagline}
            </motion.p>

            <motion.div
              {...fadeUp(0.3)}
              className="flex flex-wrap items-center justify-center gap-3 mb-8"
            >
              <Button asChild size="lg" className="rounded-lg h-10 px-5">
                <Link href="#projects">
                  View my work
                  <ArrowRight size={16} />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="rounded-lg h-10 px-5"
              >
                <Link href="#contact">Get in touch</Link>
              </Button>
            </motion.div>

            <motion.div
              {...fadeUp(0.35)}
              className="flex items-center justify-center gap-5"
            >
              {[
                { href: personalInfo.github, icon: GithubIcon, label: "GitHub" },
                {
                  href: personalInfo.linkedin,
                  icon: LinkedinIcon,
                  label: "LinkedIn",
                },
                {
                  href: personalInfo.upwork,
                  icon: Briefcase,
                  label: "Upwork",
                },
                {
                  href: `mailto:${personalInfo.email}`,
                  icon: Mail,
                  label: "Email",
                },
              ].map(({ href, icon: Icon, label }) => (
                <Link
                  key={label}
                  href={href}
                  target={href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <Icon size={20} />
                </Link>
              ))}
            </motion.div>
          </div>

          <motion.div
            {...fadeUp(0.4)}
            className="space-y-4 w-full"
          >
            {/* Stats row */}
            <div className="grid grid-cols-3 gap-3">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="surface-card p-4 text-center"
                >
                  <p className="text-xl md:text-2xl font-bold text-primary">
                    {stat.value}
                  </p>
                  <p className="text-[11px] md:text-xs text-muted-foreground mt-1 leading-tight">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            {/* Tech stack */}
            <div className="surface-card p-5">
              <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-3">
                Core stack
              </p>
              <div className="flex flex-wrap gap-2">
                {heroTech.map((tech) => (
                  <Badge
                    key={tech}
                    variant="secondary"
                    className="text-xs font-normal"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Project previews */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {featuredProjects.slice(0, 4).map((project) => (
                <Link
                  key={project.title}
                  href={project.link ?? "#projects"}
                  target={project.link ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="group surface-card overflow-hidden hover:border-primary/40 transition-colors"
                >
                  <div className="relative h-24 bg-muted overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                      sizes="200px"
                    />
                  </div>
                  <div className="px-3 py-2">
                    <p className="text-xs font-medium truncate">
                      {project.title}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.5 }}
        className="flex justify-center mt-12 md:mt-16"
      >
        <Link
          href="#about"
          className="flex flex-col items-center gap-1 text-muted-foreground hover:text-foreground transition-colors"
        >
          <span className="text-xs font-mono uppercase tracking-widest">
            Scroll
          </span>
          <ChevronDown size={18} className="animate-bounce" />
        </Link>
      </motion.div>
    </section>
  );
}
