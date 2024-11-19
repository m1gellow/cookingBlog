import News from "@/app/components/ui/CardsGrid";
import { getBlogData, getPostsByTag } from "@/app/lib/serverActions";
import { IBlogPosts } from "@/app/lib/types";
import { Metadata } from "next";

import React from "react";

export const revalidate = 30;

type tParams = Promise<{ tag: string }>;

export const metadata: Metadata = {
  title: "Мой блог",
  description: "Кулинарный Блог",
};

export async function generateStaticParams() {
  const data: IBlogPosts[] = await getBlogData();
  const tags = new Set(
    data.map((post) => post.tags.map((tag) => tag.title)).flat()
  ); // Collect unique tags

  return Array.from(tags).map((tag) => ({
    tag: encodeURIComponent(tag),
  }));
}
const CertainBlogPage = async (props: { params: tParams }) => {
  const { tag } = await props.params;
  const decodedTag = tag ? decodeURIComponent(tag) : "";
  const data = await getPostsByTag(decodedTag);

  return (
    <div className="container">
      <div className="flex justify-center items-center">
        <News posts={data} />
      </div>
    </div>
  );
};

export default CertainBlogPage;
