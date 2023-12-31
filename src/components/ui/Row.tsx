import { HTMLAttributes, ReactNode } from "react";
import { VariantProps, cva } from "class-variance-authority";
import { cn } from "@/lib";

export const rowVariants = cva("flex", {
  variants: {
    justify: {
      start: "justify-start",
      center: "justify-center",
      end: "justify-end",
      between: "justify-between",
      around: "justify-around",
      evenly: "justify-evenly",
    },
    align: {
      default: "",
      start: "items-start",
      center: "items-center",
      end: "items-end",
      stretch: "items-stretch",
      baseline: "items-baseline",
    },
    wrap: {
      none: "flex-nowrap",
      wrap: "flex-wrap",
      wrapReverse: "flex-wrap-reverse",
    },
    position: {
      relative: "relative",
      absolute: "absolute",
      fixed: "fixed",
      sticky: "sticky",
    },
    direction: {
      row: "flex-row",
      rowReverse: "flex-row-reverse",
      col: "flex-col",
      colReverse: "flex-col-reverse",
    },
    gap: {
      none: "gap-0",
      xs: "gap-[0.625rem]",
      sm: "gap-[1.875rem]",
      md: "gap-[3.75rem]",
      lg: "gap-[5rem]",
      xl: "gap-[7.5rem]",
      "2xl": "gap-[10rem]",
      "3xl": "gap-[11.875rem]",
      "4xl": "gap-[14.375rem]",
      "5xl": "gap-[15.625rem]",
    },
    minWidth: {
      auto: "min-w-auto",
      "0": "min-w-0",
    },
  },
  defaultVariants: {
    justify: "start",
    align: "default",
    wrap: "none",
    position: "relative",
    direction: "row",
    gap: "none",
    minWidth: "auto",
  },
});

interface Props
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof rowVariants> {
  children: ReactNode;
  fullHeight?: boolean;
}

export const Row = ({
  children,
  className,
  align,
  wrap,
  justify,
  position,
  direction,
  gap,
  minWidth,
  fullHeight,
  ...props
}: Props) => {
  return (
    <div
      {...props}
      className={cn(
        rowVariants({
          align,
          wrap,
          justify,
          position,
          direction,
          gap,
          minWidth,
          className,
        }),
        fullHeight && "h-full"
      )}
    >
      {children}
    </div>
  );
};
