import React from "react";
import BlogCard from "../shared/BlogCard";
import { getBlogData } from "@/app/lib/serverActions";
import { IBlogPosts } from "@/app/lib/types";


const News = async() => {

  const data: IBlogPosts[] = await getBlogData();


  return (
    <section id="blog" className="mt-[100px]">
      <div className="flex flex-col gap-8 items-center justify-center">
        <header className="flex flex-col gap-8 items-center justify-center text-center">
          <h2 className="uppercase">
            Мой блог
          </h2>
          <h2>
            Новости, проекты, торты!
          </h2>
        </header>
        <div className="grid grid-cols-1  gap-8 md:grid-cols-2 lg:grid-cols-3">
           {data.map((post, idx) => (
            <BlogCard key={idx} slug={post.currentSlug} image={post.titleImage} button="Читать дальше" title={post.title} description={post.smallDescription}/>
           ))}
           {data.map((post, idx) => (
            <BlogCard key={idx} slug={post.currentSlug} image={post.titleImage} button="Читать дальше" title={post.title} description={post.smallDescription}/>
           ))}
           {data.map((post, idx) => (
            <BlogCard key={idx} slug={post.currentSlug} image={post.titleImage} button="Читать дальше" title={post.title} description={post.smallDescription}/>
           ))}
           {data.map((post, idx) => (
            <BlogCard key={idx} slug={post.currentSlug} image={post.titleImage} button="Читать дальше" title={post.title} description={post.smallDescription}/>
           ))}
         
        </div>
      </div>
    </section>
  );
};

export default News;