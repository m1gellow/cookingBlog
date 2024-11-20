"use client";
import Image from "next/image";
import React from "react";
import { urlFor } from "@/app/lib/sanity";
import MainButton from "./MainButton";
import TagCard from "./TagCard";

interface IBlogCard {
  title: string;
  description?: string;
  button?: string;
  images: string[];
  slug: string;
  tag: {
    title: string;
  }[];
}

const BlogCard: React.FC<IBlogCard> = ({
  title,
  description,
  button,
  images,
  slug,
  tag,
}) => {
  return (
    <div className="max-w-sm bg-white border flex flex-col  border-gray-200 rounded-lg shadow-md">
      <Image
        className="rounded-lg"
        src={urlFor(images[0]).url()}
        width={1000}
        height={1000}
        alt={`${title} image`}
        loading="lazy"
      />
      <div className="flex gap-4 px-3 py-3">
        {tag.map((tag, idx) => (
          <TagCard key={idx} tag={tag.title} />
        ))}
      </div>

      <div className="p-5">
        <h2 className="mb-2 text-3xl  text-primary">{title}</h2>
        <p className="mb-3 font-normal line-clamp-3 text-gray-700 text-xl">
          {description}
        </p>
        {button && (
          <MainButton text={button} href={`/blog/${slug}`} variant="filled" />
        )}
      </div>
    </div>
  );
};

export default BlogCard;
