"use client";
import Image from "next/image";
import React from "react";
import { urlFor } from "@/app/lib/sanity";
import MainButton from "./MainButton";

interface IBlogCard {
  title: string;
  description?: string;
  button?: string;
  images: string[];
  slug: string;
}

const BlogCard: React.FC<IBlogCard> = ({
  title,
  description,
  button,
  images,
  slug,
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
