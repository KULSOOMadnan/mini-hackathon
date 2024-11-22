
"use client";
import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai"; // Icons for bar and cross

function NavBar() {
  const Links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Skills", path: "/skills" },
    { name: "Contact", path: "/" },
  ];

  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");

  const handleLinkClick = (link: string) => {
    setActiveLink(link);
  };

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <div className="md:h-[80px] h-[60px]  w-full px-7 md:py-6 py-4 border-b border-black fixed bg-[#d8e7ec] z-20">
      <nav className="flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-[20px] md:text-[30px] font-bold text-black  md:ml-10">
          Kulsoom
        </h1>

        {/* Links for Medium and Larger Screens */}
        <ul className="hidden md:flex gap-6 text-lg">
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

        {/* Hamburger Menu for Small Screens */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-black text-2xl">
            {menuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
          </button>
        </div>

        {/* Dropdown Menu */}
        {menuOpen && (
          <ul className="md:hidden absolute top-[60px] right-0 w-full bg-[#d8e7ec] border-t border-gray-300 flex flex-col text-center gap-4 py-4">
            {Links.map((link) => (
              <Link href={link.path} key={link.name}>
                <li
                  className="hover:text-black cursor-pointer text-gray-700"
                  onClick={toggleMenu} // Close menu on link click
                >
                  {link.name}
                </li>
              </Link>
            ))}
          </ul>
        )}
      </nav>
    </div>
  );
}

export default NavBar;


// "use client";
// import Link from "next/link";
// import React, { useState } from "react";

// function NavBar() {
//   const Links = [
//     { name: "Home", path: "/" },
//     { name: "About", path: "/about" },
//     { name: "Projects", path: "/projects" },
//     { name: "Skills", path: "/skills" },
//     { name: "Contact", path: "/" },
//   ];

//   return (
//     <div className="h-[80px] w-full p-7 border-b border-black fixed  bg-[#d8e7ec] z-20 overflow-hidden">
//       <nav className="flex justify-between items-center">
//         <h1 className="text-[30px] font-bold text-black ml-10">Kulsoom</h1>
//         <ul className="flex gap-6 text-lg">
//           {Links.map((link) => (
//             <Link href={link.path} key={link.name}>
//               <li
//                 className={`hover:text-black cursor-pointer ${
//                   activeLink === link.name
//                     ? "text-black font-semibold"
//                     : "text-gray-700"
//                 }`}
//                 onClick={() => handleLinkClick(link.name)}
//               >
//                 {link.name}
//               </li>
//             </Link>
//           ))}
//         </ul>
//       </nav>
//     </div>
//   );
// }

// export default NavBar;
