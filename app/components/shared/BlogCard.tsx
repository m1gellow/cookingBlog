import Image from "next/image";
import React from "react";
import Cat from "../../../public/Cat.webp";
import Link from "next/link";

interface IBlogCard {
  title: string;
  description: string;
  button: string;
  image?: string;
}

const BlogCard: React.FC<IBlogCard> = ({ title, description, button }) => {
  return (
    <div>
      <div className="flex items-center  justify-center gap-4 flex-col">
        <div>
          <Image
            className="rounded-lg"
            src={Cat}
            width={500}
            height={500}
            alt="BlogImage"
          />
        </div>
        <div className="flex items-center justify-center gap-4 flex-col max-w-[500px]">
          <h2 className="uppercase flex flex-col items-center justify-center  text-[25px] sm:text-[25px] md:text-[25px]  xl:text-[30px]">
            {title}
          </h2>
          <div className="max-w-[400px]">
            <h3 className="line-clamp-1 text-primary/85 text-2xl">
              {description}
            </h3>
          </div>
          {button && (
            <button className="text-xl font-medium border-b-2"><Link href={'/blog/1'}>{button}</Link></button>
          )}
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
