import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, forwardRef } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center font-medium transition-all duration-200 rounded-lg",
          // Size variants
          size === "sm" && "px-3 py-1.5 text-sm",
          size === "md" && "px-4 py-2 text-sm",
          size === "lg" && "px-6 py-3 text-base",
          // Style variants
          variant === "primary" &&
            "bg-gradient-to-r from-primary to-accent text-white hover:from-primary-glow hover:to-primary hover:shadow-lg hover:shadow-primary/25",
          variant === "secondary" &&
            "bg-background-alt text-foreground hover:bg-border",
          variant === "outline" &&
            "border border-border text-foreground hover:border-primary/50 hover:text-primary hover:bg-primary/5",
          variant === "ghost" && "text-muted hover:text-foreground hover:bg-background-alt",
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
