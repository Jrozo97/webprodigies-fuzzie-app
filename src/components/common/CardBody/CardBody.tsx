"use client";

import { CardBodyProps } from "@/lib/types";
import { cn } from "@/lib/utils";

export const CardBody = ({
  children,
  className,
}: CardBodyProps) => {
  return (
    <div
      className={cn(
        "h-96 w-96 [transform-style:preserve-3d]  [&>*]:[transform-style:preserve-3d]",
        className
      )}
    >
      {children}
    </div>
  );
};

export default CardBody;