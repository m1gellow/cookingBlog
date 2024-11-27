
import React from "react";
import BenefitsCard from "../shared/BenefitsCard";

import { IBenefits } from "@/app/lib/types";
import { getBenefitsData } from "@/app/lib/serverActions";


const Benefits = async() => {
  const title = "Наши преимущества";


  const data: IBenefits[] = await getBenefitsData();

  return (
    <div className="mt-[100px]">
    
        <div className="flex flex-col gap-8">
          <div
           
            className="flex flex-col items-center justify-center uppercase"
          >
            <h2>{title}</h2>
          </div>
          
          <div
       
            className="grid grid-cols-1 lg:grid-cols-2 gap-4"
          >
          {data.map((benefit, idx) =>(
             <BenefitsCard
                key={idx} 
                color='red'
                title={benefit.title}
                content={benefit.description}
              />
          ))}
             
       
          </div>
        </div>
   
    </div>
  );
};

export default Benefits;