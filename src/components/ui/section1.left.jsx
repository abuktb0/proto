import React from "react";
import { FaFile, FaGithub } from "react-icons/fa6";
import Button from "./Button";
import { contactBarData } from "../../data/SiteData";

const Left = () => {
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
          I'm a front-end developer passionate about building modern, user-friendly interfaces using React and Tailwind CSS. I have a strong focus on intuitive design and seamless user experiences, and I’m constantly refining my visual design skills to better connect creativity with development. <br/>
          As a front-end developer, I strive to merge clean code with creative design, building responsive and intuitive interfaces that enhance user experience and bridge the gap between development and design
        </p>
        <p>
          
        </p>
      </div>
      <div className="flex items-center justify-center gap-2 sm:gap-6 lg:items-start lg:justify-start">
        <Button href={"../../files/CV-Youssef-louza.pdf"}  icon={FaFile} text="Download cv" type={"solid"} />
        <Button href={contactBarData[1].link} icon={FaGithub} text="Visit Github" onClick={() => console.log(first)} />
      </div>
    </div>
  );
};

export default Left;
