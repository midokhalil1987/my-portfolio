"use client";

import { SectionHeader } from "@/components/ui/section-header";
import { skillCategories } from "@/data/portfolio";
import {
  Code2,
  Server,
  Smartphone,
  Wrench,
  type LucideIcon,
} from "lucide-react";

const categoryIcons: Record<(typeof skillCategories)[number]["title"], LucideIcon> = {
  Frontend: Code2,
  Backend: Server,
  Mobile: Smartphone,
  Tools: Wrench,
};

function SkillIcon({ slug, name }: { slug: string; name: string }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={`https://cdn.simpleicons.org/${slug}`}
      alt=""
      width={16}
      height={16}
      className="size-4 shrink-0 dark:invert-0"
      loading="lazy"
      onError={(e) => {
        e.currentTarget.style.display = "none";
      }}
      aria-hidden
      title={name}
    />
  );
}

export function SkillsSection() {
  return (
    <section
      id="skills"
      className="section-padding px-6 bg-muted/30"
    >
      <div className="max-w-5xl mx-auto">
        <SectionHeader
          label="03 — Skills"
          title="Tech stack"
          subtitle="Technologies I use across frontend, backend, mobile, and tooling."
        />

        <div className="grid gap-5 sm:grid-cols-2">
          {skillCategories.map((category) => {
            const Icon = categoryIcons[category.title];

            return (
              <div key={category.title} className="surface-card p-6">
                <h3 className="text-sm font-semibold mb-4 flex items-center gap-2">
                  <span className="flex items-center justify-center size-7 rounded-lg bg-primary/10 text-primary">
                    <Icon size={14} />
                  </span>
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill.name}
                      className="inline-flex items-center gap-2 rounded-lg border border-border/70 bg-background/60 px-3 py-1.5 text-xs font-medium text-foreground/90 hover:border-primary/30 transition-colors"
                    >
                      <SkillIcon slug={skill.icon} name={skill.name} />
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
