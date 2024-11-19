import React from "react";
import BlogCard from "../shared/BlogCard";
import { IBlogPosts } from "@/app/lib/types";
import TagLine from "../shared/TagLine";

interface ICardsGrid {
  posts: IBlogPosts[];
}

const CardsGrid: React.FC<ICardsGrid> = async ({ posts }) => {
  return (
    <section id="blog" className="mt-[100px]">
      <div className="flex flex-col gap-8 items-center justify-center">
        <header className="flex flex-col gap-8 items-center justify-center text-center">
          <h2 className="uppercase">Мой блог</h2>
          <h2>Новости, проекты, торты!</h2>
        </header>{" "}
        <TagLine />
        <div className="grid grid-cols-1 justify-center items-center  gap-8 md:grid-cols-2 lg:grid-cols-2">
          {posts.map((post, idx) => (
            <BlogCard
              tag={post.tags}
              key={idx}
              slug={post.currentSlug}
              images={post.titleImages}
              button="Читать дальше"
              title={post.title}
              description={post.smallDescription}
            />
            
          ))}
        </div>
      </div>
    </section>
  );
};

export default CardsGrid;
