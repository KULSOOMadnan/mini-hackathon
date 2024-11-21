"use client";
import Link from "next/link";
import React, { useState } from "react";

function NavBar() {
  const Links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Skills", path: "/skills" },
    { name: "Contact", path: "/" },
  ];

  const [activeLink, setActiveLink] = useState("Home");

  const handleLinkClick = (link: string) => {
    setActiveLink(link);
  };

  return (
    <div className="h-[80px] w-full p-7 border-b border-black fixed  bg-[#d8e7ec] z-20">
      <nav className="flex justify-between items-center">
        <h1 className="text-[30px] font-bold text-black ml-10">Kulsoom</h1>
        <ul className="flex gap-6 text-lg">
          {Links.map((link) => (
            <Link href={link.path} key={link.name}>
              <li
                className={`hover:text-black cursor-pointer ${
                  activeLink === link.name
                    ? "text-black font-semibold"
                    : "text-gray-700"
                }`}
                onClick={() => handleLinkClick(link.name)}
              >
                {link.name}
              </li>
            </Link>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
