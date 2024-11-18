import React from "react";
import Link from "next/link";
import ImageCarousel from "@/app/components/shared/Carousel";
import { IBlogPosts } from "@/app/lib/types";
import { getCertainBlog } from "@/app/lib/serverActions";
import { PortableText } from "next-sanity";

type tParams = Promise<{ slug: string }>;

const PostPage = async (props: { params: tParams }) => {
  const { slug } = await props.params;
  try {
    const data: IBlogPosts = await getCertainBlog(slug);

    if (!data) {
      return <div>No blog post found.</div>;
    }

    return (
      <div className="mt-[100px] container flex flex-col gap-8">
        <div>
          <h1 className="text-[45px] sm:text-[60px] md:text-[75px] lg:text-[90px] xl:text-[100px] text-primary">
            {data.title}
          </h1>
        </div>
        <div className="relative w-full  overflow-hidden">
          <ImageCarousel images={data.titleImages} />
        </div>
        <div className="flex flex-col gap-20">
          <div className="flex flex-col items-center justify-center">
            <div>
              <h2 className="text-[20px] font-light sm:text-[30px] md:text-[40px] text-primary/80 lg:text-[40px] xl:text-[35px]">
                {data.smallDescription}
              </h2>
            </div>
            <div className="my-4 flex">
              <hr className="border-t border-gray-300 w-[100px]" />
            </div>
          </div>
          <div className="flex flex-col items-center justify-center">
            <p>
              By <Link href="https://vk.com/im?sel=2460419">Olga Kubay</Link>
            </p>
            <h3 className="text-[20px] font-light prose sm:text-[30px] md:text-[40px] text-primary/80 lg:text-[40px] xl:text-[35px]">
              <PortableText value={data.content} />
            </h3>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error("Error fetching blog post:", error);
    return <div>Failed to load blog post.</div>;
  }
};

export default PostPage;
