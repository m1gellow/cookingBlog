import Link from "next/link";
import React from "react";

interface ITagCard {
  tag: string;
}

const TagCard: React.FC<ITagCard> = ({tag}: {tag: string}) => {
  return (
    <div>
      <div className=" border inline-flex py-2 px-5 rounded-md hover:border-pink-500/30">
        <Link href={`/certainBlog/${tag}`}>
          <h4 className=" font-medium text-xl">{tag}</h4>
        </Link>
      </div>
    </div>
  );
};

export default TagCard;
