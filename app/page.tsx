import Header from "./components/ui/Header";
import Welcome from "./components/ui/Welcome";
import Benefits from "./components/ui/Benefits";
import Devider from "./components/shared/Devider";
import { getBlogData } from "./lib/serverActions";
import { IBlogPosts } from "./lib/types";
import Contacts from "./components/ui/Contacts";
import CardsGrid from "./components/ui/CardsGrid";
import { Suspense } from "react";
import Loading from "./components/shared/Loading";

export const revalidate = 30;

export async function generateStaticParams() {
  const data = await getBlogData();

  return data.map(({ post }: { post: string }) => ({
    slug: post,
  }));
}

export default async function Home() {
  const data: IBlogPosts[] = await getBlogData();

  return (
    <div className="flex flex-col items-center container  justify-center ">
      <Header />
      <Devider index={1} />
      <Welcome />
      <Benefits />
      <Devider index={3} />
      <Suspense fallback={<Loading/>}>
        <CardsGrid posts={data} />
      </Suspense>

      <Devider index={2} />
      <Contacts />
    </div>
  );
}
