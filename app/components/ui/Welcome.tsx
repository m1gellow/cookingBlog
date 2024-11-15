import React from "react";
import SectionDescription from "../shared/SectionDescription";
import { getAboutMeData } from "@/app/lib/serverActions";
import { IAboutMe } from "@/app/lib/types";
import AboutMeText from "../shared/AboutMeText";

export const revalidate = 30;

const Welcome = async () => {
  const title = "О мне";
  const descriptionText = "Давайте познакомимся!";

  const data: IAboutMe[] = await getAboutMeData();

  return (
    <div id="aboutUs" className=" flex flex-col gap-7 items-center">
      <div>
        <div className="flex flex-col items-center">
          <h2>{title}</h2>
          <SectionDescription text={descriptionText} />
        </div>
      </div>
      <div className="my-4 flex">
        <hr className="border-t border-gray-300 w-[100px]" />
      </div>
      <div>
        {data.map((content, idx) => (
          <AboutMeText key={idx} devider={2} text={content.content} />
        ))}
      </div>
    </div>
  );
};

export default Welcome;
