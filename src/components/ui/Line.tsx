import { cn } from "@/lib";

type Props = React.HTMLAttributes<HTMLDivElement>;

function Line({ className, ...other }: Props) {
  return (
    <div
      {...other}
      className={cn(
        "w-screen h-[1px] dark:bg-line-dark bg-line-light",
        className
      )}
    />
  );
}

export default Line;
