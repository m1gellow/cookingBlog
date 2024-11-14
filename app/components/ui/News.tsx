import React from "react";
import BlogCard from "../shared/BlogCard";

const blogPosts = [
  {
    title: "Hello World",
    description: "About my new product and how to do like me if you want to pair something.",
    button: "Читать дальше",
  },
  {
    title: "Hello World",
    description: "About my new product.",
    button: "Читать дальше",
  },
  {
    title: "Hello World",
    description: "About my new product.",
    button: "Читать дальше",
  },
  {
    title: "Hello World",
    description: "About my new product.",
    button: "Читать дальше",
  },
];

const News = () => {
  return (
    <section id="blog" className="mt-[100px]">
      <div className="flex flex-col gap-8 items-center justify-center">
        <header className="flex flex-col gap-8 items-center justify-center text-center">
          <h2 className="uppercase text-[40px] sm:text-[60px] md:text-[65px] lg:text-[70px] xl:text-[80px]">
            Мой блог
          </h2>
          <h2 className="text-[40px] sm:text-[60px] md:text-[65px] lg:text-[70px] xl:text-[80px]">
            Новости, проекты, торты!
          </h2>
          <h3 className="text-3xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi,
            veritatis consequuntur aliquam quas distinctio amet.
          </h3>
        </header>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post, index) => (
            <BlogCard
              key={index} // Ideally, use a unique identifier instead of index
              title={post.title}
              description={post.description}
              button={post.button}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default News;