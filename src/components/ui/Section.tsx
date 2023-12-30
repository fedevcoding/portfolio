import { cn } from "@/lib";
import React, { HTMLAttributes, ReactNode } from "react";

interface Props extends HTMLAttributes<HTMLElement> {
  theme: "primary" | "secondary";
  children: ReactNode;
}

function Section({ children, theme, ...props }: Props) {
  return (
    <section
      {...props}
      className={cn(
        `dark:bg-${theme === "primary" ? "landing" : "primary"}-dark bg-${
          theme === "primary" ? "landing" : "primary"
        }-light`,
        props.className
      )}
    >
      {children}
    </section>
  );
}

export default Section;
