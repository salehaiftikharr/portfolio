import { cn } from "@/lib/utils";
import { HTMLAttributes, forwardRef } from "react";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  hover?: boolean;
  gradient?: boolean;
}

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, hover = true, gradient = false, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "relative rounded-xl p-[1px] shadow-lg shadow-primary/5",
          gradient && "bg-gradient-to-br from-primary/20 via-border to-accent/20",
          !gradient && "bg-border",
          hover && "transition-all duration-300 hover:shadow-xl hover:shadow-primary/15 hover:-translate-y-1",
          hover && gradient && "hover:from-primary/40 hover:to-accent/40"
        )}
        {...props}
      >
        <div
          className={cn(
            "bg-background-alt rounded-xl p-6 h-full",
            className
          )}
        >
          {children}
        </div>
      </div>
    );
  }
);

Card.displayName = "Card";
