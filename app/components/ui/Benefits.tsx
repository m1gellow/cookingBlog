"use client";
import React from "react";
import BenefitsCard from "../shared/BenefitsCard";
import { motion, MotionConfig } from "framer-motion";
import SectionDescription from "../shared/SectionDescription";

const benefitsData = [
  { color: "purple", title: "А как сделать?", content: "Здесь можно найти рецепты не только десертов, но и блюд на каждый день для всей семьи." },
  { color: "pink", title: "А как сделать?", content: "Здесь можно найти рецепты не только десертов, но и блюд на каждый день для всей семьи." },
  { color: "red", title: "А как сделать?", content: "Здесь можно найти рецепты не только десертов, но и блюд на каждый день для всей семьи." },
  { color: "blue", title: "А как сделать?", content: "Здесь можно найти рецепты не только десертов, но и блюд на каждый день для всей семьи." },
];

const Benefits = () => {
  return (
    <div className="mt-[100px]">
      <MotionConfig transition={{ duration: 0.5 }}>
        <div className="flex flex-col gap-8">
          <motion.div
            initial={{ opacity: 0, y: "20px" }}
            whileInView={{ opacity: 1, y: "0" }}
            className="flex flex-col items-center justify-center uppercase text-[30px] sm:text-[40px] md:text-[65px] lg:text-[70px] xl:text-[80px]"
          >
            <h2>Наши преимущества.</h2>
            <SectionDescription text="Преимущества, которые стоит попробовать!" />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: "20px" }}
            whileInView={{ opacity: 1, y: "0" }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-4"
          >
            {benefitsData.map((benefit, index) => (
              <BenefitsCard
                key={index} // Ideally, use a unique identifier instead of index
                color='green'
                title={benefit.title}
                content={benefit.content}
              />
            ))}
          </motion.div>
        </div>
      </MotionConfig>
    </div>
  );
};

export default Benefits;