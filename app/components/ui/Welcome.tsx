import React from "react";
import { motion, MotionConfig } from "framer-motion";
import AboutMeText from "../shared/AboutMeText";
import SectionDescription from "../shared/SectionDescription";

const Welcome = () => {
  return (
    <div id="aboutUs">
      <MotionConfig transition={{ duration: 0.5 }}>
        <div className="flex  flex-col gap-7 justify-center items-center mt-[100px]">
          <motion.div
            initial={{ opacity: 0, y: "20px" }}
            whileInView={{ opacity: 1, y: "0" }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex flex-col items-center justify-center">
              <div className="uppercase text-[40px] sm:text-[60px] md:text-[65px]  lg:text-[70px] xl:text-[80px]">
                <h2>О мне</h2>
              </div>
              <div>
                <SectionDescription text="Давайте познакомимся!" />
              </div>
            </div>
          </motion.div>
          <div className="my-4 flex">
            <hr className="border-t border-gray-300 w-[100px]" />
          </div>
          <div>
            <AboutMeText
              devider={3}
              text="  Я - Ольга Жгун. Профессиональный кондитер с высшим образованием
            режиссёра и многолетним опытом работы на телевидении"
            />
            <AboutMeText
              devider={3}
              text=" Lorem ipsum dolor sit amet, consectetur adipiscing "
            />
            <AboutMeText text=" veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in" />
          </div>
        </div>
      </MotionConfig>
    </div>
  );
};

export default Welcome;
