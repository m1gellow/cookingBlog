import { MetadataRoute } from "next";
import { IBlogPosts, IProducts } from "./lib/types";
import { getAllProducts, getBlogData } from "./lib/serverActions";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const BlogPosts: IBlogPosts[] = await getBlogData();
    const Products: IProducts[] = await getAllProducts();


    const blogPostsEntries: MetadataRoute.Sitemap = BlogPosts.map((post: IBlogPosts) => ({
        url: `https://culinary-world.ru/blog/${post.currentSlug}`
    }))

    const productsEntries: MetadataRoute.Sitemap = Products.map((product: IProducts) => ({
        url: `https://culinary-world.ru/catalog/${product.slug}`
    }))
 

   



    return[
        {
            url: `https://culinary-world.ru/catalog`,
        },
        ...blogPostsEntries,
        ...productsEntries,

    ]
}