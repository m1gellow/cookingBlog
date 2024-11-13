import Image from "next/image";
import React from "react";
import Devider1 from "../../../public/Devider1.png";
import Devider2 from "../../../public/Devider2.png";
import Devider3 from "../../../public/Devider3.png";

interface IDevider {
  index: number;
}

const Devider: React.FC<IDevider> = ({ index }) => {
  return (
    <div className="py-[100px]">
      {index === 1 ? (
        <Image
          src={Devider1}
          width={250}
          height={250}
          loading="lazy"
          alt="devider"
        />
      ) : index === 2 ? (
        <Image
          src={Devider2}
          width={250}
          height={250}
          loading="lazy"
          alt="devider"
        />
      ) : index === 3 ? (
        <Image
          src={Devider3}
          width={250}
          height={250}
          loading="lazy"
          alt="devider"
        />
      ) : null}
    </div>
  );
};

export default Devider;
