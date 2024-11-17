import { getTags } from "@/app/lib/serverActions";
import { ITags } from "@/app/lib/types";
import React from "react";
import TagCard from "./TagCard";

const TagLine = async () => {
  const data: ITags[] = await getTags();

  return (
    <div>
      <div className="flex items-center justify-center gap-4">
        {data.map((tag, idx) => (
          <div key={idx}>
            <TagCard tag={tag.title}/>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TagLine;
