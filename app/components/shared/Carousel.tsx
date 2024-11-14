"use client";
import { useState } from "react";
import Image from "next/image";
import Cat from "../../../public/Cat.webp";

const images = [Cat, Cat, Cat, Cat];

const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="relative w-full h-[200px] sm:h-[400px] md:h-[600px] lg:h-[800px] xl:h-[1000px] overflow-hidden">
      <div
        className="absolute inset-0 transition-transform duration-500"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((src, index) => (
          <div key={index} className="relative w-full h-[1000px] overflow-hidden">
            <Image
              className="rounded"
              src={src}
              alt="Example Image"
         
              objectFit="cover"
            />
          </div>
        ))}
      </div>
      <button
        onClick={prevImage}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg"
      >
        &#10094; {/* Left Arrow */}
      </button>
      <button
        onClick={nextImage}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg"
      >
        &#10095; {/* Right Arrow */}
      </button>
    </div>
  );
};

export default ImageCarousel;
