import { PanelCard } from "@/components/ui/panel-card";
import { SectionHeader } from "@/components/ui/section-header";
import { experience, education, languages } from "@/data/portfolio";

export function AboutSection() {
  return (
    <section id="about" className="section-padding px-6 border-t border-border">
      <div className="max-w-5xl mx-auto">
        <SectionHeader
          label="01 — About"
          title="Building software that ships"
          subtitle="4+ years delivering production web and mobile applications for agency clients and product teams across the US and MENA regions."
        />

        <div className="grid gap-6 lg:grid-cols-5">
          <PanelCard title="Work Experience" className="lg:col-span-3">
            <div className="space-y-8">
              {experience.map((job, i) => (
                <div key={job.company} className="relative pl-5">
                  <div className="absolute left-0 top-1.5 w-2 h-2 rounded-full bg-primary ring-[3px] ring-primary/20" />
                  {i < experience.length - 1 && (
                    <div className="absolute left-[3px] top-4 w-px h-[calc(100%+1.5rem)] bg-border" />
                  )}
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-2">
                    <div>
                      <h4 className="font-semibold text-[15px]">{job.role}</h4>
                      <p className="text-sm text-primary font-medium mt-0.5">
                        {job.company}
                      </p>
                    </div>
                    <span className="inline-flex items-center text-[11px] font-mono text-muted-foreground bg-muted/60 dark:bg-muted/40 px-2 py-1 rounded-md shrink-0 mt-1 sm:mt-0">
                      {job.period}
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground mb-3">
                    {job.location}
                  </p>
                  <ul className="space-y-2">
                    {job.highlights.map((item) => (
                      <li
                        key={item}
                        className="text-sm text-muted-foreground leading-relaxed flex gap-2.5"
                      >
                        <span className="text-primary mt-1.5 shrink-0 w-1 h-1 rounded-full bg-primary/70" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </PanelCard>

          <div className="lg:col-span-2 flex flex-col gap-6">
            <PanelCard title="Education">
              <h4 className="font-semibold text-sm">{education.degree}</h4>
              <p className="text-sm text-muted-foreground mt-1.5">
                {education.institution}
              </p>
              <p className="text-xs font-mono text-muted-foreground mt-1">
                {education.date}
              </p>
              <p className="text-xs text-muted-foreground mt-4 leading-relaxed pt-4 border-t border-border/60">
                {education.note}
              </p>
            </PanelCard>

            <PanelCard title="Languages">
              <ul className="divide-y divide-border/60">
                {languages.map((lang) => (
                  <li
                    key={lang.name}
                    className="flex items-center justify-between py-3 first:pt-0 last:pb-0"
                  >
                    <span className="text-sm font-medium">{lang.name}</span>
                    <span className="text-xs text-muted-foreground bg-muted/50 dark:bg-muted/30 px-2.5 py-1 rounded-md">
                      {lang.level}
                    </span>
                  </li>
                ))}
              </ul>
            </PanelCard>
          </div>
        </div>
      </div>
    </section>
  );
}
