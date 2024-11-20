import Link from "next/link";
import React from "react";

type TMainButtonVariant = "filled" | "ghost" | "buy";

interface IMainButton {
  text: string;
  variant: TMainButtonVariant;
  href: string;
}

const MainButton: React.FC<IMainButton> = ({ text, variant, href }) => {
  if (variant === "filled") {
    if (href) {
      return (
        <Link href={href}>
          <button className="bg-pink-500 text-white shadow-xl  border  font-bold py-4 px-6 rounded w-max text-xl ">
            {text}
          </button>
        </Link>
      );
    } else {
      return (
        <button className="bg-pink-500 text-white shadow-xl  border  font-bold py-4 px-6 rounded w-max text-xl ">
          {text}
        </button>
      );
    }
  }

  if (variant === "ghost") {
    if (href) {
      return (
        <Link href={href}>
          <button className="text-black shadow-xl border-primary border  font-bold py-4 px-6 rounded w-max text-xl ">
            {text}
          </button>
        </Link>
      );
    } else {
      return (
        <button className="bg-pink-500 text-white shadow-xl  border  font-bold py-4 px-6 rounded w-max text-xl ">
          {text}
        </button>
      );
    }
  }
  if (variant === "buy") {
    if (href) {
      return (
        <Link href={href}>
          <button className="bg-green-500 shadow-xl text-white font-bold py-4 px-6 rounded w-max text-xl ">
            {text}
          </button>
        </Link>
      );
    } else {
      return (
        <button className="bg-green-500 text-white shadow-xl    font-bold py-4 px-6 rounded w-max text-xl ">
          {text}
        </button>
      );
    }
  }
};

export default MainButton;

