"use client";
import React from "react";
import BenefitsCard from "../shared/BenefitsCard";
import { motion, MotionConfig } from "framer-motion";

const Benefits = () => {
  return (
    <div>
      <MotionConfig transition={{ duration: 0.5 }}>
        <div className=" flex flex-col gap-8">
          <motion.div
            initial={{ opacity: 0, y: "20px" }}
            whileInView={{ opacity: 1, y: "0" }}
            className="flex justify-center items-center uppercase text-[40px] sm:text-[60px] md:text-[65px] lg:text-[70px] xl:text-[80px]"
          >
            <h2>Наши приемущества.</h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: "20px" }}
            whileInView={{ opacity: 1, y: "0" }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-4"
          >
            <div className="grid grid-cols-1 gap-4">
              <BenefitsCard
                button="Читать еще"
                color="purple"
                title="А как сделать?"
                content="Здесь можно найти рецепты не только десертов, но и блюд на каждый день для всей семьи."
              />
              <BenefitsCard
                button="Читать еще"
                color="pink"
                title="А как сделать?"
                content="Здесь можно найти рецепты не только десертов, но и блюд на каждый день для всей семьи."
              />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <BenefitsCard
                button="Читать еще"
                color="red"
                title="А как сделать?"
                content="Здесь можно найти рецепты не только десертов, но и блюд на каждый день для всей семьи."
              />
              <BenefitsCard
                button="Читать еще"
                color="blue"
                title="А как сделать?"
                content="Здесь можно найти рецепты не только десертов, но и блюд на каждый день для всей семьи."
              />
            </div>
          </motion.div>
        </div>
      </MotionConfig>
    </div>
  );
};

export default Benefits;
