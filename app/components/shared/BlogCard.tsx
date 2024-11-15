import Image from "next/image";
import React from "react";
import Link from "next/link";
import { urlFor } from "@/app/lib/sanity";

interface IBlogCard {
  title: string;
  description: string;
  button?: string;
  image: string;
  slug: string;
}

const BlogCard: React.FC<IBlogCard> = ({
  title,
  description,
  button,
  image,
  slug,
}) => {
  return (
    <article className="flex flex-col items-center justify-center gap-4">
      <Image
        className="rounded-lg"
        src={urlFor(image).url()}
        width={500}
        height={500}
        alt={`${title} image`}
      />
      <div className="flex flex-col items-center justify-center max-w-[500px]">
        <h2 className="uppercase text-[35px]">{title}</h2>
        <div className="max-w-[400px] line-clamp-2">
          <h3 className="text-[30px]">{description}</h3>
        </div>
        {button && (
          <Link href={`/blog/${slug}`}>
            <button className="text-xl font-medium border-b-2">{button}</button>
          </Link>
        )}
      </div>
    </article>
  );
};

export default BlogCard;
