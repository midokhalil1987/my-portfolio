import { cn } from "@/lib/utils";

type PanelCardProps = {
  title: string;
  children: React.ReactNode;
  className?: string;
};

export function PanelCard({ title, children, className }: PanelCardProps) {
  return (
    <div
      className={cn(
        "rounded-xl border border-border/70 bg-card overflow-hidden",
        "shadow-sm ring-1 ring-black/[0.03] dark:ring-white/[0.04]",
        className
      )}
    >
      <div className="flex items-center gap-2.5 px-5 py-3.5 border-b border-border/60 bg-muted/40 dark:bg-muted/25">
        <span className="w-1 h-4 rounded-full bg-primary shrink-0" />
        <h3 className="text-sm font-semibold tracking-tight">{title}</h3>
      </div>
      <div className="p-5 md:p-6">{children}</div>
    </div>
  );
}
