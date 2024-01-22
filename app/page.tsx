"use client";

import { Typewriter } from "react-simple-typewriter";

import { BsCursorText } from "react-icons/bs";

export default function Home() {
  return (
    <div className="flex box-border h-screen flex-col">
      <div className="border-b  box-border ml-16 mt-16 w-[22%] border-purple-600">
        <h1 className="text-5xl font-bold text-purple-600">Eduardo Scrobote</h1>
        <h1
          style={{
            marginTop: "8px",
            fontSize: "24px",
            fontWeight: "semi-bold",
          }}
        >
          <span>
            <Typewriter
              words={["Desenvolvedor web front-end"]}
              cursorColor="purple"
              cursor={true}
              cursorBlinking={true}
            />
          </span>
        </h1>
      </div>
      <div className="w-full h-screen flex flex-row justify-center gap-[15%] items-center">
        <div className="flex flex-col mb-8px justify-center w-[30%] items-center">
          <h2 className="text-2xl">
            Eu gosto muito de criar aplicativos web utilizando NextJS,
            TypeScript e Tailwind...
          </h2>
          <h1
            style={{
              marginTop: "8px",
              fontSize: "28px",
              fontWeight: "semi-bold",
              color: "rgb(147,51,234)",
            }}
          >
            <span>
              <Typewriter
                words={[
                  "Por que eu gosto de next?",
                  "Porque ele é renderizado no servidor!!!",
                  "Rapido como um raio...",
                  "Por que eu gosto de TypeScript?",
                  "Por que eu encontro erros enquanto desenvolvo IRADOO!",
                ]}
                loop={true}
                cursorColor="purple"
                cursor={true}
              />
            </span>
          </h1>
        </div>
        <div className="bg-blue-700 w-72 h-72"></div>
      </div>
      <footer className="box-border bg-pink-400"></footer>
    </div>
  );
}
