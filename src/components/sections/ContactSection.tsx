import { PanelCard } from "@/components/ui/panel-card";
import { ContactForm } from "@/components/forms/ContactForm";
import { SectionHeader } from "@/components/ui/section-header";
import { personalInfo } from "@/data/portfolio";
import { Mail, MapPin, Phone, Briefcase } from "lucide-react";
import Link from "next/link";

const contactItems = [
  {
    href: `mailto:${personalInfo.email}`,
    icon: Mail,
    label: personalInfo.email,
    external: false,
  },
  {
    href: `tel:${personalInfo.phone.replace(/\s/g, "")}`,
    icon: Phone,
    label: personalInfo.phone,
    external: false,
  },
  {
    href: null,
    icon: MapPin,
    label: personalInfo.location,
    external: false,
  },
  {
    href: personalInfo.upwork,
    icon: Briefcase,
    label: "Upwork Profile",
    external: true,
  },
];

export function ContactSection() {
  return (
    <section
      id="contact"
      className="section-padding px-6 bg-muted/30"
    >
      <div className="max-w-5xl mx-auto">
        <SectionHeader
          label="05 — Contact"
          title="Let's work together"
          subtitle="Open to remote full-time roles, contract work, and freelance projects."
        />

        <div className="grid gap-6 lg:grid-cols-5 lg:items-start">
          <PanelCard title="Reach me" className="lg:col-span-2">
            <ul className="space-y-1">
              {contactItems.map((item) => {
                const Icon = item.icon;
                const content = (
                  <>
                    <span className="flex items-center justify-center w-9 h-9 rounded-lg bg-primary/10 text-primary shrink-0">
                      <Icon size={16} />
                    </span>
                    <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors break-all">
                      {item.label}
                    </span>
                  </>
                );

                if (item.href) {
                  return (
                    <li key={item.label}>
                      <Link
                        href={item.href}
                        target={item.external ? "_blank" : undefined}
                        rel={item.external ? "noopener noreferrer" : undefined}
                        className="group flex items-center gap-3 p-2.5 -mx-2.5 rounded-lg hover:bg-muted/50 transition-colors"
                      >
                        {content}
                      </Link>
                    </li>
                  );
                }

                return (
                  <li
                    key={item.label}
                    className="flex items-center gap-3 p-2.5 -mx-2.5"
                  >
                    {content}
                  </li>
                );
              })}
            </ul>
          </PanelCard>

          <PanelCard title="Send a message" className="lg:col-span-3">
            <ContactForm />
          </PanelCard>
        </div>
      </div>
    </section>
  );
}
