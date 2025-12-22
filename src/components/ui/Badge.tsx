import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "primary" | "outline";
  className?: string;
}

export function Badge({ children, variant = "default", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium transition-colors",
        variant === "default" && "bg-background-alt text-muted border border-border",
        variant === "primary" && "bg-gradient-to-r from-primary/10 to-accent/10 text-primary border border-primary/20",
        variant === "outline" && "border border-border text-muted hover:text-foreground",
        className
      )}
    >
      {children}
    </span>
  );
}
