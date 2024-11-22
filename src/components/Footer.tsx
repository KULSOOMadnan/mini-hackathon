

import Link from "next/link";
import React from "react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-[#d8e7ec] p-6 md:p-14 w-full flex flex-col gap-12 md:gap-20">

      {/* Contact Section */}
      <div className="flex flex-col items-center gap-4">
        <h1 className="text-[#457B9D] text-xl md:text-2xl font-bold">Contact</h1>
        <p className="text-2xl md:text-4xl font-extrabold text-black">Get in Touch</p>
        <p className="text-sm text-gray-700 text-center">Kulsoomadnan18@gmail.com</p>

        {/* Social Links */}
        <div className="flex gap-4 text-[#457B9D] cursor-pointer">
          <Link href="https://instagram.com" aria-label="Instagram">
            <FaInstagram className="h-6 w-6 md:h-7 md:w-7" />
          </Link>
          <Link href="https://github.com" aria-label="Github">
            <FaGithub className="h-6 w-6 md:h-7 md:w-7" />
          </Link>
          <Link href="https://linkedin.com" aria-label="LinkedIn">
            <FaLinkedin className="h-6 w-6 md:h-7 md:w-7" />
          </Link>
        </div>
      </div>
      
      {/* Copyright Section */}
      <div className="flex justify-center text-black text-sm md:text-base text-center">
        <p>
          Copyright &copy; {new Date().getFullYear()} Developed by Kulsoom Adnan Sheikh
        </p>
      </div>
    </footer>
  );
}

export default Footer;


// import Link from "next/link";
// import React from "react";
// import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

// function Footer() {
//   return (
//     <div className="bg-[#d8e7ec] h-[60vh] top-full bottom-0 flex p-14 w-full flex-col gap-20">
//       <div className="flex-col flex items-center justify-center gap-4">
//         <h1 className="text-[#457B9D] text-2xl font-bold ">Contact</h1>
//         <p className="text-4xl font-extrabold  text-black">Get in Touch</p>
//         <p className="text-sm ">Kulsoomadnan18@gmail.com</p>
//         <div className="flex gap-3 text-[#457B9D] cursor-pointer">
//           <Link href="/">
//             <FaInstagram className="h-7 w-7" />{" "}
//           </Link>
//           <Link href="/">
//             {" "}
//             <FaGithub className="h-7 w-7" />{" "}
//           </Link>
//           <Link href="/">
//             <FaLinkedin className="h-7 w-7" />{" "}
//           </Link>
//         </div>
//       </div>
//       <div className="flex justify-center text-black ">
//         <p>
//           Copyright &copy;{new Date().getFullYear()} Develop by Kulsoom Adnan
//           Sheikh
//         </p>
//       </div>
//     </div>
//   );
// }

// export default Footer;