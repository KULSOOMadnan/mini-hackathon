
import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";
import { IoCloudDownloadOutline } from "react-icons/io5";

function HomePage() {
  return (
    <div className="min-h-screen bg-[#d8e7ec]">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-center  min-h-screen px-6 md:px-9">
        {/* Left Section */}
        <div className="col-span-1 flex items-center justify-center flex-col w-full mt-28 md:mt-0 h-auto md:h-1/2 gap-8 md:gap-8 lg:gap-16 text-center md:text-justify">
          <div className="w-full md:w-[350px] lg:w-[450px] flex flex-col gap-3">
            <p className="text-xl md:text-2xl font-bold text-[#457B9D]">
              Hello Everyone, I am
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-black">
              Kulsoom Adnan
            </h1>
            <p className="text-sm font-bold text-[#34444c] md:pr-5 lg:pr-0">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores,
              amet expedita dicta rem optio necessitatibus nam.
            </p>
          </div>
          <div className="flex  gap-4 justify-center w-full md:pl-0 lg:pl-0">
            <Button className="w-full md:w-[170px] lg:w-[230px] text-lg">
              Download CV{" "}
              <span>
                <IoCloudDownloadOutline className="mt-1 ml-1" />
              </span>
            </Button>
            <Button
              variant="outline"
              className="text-[#457B9D] w-full md:w-[170px] lg:w-[230px] text-lg"
            >
              Explore More
            </Button>
          </div>
        </div>

        {/* Right Section */}
        <div className="col-span-1 flex items-center justify-center w-full h-auto md:h-1/2 relative lg:mt-9">
          <div className="w-[300px] h-[300px] md:w-[360px] md:h-[310px] bg-[#457B9D] rounded-[30px] md:rounded-[40px] absolute flex items-center justify-center"></div>
          <Image
            src="/profile2.png"
            width={300}
            height={600}
            alt="profile image"
            className="z-10 mb-44  "
          />
        </div>
      </div>
    </div>
  );
}

export default HomePage;


// import React from "react";
// import NavBar from "./NavBar";
// import { Button, buttonVariants } from "./ui/button";
// import Image from "next/image";
// import { IoCloudDownloadOutline } from "react-icons/io5";

// function HomePage() {
//   return (
//     <div className="h-[120vh]  bg-[#d8e7ec]">
//       {/* <NavBar /> */}
//       <div className="grid md:grid-cols-2 items-center justify-center h-full px-9">
//         <div className="col-span-1 flex items-center justify-center flex-col  w-full h-1/2 pl-20 gap-16  text-justify  ">
//           <div className="w-[450px] flex flex-col gap-3 ">
//             <p className="text-2xl font-bold text-[#457B9D]  ">Hello Everyone, I am</p>
//             <h1 className="text-5xl font-bold text-black">Kulsoom Adnan</h1>
//             <p className="text-sm font-bold text-[#34444c]">
//               Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores,
//               amet expedita dicta rem optio necessitatibus nam .
//             </p>
//           </div>
//           <div className="flex gap-4 justify-center w-full ">
//             <Button className=" w-[230px] text-lg">Download Cv <span><IoCloudDownloadOutline className="mt-1 ml-1" /></span></Button>
//             <Button variant='outline' className="text-[#457B9D] w-[230px] text-lg">Explore More </Button>
//           </div>
//         </div>
//         <div className="col-span-1 flex items-center justify-center  w-full h-1/2">

//           <div className="w-[400px] bg-[#457B9D] h-[310px] rounded-[40px] absolute flex items-center justify-center">
//           </div>
//             <Image src='/profile2.png' width={300} height={600} alt="profile image " className="z-10 mb-44"  />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default HomePage;