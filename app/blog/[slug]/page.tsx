import React from "react";
import Link from "next/link";
import ImageCarousel from "@/app/components/shared/Carousel";

const BlogPage = () => {
  return (
    <div className="mt-[100px] container flex flex-col gap-8">
      <div className="">
        <h1 className="text-[45px] sm:text-[60px] md:text-[75px] lg:text-[90px] xl:text-[100px] text-primary">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum,
          in.
        </h1>
      </div>
      <div className="relative w-full  overflow-hidden">
        
        {/* <Image
          className="rounded"
          src={Cat} 
          alt="Example Image"
          layout="fill" 
          objectFit="cover"
        /> */}
        <ImageCarousel/>
      </div>
      <div className="container flex flex-col gap-20">
        <div className="flex flex-col items-center justify-center ">
          <div>
            <h2 className="text-[20px] font-light  sm:text-[30px] md:text-[40px] text-primary/80   lg:text-[40px] xl:text-[35px] ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perspiciatis temporibus doloribus libero hic beatae pariatur qui
              necessitatibus inventore earum reprehenderit!
            </h2>
          </div>
          <div className="my-4 flex">
            <hr className="border-t border-gray-300 w-[100px]" />
          </div>
        </div>
        <div className="flex flex-col items-center justify-center ">
          <p>
            By <Link href="https://vk.com/im?sel=2460419">Olga Kubay</Link>
          </p>
          <h3 className="text-[20px] font-light  sm:text-[30px] md:text-[40px] text-primary/80   lg:text-[40px] xl:text-[35px] ">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex dolores
            commodi dignissimos sequi cum impedit debitis porro. Exercitationem
            illo itaque consectetur libero iusto, cumque dolores eaque,
            voluptatum earum sequi obcaecati esse sit tenetur corporis
            blanditiis consequuntur repellendus doloribus aliquam! Animi est
            deleniti, dolorem recusandae iusto nam ad eligendi veniam voluptas
            non itaque assumenda autem ducimus corporis nisi laudantium sint qui
            dolor laboriosam iste expedita harum vel dolore nihil. Ipsam,
            aliquam! Praesentium adipisci ipsam veniam reiciendis ducimus
            officia autem vero sit quisquam ut eos quas, commodi, cupiditate
            ratione? Officiis inventore accusamus fugiat fugit magnam aperiam
            saepe commodi atque voluptatum molestiae eius consectetur numquam,
            totam quis aliquam in officia facere molestias mollitia impedit
            consequatur sunt debitis. Ducimus voluptatibus porro molestiae
            dolore commodi cum nostrum consequatur aut aspernatur corrupti odio
            exercitationem, dolor maxime soluta illum eos numquam provident.
            Repudiandae soluta quibusdam tenetur reiciendis earum! Nihil, omnis
            consequuntur impedit saepe quam officia eveniet quas.
          </h3>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
