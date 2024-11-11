"use client";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { pageConfig } from "../../lib/pages.config";
import { AlignRight } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", closeMenu);

    return () => {
      document.removeEventListener("mousedown", closeMenu);
    };
  });

  return (
    <nav ref={menuRef}>
      <div className="absolute lg:hidden flex  justify-end items-center w-full px-8 ">
        <div>
          <AlignRight size={35} onClick={toggleMenu} />
          {isOpen ? (
            <div className="bg-white shadow-md py-5 px-4 rounded-md">
              <ul className="flex flex-col gap-4">
                <li>
                  <Link href={pageConfig.about} className="link">
                    О Нас
                  </Link>
                </li>
                <li>
                  <Link href={pageConfig.catalog} className="link">
                    Контакты
                  </Link>
                </li>
                <li>
                  <Link href={pageConfig.gallery} className="link">
                    Галерея десертов
                  </Link>
                </li>
                <li>
                  <Link href={pageConfig.gallery} className="link">
                    Каталог
                  </Link>
                </li>
              </ul>
            </div>
          ) : (
            <div></div>
          )}
        </div>
      </div>
      <div className=" container mt-8">
        <ul className="hidden lg:flex gap-10 justify-between  items-center">
          <li>
            <Link href={pageConfig.about} className="link">
              О Нас
            </Link>
          </li>
          <li>
            <Link href={pageConfig.catalog} className="link">
              Контакты
            </Link>
          </li>
          <li>
            <Link href={pageConfig.home} className="link">
              Logo
            </Link>
          </li>
          <li>
            <Link href={pageConfig.gallery} className="link">
              Галерея десертов
            </Link>
          </li>
          <li>
            <Link href={pageConfig.gallery} className="link">
              Каталог
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
