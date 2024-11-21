import Link from "next/link";
import React from "react";

const ProjectsData = [
  {
    id: 1,
    title: "portfolio",
    description: "This project is made up of next js and tailwind css   ",
    images: "/portfolio1.png",

    gitUrl: "https://github.com/KULSOOMadnan/portfolio",
    previewUrl: "https://portfolio-of-kulsoom.vercel.app/",
  },
  {
    id: 2,
    title: "Next Js Food Delivery App",
    description: "This project is made up of react and next.js  ",
    images:
      "https://www.foodiv.com/wp-content/uploads/2023/10/Cost-to-Build-A-Food-Delivery-App-like-Ubereats.jpg",

    gitUrl: "/",
    previewUrl: "/",
  },

  {
    id: 3,
    title: "Todo List",
    description: "This project is made up of HTML Css and jAVASCRIPT ",
    images:
      "https://imageio.forbes.com/specials-images/dam/imageserve/1092571024/960x0.jpg?format=jpg&width=1440",

    gitUrl: "https://github.com/KULSOOMadnan/Todo-list",
    previewUrl: "https://todo-list-sandy-xi.vercel.app/",
  },
  {
    id: 4,
    title: "Stop Watch",
    description: "This project is made up of Html css and Javascript  ",
    images:
      "https://as2.ftcdn.net/v2/jpg/02/13/65/79/1000_F_213657903_Eue1MH7Sy1TWK8dYbrN9MM5Rgd7VJczN.jpg",

    gitUrl: "https://github.com/KULSOOMadnan/stop-watch",
    previewUrl: "https://stop-watch-orcin-nine.vercel.app/",
  },
  {
    id: 5,
    title: "Tic Tac Toe Game ",
    description: "This project is made up of Html css and Javascript",
    images:
      "https://cdn.create.vista.com/api/media/medium/359772266/stock-photo-tic-tac-toe-game-blackboard-crossed-out-row-crosses-wooden?token=",

    gitUrl: "https://github.com/KULSOOMadnan/tic-tac-toe-game",
    previewUrl: "https://tic-tac-toe-game-phi-blond.vercel.app/",
  },
  {
    id: 6,
    title: "Tacos Shop ",
    description: "This project is made up of Html css and Javascript",
    images: "/tacos.png",

    gitUrl: "https://github.com/KULSOOMadnan/TacosShop/tree/main/final-project",
    previewUrl: "https://tacos-shop-five.vercel.app/",
  },
  {
    id: 7,
    title: "Resume Builder",
    description:
      "This project is made up of Html css Typescript and Javascript",
    images:
      "https://as2.ftcdn.net/v2/jpg/07/61/17/05/1000_F_761170568_JCVYqlrkpW6gH4dGIgblEWCaDLQPcQGt.jpg",

    gitUrl:
      "https://github.com/KULSOOMadnan/resume-builder/tree/main/milestone2",
    previewUrl: "https://resume-builder-by-kulsoom.vercel.app/",
  },
  ,
  {
    id: 8,
    title: "Resume",
    description:
      "This project is made up of Html css Typescript  and Javascript",
    images: "/resume.png",

    gitUrl:
      "https://github.com/KULSOOMadnan/resume-builder/tree/main/milestone1",
    previewUrl: "https://resume-builder-kulsoom.vercel.app/",
  },
  {
    id: 9,
    title: "Potfolio",
    description: "This project is made up of nextjs custom css",
    images: "/potfolio.png",

    gitUrl: "https://github.com/KULSOOMadnan/css-portfolio",
    previewUrl: "https://css-portfolio-lilac.vercel.app/",
  },
];

function ProjectsCard() {
  return (
    <div className=" ">
      <ul className=" gap-8 px-28 bg-white grid grid-cols-3 items-center">
        {ProjectsData.map((project) => (
          <li
            className="shadow-xl rounded-md h-[300px] flex flex-col cursor-pointer "
            key={project?.id}
          >
            <div
              className="h-[200px] w-full border-b border-black rounded-t-md"
              style={{
                background: `url(${project?.images})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
            ></div>
            <div className="p-5">
              <h1 className=" text-lg font-bold text-center">
                {project?.title}
              </h1>
              <p className="text-sm text-gray-500 ">{project?.description}</p>
              <div className="flex gap-5 mt-4">
                <Link
                  href={project?.gitUrl!}
                  className="text-[#457B9D] text-sm"
                >
                  Github
                </Link>
                <Link
                  href={project?.previewUrl!}
                  className="text-[#457B9D] text-sm"
                >
                  Link View
                </Link>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProjectsCard;
