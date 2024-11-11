import React from "react";


// text-[40px] sm:text-[70px] md:text-[80px] lg:text-[85px] xl:text-[100px]
const Welcome = () => {
  return (
    <div>
      <div className="flex flex-col justify-center gap-4 items-center mt-[100px]">
        <h3 className="uppercase text-[25px] md:text-[25px] lg:text-[30px] xl:text-[40px]">Давайте познакомимся поближе!</h3>
        <div className="flex flex-col justify-center items-center">
          <h2 className="uppercase text-[40px] sm:text-[60px] md:text-[65px] lg:text-[70px] xl:text-[80px]">Меня зовут</h2>
          <h2 className="uppercase text-[40px] sm:text-[60px] md:text-[65px] lg:text-[70px] xl:text-[80px]"> Ольга</h2>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
