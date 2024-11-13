import React from "react";
import BlogCard from "../shared/BlogCard";

const News = () => {
  return (
    <div id="blog">
      <div className="flex flex-col gap-8 justify-center items-center">
        <div className="uppercase flex flex-col items-center justify-center  text-[40px] sm:text-[60px] md:text-[65px] lg:text-[70px] xl:text-[80px]">
          <h2>Мой блог</h2>
          <h2>Новости, проекты, торты!</h2>
        </div>
        <div>
          <h3 className="text-3xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi,
            veritatis consequuntur aliquam quas distinctio amet.
          </h3>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <BlogCard
          title="hello world"
          description="About my new product"
          button="Читать дальше"
        />
        <BlogCard
          title="hello world"
          description="About my new product"
          button="Читать дальше"
        />
        <BlogCard
          title="hello world"
          description="About my new product"
          button="Читать дальше"
        />
        <BlogCard
          title="hello world"
          description="About my new product"
          button="Читать дальше"
        />
      </div>
    </div>
  );
};

export default News;
