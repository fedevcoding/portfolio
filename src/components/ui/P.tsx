import { HTMLAttributes, ReactNode } from "react";
import { VariantProps, cva } from "class-variance-authority";
import { cn } from "@/lib";

export const pVariants = cva("text-base leading-normal", {
  variants: {
    align: {
      left: "text-left",
      center: "text-center",
      right: "text-right",
    },
    size: {
      sm: "text-sm",
      md: "text-base",
      lg: "text-lg",
      xl: "text-xl",
      "2xl": "text-2xl",
      "3xl": "text-3xl",
    },
    boldness: {
      normal: "font-normal",
      bold: "font-bold",
    },
    theme: {
      normal: "text-primary-light dark:text-primary-dark",
      opposite: "text-primary-dark dark:text-primary-light",
      secondary: "text-secondary-light dark:text-secondary-dark",
    },
    letterGap: {
      sm: "tracking-normal",
      md: "tracking-wide",
      lg: "tracking-wider",
      xl: "tracking-widest",
    },
    opacity: {
      sm: "opacity-20",
      md: "opacity-40",
      lg: "dark:opacity-60 opacity-80",
      xl: "opacity-80",
      full: "opacity-100",
    },
  },
  defaultVariants: {
    align: "left",
    size: "md",
    boldness: "normal",
    theme: "normal",
    letterGap: "md",
    opacity: "full",
  },
});

interface Props
  extends HTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof pVariants> {
  children: ReactNode;
}

export const P = ({
  children,
  className,
  size,
  align,
  boldness,
  theme,
  letterGap,
  opacity,
  ...props
}: Props) => {
  return (
    <p
      {...props}
      className={cn(
        pVariants({
          align,
          size,
          boldness,
          theme,
          letterGap,
          opacity,
          className,
        })
      )}
    >
      {children}
    </p>
  );
};
