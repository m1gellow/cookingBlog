import Image from "next/image";
import React from "react";
import Cat from '../../../public/Cat.webp'
import Link from "next/link";

interface IBlogCard {
  title: string;
  description: string;
  button: string;
  image?: string;
}

const BlogCard: React.FC<IBlogCard> = ({
  title,
  description,
  button,
}) => {
  return (
    <div>
      <div className="flex flex-col justify-center mt-[150px] items-center gap-3">
        <div className="">
            <Image src={Cat} alt="blogImage" className="rounded-[30px]" width={400} height={400}/>
        </div>
        <div className="flex flex-col justify-center items-center">
          <h2 className="text-[30px] sm:text-[30px] md:text-[35px] text-primary  lg:text-[25px] xl:text-[30px]">{title}</h2>
          <h3 className="uppercase line-clamp-2 text-[25px] sm:text-[20px] md:text-[20px] lg:text-[25px] xl:text-[20px] font-bold text-primary">{description}</h3>
        </div>
        {button &&  <button className="text-xl font-medium border-b-2"><Link href={'/blog/1'}>Читать больше</Link></button>}
      </div>
    </div>
  );
};

export default BlogCard;
