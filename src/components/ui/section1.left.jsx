import React from "react";
import { FaFile, FaGithub } from "react-icons/fa6";
import Button from "./Button";
import { contactBarData } from "../../data/SiteData";
import toast from "react-hot-toast";

const Left = () => {

  const downloadHandler = () => {
    toast.success("Downloading....", {
      iconTheme: {
        primary: "#7456FF",
      },
    });
  }

  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col gap-1 lg:gap-3">
        <p className="text-center text-lg font-semibold sm:text-left sm:text-xl lg:text-3xl">
          Hello Everyone
        </p>
        <p className="text-center text-2xl font-semibold sm:text-left sm:text-3xl lg:text-5xl">
          I am <span className="text-lavender">Al Khattab</span>
        </p>
        <p className="text-center text-sm text-white/60 sm:text-left sm:text-sm lg:text-base">
          FrontEnd Developer & UI / UX Design Enthusiast
        </p>
      </div>
      <div className="flex flex-col items-center justify-center gap-2 lg:items-start lg:justify-start">
        <div className="h-[1px] w-1/4 bg-white" />
        <p className="text-center text-sm text-white/60 sm:text-left sm:text-base lg:text-lg">
          I'm a front-end developer passionate about building modern,
          user-friendly interfaces using React and Tailwind CSS. I have a strong
          focus on intuitive design and seamless user experiences, and I’m
          constantly refining my visual design skills to better connect
          creativity with development. <br />
          As a front-end developer, I strive to merge clean code with creative
          design, building responsive and intuitive interfaces that enhance user
          experience and bridge the gap between development and design
        </p>
        <p></p>
      </div>
      <div className="flex items-center justify-center gap-2 sm:gap-6 lg:items-start lg:justify-start">
        <a
          download="CV-Youssef-louza.pdf"
          onClick={downloadHandler}
          href="/files/CV-Youssef-louza.pdf"
          className={`bg-lavender hover:bg-lavender/50 flex cursor-pointer items-center justify-center gap-2 rounded px-5 py-2 text-sm font-semibold duration-500 lg:text-base`}
        >
          <FaFile />
          <p>Download cv</p>
        </a>
        <a
          target="_blank"
          href={contactBarData[1].link}
          className={`flex cursor-pointer items-center justify-center gap-2 rounded border px-5 py-2 text-sm font-semibold duration-500 hover:bg-white/30 lg:text-base`}
        >
          <FaGithub />
          <p>Visit Github</p>
        </a>
      </div>
    </div>
  );
};

export default Left;
