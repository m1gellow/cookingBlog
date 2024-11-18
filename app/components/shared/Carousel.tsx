"use client";
import { useState } from "react";
import Image from "next/image";
import { urlFor } from "@/app/lib/sanity";

const ImageCarousel = ({ images }: { images: string[] }) => {
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
    <div className="relative flex justify-center items-center  ">

      <div className="relative w-[1000px] overflow-hidden">
        <Image
          className="rounded"
          src={urlFor(images[currentIndex]).url()}
          alt="Example Image"
       
          width={1000}
          height={1000}
        />
      </div>
      <button
        onClick={prevImage}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow"
      >
        &#10094;
      </button>
      <button
        onClick={nextImage}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow"
      >
        &#10095;
      </button>
    </div>
  );
};

export default ImageCarousel;
