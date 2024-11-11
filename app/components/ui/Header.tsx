"use client";
import Image from "next/image";
import React from "react";
import Projects from "../../../public/Projects.png";
import { motion, MotionConfig } from "framer-motion";

const Header = () => {
  return (
    <header className="">
      <MotionConfig transition={{ duration: 0.7, ease: "easeInOut" }}>
        <div className="flex flex-col justify-center items-center">
          <motion.div
            initial={{ opacity: 0, y: "20px" }}
            whileInView={{ opacity: 1, y: "0" }}
            className="mt-20"
          >
            <h1 className="text-[40px] sm:text-[70px] md:text-[80px] lg:text-[85px] xl:text-[100px] text-primary">
              Кулинарный Мир
            </h1>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="w-full h-full flex justify-center lg:mt-20 mt-[100px] items-center"
          >
            <Image src={Projects} objectFit="cover" width={1700} height={1000} alt="works" />
          </motion.div>
        </div>
      </MotionConfig>
    </header>
  );
};

export default Header;
