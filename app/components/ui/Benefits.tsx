import React from "react";

const Benefits = () => {
  return (
    <div className="mt-[200px]">
      <div className="px-8 flex flex-col gap-8">
        <div className="flex flex-col justify-center items-center uppercase text-[40px] sm:text-[60px] md:text-[65px] lg:text-[70px] xl:text-[80px]">
          <h2>Наши приемущества которые</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="border-pink-300 border-2 rounded-[30px] p-6">
            <div>
              <h2 className="uppercase text-[25px] sm:text-[20px] md:text-[20px] lg:text-[25px] xl:text-[30px] text-primary/80">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste,
                aspernatur!
              </h2>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div className="border-purple-400 border-2 rounded-[30px] p-6">
              <h2 className="uppercase text-[25px] sm:text-[20px] md:text-[20px] lg:text-[25px] xl:text-[30px] text-primary/80">
              Здесь можно найти рецепты не только десертов, но и блюд на каждый день для всей семьи.
              </h2>
            </div>
            <div className="border-purple-400 border-2 rounded-[30px] p-6">
              <h2 className="uppercase text-[25px] sm:text-[20px] md:text-[20px] lg:text-[25px] xl:text-[30px] text-primary/80">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste,
                aspernatur!
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
