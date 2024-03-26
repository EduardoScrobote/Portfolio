import React from "react";

import { ProjectsData } from "./ProjectsProp";
import useBreakPoint, { BreakPoint } from "@/hooks/useBreakingPoint";

function Projects() {
  if ([BreakPoint.MOBILE, BreakPoint.TABLET].includes(useBreakPoint())) {
    return (
      <div className="flex flex-col m-8 h-full  animate-pulse items-center font-semibold justify-end absolute">
        <h1 className="text-2xl mb-8">Projetos</h1>
        {ProjectsData.map((prop, i) => (
          <div key={i} className="flex mt-4 items-end">
            <p className="flex mr-4 text-[16px]">{prop.date}</p>
            <h1
              onClick={() => {
                if (prop.path) window.open(prop.path);
              }}
              className="text-3xl text-purple-900 hover:text-slate-500 hover:cursor-pointer ease-in duration-300 "
            >
              {prop.project}
            </h1>
          </div>
        ))}
      </div>
    );
  }
  return (
    <div className="flex flex-col m-8 h-full animate-pulse items-end font-semibold justify-end ">
      <h1 className="text-2xl mb-8">Projetos</h1>
      {ProjectsData.map((prop, i) => (
        <div key={i} className="flex mt-4 items-end">
          <p className="flex mr-4 text-[16px]">{prop.date}</p>
          <h1
            onClick={() => {
              if (prop.path) window.open(prop.path);
            }}
            className="text-4xl text-purple-900 hover:text-slate-500 hover:cursor-pointer ease-in duration-300 "
          >
            {prop.project}
          </h1>
        </div>
      ))}
    </div>
  );
}

export default Projects;
