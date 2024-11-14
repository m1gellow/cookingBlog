import React from "react";
import Image from "next/image";
import Projects from "../../../public/Projects.png";
import MainButton from "../shared/MainButton";
import Link from "next/link";

const Header = () => {
  return (
    <header className="h-screen flex items-center justify-center">
      <div className="flex flex-col lg:flex-row gap-20 lg:gap-2">
        <div className="flex-1 flex flex-col items-center lg:items-start gap-4">
          <p className="text-2xl">
            by{" "}
            <Link
              href="https://vk.com/okubai"
              className="border-b-2 border-black"
              target="_blank"
              rel="noopener noreferrer"
            >
              Olga Kubay
            </Link>
          </p>
          <h1 className="text-[60px] sm:text-[80px] md:text-[85px] lg:text-[90px] xl:text-[120px] text-primary">
            Кулинарный мир
          </h1>
          <div className="flex gap-4">
            <MainButton text="Выбрать торт" variant="filled" />
            <MainButton text="Читать блог" variant="ghost" />
          </div>
        </div>

        <div className="flex-1 flex items-center justify-center">
          <Image
            src={Projects}
            alt="Illustration of various culinary projects"
            width={600}
            height={600}
            loading="lazy"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;