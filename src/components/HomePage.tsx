import React from "react";
import NavBar from "./NavBar";
import { Button, buttonVariants } from "./ui/button";
import Image from "next/image";
import { IoCloudDownloadOutline } from "react-icons/io5";

function HomePage() {
  return (
    <div className="h-[120vh]  bg-[#d8e7ec]">
      {/* <NavBar /> */}
      <div className="grid grid-cols-2 items-center justify-center h-full px-9">
        <div className="col-span-1 flex items-center justify-center flex-col  w-full h-1/2 pl-20 gap-16  text-justify  ">
          <div className="w-[450px] flex flex-col gap-3 ">
            <p className="text-2xl font-bold text-[#457B9D]  ">Hello Everyone, I am</p>
            <h1 className="text-5xl font-bold text-black">Kulsoom Adnan</h1>
            <p className="text-sm font-bold text-[#34444c]">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores,
              amet expedita dicta rem optio necessitatibus nam .
            </p>
          </div>
          <div className="flex gap-4 justify-center w-full ">
            <Button className=" w-[230px] text-lg">Download Cv <span><IoCloudDownloadOutline className="mt-1 ml-1" /></span></Button>
            <Button variant='outline' className="text-[#457B9D] w-[230px] text-lg">Explore More </Button>
          </div>
        </div>
        <div className="col-span-1 flex items-center justify-center  w-full h-1/2">

          <div className="w-[400px] bg-[#457B9D] h-[310px] rounded-[40px] absolute flex items-center justify-center">
          </div>
            <Image src='/profile2.png' width={300} height={600} alt="profile image " className="z-10 mb-44"  />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
