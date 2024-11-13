"use client";
import React from "react";
import { motion, MotionConfig } from "framer-motion";
import Image from "next/image";
import Projects from "../../../public/Projects.png";
import MainButton from "../shared/MainButton";
import Link from "next/link";

const Header = () => {
  return (
    <header>
      <MotionConfig transition={{ duration: 0.7, ease: "easeInOut" }}>
        <div className="flex items-center justify-center h-screen ">
          <div className="flex lg:flex-row gap-20 lg:gap-2l flex-col ">
            <motion.div
              initial={{ opacity: 0, y: "20px" }}
              whileInView={{ opacity: 1, y: "0" }}
              className="flex-1 flex gap-4 flex-col items-center lg:items-start"
            >
              <p className="text-2xl">
                by{" "}
                <Link
                  href={"https://vk.com/okubai"}
                  className="border-black border-b-2"
                >
                  Olga Kubay
                </Link>
              </p>
              <h1 className="text-[60px] sm:text-[80px] md:text-[85px] lg:text-[90px] xl:text-[120px] text-primary">
                Кулинарный Мир
              </h1>
              <MainButton />
            </motion.div>

            <motion.div className="flex-1 flex items-center justify-center">
              <Image
                src={Projects}
                alt="ProjectsImage"
                width={600}
                height={600}
                loading="lazy"
              />
            </motion.div>
          </div>
        </div>
      </MotionConfig>
    </header>
  );
};

export default Header;
