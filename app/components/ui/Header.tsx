import React from "react";
import Image from "next/image";
import MainButton from "../shared/MainButton";
import Link from "next/link";
import { getHeaderData } from "@/app/lib/serverActions";
import { HeaderData } from "@/app/lib/types";
import { urlFor } from "@/app/lib/sanity";

const Header = async () => {
  const data: HeaderData = await getHeaderData();

  return (
    <header className="h-screen flex items-center justify-center">
      <div className="flex flex-col lg:flex-row  lg:gap-20">
        <div className="flex-1 flex flex-col items-center lg:items-start gap-4">
          <p className="text-2xl">
            <Link
              href="https://vk.com/okubai"
              className="border-b-2 border-black"
              target="_blank"
              rel="noopener noreferrer"
            >
              {data.headerAuthor}
            </Link>
          </p>
          <h1>{data.title}</h1>
          <div className="flex gap-4">
            <MainButton text="Выбрать торт"   variant="filled" />
            <MainButton text="Читать блог" href="/#blog" variant="ghost" />
          </div>
        </div>

        <div className="flex-1 flex items-center justify-center">
          <Image
            src={urlFor(data.headerImage).url()}
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
