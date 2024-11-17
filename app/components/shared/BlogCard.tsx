'use client'
import Image from "next/image";
import React from "react";
import Link from "next/link";
import { urlFor } from "@/app/lib/sanity";
import MainButton from "./MainButton";
import TagCard from "./TagCard";

interface IBlogCard {
  title: string;
  description: string;
  button?: string;
  image: string;
  slug: string;
  tag: {
    title: string;
  }[];
}

const BlogCard: React.FC<IBlogCard> = ({
  title,
  description,
  button,
  image,
  slug,
  tag,
}) => {
  return (
    <article className="flex flex-col items-center gap-4">
      <Image
        className="rounded-lg"
        src={urlFor(image).url()}
        width={1000}
        height={1000}
        alt={`${title} image`}
      />
      <div className="flex flex-col items-center justify-center gap-4 ">
        <h2 className="uppercase sm:text-[30px] lg:text-[35px]">{title}</h2>

        <div className="flex items-center justify-center gap-4">
          {tag.map((tag, idx) => (
            <TagCard key={idx} tag={tag.title} />
          ))}
        </div>

        <div className="max-w-[400px] line-clamp-2">
          <h3 className="text-[20px] lg:text-[25px]">{description}</h3>
        </div>
        {button && (
          <Link href={`/blog/${slug}`}>
            <MainButton text={button} variant="filled" />
          </Link>
        )}
      </div>
    </article>
  );
};

export default BlogCard;
