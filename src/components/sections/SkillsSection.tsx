import { Badge } from "@/components/ui/badge";
import { SectionHeader } from "@/components/ui/section-header";
import { skillCategories } from "@/data/portfolio";

export function SkillsSection() {
  return (
    <section
      id="skills"
      className="section-padding px-6 border-t border-border bg-muted/30"
    >
      <div className="max-w-5xl mx-auto">
        <SectionHeader
          label="03 — Skills"
          title="Tech stack"
          subtitle="Tools and technologies I work with daily across frontend, backend, and delivery."
        />

        <div className="grid gap-5 md:grid-cols-3">
          {skillCategories.map((category) => (
            <div key={category.title} className="surface-card p-6">
              <h3 className="text-sm font-semibold mb-4 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <Badge
                    key={skill}
                    variant="secondary"
                    className="text-xs font-normal bg-secondary/60 hover:bg-secondary transition-colors"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
