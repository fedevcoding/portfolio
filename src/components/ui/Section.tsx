import { cn } from "@/lib";
import { HTMLAttributes, ReactNode } from "react";

interface Props extends HTMLAttributes<HTMLElement> {
  theme: "primary" | "secondary";
  children: ReactNode;
}

function Section({ children, theme, ...props }: Props) {
  return (
    <section
      {...props}
      className={cn(
        `${
          theme === "primary"
            ? "dark:bg-landing-dark bg-landing-light"
            : "dark:bg-primary-dark bg-primary-light"
        }`,
        props.className
      )}
    >
      {children}
    </section>
  );
}

export default Section;
