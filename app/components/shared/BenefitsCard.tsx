import { cn } from "@/app/lib/utils";
import React from "react";

type TBorderColor = "pink" | "purple" | "green" | "blue" | "red";

interface BenefitsCardProps {
  color: TBorderColor;
  content: string;
  title: string;
}

const BenefitsCard: React.FC<BenefitsCardProps> = ({
  color,
  content,
  title,
}) => {
  return (
    <div className={cn(`border-${color}-300 border-2 rounded-[30px] p-6`)}>
      <div className="flex flex-col gap-4 items-start justify-center">
        <h2 className="text-[25px] sm:text-[30px] md:text-[35px] lg:text-[25px] xl:text-[35px] text-primary font-semibold">
          {title}
        </h2>
        <h3 className="uppercase line-clamp-3 text-[20px]  md:text-[20px] lg:text-[25px] xl:text-[30px] text-primary/80">
          {content}
        </h3>
      </div>
    </div>
  );
};

export default BenefitsCard;
