import Image from "next/image";
import React from "react";
import ProjectsCard from "./ProjectsCard";

function Projects() {
  return (
    <div className="bg-white py-10 lg:h-[210vh] md:h-[240vh]  flex flex-col items-center justify-center gap-10">
      {/* Header Section */}
      <div className="flex flex-col gap-2 text-center">
        <p className="text-xl sm:text-2xl font-bold text-[#457B9D]">Projects</p>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black">
          What I have made?
        </h1>
      </div>

      {/* Projects Card Section */}
      <div className="w-full">
        <ProjectsCard />
      </div>
    </div>
  );
}

export default Projects;

// <div className="bg-white  flex flex-col items-center justify-center gap-10">
    //   <div className="flex flex-col gap-5 justify-center items-center">
    //     <p className="text-2xl font-bold text-[#457B9D]">Projects</p>
    //     <h1 className="text-5xl font-bold text-black">What I have made?</h1>
    //   </div>
    //   <div className="w-full">
    //     <ProjectsCard />
    //   </div>
    // </div>
