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
      <div className="flex flex-col  gap-4 items-start justify-center">
        <h2>
          {title}
        </h2>
        <h3 className="line-clamp-3">
          {content}
        </h3>
      </div>
    </div>
  );
};

export default BenefitsCard;
