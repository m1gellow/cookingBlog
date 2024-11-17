"use client";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { pageConfig } from "../../lib/pages.config";
import { AlignRight } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
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
  }, []); // Add an empty dependency array to run this effect only once

  return (
    <nav ref={menuRef} className="relative">
      <div className="absolute flex flex-col px-4 justify-end items-end lg:hidden w-full">
        <AlignRight
          size={35}
          onClick={toggleMenu}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          role="button"
          tabIndex={0}
        />
        {isOpen && (
          <div className="bg-white shadow-md py-5 px-4 rounded-md" id="mobile-menu">
            <ul className="flex flex-col gap-4">
              {Object.entries(pageConfig).map(([key, value]) => (
                <li key={key}>
                  <Link href={value} className="link">
                    {key === 'about' ? 'О Нас' : key === 'catalog' ? 'Каталог' : 'Галерея десертов'}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div className="container mt-8">
        <ul className="hidden lg:flex gap-10 justify-between items-center">
          <li>
            <Link href="/#aboutUs" className="link">
              О Нас
            </Link>
          </li>
          <li>
            <Link href={'/#contacts'} className="link">
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
            <Link href="/#blog" className="link">
              Блог
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;