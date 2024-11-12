import React from "react";
import { motion, MotionConfig } from "framer-motion";

const Welcome = () => {
  return (
    <div className="mt-20">
      <MotionConfig transition={{ duration: 0.5 }}>
        <div className="flex  flex-col gap-7 px-8 justify-center items-center mt-[100px]">
          <motion.div
            initial={{ opacity: 0, y: "20px" }}
            whileInView={{ opacity: 1, y: "0" }}
            transition={{ duration: 0.7 }}
          >
            <div className="uppercase text-[40px] sm:text-[60px] md:text-[65px] lg:text-[70px] xl:text-[80px]">
              <h2>О мне</h2>
            </div>
          </motion.div>
          <div className="my-4 flex">
            <hr className="border-t border-gray-300 w-[100px]" />
          </div>
          <div className="justify-center items-center">
            <motion.div
              initial={{ opacity: 0, y: "20px" }}
              whileInView={{ opacity: 1, y: "0" }}
              className="flex-1 px-20 flex "
            >
              <p className="text-primary/70 uppercase text-[30px] sm:text-xl md:text-2xl lg:text-2xl xl:text-3xl font-medium">
              Я - Ольга Жгун. Профессиональный кондитер с высшим образованием режиссёра и многолетним опытом работы на телевидении
              </p>
            </motion.div>
          </div>
        </div>
      </MotionConfig>
    </div>
  );
};

export default Welcome;
