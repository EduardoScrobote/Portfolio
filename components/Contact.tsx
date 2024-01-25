import React from "react";

import { RxDiscordLogo } from "react-icons/rx";
import { RiGithubLine } from "react-icons/ri";
import { SlSocialLinkedin } from "react-icons/sl";
import { CgMail } from "react-icons/cg";
import { FaWhatsapp } from "react-icons/fa";
import toast, { Toaster } from "react-hot-toast";

const notifyDiscord = () => toast.success("Discord id copiado!");
const notifyEmail = () => toast.success("Email copiado!");
const notifyWhats = () => toast.success("Telefone copiado!");

function Contact() {
  function copyDiscord() {
    navigator.clipboard.writeText("Scrobote#5855");
    notifyDiscord();
  }

  function copyEmail() {
    navigator.clipboard.writeText("EduardoScroboteProfissional@gmail.com");
    notifyEmail();
  }

  function copyWhats() {
    navigator.clipboard.writeText("41997599449");
    notifyWhats();
  }

  return (
    <div className="flex flex-col p-8 w-38 mr-8 h-full text-lg textAnimation animate-pulse items-end font-semibold  ">
      <div className="flex justify-center mb-4">
        <h1
          className="hover:text-purple-700 hover:cursor-pointer"
          onClick={() => window.open("https://github.com/EduardoScrobote")}
        >
          Github
        </h1>
        <RiGithubLine
          color="purple"
          style={{ marginTop: "4px", marginLeft: "8px" }}
        />
      </div>
      <div className="flex mb-4">
        <h1
          onClick={() =>
            window.open(
              "https://www.linkedin.com/in/eduardo-scrobote-393b3425b/"
            )
          }
          className="hover:text-purple-700 hover:cursor-pointer"
        >
          LinkedIn
        </h1>
        <SlSocialLinkedin
          color="purple"
          style={{ marginTop: "4px", marginLeft: "8px" }}
        />
      </div>
      <div className="flex mb-4">
        <h1
          onClick={copyDiscord}
          className="hover:text-purple-700 hover:cursor-pointer"
        >
          Discord
        </h1>
        <RxDiscordLogo
          color="purple"
          style={{ marginTop: "4px", marginLeft: "8px" }}
        />
      </div>
      <div className="flex mb-4">
        <h1
          onClick={copyEmail}
          className="hover:text-purple-700 hover:cursor-pointer"
        >
          <a href="mailto:EduardoScroboteProfissional@gmail.com?subject=Contato-Eduardo">
            E-mail
          </a>
        </h1>
        <CgMail
          color="purple"
          style={{ marginTop: "4px", marginLeft: "8px" }}
        />
      </div>
      <div className="flex mb-4">
        <h1
          onClick={copyWhats}
          className="hover:text-purple-700 hover:cursor-pointer"
        >
          Telefone
        </h1>
        <FaWhatsapp
          color="purple"
          style={{ marginTop: "4px", marginLeft: "8px" }}
        />
      </div>
      <Toaster />
    </div>
  );
}

export default Contact;
