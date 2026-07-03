"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { SectionHeader } from "@/components/ui/section-header";
import { ExternalLink, GithubIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { featuredProjects, allProjects } from "@/data/portfolio";
import NoImage from "@/assets/no-image.png";
import { useState } from "react";
import type { StaticImageData } from "next/image";

function BrowserFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-lg overflow-hidden border border-border bg-muted/50">
      <div className="flex items-center gap-1.5 px-3 py-2 border-b border-border bg-muted/80">
        <div className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
        <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/80" />
        <div className="w-2.5 h-2.5 rounded-full bg-green-400/80" />
      </div>
      {children}
    </div>
  );
}

function ProjectImage({
  src,
  alt,
  className,
  sizes,
}: {
  src: string;
  alt: string;
  className?: string;
  sizes?: string;
}) {
  const [imgSrc, setImgSrc] = useState<string | StaticImageData>(src);

  return (
    <Image
      src={imgSrc}
      alt={alt}
      fill
      className={className}
      sizes={sizes}
      onError={() => setImgSrc(NoImage)}
    />
  );
}

function ProjectCard({
  project,
  variant = "featured",
}: {
  project: (typeof allProjects)[number];
  variant?: "featured" | "compact";
}) {
  const imageSrc = project.image;

  if (variant === "compact") {
    return (
      <div className="group surface-card overflow-hidden hover:border-primary/30 transition-colors">
        <BrowserFrame>
          <div className="relative h-36 bg-muted overflow-hidden">
            <ProjectImage
              src={imageSrc}
              alt={project.title}
              className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
              sizes="(max-width: 768px) 50vw, 25vw"
            />
          </div>
        </BrowserFrame>
        <div className="p-4 flex items-center justify-between gap-2">
          <h3 className="text-sm font-medium truncate">{project.title}</h3>
          <div className="flex gap-1 shrink-0 opacity-0 group-hover:opacity-100 transition-opacity">
            {project.link && (
              <Link
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 rounded-md hover:bg-muted text-muted-foreground hover:text-foreground transition-colors"
              >
                <ExternalLink size={14} />
              </Link>
            )}
            {project.github && (
              <Link
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 rounded-md hover:bg-muted text-muted-foreground hover:text-foreground transition-colors"
              >
                <GithubIcon size={14} />
              </Link>
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <article className="surface-card overflow-hidden flex flex-col hover:border-primary/30 transition-colors group">
      <BrowserFrame>
        <div className="relative h-48 bg-muted overflow-hidden">
          <ProjectImage
            src={imageSrc}
            alt={project.title}
            className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </div>
      </BrowserFrame>

      <div className="p-5 flex flex-col flex-1 gap-4">
        <div>
          <h3 className="font-semibold mb-1.5">{project.title}</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            {project.description}
          </p>
        </div>

        <div className="flex flex-wrap gap-1.5 mt-auto">
          {project.tags.map((tag) => (
            <Badge
              key={tag}
              variant="outline"
              className="text-xs font-normal text-muted-foreground"
            >
              {tag}
            </Badge>
          ))}
        </div>

        <div className="flex gap-2 pt-1">
          {project.link && (
            <Button asChild size="sm" className="flex-1 rounded-lg">
              <Link
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink size={14} />
                Live demo
              </Link>
            </Button>
          )}
          {project.github && (
            <Button asChild size="sm" variant="outline" className="rounded-lg">
              <Link
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <GithubIcon size={14} />
                Code
              </Link>
            </Button>
          )}
        </div>
      </div>
    </article>
  );
}

export function ProjectsSection() {
  return (
    <section id="projects" className="section-padding px-6 border-t border-border">
      <div className="max-w-5xl mx-auto">
        <SectionHeader
          label="02 — Work"
          title="Selected projects"
          subtitle="Production apps and client work — live demos where available."
        />

        <Tabs defaultValue="featured" className="w-full">
          <TabsList className="mb-10 h-10 p-1 rounded-lg">
            <TabsTrigger value="featured" className="rounded-md px-6">
              Featured
            </TabsTrigger>
            <TabsTrigger value="all" className="rounded-md px-6">
              All ({allProjects.length})
            </TabsTrigger>
          </TabsList>

          <TabsContent value="featured">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {featuredProjects.map((project) => (
                <ProjectCard key={project.title} project={project} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="all">
            <div className="grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {allProjects.map((project) => (
                <ProjectCard
                  key={project.title}
                  project={project}
                  variant="compact"
                />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
