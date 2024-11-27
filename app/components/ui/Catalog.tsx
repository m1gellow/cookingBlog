import React from "react";
import ProductCard from "../shared/ProductCard";
import { IProducts } from "@/app/lib/types";

const Catalog = async ({ products }: { products: IProducts[] }) => {
  const title = "Мои изделия";
  const description = "Здесь вы можете приобрести наши изделия!";

  return (
    <div>
      <section id="blog" className="mt-[100px]">
        <div className="flex flex-col gap-8 items-center justify-center">
          <header className="flex flex-col gap-8 items-center justify-center text-center">
            <h2 className="uppercase">{title}</h2>
            <h2>{description}</h2>
          </header>{" "}
          <div className="grid grid-cols-1 justify-center items-center gap-8 md:grid-cols-2 lg:grid-cols-3">
            {products.map((product, idx) => (
              <div key={idx}>
                <ProductCard
                  title={product.productTitle}
                  price={product.productPrice}
                  button={product.productButton}
                  slug={product.slug}
                  image={product.productImages[0]}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Catalog;
