/* eslint-disable @next/next/no-img-element */
import { ProjectItem } from "@/components/projects/ProjectItem";
import web3Projects from "@/data/web3Projects.json";

import * as React from "react";
import Typewriter from "typewriter-effect";

const Projects = () => {
  return (
    <div className="min-h-screen flex flex-col items-center py-28 bg-gray-900 gap-20 relative">
      <div className="w-full h-full bg-white fixed top-0 left-0 opacity-[0.25]"></div>
      <img
        src="img/bgPortfolio.png"
        className="fixed top-0 left-0 h-full w-[125vw] opacity-[0.75]"
        alt=""
      />
      <h2 className="flex text-center md:text-5xl text-xl titleLogo text-primary whitespace-nowrap relative">
        <span className="text-white font-bold pr-2">{"< "}</span>
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .typeString("Projects")
              .pauseFor(8000)
              .deleteAll()
              .start();
            setInterval(() => {
              typewriter
                .typeString("Projects")
                .pauseFor(8000)
                .deleteAll()
                .start();
            }, 10000);
          }}
        />
        <span className="text-white font-bold">{" / >"}</span>
      </h2>

      <div className="flex flex-wrap items-center justify-center md:gap-x-12 gap-x-4 md:gap-y-8 gap-y-4 px-4 w-full">
        {web3Projects.map(({ name, description, link, image }) => {
          return (
            <ProjectItem
              key={name}
              name={name}
              link={link}
              image={image}
              description={description}
              hover
            />
          );
        })}
      </div>
    </div>
  );
};
export default Projects;
