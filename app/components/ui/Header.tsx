
import React from "react";

import Image from "next/image";
import Projects from "../../../public/Projects.png";
import MainButton from "../shared/MainButton";
import Link from "next/link";
import { getTitle } from "@/app/lib/serverActions";

interface Title{
  title: string;
}

export const revalidata = 30;

const Header = async() => {

  const data: Title = await getTitle();


  return (
    <header>
      <div className="flex items-center justify-center h-screen ">
        <div className="flex lg:flex-row gap-20 lg:gap-2l flex-col ">
          <div className="flex-1 flex gap-4 flex-col items-center lg:items-start">
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
              {data.title}
            </h1>
            <div className="flex gap-4 ">
              <MainButton text="Выбрать торт" variant="filled" />
              <MainButton text="Читать блог" variant="ghost" />
            </div>
          </div>

          <div className="flex-1 flex items-center justify-center">
            <Image
              src={Projects}
              alt="ProjectsImage"
              width={600}
              height={600}
              loading="lazy"
            />
          </div>
        </div>
      </div>{" "}
    </header>
  );
};

export default Header;
