import { ImgHTMLAttributes } from "react";
import { VariantProps, cva } from "class-variance-authority";
import { cn } from "@/lib";

export const imgVariants = cva("", {
  variants: {
    border: {
      default: "",
      rounded: "rounded-lg",
    },
    size: {
      sm: "w-[1.5rem]",
      "sm-2": "w-[2rem]",
      md: "w-[2.2rem]",
      "md-2": "w-[3.5rem]",
      lg: "w-[6.25rem]",
      xl: "w-[12.5rem]",
      "2xl": "w-[18.75rem]",
      "3xl": "w-[25rem]",
    },
    aspect: {
      none: "",
      square: "aspect-square",
    },
    fit: {
      cover: "object-cover",
      contain: "object-contain",
    },
  },
  defaultVariants: {
    border: "default",
    size: "lg",
    aspect: "none",
    fit: "cover",
  },
});

type Props = Omit<ImgHTMLAttributes<HTMLImageElement>, "src"> &
  VariantProps<typeof imgVariants> & {
    alt: string;
    src: string;
    invertLight?: boolean;
    invertDark?: boolean;
  };

export const Img = ({
  className,
  size,
  border,
  aspect,
  src,
  alt,
  fit,
  invertLight = false,
  invertDark = false,
  ...props
}: Props) => {
  return (
    <img
      {...props}
      src={src}
      className={cn(
        `${
          invertLight ? "invert dark:invert-0" : invertDark ? "dark:invert" : ""
        }`,
        imgVariants({ border, size, aspect, fit, className })
      )}
      alt={alt}
    />
  );
};
