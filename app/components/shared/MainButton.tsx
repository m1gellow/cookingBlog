import Link from "next/link";
import React from "react";

type TMainButtonVariant = "filled" | "ghost" | "buy";

interface IMainButton {
  text: string;
  variant: TMainButtonVariant;
  href?: string;
}

const MainButton: React.FC<IMainButton> = ({ text, variant, href }) => {
  if (variant === "filled") {
    return (
      <button className="bg-pink-500 text-white font-bold py-4 px-6 rounded hover:bg-pink-600 w-max text-xl transition duration-300">
        {href ? (
          <Link target="_blank" href={href}>
            {text}
          </Link>
        ) : (
          text
        )}
      </button>
    );
  }

  if (variant === "ghost") {
    return (
      <button className="text-black shadow-xl border-primary border  font-bold py-4 px-6 rounded w-max text-xl ">
        {href ? (
          <Link target="_blank" href={href}>
            {text}
          </Link>
        ) : (
          text
        )}
      </button>
    );
  }
  if (variant === "buy") {
    return (
      <button className="bg-green-500 text-white shadow-xl  border  font-bold py-4 px-6 rounded w-max text-xl ">
        {href ? (
          <Link target="_blank" href={href}>
            {text}
          </Link>
        ) : (
          text
        )}
      </button>
    );
  }
};

export default MainButton;
