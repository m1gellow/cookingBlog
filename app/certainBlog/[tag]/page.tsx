import News from "@/app/components/ui/News";
import { getPostsByTag } from "@/app/lib/serverActions";
import React from "react";

type tParams = Promise<{ tag: string }>;

const CertainBlogPage = async (props: { params: tParams }) => {

  const { tag } = await props.params;
  const decodedTag = tag ? decodeURIComponent(tag) : '';
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
