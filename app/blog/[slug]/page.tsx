import React from "react";
import Cat from "../../../public/Cat.webp";
import Image from "next/image";

const BlogPage = () => {
  return (
    <div className="mt-[100px]">
      <div className="flex  items-center justify-center flex-col gap-8">
        <h1 className="text-[30px] sm:text-[50px] md:text-[60px] lg:text-[75px] xl:text-[80px] text-primary">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </h1>
        <div>
          <Image
            className="rounded-[20px]"
            width={1000}
            height={1000}
            priority
            objectFit="cover"
            src={Cat}
            alt="blogImage"
          />
        </div>
        <div className="uppercase v text-primary/70 text-[20px] sm:text-[25px] md:text-[30px] lg:text-[35px] xl:text-[35px]">
          <h2>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt,
            aliquam! Quidem illum tenetur voluptate repellendus harum cumque
            dicta, tempora repellat?
          </h2>
        </div>
      </div>
      <div className="my-4 flex w-full items-center justify-center py-20">
        <hr className="border-t border-gray-300 w-[100px]" />
      </div>

      <div>
        <h3 className="text-3xl">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum odit
          optio ipsa quia dolorum ipsum nesciunt, maxime rerum tempora cum,
          accusantium illum ducimus labore quis! Reiciendis voluptatem mollitia
          rem nobis labore, fugit doloribus saepe odit! Nobis laboriosam cumque,
          numquam architecto quibusdam modi fugiat minus omnis quas in,
          doloribus perspiciatis quod.
        </h3>
      </div>
    </div>
  );
};

export default BlogPage;
