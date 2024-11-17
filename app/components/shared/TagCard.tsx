import Link from "next/link";
import React from "react";

interface ITagCard {
  tag: string;
}

const TagCard: React.FC<ITagCard> = ({ tag }) => {
  return (
    <div>
      <div className="border-pink-500/35 border inline-flex  rounded-md px-6 ">
        <Link href={`/certainBlog/${tag}`}>
          <h4 className="text-gray-600 font-medium text-xl">{tag}</h4>
        </Link>
      </div>
    </div>
  );
};

export default TagCard;
