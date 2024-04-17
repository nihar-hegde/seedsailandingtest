import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
  customClasses?: string;
}

export const CardWrapper = ({ children, customClasses }: Props) => {
  return (
    <div className={cn("rounded-md bg-[#0098d9]/10 px-2 py-4", customClasses)}>
      {children}
    </div>
  );
};
