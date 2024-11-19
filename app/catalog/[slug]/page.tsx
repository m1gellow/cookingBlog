import React from "react";
import ImageCarousel from "@/app/components/shared/Carousel";
import MainButton from "@/app/components/shared/MainButton";
import { IProducts } from "@/app/lib/types";
import { getAllProducts, getProductBySlug } from "@/app/lib/serverActions";
import { Metadata } from "next";

export const revalidate = 30;
type tParams = Promise<{ slug: string }>;

export async function generateMetadata(props: {
  params: tParams;
}): Promise<Metadata> {
  const { slug } = await props.params;
  const data: IProducts = await getProductBySlug(slug);

  return {
    title: data.productTitle,
    description: data.productDescription,
  };
}

export async function generateStaticParams() {
  const data: IProducts[] = await getAllProducts();

  return data.map((product) => ({
    slug: product.slug,
  }));
}

const ProductPage = async (props: { params: tParams }) => {
  const { slug } = await props.params;

  const data: IProducts = await getProductBySlug(slug);

  return (
    <div className="mt-[100px] lg:mt-[200px]  container flex justify-center items-center flex-col lg:flex-row  gap-10">
      <div className="relative w-full overflow-hidden flex-1">
        <ImageCarousel images={data.productImages} />
      </div>
      <div className="flex flex-col  flex-1">
        <div className="flex flex-col ">
          <div>
            <h1 className="text-[45px] sm:text-[50px] md:text-[50px] lg:text-[60px] xl:text-[70px] text-primary">
              {data.productTitle}
            </h1>
          </div>
          <div>
            <h2 className="text-[20px]  sm:text-[30px] md:text-[40px] text-primary  lg:text-[40px] xl:text-[35px]">
              {data.productPrice}
            </h2>
            <h2 className="text-[25px] font-light sm:text-[25px] md:text-[25px] text-primary/80 lg:text-[25px] xl:text-[30px]">
              {data.productDescription}
            </h2>
          </div>
          <div className="my-4 flex">
            <hr className="border-t border-gray-300 w-[100px]" />
          </div>
          <div>
            <MainButton text="Заказать" href={data.buttonLink} variant="buy" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
