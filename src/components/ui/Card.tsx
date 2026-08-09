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
          "relative rounded-xl bg-border p-[1px] shadow-xs",
          hover && "transition-all duration-300 hover:shadow-md hover:-translate-y-1",
          hover && gradient && "hover:bg-primary/40"
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
