"use client";

import About from "@/components/About";
import Contact from "@/components/Contact";
import Projects from "@/components/Projetcs/Projects";
import { useState } from "react";

export default function Home() {
  const [activeInfo, setActiveInfo] = useState<string>("about");

  return (
    <div className="flex box-border text-black h-screen flex-col justify-center items-center p-8">
      <div className="bg-giphy border border-purple-700 bg-cover flex-row bg-[center_right_17em] flex  w-full h-screen">
        <div className="flex flex-col w-screen">
          <h1 className="pl-8 pt-8 text-4xl font-bold">Eduardo Scrobote</h1>
          <p className="pl-8 text-lg font-semibold	">Front-end Developer</p>
          <div className="m-12 w-20 hover:cursor-none text-lg">
            <h1
              onClick={() => setActiveInfo("about")}
              className=" w-32 hover:cursor-none hover:p-1 mb-0 hover:bg-purple-100 rounded-md duration-300 hover:text-slate-800"
            >
              • Sobre
            </h1>
            <h1
              onClick={() => setActiveInfo("projects")}
              className=" w-32 hover:cursor-none hover:p-1 mb-0 mt-0 hover:bg-purple-100 rounded-md duration-300 hover:text-slate-800"
            >
              • Projetos
            </h1>
            <h1
              onClick={() => setActiveInfo("contact")}
              className="w-32 hover:cursor-none hover:p-1 mb-0 mt-0 hover:bg-purple-100 rounded-md duration-300 hover:text-slate-800"
            >
              • Contato
            </h1>
            <h1
              onClick={() =>
                window.open("https://playground-two-inky.vercel.app/")
              }
              className="w-32 hover:cursor-none hover:p-1 mb-0 mt-0 hover:bg-purple-100 rounded-md duration-300 hover:text-slate-800"
            >
              • Playground
            </h1>
          </div>
        </div>
        <div className="w-screen h-full flex justify-end items-end bg-transparent text-black">
          {activeInfo === "about" && <About />}
          {activeInfo === "projects" && <Projects />}
          {activeInfo === "contact" && <Contact />}
        </div>
      </div>
    </div>
  );
}
