import { HTMLAttributes, ReactNode } from "react";
import { VariantProps, cva } from "class-variance-authority";
import { cn } from "@/lib";

export const headingVariants = cva("font-bold", {
  variants: {
    variant: {
      h1: "text-5xl",
      h2: "text-3xl",
      h3: "text-2xl",
      h4: "text-xl",
      h5: "text-lg",
      h6: "text-base",
    },
    align: {
      left: "text-left",
      center: "text-center",
      right: "text-right",
    },
    letterGap: {
      sm: "tracking-normal",
      md: "tracking-wide",
      lg: "tracking-wider",
      xl: "tracking-widest",
      "2xl": "tracking-[0.2em]",
    },
    theme: {
      normal: "text-primary-light dark:text-primary-dark",
      opposite: "text-primary-dark dark:text-primary-light",
      secondary: "text-secondary-light dark:text-secondary-dark",
    },
    boldness: {
      normal: "font-normal",
      bold: "font-bold",
    },
  },
  defaultVariants: {
    theme: "normal",
    variant: "h1",
    align: "left",
    letterGap: "md",
    boldness: "bold",
  },
});

interface Props
  extends HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof headingVariants> {
  children: ReactNode;
}

export const Heading = ({
  children,
  className,
  letterGap,
  theme,
  variant,
  align,
  boldness,
  ...props
}: Props) => {
  return (
    <h1
      {...props}
      className={cn(
        headingVariants({
          variant,
          letterGap,
          align,
          theme,
          boldness,
          className,
        })
      )}
    >
      {children}
    </h1>
  );
};
