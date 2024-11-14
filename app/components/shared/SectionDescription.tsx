import React from "react";

const SectionDescription = ({ text }: { text: string }) => {
  return (
    <div>
      <h3 className="text-[30px] text-primary/70  sm:text-[35px] md:text-[40px]    lg:text-[40px] xl:text-[45px] ">
        {text}
      </h3>
    </div>
  );
};

export default SectionDescription;
