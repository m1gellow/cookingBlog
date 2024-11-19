import React from "react";
import Catalog from "../components/ui/Catalog";
import { getAllProducts } from "../lib/serverActions";
import { IProducts } from "../lib/types";
import { Metadata } from "next";

export const revalidate = 30;

export const metadata: Metadata = {
  title: "Посмотреть мои товары",
  description: "Здесь мы можете приорести мои изделия",
};

const CatalogPage = async () => {
  const data: IProducts[] = await getAllProducts();

  return (
    <div className="container">
      <div className="">
        <Catalog products={data} />
      </div>
    </div>
  );
};

export default CatalogPage;
