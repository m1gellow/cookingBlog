"use client";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
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
  }, []);

  return (
    <nav ref={menuRef} className="relative z-20">
      <div className="absolute -translate-y-20  flex flex-col px-4 justify-end items-end lg:hidden w-full">
        <AlignRight
          size={35}
          onClick={toggleMenu}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          role="button"
          tabIndex={0}
        />
        {isOpen && (
          <div
            className="bg-white shadow-md py-5 px-4 rounded-md"
            id="mobile-menu"
          >
            <div className="flex flex-col gap-4">
              <Link href="/" className="link" onClick={() => setIsOpen(false)}>
                Домой
              </Link>
              <Link
                href="#contacts"
                className="link"
                onClick={() => setIsOpen(false)}
              >
                Контакты
              </Link>
              <Link
                href="#gallery"
                className="link"
                onClick={() => setIsOpen(false)}
              >
                Галерея Десертов
              </Link>
              <Link
                href="#blog"
                className="link"
                onClick={() => setIsOpen(false)}
              >
                Блог
              </Link>
              <Link
                href="#blog"
                className="link"
                onClick={() => setIsOpen(false)}
              >
                Блог
              </Link>
            </div>
          </div>
        )}
      </div>

      <div className="container mt-8">
        <ul className="hidden lg:flex gap-10 justify-between items-center">
          <li>
            <Link href="#about" className="link">
              О Нас
            </Link>
          </li>
          <li>
            <Link href="#contacts" className="link">
              Контакты
            </Link>
          </li>
          <li>
            <Link href="/" className="link">
              Logo
            </Link>
          </li>
          <li>
            <Link href="#gallery" className="link">
              Галерея десертов
            </Link>
          </li>
          <li>
            <Link href="#blog" className="link">
              Блог
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
