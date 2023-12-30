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
      sm: "w-[20px]",
      "sm-2": "w-[32px]",
      md: "w-[40px]",
      "md-2": "w-[55px]",
      lg: "w-[100px]",
      "2lg": "w-[140px]",
      "3lg": "w-[170px]",
      xl: "w-[200px]",
      "2xl": "w-[300px]",
      "6xl": "w-[900px]",
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
