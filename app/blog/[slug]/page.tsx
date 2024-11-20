import React, { Suspense } from "react";
import Link from "next/link";
import ImageCarousel from "@/app/components/shared/Carousel";
import { IBlogPosts } from "@/app/lib/types";
import { getBlogData, getCertainBlog } from "@/app/lib/serverActions";
import { PortableText } from "next-sanity";
import { Metadata } from "next";
import Loading from "@/app/components/shared/Loading";

export const revalidate = 30;

type Params = Promise<{ slug: string }>;

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params;
  const data: IBlogPosts = await getCertainBlog(slug);

  return {
    title: data.title,
    description: data.smallDescription,
  };
}

export async function generateStaticParams() {
  const data: IBlogPosts[] = await getBlogData();

  return data.map(post => ({
    slug: post.currentSlug,
  }));
}

const PostPage = async ({ params }: { params: Params }) => {
  const { slug } = await params;

  try {
    const data: IBlogPosts = await getCertainBlog(slug);

    if (!data) {
      return <div>No blog post found.</div>;
    }

    return (
      <Suspense fallback={<Loading/>}>
        <div className="mt-[100px] container flex flex-col gap-8">
          <h1 className="text-[45px] sm:text-[60px] md:text-[75px] lg:text-[90px] xl:text-[100px] text-primary">
            {data.title}
          </h1>
          <div className="relative w-full overflow-hidden">
            <ImageCarousel images={data.titleImages} />
          </div>
          <div className="flex flex-col gap-20">
            <div className="flex flex-col items-center justify-center">
              <h2 className="text-[20px] font-light sm:text-[30px] md:text-[40px] text-primary/80 lg:text-[40px] xl:text-[35px]">
                {data.smallDescription}
              </h2>
              <hr className="border-t border-gray-300 w-[100px] my-4" />
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
      </Suspense>
    );
  } catch (error) {
    console.error("Error fetching blog post:", error);
    return <div>Failed to load blog post.</div>;
  }
};

export default PostPage;