import Link from "next/link";
import React from "react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <div className="bg-[#d8e7ec] h-[60vh] top-full bottom-0 flex p-14 w-full flex-col gap-20">
      <div className="flex-col flex items-center justify-center gap-4">
        <h1 className="text-[#457B9D] text-2xl font-bold ">Contact</h1>
        <p className="text-4xl font-extrabold  text-black">Get in Touch</p>
        <p className="text-sm ">Kulsoomadnan18@gmail.com</p>
        <div className="flex gap-3 text-[#457B9D] cursor-pointer">
          <Link href="/">
            <FaInstagram className="h-7 w-7" />{" "}
          </Link>
          <Link href="/">
            {" "}
            <FaGithub className="h-7 w-7" />{" "}
          </Link>
          <Link href="/">
            <FaLinkedin className="h-7 w-7" />{" "}
          </Link>
        </div>
      </div>
      <div className="flex justify-center text-black ">
        <p>
          Copyright &copy;{new Date().getFullYear()} Develop by Kulsoom Adnan
          Sheikh
        </p>
      </div>
    </div>
  );
}

export default Footer;
