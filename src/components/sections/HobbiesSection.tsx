import { SectionHeader } from "@/components/ui/section-header";
import { hobbies } from "@/data/portfolio";
import { Gamepad2, BookOpen, Waves, Sparkles } from "lucide-react";

const hobbyIcons: Record<string, React.ReactNode> = {
  Swimming: <Waves className="w-5 h-5" />,
  Gaming: <Gamepad2 className="w-5 h-5" />,
  Reading: <BookOpen className="w-5 h-5" />,
  "Continuous Learning": <Sparkles className="w-5 h-5" />,
};

export function HobbiesSection() {
  return (
    <section className="section-padding px-6 border-t border-border">
      <div className="max-w-5xl mx-auto">
        <SectionHeader label="04 — Life" title="Beyond code" align="center" />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
          {hobbies.map((hobby) => (
            <div
              key={hobby}
              className="surface-card flex flex-col items-center gap-3 p-6 text-center hover:border-primary/30 transition-colors"
            >
              <div className="text-primary">{hobbyIcons[hobby]}</div>
              <span className="text-sm font-medium">{hobby}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
