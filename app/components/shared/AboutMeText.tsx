import React from "react";
import Devider, { TDeviderIndex } from "./Devider";

interface IAboutMeText {
  text: string;
  devider?: TDeviderIndex;
}

const AboutMeText: React.FC<IAboutMeText> = ({ text, devider }) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <h2 className="text-[20px] sm:text-[35px] md:text-[40px] text-primary/85 lg:text-[40px] xl:text-[45px]">
        {text}
      </h2>
      {devider && <Devider index={devider} />}
    </div>
  );
};

export default AboutMeText;
