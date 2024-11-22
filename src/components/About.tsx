
import Image from "next/image";
import React from "react";

function About() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-center h-auto md:h-[90vh] px-6 md:px-9 py-8 gap-8">
      {/* Image Section */}
      <div className="flex items-center justify-center w-full h-auto">
        <Image
          src="/about.png"
          width={500}
          height={600}
          alt="profile image"
          className="w-[80%] md:w-[500px] h-auto"
        />
      </div>
      {/* Content Section */}
      <div className="flex items-center justify-center flex-col w-full h-auto md:pr-20 gap-8 text-justify">
        <div className="flex flex-col gap-3 w-full md:w-[450px]">
          <p className="text-xl md:text-2xl font-bold text-[#457B9D]">About</p>
          <h1 className="text-3xl md:text-5xl font-bold text-black">
            About Me?
          </h1>
          <p className="text-sm md:text-base font-bold text-[#455A64]">
            I am a dedicated web developer with a strong foundation in front-end
            technologies like HTML, CSS, JavaScript, React, and Next.js. I
            specialize in building responsive, dynamic websites with seamless
            user experiences. Currently, I serve as a student leader at GIAIC,
            where I inspire my peers and lead by example through innovative
            projects. My skills extend to UI/UX design, showcasing my ability to
            create visually appealing and user-friendly designs. Some of my
            notable accomplishments include a resume builder project and a
            portfolio website that demonstrates my technical expertise. With a
            passion for learning, I continuously explore new tools and
            frameworks to enhance my craft.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;


// import Image from "next/image";
// import React from "react";

// function About() {
//   return (
//     <div className="grid grid-cols-2 items-center justify-center h-[90vh] px-9">
//       <div className="col-span-1 flex items-center justify-center  w-full h-1/2">
//         <Image
//           src="/about.png"
//           width={500}
//           height={600}
//           alt="profile image "
//           className=""
//         />
//       </div>
//       <div className="col-span-1 flex items-center justify-center flex-col  w-full h-1/2 pr-20 gap-16  text-justify  ">
//         <div className="w-[450px] flex flex-col gap-3 ">
//           <p className="text-2xl font-bold text-[#457B9D]  ">About</p>
//           <h1 className="text-5xl font-bold text-black">About Me?</h1>
//           <p className="text-sm font-bold text-[#455A64]">
//             I am a dedicated web developer with a strong foundation in front-end
//             technologies like HTML, CSS, JavaScript, React, and Next.js. I
//             specialize in building responsive, dynamic websites with seamless
//             user experiences. Currently, I serve as a student leader at GIAIC,
//             where I inspire my peers and lead by example through innovative
//             projects. My skills extend to UI/UX design, showcasing my ability to
//             create visually appealing and user-friendly designs. Some of my
//             notable accomplishments include a resume builder project and a
//             portfolio website that demonstrates my technical expertise. With a
//             passion for learning, I continuously explore new tools and
//             frameworks to enhance my craft.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default About;