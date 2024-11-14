import Image from "next/image";
import React from "react";
import Cat from "../../../public/Cat.webp";
import Link from "next/link";

interface IBlogCard {
  title: string;
  description: string;
  button: string;
  image?: string; // You can use this prop if you want to make the image dynamic
}

const BlogCard: React.FC<IBlogCard> = ({ title, description, button, image = Cat }) => {
  return (
    <article className="flex flex-col items-center justify-center gap-4">
      <Image
        className="rounded-lg"
        src={image}
        width={500}
        height={500}
        alt={`${title} image`}
      />
      <div className="flex flex-col items-center justify-center max-w-[500px]">
        <h2 className="uppercase text-[25px] sm:text-[25px] md:text-[25px] xl:text-[30px] text-center">
          {title}
        </h2>
        <div className="max-w-[400px]">
          <h3 className="line-clamp-1 text-primary/85 text-2xl text-center">
            {description}
          </h3>
        </div>
        {button && (
          <Link href={'/blog/1'}>
            <button className="text-xl font-medium border-b-2">
              {button}
            </button>
          </Link>
        )}
      </div>
    </article>
  );
};

export default BlogCard;