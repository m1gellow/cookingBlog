import { cn } from "@/app/lib/utils";
import React from "react";

type TBorderColor = "pink" | "purple" | "green" | "blue" | "red";

interface BenefitsCardProps {
  color: TBorderColor;
  content: string;
  button: string;
  title: string;
}

const BenefitsCard: React.FC<BenefitsCardProps> = ({
  color,
  content,
  title,
  button,
}) => {
  return (
    <div>
      <div className={cn(`border-${color}-300 border-2  rounded-[30px] p-6`)}>
        <div className="flex flex-col gap-4 items-start justify-center">
          <h1 className="text-[30px] sm:text-[30px] md:text-[35px] text-primary font-semibold lg:text-[25px] xl:text-[35px]">
            {title}
          </h1>
          <h3 className="uppercase line-clamp-3 text-[25px] sm:text-[20px] md:text-[20px] lg:text-[25px] xl:text-[30px] text-primary/80">
            {content}
          </h3>
          {button && (
            <button className="text-xl font-medium border-b-2">{button}</button>
          )}
        </div>
      </div>
    </div>
  );
};

export default BenefitsCard;