import { cn } from "@/app/lib/utils";
import Link from "next/link";
import React from "react";

type TMainButtonVariant = "filled" | "ghost" | "buy";

interface IMainButton {
  text: string;
  variant: TMainButtonVariant;
  href?: string; // Сделаем href необязательным
}

const MainButton: React.FC<IMainButton> = ({ text, variant, href }) => {
  const baseClasses = "font-bold py-4 px-6 rounded w-max text-xl shadow-xl transition-transform duration-200 ease-in-out";
  
  const variantClasses = {
    filled: "bg-pink-500 text-white hover:bg-pink-600 hover:scale-105",
    ghost: "text-black border border-primary hover:scale-105",
    buy: "bg-green-500 text-white hover:bg-green-600 hover:scale-105",
  };



  const button = (
    <button className={cn(baseClasses, variantClasses[variant])} type="button">
      {text}
    </button>
  );

  return href ? (
    <Link href={href}>
      {button}
    </Link>
  ) : (
    button
  );
};

export default MainButton;