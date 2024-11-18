
import Image from "next/image";
import React from "react";
import Link from "next/link";
import { urlFor } from "@/app/lib/sanity";
import MainButton from "./MainButton";

interface IProductCard {
  title: string;
  price?: string;
  button?: string;
  image: string;
  slug: string;
}

const ProductCard: React.FC<IProductCard> = ({
  title,
  price,
  button,
  image,
  slug,

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
      <div className="flex flex-col items-center gap-4 ">
        <h2 className="uppercase sm:text-[30px] lg:text-[35px]">{title}</h2>
        <div className="max-w-[400px] line-clamp-2">
          <h3 className="text-[20px] font-bold text-primary lg:text-[25px]">{price}</h3>
        </div>
        {button && (
          <Link href={`/catalog/${slug}`}>
            <MainButton text={button}  variant="buy" />
          </Link>
        )}
      </div>
    </article>
  );
};

export default ProductCard;