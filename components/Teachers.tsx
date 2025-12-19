import React from "react";

function Teachers() {
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
          <button className="bg-[#17254E] rounded-3xl text-white">
            Ko'proq
          </button>
        </div>
      </div>
    </div>
  );
}

export default Teachers;
