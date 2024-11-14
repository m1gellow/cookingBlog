import React from "react";
import { motion, MotionConfig } from "framer-motion";
import AboutMeText from "../shared/AboutMeText";
import SectionDescription from "../shared/SectionDescription";

const animationConfig = {
  initial: { opacity: 0, y: "20px" },
  whileInView: { opacity: 1, y: "0" },
  transition: { duration: 0.7 },
};

const Welcome = () => {
  const title = "О мне";
  const descriptionText = "Давайте познакомимся!";
  const aboutMeTexts = [
    "Я - Ольга Жгун. Профессиональный кондитер с высшим образованием режиссёра и многолетним опытом работы на телевидении",
    "Lorem ipsum dolor sit amet, consectetur adipiscing",
    "veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in",
  ];

  return (
    <div id="aboutUs" className="mt-[100px] flex flex-col gap-7 items-center">
      <MotionConfig transition={{ duration: 0.5 }}>
        <motion.div {...animationConfig}>
          <div className="flex flex-col items-center">
            <h2 className="uppercase text-[40px] sm:text-[60px] md:text-[65px] lg:text-[70px] xl:text-[80px]">{title}</h2>
            <SectionDescription text={descriptionText} />
          </div>
        </motion.div>
        <div className="my-4 flex">
          <hr className="border-t border-gray-300 w-[100px]" />
        </div>
        <div>
          {aboutMeTexts.map((text, index) => (
            <AboutMeText key={index} devider={index === 0 ? 3 : undefined} text={text} />
          ))}
        </div>
      </MotionConfig>
    </div>
  );
};

export default Welcome;