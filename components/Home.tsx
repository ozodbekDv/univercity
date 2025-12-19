import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";

function Home() {
  return (
    <div className="flex  items-center justify-center bg-zinc-50 font-sans dark:bg-black h-full">
      <div className="custom-container flex justify-between items-center ">
        <div className="font-epilogue flex flex-col gap-4 items-start">
          <p className="text-[#704FE6] font-poppins font-bold text-2xl">
            Iqtisodiyot Fakultetiga hush kelibsiz!
          </p>
          <h1 className="text-3xl font-bold">
            Milliy va global iqtisodiyot <br /> yetakchilari shu yerda yetishadi
          </h1>
          <Button className="bg-[#17254E] rounded-3xl text-white">
            Ko'proq
          </Button>
        </div>
        <Image
          className="rounded-3xl"
          src={"/images/slide1.jpg"}
          alt="iqtisodiyot ustozlar"
          width={600}
          height={400}
        />
      </div>
    </div>
  );
}

export default Home;
